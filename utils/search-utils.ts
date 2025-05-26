// Utility functions cho tìm kiếm thông minh

// Loại bỏ dấu tiếng Việt
export function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
}

// Tách từ khóa thành mảng từ - cải thiện để xử lý số và ký tự đặc biệt
export function tokenize(text: string): string[] {
  return (
    text
      .toLowerCase()
      .trim()
      // Tách theo dấu cách, dấu phẩy, dấu chấm, dấu hai chấm, dấu chấm phẩy
      .split(/[\s,.:;]+/)
      .filter((word) => word.length > 0)
  )
}

// Tách từ khóa đặc biệt cho số và mã
export function tokenizeSpecial(text: string): string[] {
  const normalTokens = tokenize(text)
  const specialTokens: string[] = []

  // Tìm các pattern đặc biệt như số, mã văn bản
  const specialPatterns = text.match(/\b\d+\/\d+\/[A-Z-]+\b|\b[A-Z]+-[A-Z]+\b|\b\d+\b/gi) || []

  return [...normalTokens, ...specialPatterns.map((token) => token.toLowerCase())]
}

// Tính tỷ lệ khớp giữa query và text - cải thiện cho từ ngắn và đặc biệt
function calculateMatchRatio(text: string, query: string): number {
  const normalizedText = removeVietnameseTones(text.toLowerCase())
  const normalizedQuery = removeVietnameseTones(query.toLowerCase())

  const queryWords = tokenizeSpecial(normalizedQuery)
  const textWords = tokenizeSpecial(normalizedText)

  if (queryWords.length === 0) return 0

  let matchedWords = 0
  let maxSequentialMatches = 0

  // Kiểm tra exact substring match cho các từ đặc biệt
  for (const queryWord of queryWords) {
    let wordFound = false

    // Exact match
    for (const textWord of textWords) {
      if (textWord === queryWord) {
        matchedWords++
        wordFound = true
        break
      }
    }

    // Substring match cho từ ngắn hoặc số
    if (!wordFound && (queryWord.length <= 3 || /^\d+$/.test(queryWord))) {
      if (normalizedText.includes(queryWord)) {
        matchedWords++
        wordFound = true
      }
    }

    // Partial match cho từ dài
    if (!wordFound && queryWord.length > 3) {
      for (const textWord of textWords) {
        if (textWord.includes(queryWord) || queryWord.includes(textWord)) {
          matchedWords += 0.7 // Partial match có điểm thấp hơn
          wordFound = true
          break
        }
      }
    }
  }

  // Tính chuỗi liên tiếp dài nhất
  for (let i = 0; i <= textWords.length - queryWords.length; i++) {
    let tempSequential = 0
    for (let j = 0; j < queryWords.length; j++) {
      if (i + j < textWords.length && textWords[i + j] === queryWords[j]) {
        tempSequential++
      } else {
        break
      }
    }
    maxSequentialMatches = Math.max(maxSequentialMatches, tempSequential)
  }

  // Tính tỷ lệ khớp cơ bản
  const basicMatchRatio = matchedWords / queryWords.length

  // Bonus cho chuỗi liên tiếp
  const sequentialBonus = maxSequentialMatches / queryWords.length

  // Bonus cho exact phrase match
  const exactPhraseBonus = normalizedText.includes(normalizedQuery.replace(/\s+/g, " ").trim()) ? 0.3 : 0

  // Tổng tỷ lệ khớp
  const totalRatio = basicMatchRatio + sequentialBonus * 0.5 + exactPhraseBonus

  return Math.min(totalRatio, 1.0) // Giới hạn tối đa 100%
}

// Cập nhật hàm tính điểm tương đồng - giảm ngưỡng cho từ ngắn
export function calculateRelevanceScore(text: string, query: string): number {
  const matchRatio = calculateMatchRatio(text, query)
  const queryWords = tokenizeSpecial(query.toLowerCase())

  // Ngưỡng linh hoạt dựa trên loại từ khóa
  let threshold = 0.7 // Mặc định 70%

  // Giảm ngưỡng cho từ ngắn, số, hoặc mã đặc biệt
  const hasShortWords = queryWords.some((word) => word.length <= 3)
  const hasNumbers = queryWords.some((word) => /\d/.test(word))
  const hasSpecialCodes = queryWords.some((word) => /[A-Z]+-[A-Z]+/i.test(word))

  if (hasShortWords || hasNumbers || hasSpecialCodes) {
    threshold = 0.5 // Giảm xuống 50%
  }

  // Chỉ trả về điểm nếu tỷ lệ khớp >= ngưỡng
  if (matchRatio < threshold) {
    return 0
  }

  // Tính điểm dựa trên tỷ lệ khớp
  let score = matchRatio * 100

  // Bonus cho exact match
  const normalizedText = removeVietnameseTones(text.toLowerCase())
  const normalizedQuery = removeVietnameseTones(query.toLowerCase())

  if (normalizedText.includes(normalizedQuery.replace(/\s+/g, " ").trim())) {
    score += 50
  }

  // Bonus cho match không dấu cách
  const noSpaceText = normalizedText.replace(/\s+/g, "")
  const noSpaceQuery = normalizedQuery.replace(/\s+/g, "")

  if (noSpaceText.includes(noSpaceQuery)) {
    score += 30
  }

  return score
}

// Kiểm tra subsequence (các ký tự theo đúng thứ tự nhưng không cần liên tiếp)
function isSubsequence(query: string, text: string): boolean {
  if (query.length === 0) return true
  if (text.length === 0) return false

  let queryIndex = 0
  for (let i = 0; i < text.length && queryIndex < query.length; i++) {
    if (text[i] === query[queryIndex]) {
      queryIndex++
    }
  }

  return queryIndex === query.length
}

// Cập nhật hàm highlight để xử lý tốt hơn các từ đặc biệt
export function highlightMatches(text: string, query: string): string {
  if (!query.trim()) return text

  const normalizedQuery = removeVietnameseTones(query.toLowerCase())
  const queryWords = tokenizeSpecial(normalizedQuery)

  let highlightedText = text

  // Highlight từng từ riêng biệt
  for (const word of queryWords) {
    if (word.length > 0) {
      // Escape special characters for regex
      const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

      // Tạo regex để match từ
      const regex = new RegExp(`(${escapedWord})`, "gi")

      // Highlight từ trong text
      highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>')
    }
  }

  return highlightedText
}

// Escape special regex characters
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
