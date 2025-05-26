# Hướng Dẫn Thêm Dữ Liệu

## Cách thêm dữ liệu từ Google Sheet:

### Bước 1: Mở file `data/questions-data.ts`

### Bước 2: Copy dữ liệu từ Google Sheet theo format:

\`\`\`typescript
{
  id: [số thứ tự],
  question: "[nội dung câu hỏi]",
  answer: "[nội dung đáp án]"
}
\`\`\`

### Bước 3: Dán vào đúng phần P1, P2, P3, P4, P5

### Ví dụ:
\`\`\`typescript
P1: [
  {
    id: 1,
    question: "Câu hỏi 1 từ Google Sheet",
    answer: "Đáp án A: Nội dung đáp án"
  },
  {
    id: 2,
    question: "Câu hỏi 2 từ Google Sheet", 
    answer: "Đáp án B: Nội dung đáp án"
  }
]
\`\`\`

### Lưu ý:
- Đặt dấu phẩy (,) sau mỗi object
- Đặt dấu ngoặc kép ("") quanh text
- ID phải là số duy nhất
- Không quên dấu ngoặc vuông [] cho mỗi phần

### Tool hỗ trợ:
Bạn có thể sử dụng tool convert Excel/CSV sang JSON online để chuyển đổi nhanh hơn.
