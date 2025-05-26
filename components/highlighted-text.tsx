interface HighlightedTextProps {
  text: string
  query: string
  className?: string
}

export function HighlightedText({ text, query, className = "" }: HighlightedTextProps) {
  if (!query.trim()) {
    return <div className={className}>{text}</div>
  }

  // Tách query thành các từ
  const queryWords = query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 1)

  let highlightedText = text

  // Highlight từng từ riêng biệt
  for (const word of queryWords) {
    const regex = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
    highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded font-medium">$1</mark>')
  }

  return <div className={className} dangerouslySetInnerHTML={{ __html: highlightedText }} />
}
