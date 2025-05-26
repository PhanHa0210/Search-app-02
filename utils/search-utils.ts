// Utility functions cho tìm kiếm thông minh

// Loại bỏ dấu tiếng Việt
export function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
}

// Tách từ khóa thành mảng từ
export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
}

// Tính tỷ lệ khớp giữa query và text
function calculateMatchRatio(text: string, query: string): number {
  const normalizedText = removeVietnameseTones(text.toLowerCase())
  const normalizedQuery = removeVietnameseTones(query.toLowerCase())

  const queryWords = tokenize(normalizedQuery)
  const textWords = tokenize(normalizedText)

  if (queryWords.length === 0) return 0

  let matchedWords = 0
  const sequentialMatches = 0
  let maxSequentialMatches = 0

  // Đếm số từ khớp và chuỗi khớp liên tiếp dài nhất
  for (let i = 0; i < queryWords.length; i++) {
    const queryWord = queryWords[i]
    let wordFound = false

    // Tìm từ trong text
    for (let j = 0; j < textWords.length; j++) {
      if (textWords[j] === queryWord) {
        matchedWords++
        wordFound = true

        // Kiểm tra chuỗi liên tiếp
        let tempSequential = 1
        for (let k = 1; k < queryWords.length - i && j + k < textWords.length; k++) {
          if (queryWords[i + k] === textWords[j + k]) {
            tempSequential++
          } else {
            break
          }
        }
        maxSequentialMatches = Math.max(maxSequentialMatches, tempSequential)
        break
      }
    }
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

// Cập nhật hàm tính điểm tương đồng dựa trên tỷ lệ khớp
export function calculateRelevanceScore(text: string, query: string): number {
  const matchRatio = calculateMatchRatio(text, query)

  // Chỉ trả về điểm nếu tỷ lệ khớp >= 70%
  if (matchRatio < 0.7) {
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

// Cập nhật hàm highlight để không highlight dấu cách
export function highlightMatches(text: string, query: string): string {
  if (!query.trim()) return text

  const normalizedQuery = removeVietnameseTones(query.toLowerCase())
  const queryWords = tokenize(normalizedQuery)

  let highlightedText = text

  // Highlight từng từ riêng biệt (không highlight dấu cách)
  for (const word of queryWords) {
    if (word.length > 1) {
      // Tạo regex để match từ hoàn chỉnh, không bao gồm dấu cách
      const normalizedWord = removeVietnameseTones(word)
      const regex = new RegExp(`\\b(${escapeRegExp(normalizedWord)})\\b`, "gi")

      // Tìm và highlight từ trong text gốc
      highlightedText = highlightedText.replace(regex, (match) => {
        return `<mark class="bg-yellow-200 px-1 rounded">${match}</mark>`
      })

      // Nếu không tìm thấy word boundary, thử tìm substring
      if (!highlightedText.includes("<mark")) {
        const substringRegex = new RegExp(`(${escapeRegExp(normalizedWord)})`, "gi")
        highlightedText = highlightedText.replace(substringRegex, (match) => {
          return `<mark class="bg-yellow-200 px-1 rounded">${match}</mark>`
        })
      }
    }
  }

  return highlightedText
}

// Escape special regex characters
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
