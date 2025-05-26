// File này để bạn dán dữ liệu từ Google Sheet vào
// Copy nội dung từ Google Sheet và paste vào đây theo format

export interface Question {
  id: number
  question: string
  answer: string
}

export interface QuestionsData {
  [key: string]: Question[]
}

// Template - Bạn thay thế nội dung này bằng dữ liệu thực từ Google Sheet
export const questionsData: QuestionsData = {
  P1: [
    // Dán dữ liệu P1 vào đây
      {
    id: 1,
    question: 'Trong việc phân cấp chăm sóc người bệnh, điều dưỡng cần phải lưu ý điều gì khi phân chia các bệnh nhân?',
    answer: 'Đáp án C: Phân cấp chăm sóc dựa trên tình trạng sức khỏe và mức độ nghiêm trọng của bệnh',
  },

  {
    id: 2,
    question: 'Điều dưỡng có được phép xác định chẩn đoán điều dưỡng không?',
    answer: 'Đáp án B: Có, và ưu tiên các chẩn đoán tác động trực tiếp đến tính mạng',
  },

  {
    id: 3,
    question: 'Trong Thông tư 31/2021/TT-BYT, mục đích của chăm sóc tinh thần cho người bệnh là gì?',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 4,
    question: 'Điều dưỡng có trách nhiệm gì trong phục hồi chức năng cho người bệnh?',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 5,
    question: 'Công việc nào sau đây không thuộc quản lý người bệnh của điều dưỡng?',
    answer: 'Đáp án D: Giải thích về phương pháp điều trị để người bệnh an tâm',
  },

  {
    id: 6,
    question: 'Nội dung nào sau đây không thuộc truyền thông, giáo dục sức khỏe?',
    answer: 'Đáp án B: Hướng dẫn giải thích cam kết phẫu thuật',
  },

  {
    id: 7,
    question: 'Yếu tố nào sau đây không ảnh hưởng đến việc xác định can thiệp điều dưỡng?',
    answer: 'Đáp án D: Sở thích cá nhân của điều dưỡng',
  },

  {
    id: 8,
    question: 'Mô hình chăm sóc nào sau đây có thể được áp dụng tại Bệnh viện?',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 9,
    question: 'Khi đánh giá kết quả, điều dưỡng có được điều chỉnh can thiệp chăm sóc không?',
    answer: 'Đáp án B: Có, trong phạm vi chuyên môn',
  },

  {
    id: 10,
    question: 'Hệ thống điều dưỡng trong bệnh viện bao gồm?',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 11,
    question: 'Nhiệm vụ nào sau đây thuộc về Hội đồng điều dưỡng?',
    answer: 'Đáp án B: Tham mưu cho giám đốc về kế hoạch phát triển điều dưỡng',
  },

  {
    id: 12,
    question: 'Ai là người chịu trách nhiệm về hoạt động điều dưỡng tại khoa lâm sàng trước giám đốc bệnh viện?',
    answer: 'Đáp án A: Điều dưỡng trưởng khoa',
  },

  {
    id: 13,
    question: 'Theo Thông tư 31/2021/TT-BYT, điều dưỡng viên có vai trò gì trong việc nhận định người bệnh?',
    answer: 'Đáp án B: Khám, nhận định tình trạng sức khỏe và nhu cầu cơ bản của người bệnh',
  },

  {
    id: 14,
    question: 'Điều dưỡng viên có trách nhiệm gì trong việc nâng cao chất lượng chăm sóc điều dưỡng?',
    answer: 'Đáp án G: Tất cả các đáp án trên',
  },

  {
    id: 15,
    question: 'Câu nào sau đây không đúng:',
    answer: 'Đáp án D: Chăm sóc vệ sinh cá nhân người bệnh do người bệnh và thân nhân người bệnh thực hiện trong mọi trường hợp',
  },

  {
    id: 16,
    question: 'Chọn câu đúng nhất về các nguyên tắc thực hiện chăm sóc điều dưỡng:',
    answer: 'Đáp án C: Toàn diện – đúng chuyên môn – liên tục – an toàn – chất lượng – công bằng – phù hợp với nhu cầu của mỗi người bệnh',
  },

  {
    id: 17,
    question: 'Can thiệp chăm sóc điều dưỡng yêu cầu điều dưỡng làm gì trong quá trình thực hiện?',
    answer: 'Đáp án B: Thực hiện các can thiệp theo đúng chỉ định của bác sĩ.',
  },

  {
    id: 18,
    question: 'Đánh giá kết quả can thiệp chăm sóc điều dưỡng cần dựa vào tiêu chí nào?',
    answer: 'Đáp án B: Dựa vào các tiêu chí chăm sóc đã được xây dựng và theo dõi.',
  },

  {
    id: 19,
    question: 'Yêu cầu điều dưỡng thực hiện nhận định bệnh nhân dựa trên yếu tố nào?',
    answer: 'Đáp án D: Dựa vào tình trạng lâm sàng và yêu cầu chăm sóc cụ thể của bệnh nhân.',
  },

  {
    id: 20,
    question: 'Khi phân cấp chăm sóc bệnh nhân, điều dưỡng cần làm gì để đảm bảo đúng?',
    answer: 'Đáp án C: Phân cấp dựa vào mức độ nguy hiểm của bệnh lý và tình trạng sức khỏe.',
  },

  {
    id: 21,
    question: 'Yêu cầu điều dưỡng phải làm gì khi bệnh nhân cần sự hỗ trợ can thiệp?',
    answer: 'Đáp án B: Báo cáo tình trạng của bệnh nhân với bác sĩ và thực hiện can thiệp theo chỉ định.',
  },

  {
    id: 22,
    question: 'Nhiệm vụ của điều dưỡng trong khoa lâm sàng theo Điều 14 bao gồm việc gì?',
    answer: 'Đáp án A: Chăm sóc bệnh nhân trong quá trình điều trị và hồi phục.',
  },

  {
    id: 23,
    question: 'Theo Luật Khám bệnh, chữa bệnh số 15/2023/QH15, \'Tình trạng cấp cứu\' là gì?',
    answer: 'Đáp án C: Đột ngột – theo dõi, can thiệp',
  },

  {
    id: 24,
    question: 'Hành vi nào sau đây bị nghiêm cấm trong hoạt động khám bệnh, chữa bệnh?',
    answer: 'Đáp án B: Quảng cáo vượt quá phạm vi hành nghề được phê duyệt',
  },

  {
    id: 25,
    question: 'Trường hợp nào sau đây không bị cấm hành nghề khám bệnh, chữa bệnh theo Luật Khám bệnh, chữa bệnh điều 20?',
    answer: 'Đáp án C: Có tranh chấp dân sự về tài sản',
  },

  {
    id: 26,
    question: 'Theo Luật Khám bệnh, chữa bệnh điều 24, việc kiểm tra đánh giá năng lực hành nghề khám bệnh, chữa bệnh áp dụng cho chức danh nào?',
    answer: 'Đáp án E: A và B',
  },

  {
    id: 27,
    question: 'Chức danh nào sau đây không được liệt kê là chức danh chuyên môn phải có giấy phép hành nghề?',
    answer: 'Đáp án E: Dinh dưỡng lâm sàng',
  },

  {
    id: 28,
    question: 'Theo Luật Khám bệnh, chữa bệnh, trường hợp nào sau đây có thể dẫn đến việc người hành nghề bị đình chỉ hành nghề?',
    answer: 'Đáp án B: Bị Hội đồng chuyên môn xác định có sai sót chuyên môn kỹ thuật',
  },

  {
    id: 29,
    question: 'Điều nào sau đây không phải là nghĩa vụ của người hành nghề đối với đồng nghiệp?',
    answer: 'Đáp án C: Giấu giếm sai sót của đồng nghiệp',
  },

  {
    id: 30,
    question: 'Tại điều 72 Luật KCB năm 2023 Khi tiếp nhận người bệnh không có thân nhân, cơ sở khám bệnh, chữa bệnh có trách nhiệm gì đầu tiên?',
    answer: 'Đáp án B: Kiểm kê, lập biên bản và lưu giữ tài sản của người bệnh',
  },

  {
    id: 31,
    question: 'Theo Luật Khám bệnh, chữa bệnh điều 82 Điều nào sau đây tóm tắt đúng nhất về các trường hợp bắt buộc chữa bệnh?',
    answer: 'Đáp án C: Áp dụng cho người mắc bệnh truyền nhiễm nhóm A, người bệnh tâm thần có nguy cơ gây nguy hiểm, và các trường hợp khác theo quy định của pháp luật',
  },

  {
    id: 32,
    question: 'Luật Khám bệnh, chữa bệnh năm 2023 quy định về thời hạn của giấy phép hành nghề là:',
    answer: 'Đáp án B: 5',
  },

  {
    id: 33,
    question: 'Luật Khám bệnh, chữa bệnh năm 2023 quy định khi phát thuốc cho NB nội trú điều dưỡng cần:',
    answer: 'Đáp án D: Tất cả a, b, c',
  },

  {
    id: 34,
    question: 'Luật Khám bệnh, chữa bệnh năm 2023 quy định nội dung hoạt động dinh dưỡng trong khám bệnh, chữa bệnh bao gồm:',
    answer: 'Đáp án A: Tất cả a, b, c',
  },

  {
    id: 35,
    question: 'Luật Khám bệnh, chữa bệnh năm 2023 quy định việc chuyển khoa được thực hiện',
    answer: 'Đáp án D: Cả a và b',
  },

  {
    id: 36,
    question: 'Luật Khám bệnh, chữa bệnh năm 2023 quy định Hội đồng Y khoa quốc gia thực hiện nhiệm vụ kiểm tra đánh giá năng lực hành nghề KB-CB Hiệu lực thi hành đối với chức danh điều dưỡng, hộ sinh là:',
    answer: 'Đáp án A: Từ ngày 01 tháng 01 năm 2026',
  },

  {
    id: 37,
    question: 'Luật Khám bệnh, chữa bệnh năm 2023 quy định Hội đồng Y khoa quốc gia thực hiện nhiệm vụ kiểm tra đánh giá năng lực hành nghề KB-CB có Hiệu lực thi hành đối với chức danh kỹ thuật y là:',
    answer: 'Đáp án B: Từ ngày 01 tháng 01 năm 2027',
  },

  {
    id: 38,
    question: 'Nghị định 96/2023/NĐ-CP quy định Thời gian thực hành khám bệnh, chữa bệnh đối với chức danh điều dưỡng, hộ sinh, kỹ thuật y là:',
    answer: 'Đáp án C: 12 tháng',
  },

  {
    id: 39,
    question: 'Nghị định 96/2023/NĐ-CP quy định Thời gian thực hành chuyên môn khám bệnh, chữa bệnh về Hồi sức cấp cứu đối với chức danh điều dưỡng, hộ sinh, kỹ thuật y là',
    answer: 'Đáp án B: 2 tháng',
  },

  {
    id: 40,
    question: 'Nghị định 96/2023/NĐ-CP quy định Một người hướng dẫn thực hành chỉ được hướng dẫn tối đa:',
    answer: 'Đáp án B: 05 người thực hành trong cùng một thời điểm',
  },

  {
    id: 41,
    question: 'Nghị định 96/2023/NĐ-CP quy định về chức danh, phạm vi hành nghề của người hướng dẫn thực hành đối với người có văn bằng hộ sinh là:',
    answer: 'Đáp án C: Cả a và b',
  },

  {
    id: 42,
    question: 'Điều dưỡng quan sát và nhận định NB thấy: tại vị trí truyền có các dấu hiệu sau: Nb đau tại vị trí đặt kim, tại chân kim tấy đỏ. Theo thang điểm Vipscore anh chị nhận định vào HSBA người bệnh bị viêm tĩnh mạch độ mấy',
    answer: 'Đáp án A: Độ 1',
  },

  {
    id: 43,
    question: 'Theo anh chị những thang đo nào dưới đây đánh giá người bệnh:',
    answer: 'Đáp án C: Đau, phù, nguy cơ ngã, nguy cơ loét, glasgow, viêm tĩnh mạch, New2',
  },

  {
    id: 44,
    question: 'Bệnh nhân Lan 67 tuổi vào khoa Cấp cứu ngày 15/01/2025. Điều dưỡng nhận định hiện tại: Bệnh nhân đang truyền dịch, bệnh nhân bị té ngã vào ngày 17/10/2024. Căn cứ vào thang điểm Morse, bạn nhận định bệnh nhân này có nguy cơ té ngã nào?',
    answer: 'Đáp án C: Cao',
  },

  {
    id: 45,
    question: 'Bệnh nhân A 67 tuổi, chẩn đoán: Đợt cấp COPD. Khi đi chăm sóc, bạn nhận định thấy: Bệnh nhân tỉnh, nói câu ngắt quãng, bệnh nhân khó thở, nhịp thở 28 lần/phút, bệnh nhân đang thở oxy 2 lít/phút. Trên monitor: Huyết áp 150/80 mmHg, mạch 110 lần/phút, SpO2 93%. Căn cứ vào thang điểm News2, bạn đánh giá và đưa ra mức độ theo dõi nào?',
    answer: 'Đáp án A: 7 điểm – Ngưỡng đáp ứng cấp cứu',
  },

  {
    id: 46,
    question: 'Thang điểm Braden đánh giá nguy cơ loét tỳ đè dựa trên mấy yếu tố chính?',
    answer: 'Đáp án C: 6 yếu tố',
  },

  {
    id: 47,
    question: 'Thang đo Braden được sử dụng chủ yếu để đánh giá nguy cơ phát triển điều gì ở người bệnh?',
    answer: 'Đáp án B: Nguy cơ loét ép',
  },

  {
    id: 48,
    question: 'Yếu tố nào sau đây không thuộc các yếu tố đánh giá trong thang đo Braden?',
    answer: 'Đáp án D: Thị lực',
  },

  {
    id: 49,
    question: 'Điều dưỡng đánh giá nguy cơ loét, người bệnh có các triệu chứng sau:... Bạn đánh giá người bệnh có nguy cơ loét ở mức độ nào?',
    answer: 'Đáp án B: Nguy cơ trung bình',
  },

  {
    id: 50,
    question: 'Điểm NEWS2 bằng bao nhiêu được coi là nguy cơ rất cao và cần hành động khẩn cấp?',
    answer: 'Đáp án D: ≥ 7 điểm',
  },

  {
    id: 51,
    question: 'Người bệnh đánh giá mức độ đau của họ là \'7\' trên thang đau VAS. Điều này cho thấy:',
    answer: 'Đáp án C: Đau dữ dội, cần can thiệp giảm đau mạnh',
  },

  {
    id: 52,
    question: 'Phù mềm, ấn lõm sâu 2-4 mm và biến mất sau vài giây tương ứng với mức độ phù nào?',
    answer: 'Đáp án B: Phù độ 2',
  },

  {
    id: 53,
    question: 'Biện pháp nào sau đây KHÔNG giúp phòng ngừa viêm tĩnh mạch khi truyền dịch?',
    answer: 'Đáp án C: Truyền dịch liên tục trong thời gian dài mà không thay đổi vị trí',
  },

  {
    id: 54,
    question: 'Thang đo Glasgow (Glasgow Coma Scale - GCS) được sử dụng để đánh giá điều gì ở người bệnh?',
    answer: 'Đáp án C: Mức độ ý thức',
  },

  {
    id: 55,
    question: 'Nội dung nào không thuộc Thang đo Glasgow đánh giá ý thức NB?',
    answer: 'Đáp án C: Dấu hiệu sinh tồn',
  },

  {
    id: 56,
    question: 'Thang đo Glasgow đánh giá ý thức dựa trên những yếu tố nào?',
    answer: 'Đáp án A: Đáp ứng mắt, đáp ứng vận động, đáp ứng lời nói.',
  },

  {
    id: 57,
    question: 'Trong thang đo Glasgow, đáp ứng vận động tốt nhất được đánh giá bằng điểm số tối đa là bao nhiêu?',
    answer: 'Đáp án C: 6',
  },

  {
    id: 58,
    question: 'Tổng điểm số tối thiểu của thang đo Glasgow là bao nhiêu và điều này thường chỉ ra điều gì?',
    answer: 'Đáp án B: 3 điểm, hôn mê sâu.',
  },

  {
    id: 59,
    question: 'Người bệnh bị chấn thương vào khoa, điều dưỡng nhận định: Mở mắt khi đau, trả lời lộn xộn và đáp ứng khi gây đau. Tính điểm Glasgrow',
    answer: 'Đáp án C: 10 điểm',
  },

  {
    id: 60,
    question: 'Thang đo Morse (Morse Fall Scale) là công cụ được sử dụng để làm gì?',
    answer: 'Đáp án B: Dự đoán nguy cơ té ngã của người bệnh',
  },

  {
    id: 61,
    question: 'Thông tư nào quy định về cập nhật kiến thức y khoa liên tục',
    answer: 'Đáp án B: TT 22/2023/TT-BYT',
  },

  {
    id: 62,
    question: 'Theo Thông tư 32/2023/TT-BYT, 1 tiết học tương đương bao nhiêu giờ tín chỉ?',
    answer: 'Đáp án B: 1 giờ tín chỉ',
  },

  {
    id: 63,
    question: 'Khi tham gia hội nghị, hội thảo chuyên môn, mỗi buổi 4 giờ được tính bao nhiêu giờ tín chỉ cho đại biểu tham dự?',
    answer: 'Đáp án A: 1 giờ tín chỉ',
  },

  {
    id: 64,
    question: 'Theo Thông tư 32, người hành nghề khám bệnh, chữa bệnh có nghĩa vụ tham gia cập nhật kiến thức y khoa liên tục tối thiểu bao nhiêu giờ tín chỉ trong 05 năm liên tục?',
    answer: 'Đáp án C: 120 giờ tín chỉ',
  },

  {
    id: 65,
    question: 'Theo Thông tư 32 tại Điều 43, quy định về nguyên tắc trực khám bệnh, chữa bệnh. Các phiên trực phải được tổ chức như thế nào?',
    answer: 'Đáp án C: Phải được tổ chức chặt chẽ, có đầy đủ nhân lực, phương tiện vận chuyển, thiết bị y tế và thuốc để cấp cứu người bệnh',
  },

  {
    id: 66,
    question: 'Theo Thông tư 32 tại Điều 43, quy định về nguyên tắc trực khám bệnh, chữa bệnh Người trực có được phép rời bỏ vị trí trực không?',
    answer: 'Đáp án C: Không được rời bỏ vị trí trực và phải thực hiện mệnh lệnh trực của cấp trên',
  },

  {
    id: 67,
    question: 'Tham gia sinh hoạt chuyên môn (hội chẩn ca bệnh), mỗi ca bệnh được tính bao nhiêu giờ tín chỉ?',
    answer: 'Đáp án A: 0.5 giờ tín chỉ',
  },

  {
    id: 68,
    question: 'Tài liệu dạy học chính thức trong chương trình cập nhật kiến thức y khoa liên tục do đơn vị nào biên soạn?',
    answer: 'Đáp án B: Cơ sở cập nhật kiến thức y khoa liên tục',
  },

  {
    id: 69,
    question: 'Người bệnh có mạch 120 lần/phút, SpO₂ 89% là dấu hiệu của:',
    answer: 'Đáp án C: Suy hô hấp',
  },

  {
    id: 70,
    question: 'Mạch nghịch lý (thay đổi theo nhịp thở) thường gặp trong:',
    answer: 'Đáp án A: Hen phế quản nặng',
  },

  {
    id: 70,
    question: 'Mạch nghịch lý (thay đổi theo nhịp thở) thường gặp trong:',
    answer: 'Đáp án A: Hen phế quản nặng',
  },

  {
    id: 71,
    question: 'Người bệnh có huyết áp 80/50 mmHg, mạch 130 lần/phút cần được:',
    answer: 'Đáp án C: Báo cáo ngay lập tức cho bác sĩ điều trị để có chỉ định can thiệp kịp thời',
  },

  {
    id: 72,
    question: 'Người bệnh 70 tuổi, huyết áp 170/95 mmHg, điều dưỡng cần làm gì đầu tiên?',
    answer: 'Đáp án D: Đo lại huyết áp cho người bệnh sau 5-10 phút và hướng dẫn nghỉ',
  },

  {
    id: 73,
    question: 'Người bệnh có nhiệt độ 39.5°C, rét run, điều dưỡng nên ưu tiên:',
    answer: 'Đáp án B: Cho người bệnh uống thuốc hạ sốt theo y lệnh.',
  },

  {
    id: 74,
    question: 'Bệnh nhân sau mổ có SpO₂ 88%, điều dưỡng nên ưu tiên:',
    answer: 'Đáp án B: Báo cáo ngay lập tức cho bác sĩ và chuẩn bị các biện pháp hỗ trợ hô hấp, thở oxy',
  },

  {
    id: 75,
    question: 'Người bệnh đái tháo đường, mạch 110, huyết áp 80/60, toát mồ hôi... điều dưỡng cần:',
    answer: 'Đáp án B: Kiểm tra đường huyết mao mạch ngay lập tức và xử trí theo phác đồ hạ đường huyết.',
  },

  {
    id: 76,
    question: 'Nhịp thở nhanh, nông, SpO₂ giảm, người bệnh kích thích => có thể NB đang:',
    answer: 'Đáp án C: Suy hô hấp cấp',
  },

  {
    id: 77,
    question: 'Điều dưỡng theo dõi sinh hiệu bao lâu một lần khi người bệnh có dấu hiệu sốc?',
    answer: 'Đáp án D: 15–30 phút',
  },

  {
    id: 78,
    question: 'SpO₂ < 92% ở người COPD được coi là:',
    answer: 'Đáp án D: Giảm oxy máu, Cần can thiệp nếu có dấu hiệu suy hô hấp',
  },

  {
    id: 79,
    question: 'Người bệnh tụt huyết áp, mạch nhanh có thể do:',
    answer: 'Đáp án A: Nhiễm trùng nặng',
  },

  {
    id: 80,
    question: 'Trường hợp cần báo cáo ngay bác sĩ về huyết áp:',
    answer: 'Đáp án C: Huyết áp 90/60 mmHg kèm theo các dấu hiệu như lơ mơ, vã mồ hôi, mạch nhanh.',
  },

  {
    id: 81,
    question: 'Người bệnh chóng mặt khi thay đổi tư thế đột ngột, điều dưỡng cần hướng dẫn:',
    answer: 'Đáp án C: Thay đổi tư thế từ từ, tránh đứng dậy quá nhanh.',
  },

  {
    id: 82,
    question: 'Người bị cụt cả hai tay cần đo huyết áp ở đâu?',
    answer: 'Đáp án C: Đùi',
  },

  {
    id: 83,
    question: 'Tại sao nên đo huyết áp hai tay lần đầu?',
    answer: 'Đáp án C: Để phát hiện sự khác biệt về huyết áp giữa hai tay, có thể gợi ý các vấn đề về mạch máu.',
  },

  {
    id: 84,
    question: 'Người bệnh sau mổ rét run, nhiệt 35.5°C, xử trí đầu tiên:',
    answer: 'Đáp án C: Ủ ấm và theo dõi sát dấu hiệu sinh tồn đồng thời báo bác sĩ',
  },

  {
    id: 85,
    question: 'Vị trí đo nhiệt độ gần trung tâm cơ thể nhất:',
    answer: 'Đáp án D: Trực tràng',
  },

  {
    id: 86,
    question: 'Theo TT 32.2023, dấu hiệu sinh tồn cần theo dõi khi NB vào viện:',
    answer: 'Đáp án B: Mạch, nhiệt độ, huyết áp, nhịp thở, SP02',
  },

  {
    id: 87,
    question: 'Sốt cao 39,5°C nên theo dõi nhiệt độ bao lâu?',
    answer: 'Đáp án B: 30 phút – 1 giờ/lần hoặc theo chỉ định BS',
  },

  {
    id: 88,
    question: 'Vị trí cổ tay cần đặt khi đo huyết áp cổ tay?',
    answer: 'Đáp án C: Ngang mức tim.',
  },

  {
    id: 89,
    question: 'Chẩn đoán điều dưỡng phù hợp bỏng độ II, đau rát:',
    answer: 'Đáp án C: Đau cấp liên quan đến tổn thương mô do bỏng',
  },

  {
    id: 90,
    question: 'BN hen phế quản, khó thở, khò khè, chẩn đoán phù hợp:',
    answer: 'Đáp án B: Thở không hiệu quả liên quan đến co thắt phế quản',
  },

  {
    id: 91,
    question: 'BN yếu, chóng mặt, HA thấp, chẩn đoán phù hợp:',
    answer: 'Đáp án B: Nguy cơ ngã liên quan đến hạ huyết áp biểu hiện bởi yếu và chóng mặt.',
  },

  {
    id: 92,
    question: 'BN viêm phổi, ho đờm đặc, khó thở, chẩn đoán phù hợp:',
    answer: 'Đáp án B: Thở không hiệu quả liên quan đến tăng tiết dịch và viêm đường thở',
  },

  {
    id: 93,
    question: 'BN tăng huyết áp, đau đầu âm ỉ, chẩn đoán phù hợp:',
    answer: 'Đáp án B: Đau đầu liên quan đến tăng huyết áp biểu hiện bởi huyết áp 160/90 mmHg.',
  },

  {
    id: 94,
    question: 'BN tiểu đường + tiền liệt tuyến to => ghi nhận định gì?',
    answer: 'Đáp án C: Ghi cả 2 chỉ số',
  },

  {
    id: 95,
    question: 'BN gãy xương đùi, than khó khăn khi tự vệ sinh cá nhân:',
    answer: 'Đáp án B: Giảm khả năng tự chăm sóc liên quan đến hạn chế vận động do bó bột',
  },

  {
    id: 96,
    question: 'Theo NANDA có mấy loại chẩn đoán điều dưỡng?',
    answer: 'Đáp án C: 4 nhóm',
  },

  {
    id: 97,
    question: 'Chẩn đoán điều dưỡng là nêu lên…',
    answer: 'Đáp án B: 1B, 2A',
  },

  {
    id: 98,
    question: 'Mỗi chẩn đoán điều dưỡng có bao nhiêu mục tiêu?',
    answer: 'Đáp án C: ≥ 1 mục tiêu',
  },

  {
    id: 99,
    question: 'TT32/2023 quy định nhận định NB bao nhiêu lần/ngày?',
    answer: 'Đáp án B: Tối thiểu 1 lần/ngày',
  },

  {
    id: 100,
    question: 'Nội dung không cần đánh giá trong hồ sơ bệnh án:',
    answer: 'Đáp án D: Quá trình thực hiện y lệnh thuốc',
  },
    // Thêm các câu hỏi P1 khác vào đây...
  ],

  P2: [
    // Dán dữ liệu P2 vào đây
        {
    id: 101,
    question: 'Khi nhận định chăm sóc người bệnh, nếu người bệnh chỉ có triệu chứng đau đầu, bác sĩ chẩn đoán Tăng huyết áp. Tìm ý sai trong nội dung sau',
    answer: 'Đáp án C: Không phải nhận định về hô hấp',
  },

  {
    id: 102,
    question: 'Chẩn đoán điều dưỡng người bệnh lo lắng về tình trạng bệnh. Mục tiêu là',
    answer: 'Đáp án C: Giảm lo lắng',
  },

  {
    id: 103,
    question: 'Điều dưỡng lập kế hoạch chăm sóc NB suy thận cấp, mục tiêu phù hợp là:',
    answer: 'Đáp án A: Chỉ số điện giải nằm trong giới hạn bình thường.',
  },

  {
    id: 104,
    question: 'Người bệnh than khó thở khi nằm đầu bằng, can thiệp đầu tiên là:',
    answer: 'Đáp án A: Nâng đầu giường cao 45 độ',
  },

  {
    id: 105,
    question: 'Người bệnh ăn qua ống thông dạ dày, chẩn đoán điều dưỡng ưu tiên:',
    answer: 'Đáp án B: Nguy cơ hít sặc phổi liên quan đến rối loạn chức năng nuốt',
  },

  {
    id: 106,
    question: 'Người bệnh hen suyễn lo lắng, can thiệp điều dưỡng phù hợp:',
    answer: 'Đáp án C: Động viên và tư vấn cung cấp thông tin cho người bệnh.',
  },

  {
    id: 107,
    question: 'BN viêm phổi, khó thở, SpO2 92%, chẩn đoán phù hợp:',
    answer: 'Đáp án B: Thở không hiệu quả liên quan đến tắc nghẽn đường thở',
  },

  {
    id: 108,
    question: 'BN suy tim, phù chân, tăng 2kg, chẩn đoán phù hợp:',
    answer: 'Đáp án B: Thừa dịch liên quan đến giảm chức năng tim biểu hiện bởi phù chân và tăng cân.',
  },

  {
    id: 109,
    question: 'BN sau đột quỵ, yếu nửa người trái, khó nuốt:',
    answer: 'Đáp án B: Khó nuốt liên quan đến tổn thương thần kinh',
  },

  {
    id: 110,
    question: 'BN COPD, ho nhiều, khạc đờm vàng đặc:',
    answer: 'Đáp án B: Thông khí đường thở không hiệu quả liên quan đến tăng tiết',
  },

  {
    id: 111,
    question: 'Chẩn đoán xác định bệnh đái tháo đường cần:',
    answer: 'Đáp án D: Cả A,B,C đúng',
  },

  {
    id: 112,
    question: 'BN liệt giường, loét độ I vùng gót chân:',
    answer: 'Đáp án C: Loét độ 1 liên quan đến tình trạng bất động kéo dài',
  },

  {
    id: 113,
    question: 'BN sốc, lơ mơ hoặc hôn mê khi vào viện, điều dưỡng cần làm gì đầu tiên?',
    answer: 'Đáp án A: Đặt canun Mayo đề phòng tụt lưỡi',
  },

  {
    id: 114,
    question: 'Dấu hiệu có giá trị nhất để đánh giá mức độ nặng phản vệ:',
    answer: 'Đáp án C: Mạch nhỏ, huyết áp không đo được',
  },

  {
    id: 115,
    question: 'Ba nguyên tắc xử trí ngộ độc thuốc trừ sâu là:',
    answer: 'Đáp án D: Cả A,B,C đúng',
  },

  {
    id: 116,
    question: 'Dấu hiệu theo dõi khi bệnh nhân ngộ độc thuốc trừ sâu:',
    answer: 'Đáp án D: A,B,C đúng hết',
  },

  {
    id: 117,
    question: 'Trước khi cho trẻ co giật ra viện, cần hướng dẫn:',
    answer: 'Đáp án B: Cách xử trí khi trẻ lên cơn giật',
  },

  {
    id: 118,
    question: 'Khi thân nhiệt tăng 1 độ C, mạch tăng thêm:',
    answer: 'Đáp án A: 10 lần /phút',
  },

  {
    id: 119,
    question: 'Hồ sơ bệnh án NB tử vong lưu bao nhiêu năm:',
    answer: 'Đáp án C: 20 năm',
  },

  {
    id: 120,
    question: 'Hồ sơ bệnh án tâm thần lưu bao nhiêu năm:',
    answer: 'Đáp án C: 20 năm',
  },

  {
    id: 121,
    question: 'Hồ sơ tai nạn lao động, sinh hoạt lưu:',
    answer: 'Đáp án C: 15 năm',
  },

  {
    id: 122,
    question: 'Phiếu khảo sát hài lòng người bệnh, NVYT lưu:',
    answer: 'Đáp án A: 5 năm',
  },

  {
    id: 123,
    question: 'Hồ sơ sai sót liên quan đến thuốc lưu:',
    answer: 'Đáp án C: 50 năm',
  },

  {
    id: 124,
    question: 'Hồ sơ chăm sóc NB HIV lưu:',
    answer: 'Đáp án D: Vĩnh viễn',
  },

  {
    id: 125,
    question: 'Hồ sơ dự phòng lây truyền HIV lưu:',
    answer: 'Đáp án C: 30 năm',
  },

  {
    id: 126,
    question: 'NB nội trú BHYT nằm ghép 2 người/giường, BHYT thanh toán:',
    answer: 'Đáp án B: 50% chi phí giường bệnh',
  },

  {
    id: 127,
    question: 'NB chuyển 3 khoa trong ngày, tính tiền giường như thế nào:',
    answer: 'Đáp án A: Tính tiền giường khoa nằm lâu nhất',
  },

  {
    id: 128,
    question: 'BHYT thanh toán vật tư y tế như thế nào:',
    answer: 'Đáp án B: BHYT thanh toán chỉ đối với vật tư y tế trong danh mục được duyệt',
  },

  {
    id: 129,
    question: 'Vật tư y tế cao cấp vượt mức BHYT, phần vượt quá xử lý thế nào:',
    answer: 'Đáp án B: Người bệnh phải tự chi trả phần chênh lệch giữa giá thực tế và giá BHYT thanh toán',
  },

  {
    id: 130,
    question: 'Mục đích của giao tiếp:',
    answer: 'Đáp án C: Đáp ứng các nhu cầu vật chất và tinh thần',
  },

  {
    id: 131,
    question: 'Để giao tiếp hiệu quả, điều dưỡng cần xác định điều gì trước:',
    answer: 'Đáp án A: Đối tượng giao tiếp',
  },

  {
    id: 132,
    question: 'TT 07/2014/TT-BYT quy định việc cần làm khi NB ra viện hoặc chuyển tuyến:',
    answer: 'Đáp án B: Tiếp thu ý kiến đóng góp của người bệnh hoặc người đại diện hợp pháp của người bệnh',
  },

  {
    id: 133,
    question: 'Ứng xử với NB điều trị nội trú theo TT 07/2014/TT-BYT:',
    answer: 'Đáp án C: Tư vấn giáo dục sức khỏe và hướng dẫn người bệnh...',
  },

  {
    id: 134,
    question: 'Việc phải làm khi tiếp đón NB đến khám bệnh:',
    answer: 'Đáp án A: Niềm nở',
  },

  {
    id: 135,
    question: 'Không thể phục vụ NB ngay, theo AIDET nên:',
    answer: 'Đáp án C: Giải thích lý do và cung cấp thời gian dự kiến phải chờ (Duration)',
  },

  {
    id: 136,
    question: 'Ví dụ tốt bước \'Acknowledge\' trong AIDET:',
    answer: 'Đáp án B: Mỉm cười, giao tiếp bằng ánh mắt và nói: \'Chào anh/chị, tôi có thể giúp gì?\'',
  },

  {
    id: 137,
    question: 'Cung cấp thông tin thời gian (Duration) trong giao tiếp giúp:',
    answer: 'Đáp án C: Giúp khách hàng yên tâm, chủ động và giảm lo lắng',
  },

  {
    id: 138,
    question: 'NB lớn tuổi hay hỏi lại và lo lắng, điều dưỡng nên:',
    answer: 'Đáp án C: Nhẹ nhàng lặp lại câu trả lời, trấn an và thể hiện sự kiên nhẫn',
  },

  {
    id: 139,
    question: 'NB phàn nàn vì bác sĩ đến trễ, điều dưỡng nên:',
    answer: 'Đáp án B: Lắng nghe, thể hiện sự đồng cảm và hứa sẽ báo lại với bác sĩ',
  },

  {
    id: 140,
    question: 'Mục đích công khai chuẩn đạo đức nghề nghiệp điều dưỡng:',
    answer: 'Đáp án B: Để người dân, người bệnh và nhà quản lý y tế giám sát, đánh giá việc thực hiện của điều dưỡng viên',
  },

  {
    id: 141,
    question: 'Mục tiêu triển khai chuẩn đạo đức điều dưỡng viên QĐ 20/2012:',
    answer: 'Đáp án B: Nâng cao chất lượng dịch vụ chăm sóc y tế',
  },

  {
    id: 142,
    question: 'Thể hiện sự tôn trọng người bệnh của điều dưỡng viên:',
    answer: 'Đáp án B: Tôn trọng tuổi, giới tính, dân tộc, tín ngưỡng của người bệnh',
  },

  {
    id: 143,
    question: 'Hành vi trung thực trong hành nghề điều dưỡng:',
    answer: 'Đáp án B: Trung thực trong việc ghi các thông tin trong hồ sơ bệnh án của người bệnh',
  },

  {
    id: 144,
    question: 'Để nâng cao năng lực hành nghề, điều dưỡng cần:',
    answer: 'Đáp án B: Học tập liên tục để cập nhật kiến thức và kỹ năng nghề nghiệp',
  },

  {
    id: 145,
    question: 'Người nhà lo lắng hỏi về tình trạng NB, điều dưỡng nên:',
    answer: 'Đáp án B: Lắng nghe cẩn thận, giải thích rõ ràng bằng ngôn ngữ dễ hiểu và thể hiện sự cảm thông',
  },

  {
    id: 146,
    question: 'BN có vẻ buồn bã và ít nói, điều dưỡng nên:',
    answer: 'Đáp án B: Hỏi thăm nhẹ nhàng về cảm xúc của bệnh nhân và lắng nghe nếu họ muốn chia sẻ',
  },

  {
    id: 147,
    question: 'BN tỏ ra đau đớn khi làm thủ thuật, điều dưỡng nên:',
    answer: 'Đáp án B: Dừng lại ngay lập tức và hỏi han bệnh nhân, giải thích các bước tiếp theo và trấn an họ.',
  },

  {
    id: 148,
    question: 'Gặp BN khó tính, yêu cầu vô lý, điều dưỡng nên:',
    answer: 'Đáp án B: Giữ thái độ bình tĩnh, lắng nghe và giải thích kiên nhẫn. Báo cáo ĐDT và LĐK nếu cần',
  },

  {
    id: 149,
    question: 'BN hỏi về thuốc mới thấy trên mạng, điều dưỡng nên:',
    answer: 'Đáp án B: Giải thích thông tin cơ bản và khuyên nên hỏi bác sĩ điều trị',
  },

  {
    id: 150,
    question: 'Trong tình huống cấp cứu, người nhà bệnh nhân hoảng loạn, điều dưỡng nên:',
    answer: 'Đáp án B: Giải thích ngắn gọn tình hình và trấn an họ, đồng thời yêu cầu họ hợp tác.',
  },

  {
    id: 151,
    question: 'Khi bị phản ánh vì mắc lỗi, điều dưỡng nên:',
    answer: 'Đáp án B: Cảm ơn NNNB, Nhận lỗi một cách chân thành và đưa ra hướng giải quyết.',
  },

  {
    id: 152,
    question: 'Hướng dẫn người nhà chăm sóc NB sau xuất viện:',
    answer: 'Đáp án B: Giải thích cặn kẽ các bước chăm sóc, trả lời các câu hỏi của họ và đảm bảo họ hiểu rõ.',
  },

  {
    id: 153,
    question: 'NB lớn tuổi không nghe rõ, điều dưỡng nên:',
    answer: 'Đáp án B: Lặp lại thông tin rõ ràng, dùng ngôn ngữ cơ thể và giải thích với người nhà.',
  },

  {
    id: 154,
    question: 'Cần phối hợp bộ phận khác trong bệnh viện:',
    answer: 'Đáp án B: Chủ động liên hệ và trao đổi thông tin với các bộ phận liên quan một cách hợp tác.',
  },

  {
    id: 155,
    question: 'Yếu tố quan trọng nhất trong giao tiếp ứng xử điều dưỡng:',
    answer: 'Đáp án C: Sự đồng cảm, tôn trọng và khả năng lắng nghe.',
  },

  {
    id: 156,
    question: 'Chuẩn bị tiêm thuốc cho NB, bước đầu AIDET là:',
    answer: 'Đáp án B: Tự giới thiệu tên và vai trò của bạn (Acknowledge).',
  },

  {
    id: 157,
    question: 'NB lo lắng trước khi thay băng, bước Inquire là:',
    answer: 'Đáp án C: Cô/chú có điều gì lo lắng không ạ?',
  },

  {
    id: 158,
    question: 'Bận việc, người nhà hỏi, AIDET Acknowledge là:',
    answer: 'Đáp án B: Ngừng việc, quay lại chào hỏi, hứa hỗ trợ sau.',
  },

  {
    id: 159,
    question: 'Thông báo giờ dùng thuốc, bước Explain AIDET là:',
    answer: 'Đáp án B: Thuốc này cô/chú sẽ uống vào lúc 3 giờ chiều nay ạ.',
  },

  {
    id: 160,
    question: 'Mục đích đổi mới phong cách phục vụ:',
    answer: 'Đáp án B: Thay đổi thái độ, rèn kỹ năng, nâng cao sự hài lòng NB.',
  },

  {
    id: 161,
    question: 'Trách nhiệm viên chức y tế thực hiện quy tắc ứng xử:',
    answer: 'Đáp án C: Học tập và chấp hành đầy đủ các quy định pháp luật.',
  },

  {
    id: 162,
    question: 'Theo QĐ 3474/QĐ-BYT, điều dưỡng là:',
    answer: 'Đáp án C: Một nghề độc lập tạo thay đổi tích cực trong hệ thống y tế',
  },

  {
    id: 163,
    question: 'Chuẩn hóa năng lực điều dưỡng nhằm:',
    answer: 'Đáp án E: Đánh giá năng lực thực hành và công nhận pháp lý, nâng cao vị thế',
  },

  {
    id: 164,
    question: 'Thành tố năng lực nghề nghiệp điều dưỡng:',
    answer: 'Đáp án A: Kiến thức, kỹ năng, thái độ',
  },

  {
    id: 165,
    question: 'Điều dưỡng cần thực hiện kỹ thuật nào:',
    answer: 'Đáp án B: Thực hiện cơ bản và một số chuyên khoa',
  },

  {
    id: 166,
    question: 'Khi thực hiện thuốc, điều dưỡng cần biết:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 167,
    question: 'Duy trì và phát triển năng lực cá nhân:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 168,
    question: 'Vai trò giáo dục sức khỏe của điều dưỡng:',
    answer: 'Đáp án B: Hướng dẫn, tư vấn, giáo dục NB, gia đình, cộng đồng',
  },

  {
    id: 169,
    question: 'Kỹ năng cần có để giải quyết vấn đề hiệu quả:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 170,
    question: 'Yếu tố đảm bảo thực hiện thuốc an toàn:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 171,
    question: 'Sau khi cho dùng thuốc, điều dưỡng cần:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 172,
    question: 'Trước khi giáo dục sức khỏe, điều dưỡng cần làm gì?',
    answer: 'Đáp án D: Cả 3 đáp án trên',
  },

  {
    id: 173,
    question: 'Hoạt động thuộc giáo dục sức khỏe điều dưỡng:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 174,
    question: 'Nội dung giáo dục sức khỏe phù hợp:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 175,
    question: 'Cập nhật kiến thức kỹ năng bằng cách nào:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 176,
    question: 'Công nghệ thông tin điều dưỡng sử dụng vào:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 177,
    question: 'Mục tiêu xây dựng hình ảnh điều dưỡng:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 178,
    question: 'Vai trò điều dưỡng trong đảm bảo chất lượng chăm sóc:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 179,
    question: 'Giao tiếp với NB, gia đình và cộng đồng cần:',
    answer: 'Đáp án D: Tất cả các đáp án trên',
  },

  {
    id: 180,
    question: 'TT 02/2025/TT-BYT có hiệu lực:',
    answer: 'Đáp án B: 01/3/2025',
  },

  {
    id: 181,
    question: 'TT 02/2025/TT-BYT thay thế thông tư nào:',
    answer: 'Đáp án C: 26/2015/TTLT-BYT-BNV',
  },

  {
    id: 182,
    question: 'TT 02/2025/TT-BYT không áp dụng cho:',
    answer: 'Đáp án D: Viên chức y tế tuyến xã',
  },

  {
    id: 183,
    question: 'Mục tiêu chính TT 02/2025/TT-BYT:',
    answer: 'Đáp án B: Quy định mã số và tiêu chuẩn chức danh nghề nghiệp',
  },

  {
    id: 184,
    question: 'Đối tượng xếp hạng theo TT 02/2025/TT-BYT:',
    answer: 'Đáp án C: Điều dưỡng, hộ sinh, kỹ thuật y',
  },

  {
    id: 185,
    question: 'Mục tiêu phân loại chức danh theo hạng:',
    answer: 'Đáp án A: Bố trí công việc phù hợp và đánh giá năng lực',
  },

  {
    id: 186,
    question: 'Nhiệm vụ điều dưỡng hạng III:',
    answer: 'Đáp án B: Thực hiện nhiệm vụ chuyên môn khám bệnh phù hợp trình độ',
  },

  {
    id: 187,
    question: 'Thời gian ở hạng II để xét lên hạng I:',
    answer: 'Đáp án C: 6 năm',
  },

  {
    id: 188,
    question: 'Nhiệm vụ điều dưỡng hạng III là:',
    answer: 'Đáp án B: Tham gia biên soạn tài liệu chuyên môn',
  },

  {
    id: 189,
    question: 'Thời gian từ hạng III lên hạng II:',
    answer: 'Đáp án C: 9 năm',
  },

  {
    id: 190,
    question: 'Tiêu chuẩn năng lực điều dưỡng hạng II:',
    answer: 'Đáp án B: Có khả năng tư vấn, giáo dục sức khỏe và giao tiếp hiệu quả',
  },

  {
    id: 191,
    question: 'TT 03/2023/TT-BYT hướng dẫn:',
    answer: 'Đáp án C: Vị trí việc làm và cơ cấu viên chức y tế công lập',
  },

  {
    id: 192,
    question: 'Xác định số lượng làm việc dựa trên:',
    answer: 'Đáp án B: Số giường bệnh được phê duyệt',
  },

  {
    id: 193,
    question: 'Định mức trong TT 03/2023/TT-BYT là:',
    answer: 'Đáp án B: Số lượng người làm việc tối thiểu',
  },

  {
    id: 194,
    question: 'Số lượng khoa GMHS và phòng mổ tính theo:',
    answer: 'Đáp án C: Số bàn mổ',
  },

  {
    id: 195,
    question: 'Số lượng người làm việc tại phòng khám bệnh viện hạng I trở lên tính theo:',
    answer: 'Đáp án C: Số lượt khám bệnh/năm',
  },

  {
    id: 196,
    question: 'Trước khi dùng thuốc cho NB cần:',
    answer: 'Đáp án E: Tất cả đáp án trên',
  },

  {
    id: 197,
    question: 'Trong khi dùng thuốc cho NB cần:',
    answer: 'Đáp án D: Tất cả đáp án trên',
  },

  {
    id: 198,
    question: 'Khi chuẩn bị thuốc tiêm, điều dưỡng cần:',
    answer: 'Đáp án C: chuẩn bị sẵn sàng hộp thuốc cấp cứu và phác đồ chống sốc',
  },

  {
    id: 199,
    question: 'Kiểm tra chất lượng thuốc bằng cảm quan:',
    answer: 'Đáp án D: A và B',
  },

  {
    id: 200,
    question: 'Thực hiện thuốc đúng cho NB gồm:',
    answer: 'Đáp án D: Gồm A và B',
  },
    // Thêm các câu hỏi P2 khác vào đây...
  ],

  P3: [
    // Dán dữ liệu P3 vào đây
        {
    id: 201,
    question: 'Khi dùng thuốc cho NB, điều dưỡng viên, hộ sinh viên phải kiểm tra thuốc: Tên thuốc, nồng độ/hàm lượng,… , số lần dùng thuốc trong 24 giờ, khoảng cách giữa các lần dùng thuốc, thời điểm dùng thuốc và đường dùng thuốc so với y lệnh',
    answer: 'Đáp án: A. Liều dùng một lần',
  },

  {
    id: 202,
    question: 'Khi dùng thuốc cho NB, điều dưỡng viên, hộ sinh viên phải……. các tác dụng không mong muốn của thuốc, tai biến sau dùng thuốc và báo cáo kịp thời cho bác sĩ điều trị.',
    answer: 'Đáp án: B. Theo dõi, phát hiện',
  },

  {
    id: 203,
    question: 'Thông tư 23/2011/TT-BYT quy định về quản lý bảo quản thuốc tại khoa lâm sàng: Điều dưỡng viên khi phát hiện sử dụng nhầm thuốc, mất thuốc, thuốc hỏng cần báo cáo ngay cho……để có biện pháp xử lý kịp thời và đề nghị làm rõ nguyên nhân, trách nhiệm.',
    answer: 'Đáp án: D. Người quản lý cấp trên trực tiếp',
  },

  {
    id: 204,
    question: 'Phản vệ là gì:',
    answer: 'Đáp án: A. Một phản ứng dị ứng, có thể xuất hiện ngay lập tức, từ vài giây, vài phút đến vài giờ sau khi cơ thể tiếp xúc với các dị nguyên',
  },

  {
    id: 205,
    question: 'Triệu chứng của phản vệ độ I:',
    answer: 'Đáp án: C. Chỉ có các triệu chứng trên da, tổ chức dưới da và niêm mạc như mày đay, ngứa, phù mạch',
  },

  {
    id: 206,
    question: 'Một trong các nguyên tắc chung xử trí cấp cứu phản vệ: Tất cả các trường hợp phản vệ phải được phát hiện sớm, xử trí khẩn cấp,… và theo dõi liên tục ít nhất trong 24 giờ.',
    answer: 'Đáp án: C. Kịp thời ngay tại chỗ',
  },

  {
    id: 207,
    question: 'Adrenalin là thuốc thiết yếu, quan trọng hàng đầu, cứu sống người bệnh bị phản vệ, phải được dùng theo đường nào khi chẩn đoán phản vệ từ độ II trở lên:',
    answer: 'Đáp án: B. Tiêm bắp',
  },

  {
    id: 208,
    question: 'Liều dùng ban đầu ở người lớn tiêm bắp Adrenalin 1mg =1 ml = 1 ống khi cấp cứu phản vệ mức độ nặng và nguy kịch:',
    answer: 'Đáp án: D. 1/2 – 1 ml',
  },

  {
    id: 209,
    question: 'Sốc phản vệ là gì:',
    answer: 'Đáp án: C. Mức độ nặng nhất của phản vệ do đột ngột giãn toàn bộ hệ thống mạch và co thắt phế quản có thể gây tử vong trong vòng một vài phút',
  },

  {
    id: 210,
    question: 'Phản vệ được phân thành mấy mức độ',
    answer: 'Đáp án: C. 4',
  },

  {
    id: 210,
    question: 'Phản vệ được phân thành mấy mức độ?',
    answer: 'Đáp án C: 4',
  },

  {
    id: 211,
    question: 'Thuốc được dùng để xử trí phản vệ nhẹ (độ I - chỉ có các triệu chứng da, tổ chức dưới da và niêm mạc như mày đay, ngứa, phù mạch):',
    answer: 'Đáp án D: A và C',
  },

  {
    id: 212,
    question: 'Triệu chứng của phản vệ độ I:',
    answer: 'Đáp án A: Chỉ có các triệu chứng trên da, tổ chức dưới da và niêm mạc như mày đay, ngứa, phù mạch.',
  },

  {
    id: 213,
    question: 'Trang thiết bị y tế tối thiểu cấp cứu phản vệ tại cơ sở khám bệnh, chữa bệnh gồm có:',
    answer: 'Đáp án C: Oxy, Natriclorid 0,9%, HA',
  },

  {
    id: 214,
    question: 'Biểu hiện phản vệ ở mức độ IV là:',
    answer: 'Đáp án D: Ngừng hô hấp',
  },

  {
    id: 215,
    question: 'Điều dưỡng đang tiêm người bệnh 50 tuổi thấy NB có triệu chứng mẩn ngứa, khó thở 30 lần/phút, điều dưỡng xử trí:',
    answer: 'Đáp án A: Ngừng ngay tiêm thuốc, Tiêm Adrenanin 1mg tiêm bắp ½ ống, gọi bác sĩ, thở oxy…',
  },

  {
    id: 216,
    question: 'Bệnh nhân 62 tuổi có chẩn đoán xơ gan, bác sĩ chỉ định Vipphyton tiêm tĩnh mạch chậm (tối đa 1mg/phút). Điều dưỡng thực hiện:',
    answer: 'Đáp án A: Lấy 1 ml thuốc (10mg) pha với 10 ml nước cất và tiêm chậm trong 10 phút.',
  },

  {
    id: 217,
    question: 'Bệnh nhân hạ canxi máu được y lệnh tiêm bắp Calci chlorid 10%. Điều dưỡng cần làm gì?',
    answer: 'Đáp án C: Kiểm tra lại y lệnh với bác sĩ về đường dùng của thuốc do calci chlorid thường được tiêm tĩnh mạch và tiêm bắp có thể gây tai biến',
  },

  {
    id: 218,
    question: 'Điều dưỡng tiêm nhầm thuốc cho NB A thay vì NB B. Xử trí:',
    answer: 'Đáp án C: Ngay lập tức báo cáo sự việc với bác sĩ điều trị của cả người bệnh A và người bệnh B, đồng thời theo dõi sát dấu hiệu sinh tồn và tình trạng của người bệnh A.',
  },

  {
    id: 219,
    question: 'NB ngưng tim nhưng máy sốc điện đang bảo trì, điều dưỡng cần:',
    answer: 'Đáp án C: Tiến hành hồi sinh tim phổi (CPR) ngay và báo bác sĩ, đồng thời gọi hỗ trợ từ khu vực khác có máy sốc điện',
  },

  {
    id: 220,
    question: 'NB khó thở, bình oxy trong phòng đã hết. Điều dưỡng cần:',
    answer: 'Đáp án A: Ngay lập tức chuyển bệnh nhân đến phòng cấp cứu khác có oxy, duy trì theo dõi các dấu hiệu sinh tồn và hỗ trợ hô hấp bằng cách khác cho đến khi có oxy.',
  },

  {
    id: 221,
    question: 'Biến chứng khi dùng oxy nồng độ cao kéo dài ở BN COPD:',
    answer: 'Đáp án A: Giảm thông khí do mất kích thích hô hấp',
  },

  {
    id: 222,
    question: 'Dấu hiệu nào cần báo bác sĩ ngay khi chăm sóc BN suy hô hấp:',
    answer: 'Đáp án B: SpO2 giảm dưới 90%',
  },

  {
    id: 223,
    question: 'BN suy hô hấp cấp đặt NKQ, thở máy, SpO2 giảm, lồng ngực không di động đều. Điều dưỡng cần:',
    answer: 'Đáp án C: Kiểm tra vị trí ống NKQ và khả năng tắc nghẽn',
  },

  {
    id: 224,
    question: 'Tai biến truyền máu nguy hiểm và xảy ra sớm nhất là:',
    answer: 'Đáp án B: Phản ứng tán huyết cấp do bất đồng nhóm máu',
  },

  {
    id: 225,
    question: 'Thời gian tối đa để truyền 1 đơn vị máu:',
    answer: 'Đáp án C: 4 giờ',
  },

  {
    id: 226,
    question: 'Lưu ý khi truyền khối tiểu cầu:',
    answer: 'Đáp án D: Không dùng cùng dây truyền với khối hồng cầu',
  },

  {
    id: 227,
    question: 'Sau khi xử trí phản vệ, NB cần theo dõi tối thiểu:',
    answer: 'Đáp án D: 24 giờ',
  },

  {
    id: 228,
    question: 'Dấu hiệu ngừng tuần hoàn:',
    answer: 'Đáp án C: Mất ý thức đột ngột, ngừng thở, không bắt được mạch cảnh mạch bẹn.',
  },

  {
    id: 229,
    question: 'Thời gian lý tưởng để bắt đầu ép tim:',
    answer: 'Đáp án C: Trong vòng 10 giây',
  },

  {
    id: 230,
    question: 'Đường dùng an toàn nhất để bổ sung Kali:',
    answer: 'Đáp án C: Truyền tĩnh mạch chậm',
  },

  {
    id: 231,
    question: 'Biến chứng nguy hiểm nhất khi truyền Kali nhanh:',
    answer: 'Đáp án C: Loạn nhịp tim hoặc ngừng tim',
  },

  {
    id: 232,
    question: 'BN có biểu hiện ngứa ran, tức ngực khi truyền Kali:',
    answer: 'Đáp án A: Ngừng truyền, báo bác sĩ ngay',
  },

  {
    id: 233,
    question: 'Kali không nên phối hợp trong cùng dây truyền với:',
    answer: 'Đáp án B: Natri bicarbonat',
  },

  {
    id: 234,
    question: 'Lưu ý đầu tiên khi tiêm thuốc an thần:',
    answer: 'Đáp án C: Chuẩn bị tư thế an toàn, theo dõi sát DHST, spO2 sau tiêm',
  },

  {
    id: 235,
    question: 'Đường dùng thường dùng nhất của thuốc an thần trong cấp cứu:',
    answer: 'Đáp án B: Tiêm bắp',
  },

  {
    id: 236,
    question: 'Tốc độ tiêm Diazepam tĩnh mạch:',
    answer: 'Đáp án B: 1 ml/phút',
  },

  {
    id: 237,
    question: 'Mục đích định nhóm máu tại giường:',
    answer: 'Đáp án C: Tránh truyền nhầm đơn vị máu cho người bệnh',
  },

  {
    id: 238,
    question: 'Mục đích đảm bảo an toàn truyền máu:',
    answer: 'Đáp án C: Đảm bảo an toàn người cho máu, người nhận máu và nhân viên y tế',
  },

  {
    id: 239,
    question: 'Thời gian tối đa đặt garô trước khi chọc kim:',
    answer: 'Đáp án A: 1 phút',
  },

  {
    id: 240,
    question: 'Nhiệt độ bảo quản máu toàn phần và khối hồng cầu:',
    answer: 'Đáp án A: Từ 0°C đến 6°C',
  },

  {
    id: 241,
    question: 'Nguyên tắc truyền máu đúng:',
    answer: 'Đáp án B: Chỉ định truyền máu khi không còn liệu pháp điều trị thay thế khác hoặc các liệu pháp điều trị thay thế không hiệu quả.',
  },

  {
    id: 242,
    question: 'Nhóm máu có thể truyền khối hồng cầu cho người nhóm O:',
    answer: 'Đáp án D: Nhóm máu O',
  },

  {
    id: 243,
    question: 'Dấu hiệu cần theo dõi trong truyền máu:',
    answer: 'Đáp án B: Sốt, rét run, khó thở',
  },

  {
    id: 244,
    question: 'Loại dây truyền dùng khi truyền máu:',
    answer: 'Đáp án B: Dây truyền có bầu lọc',
  },

  {
    id: 245,
    question: 'Thông tin điều dưỡng cần thu thập trước khi dùng thuốc:',
    answer: 'Đáp án E: Cả A, B, C đúng',
  },

  {
    id: 246,
    question: 'Biện pháp đảm bảo an toàn khi dùng thuốc:',
    answer: 'Đáp án E: Cả A, B và C',
  },

  {
    id: 247,
    question: 'Xử trí khi người bệnh có triệu chứng sốc phản vệ sau dùng thuốc:',
    answer: 'Đáp án B: Tiêm ngay adrenalin (ống 1ml) tiêm bắp, sau đó gọi bác sĩ.',
  },

  {
    id: 248,
    question: 'Cách giải thích phù hợp khi người nhà thắc mắc việc nhịn ăn ở NB viêm tụy cấp:',
    answer: 'Đáp án B: "NB nhịn ăn là để cho tuyến tụy của chồng bác được nghỉ ngơi hoàn toàn để nó có thể hồi phục được, BS đã cho nuôi dưỡng bằng đường tĩnh mạch nên bác yên tâm."',
  },

  {
    id: 249,
    question: 'Tiêm nhũ tương và thuốc dạng dầu qua đường tĩnh mạch gây:',
    answer: 'Đáp án D: Cả A, B, C đúng',
  },

{
  id: 250,
  question: 'Tình huống Người nhà của một người bệnh nam, 70 tuổi, đang nằm viện vì suy tim sung huyết, lo lắng khi thấy điều dưỡng thường xuyên theo dõi lượng nước tiểu của người bệnh và hỏi: "Tại sao các cô cứ phải đo nước tiểu của bác ấy nhiều lần vậy? Có vấn đề gì nghiêm trọng không?". Cách giải thích nào của điều dưỡng là phù hợp và chuyên nghiệp nhất trong tình huống này?',
  answer: 'Đáp án B: Người bệnh suy tim sung huyết phải được theo dõi chặt chẽ lượng nước tiểu để Bác sĩ làm căn cứ điều chỉnh thuốc lợi tiểu cho bác ấy, vì bệnh suy tim thường gây ứ dịch.',
},
  {
    id: 251,
    question: 'Nguyên tắc vô khuẩn trong truyền dịch an toàn là:',
    answer: 'Đáp án D: Tất cả A, B, C đều đúng.',
  },

  {
    id: 252,
    question: 'Lưu ý quan trọng nhất mỗi khi truyền dịch qua chạc ba lưu sẵn trên người bệnh là:',
    answer: 'Đáp án B: Kỹ thuật sát khuẩn cổng truyền.',
  },

  {
    id: 253,
    question: 'Trường hợp sau đây không khuyến cáo áp dụng sát khuẩn tay nhanh là:',
    answer: 'Đáp án D: Cả A, B, C đúng.',
  },

  {
    id: 254,
    question: 'Nguyên tắc xác định “Đúng người bệnh” thường được sử dụng mẫu câu hỏi khi khai thác thông tin danh tính NB là:',
    answer: 'Đáp án B: Câu hỏi mở.',
  },

  {
    id: 255,
    question: 'Thời gian tối thiểu cho một lần vệ sinh tay bằng dung dịch chứa cồn là:',
    answer: 'Đáp án C: 20 – 30 giây.',
  },

  {
    id: 256,
    question: 'Các biện pháp thực hiện tiêm an toàn KHÔNG bao gồm:',
    answer: 'Đáp án C: Sử dụng lọ thuốc đa liều cho nhiều người bệnh.',
  },

  {
    id: 257,
    question: 'Chiều dài catheter nằm trong long mạch được khuyến cáo trong liệu pháp trị liệu tĩnh mạch:',
    answer: 'Đáp án C: 2/3 chiều dài catheter phải nằm trong lòng mạch.',
  },

  {
    id: 258,
    question: 'Vị trí nên tránh đặt kim luồn tĩnh mạch ngoại vi ở người lớn:',
    answer: 'Đáp án C: Mặt trong của cổ tay.',
  },

  {
    id: 259,
    question: 'Số lần thất bại tối đa được khuyến cáo khi một nhân viên y tế đặt catheter tĩnh mạch ngoại vi:',
    answer: 'Đáp án B: 2 lần',
  },

  {
    id: 260,
    question: 'Thời gian được khuyến cáo thay dây truyền khi thực hiện truyền máu và chế phẩm máu:',
    answer: 'Đáp án B: Mỗi 4 giờ',
  },

  {
    id: 261,
    question: 'Để phòng ngừa nhiễm khuẩn, đối với đường truyền liên tục, thời gian khuyến cáo thay bộ dây truyền:',
    answer: 'Đáp án C: Không thường xuyên hơn mỗi 72 giờ',
  },

  {
    id: 262,
    question: 'Bước xử trí ngay lập tức khi nghi ngờ có biến chứng thoát mạch:',
    answer: 'Đáp án A: Dừng truyền ngay lập tức, giữ nguyên kim tiêm tại chỗ, khóa dây truyền dịch hoặc ấn tắt máy tiêm/máy truyền.',
  },

  {
    id: 263,
    question: 'Dung dịch được khuyến cáo sử dụng để thông tráng hoặc bơm đẩy thuốc sau khi tiêm truyền:',
    answer: 'Đáp án C: Natri Cloride 0,9%',
  },

  {
    id: 264,
    question: 'Thời gian thích hợp để thay dây truyền được sử dụng truyền cho dung dịch dinh dưỡng chứa lipid:',
    answer: 'Đáp án A: Sử dụng 12 giờ',
  },

  {
    id: 265,
    question: 'Để duy trì lưu thông của catheter Điều dưỡng nên thực hiện như sau:',
    answer: 'Đáp án B: Bơm tráng catheter bằng 3 - 5ml dung dịch Natri Cloride 0,9% mỗi 12 giờ và khi cần',
  },

  {
    id: 266,
    question: 'Sau khi sát khuẩn cổng tiêm thuốc của catheter tĩnh mạch ngoại vi, điều dưỡng cần:',
    answer: 'Đáp án C: Chờ vị trí sát khuẩn khô hoàn toàn từ 15 – 30 giây',
  },

  {
    id: 267,
    question: 'Thực hành tốt nhất để đánh giá viêm tĩnh mạch tại vị trí đặt catheter là:',
    answer: 'Đáp án E: B và D',
  },

  {
    id: 268,
    question: 'Đánh giá viêm tĩnh mạch sau khi truyền bằng thang đo nào:',
    answer: 'Đáp án B: Vipscore',
  },

  {
    id: 269,
    question: 'Sau khi tiêm truyền kháng sinh, người bệnh có triệu chứng đau nhẹ gần chỗ đặt kim luồn tĩnh mạch. Điều dưỡng cần làm gì:',
    answer: 'Đáp án D: Chườm ấm',
  },

  {
    id: 270,
    question: 'Tại vị trí đặt Catheter quan sát thấy đỏ, băng dính thấm máu. Nhận định NB:',
    answer: 'Đáp án B: Viêm tĩnh mạch độ 1',
  },

  {
    id: 271,
    question: 'Tại vị trí đặt Catheter quan sát thấy đau dọc theo vị trí đặt, tấy đỏ, sưng nề. Điều dưỡng cần làm gì:',
    answer: 'Đáp án D: Báo bác sĩ và gọi đồng nghiệp hỗ trợ',
  },

  {
    id: 272,
    question: 'Tại vị trí đặt Catheter có triệu chứng: Đau tại vị trí kim luồn, sưng nề, tấy đỏ. Nhận định NB viêm tĩnh mạch độ mấy:',
    answer: 'Đáp án B: Độ 3',
  },

  {
    id: 273,
    question: 'Hành động nào sau đây không phù hợp với quy trình tiêm thuốc an toàn và có thể gây nguy hiểm cho người bệnh?',
    answer: 'Đáp án B: Chuẩn bị (pha, hút) thuốc đồng loạt cho nhiều người bệnh cùng lúc để tiết kiệm thời gian.',
  },

  {
    id: 274,
    question: 'Thời gian sát khuẩn da trong thực hiện tiêm truyền:',
    answer: 'Đáp án D: Cả A, B, C',
  },

  {
    id: 275,
    question: 'Những hành vi thiếu an toàn do cán bộ y tế không tuân thủ đúng quy trình, kỹ thuật tiêm là:',
    answer: 'Đáp án D: Tất cả các câu trên',
  },

  {
    id: 276,
    question: 'Kỹ thuật sát khuẩn da vùng tiêm truyền:',
    answer: 'Đáp án D: Tất cả đều đúng',
  },

  {
    id: 277,
    question: 'Người bệnh nữ, 35 tuổi, nhập viện cấp cứu do chấn thương bụng kín. Bác sĩ chỉ định truyền dịch và có thể truyền máu. Bạn là điều dưỡng tiếp nhận, nên chọn kim luồn nào?',
    answer: 'Đáp án C: Kim luồn tĩnh mạch 18G, tĩnh mạch cẳng tay (vùng gần khuỷu tay).',
  },

  {
    id: 278,
    question: 'Nam 60 tuổi, viêm phổi nặng, tĩnh mạch cẳng tay đã xơ cứng. Chọn vị trí kim luồn?',
    answer: 'Đáp án B: Tĩnh mạch hiển lớn ở cổ chân phải, kim cỡ 20G, cố định cẩn thận.',
  },

  {
    id: 279,
    question: 'Nữ 70 tuổi, suy tim sung huyết, tĩnh mạch nông nhỏ. Chọn kim luồn?',
    answer: 'Đáp án C: Kim luồn tĩnh mạch 22G hoặc 24G, cẳng tay hoặc mu bàn tay.',
  },

  {
    id: 280,
    question: 'Quyết định 7482/QĐ-BYT của Bộ Y tế ban hành về vấn đề gì?',
    answer: 'Đáp án C: Bộ tiêu chí chất lượng đánh giá mức độ an toàn phẫu thuật',
  },

  {
    id: 281,
    question: 'Mục tiêu chính của bộ tiêu chí an toàn phẫu thuật là gì?',
    answer: 'Đáp án B: Giảm nguy cơ mất an toàn và biến chứng trong và sau phẫu thuật.',
  },

  {
    id: 282,
    question: 'Biện pháp nào sau đây giúp ngăn ngừa nhiễm trùng vết mổ?',
    answer: 'Đáp án C: Tuân thủ nghiêm ngặt quy trình vệ sinh tay và kỹ thuật vô khuẩn.',
  },

  {
    id: 283,
    question: 'Biến chứng có thể xảy ra sớm sau phẫu thuật cần được phát hiện kịp thời?',
    answer: 'Đáp án C: Chảy máu sau mổ.',
  },

  {
    id: 284,
    question: 'Mục tiêu chính của bảng kiểm an toàn phẫu thuật của WHO?',
    answer: 'Đáp án C: Giảm thiểu các sự cố và biến chứng trong phẫu thuật.',
  },

  {
    id: 285,
    question: '“Time out” trong phẫu thuật được thực hiện vào thời điểm nào?',
    answer: 'Đáp án B: Ngay trước khi rạch da.',
  },

  {
    id: 286,
    question: 'Để phòng ngừa bỏ quên dụng cụ trong cơ thể người bệnh, điều dưỡng cần?',
    answer: 'Đáp án C: Đếm và đối chiếu số lượng dụng cụ trước, trong và sau phẫu thuật.',
  },

  {
    id: 287,
    question: 'Quan trọng nhất khi chăm sóc NB bó bột, ĐD cần khuyên NB?',
    answer: 'Đáp án A: Kê cao chi bó bột.',
  },

  {
    id: 288,
    question: 'Tại khu vực ngoài buồng phẫu thuật, tần suất vệ sinh sàn, đồ dùng tiếp xúc với NB là?',
    answer: 'Đáp án C: Tối thiểu 2 lần/ngày và ngay khi dây bẩn',
  },

  {
    id: 289,
    question: 'Khu vực vô khuẩn trong khoa Gây mê Hồi sức gồm?',
    answer: 'Đáp án C: Buồng phẫu thuật, nơi chuẩn bị người bệnh, buồng hậu phẫu',
  },

  {
    id: 290,
    question: 'Hình bên là biểu tượng?',
    answer: 'Đáp án D: Chất thải phóng xạ',
  },

  {
    id: 291,
    question: 'Hình bên là biểu tượng?',
    answer: 'Đáp án B: Chất thải lây nhiễm',
  },

  {
    id: 292,
    question: 'Chất thải sau đây được phân loại?',
    answer: 'Đáp án A: Chất thải có nguy cơ lây nhiễm cao',
  },

  {
    id: 293,
    question: 'Khi bị bắn máu vào mắt nhân viên y tế cần phải?',
    answer: 'Đáp án A: Rửa mắt bằng nước cất hoặc nước muối NaCl 0,9% liên tục trong 5 phút.',
  },

  {
    id: 294,
    question: 'Biện pháp TỐT NHẤT để giảm thiểu sự cố y khoa?',
    answer: 'Đáp án A: Báo cáo sự cố tự nguyện, giám sát chủ động lỗi tiềm ẩn và sự cố, phân tích nguyên nhân và đề xuất giải pháp cải tiến.',
  },

  {
    id: 295,
    question: 'Quy trình chống nhầm lẫn người bệnh được thực hiện trong?',
    answer: 'Đáp án D: Tất cả đúng.',
  },

  {
    id: 296,
    question: 'Để đảm bảo an toàn khi sử dụng thuốc, phải tuân thủ?',
    answer: 'Đáp án D: Quy trình 5 đúng.',
  },

  {
    id: 297,
    question: 'Theo Thông tư 43/2018/TT-BYT, sự cố y khoa được hiểu là?',
    answer: 'Đáp án B: Tình huống không mong muốn xảy ra trong quá trình chẩn đoán, chăm sóc và điều trị.',
  },

  {
    id: 298,
    question: 'Tình huống nào là "tình huống có nguy cơ gây ra sự cố" (near-miss)?',
    answer: 'Đáp án C: Tình huống đã xảy ra nhưng chưa gây hậu quả hoặc được ngăn chặn kịp thời.',
  },

  {
    id: 299,
    question: 'Khi phát hiện sự cố y khoa, nhân viên y tế cần?',
    answer: 'Đáp án B: Nhận diện và phân biệt sự cố, báo cáo theo quy định.',
  },

  {
    id: 300,
    question: 'Để giảm nguy cơ ngã ở người bệnh nội trú, điều dưỡng cần?',
    answer: 'Đáp án B: Sử dụng giường có thành chắn, hướng dẫn sử dụng chuông báo, đánh giá nguy cơ ngã và lập kế hoạch chăm sóc.',
  },
    // Thêm các câu hỏi P3 khác vào đây...
  ],

  P4: [
    // Dán dữ liệu P4 vào đây
       {
    id: 301,
    question: 'Giải pháp nào sau đây giúp cải thiện giao tiếp giữa nhân viên y tế và người bệnh, từ đó nâng cao an toàn người bệnh?',
    answer: 'Đáp án đúng: C. Lắng nghe tích cực, giải thích rõ ràng, sử dụng ngôn ngữ dễ hiểu và khuyến khích người bệnh đặt câu hỏi.',
  },

  {
    id: 302,
    question: 'Phương tiện rửa tay gồm:',
    answer: 'Đáp án đúng: D. Phương tiện sát khuẩn tay, khăn lau tay dùng một lần, hóa chất rửa tay',
  },

  {
    id: 303,
    question: 'Theo phân loại Spaulding, những dụng cụ được sử dụng để đưa vào mô, tổ chức dưới da, mạch máu và khoang vô khuẩn được xếp vào nhóm:',
    answer: 'Đáp án đúng: A. Dụng cụ phải tiệt khuẩn',
  },

  {
    id: 304,
    question: 'Lượng dung dịch vệ sinh tay cho mỗi lần rửa tay thường quy là:',
    answer: 'Đáp án đúng: A. Lấy đủ 3ml – 5ml',
  },

  {
    id: 305,
    question: 'Chất thải lây nhiễm không sắc nhọn bao gồm:',
    answer: 'Đáp án đúng: D. Tất cả đều đúng',
  },

  {
    id: 306,
    question: 'Thông tư số 20/2021/-BYT quy định Màu sắc của bao bì chứa chất thải y tế:',
    answer: 'Đáp án đúng: B. Màu vàng đựng chất thải lây nhiễm',
  },

  {
    id: 307,
    question: 'Thông tư 20/2021/TT-BYT quy định phân loại chất thải y tế:',
    answer: 'Đáp án đúng: C. Chất thải giải phẫu: đựng trong 2 lần túi có màu vàng',
  },

  {
    id: 308,
    question: 'Thông tư số 20/2021/TT- BYT quy định chất thải nguy hại bao gồm:',
    answer: 'Đáp án đúng: D. Chất thải lây nhiễm sắc nhọn, chất thải lây nhiễm không sắc nhọn, chất thải nguy hại không lây nhiễm',
  },

  {
    id: 309,
    question: 'Thông tư số 20/2021/TT- BYT quy định, hệ thống mã màu đựng chất thải có nguy cơ lây nhiễm cao là:',
    answer: 'Đáp án đúng: A. Màu đỏ',
  },

  {
    id: 310,
    question: 'Thực hành nào dưới đây không thực sự bắt buộc:',
    answer: 'Đáp án đúng: D. Mang găng khi tiêm bắp, tiêm dưới da',
  },

  {
    id: 311,
    question: 'Những hành vi thiếu an toàn cho người nhận mũi tiêm do cán bộ y tế không tuân thủ đúng quy trình, kỹ thuật tiêm là:',
    answer: 'Đáp án đúng: D. Cả A, B và dùng tay để tháo bơm kim tiêm, bẻ cong kim tiêm, đậy nắp kim sau khi tiêm',
  },

  {
    id: 312,
    question: 'Thời gian lưu giữ chất thải trong các cơ sở y tế là:',
    answer: 'Đáp án đúng: B. Không quá 24 giờ',
  },

  {
    id: 313,
    question: 'Căn nguyên gây NKBV là:',
    answer: 'Đáp án đúng: D. Vi sinh vật gây NKBV có thể vi khuẩn, vi rút, nấm, ký sinh trùng',
  },

  {
    id: 314,
    question: 'Dây máy hút, lọ đựng chất dịch của máy hút,... khi thay ra phải rửa sạch bằng xà phòng rồi ngâm vào dung dịch:',
    answer: 'Đáp án đúng: B. Javen',
  },

  {
    id: 315,
    question: 'Dây máy hút,... phải được thay:',
    answer: 'Đáp án đúng: B. Hàng ngày',
  },

  {
    id: 316,
    question: 'Nhiễm khuẩn bệnh viện là nhiễm khuẩn xảy ra sau nhập viện:',
    answer: 'Đáp án đúng: C. 48 giờ',
  },

  {
    id: 317,
    question: 'Để ngăn ngừa các virus lây bệnh qua đường máu,... cần chú trọng hoạt động nào nhất:',
    answer: 'Đáp án đúng: D. Tất cả các câu trên đều đúng',
  },

  {
    id: 318,
    question: 'Những thực hành nào dưới đây thuộc ứng dụng phòng ngừa chuẩn:',
    answer: 'Đáp án đúng: D. Tất cả đều đúng',
  },

  {
    id: 319,
    question: 'Sau khi bị kim từ bệnh nhân có HIV đâm, nhân viên y tế cần phải làm gì:',
    answer: 'Đáp án đúng: D. Rửa vết thương, báo cáo ngay lên khoa KSNK để lãnh thuốc uống dự phòng ngay và làm xét nghiệm theo dõi',
  },

  {
    id: 320,
    question: 'Phòng ngừa chuẩn được áp dụng cho các nhóm người bệnh:',
    answer: 'Đáp án đúng: D. Phòng ngừa chuẩn áp dụng cho mọi người bệnh, không phụ thuộc vào người đó có mắc bệnh nhiễm trùng hay không',
  },

  {
    id: 320,
    question: 'Phòng ngừa chuẩn được áp dụng cho các nhóm người bệnh',
    answer: 'Đáp án đúng: D. Phòng ngừa chuẩn áp dụng cho mọi người bệnh, không phụ thuộc vào người đó có mắc bệnh nhiễm trùng hay không',
  },

  {
    id: 321,
    question: 'Mục đích mang khẩu trang là gì?',
    answer: 'Đáp án đúng: A. Ngăn chặn tác nhân lây truyền qua đường không khí',
  },

  {
    id: 322,
    question: 'Biện pháp phòng ngừa tác nhân gây bệnh cho cộng đồng:',
    answer: 'Đáp án đúng: C. Bỏ kim tiêm đã sử dụng vào hộp kháng thủng đựng vật sắc nhọn và không sử dụng lại bơm/kim tiêm, không mua bán hay trao đổi bơm kim tiêm đã sử dụng',
  },

  {
    id: 323,
    question: 'Dụng cụ sau khi sử dụng cần phải:',
    answer: 'Đáp án đúng: A. Xử lý ban đầu tại các khoa trước khi gửi Đơn vị Tiệt khuẩn Trung tâm để xử lý tiếp tục',
  },

  {
    id: 324,
    question: 'Làm sạch là quá trình:',
    answer: 'Đáp án đúng: D. Tất cả đều đúng',
  },

  {
    id: 325,
    question: 'Khử khuẩn được định nghĩa là quá trình:',
    answer: 'Đáp án đúng: B. Loại bỏ hầu hết hoặc tất cả các vi khuẩn gây bệnh trừ nha bào',
  },

  {
    id: 326,
    question: 'Tiệt khuẩn là quá trình:',
    answer: 'Đáp án đúng: B. Tiêu diệt hầu hết các bào tử và vi khuẩn gây bệnh',
  },

  {
    id: 327,
    question: 'Dụng cụ cần hấp tiệt khuẩn:',
    answer: 'Đáp án đúng: D. Tất cả đều đúng',
  },

  {
    id: 328,
    question: 'Định nghĩa về nhiễm khuẩn bệnh viện nào sau đây là KHÔNG đúng:',
    answer: 'Đáp án đúng: A. Là những nhiễm khuẩn xuất hiện sau 24 giờ nằm viện và do các vi khuẩn đa kháng thuốc',
  },

  {
    id: 329,
    question: 'Chăm sóc vết mổ sau phẫu thuật:',
    answer: 'Đáp án đúng: A. Giữ băng vết mổ bằng gạc vô khuẩn băng ngay sau mổ đến 48 giờ sau mổ. Chỉ thay băng khi băng thấm máu/dịch, băng bị nhiễm bẩn hoặc khi mở kiểm tra vết mổ',
  },

  {
    id: 330,
    question: 'Nước đổ vào bình làm ẩm phải là nước:',
    answer: 'Đáp án đúng: C. Nước tiệt khuẩn',
  },

  {
    id: 331,
    question: 'Khi ho, hắt hơi, biện pháp phòng ngừa lây nhiễm:',
    answer: 'Đáp án đúng: A. Che mũi miệng bằng khăn giấy hoặc khuỷu tay, rửa tay ngay sau đó',
  },

  {
    id: 332,
    question: 'Mục đích chính của xét nghiệm công thức máu là gì?',
    answer: 'Đáp án đúng: B. Đánh giá số lượng và đặc điểm của các tế bào máu',
  },

  {
    id: 333,
    question: 'Xét nghiệm cần thực hiện tại giường trước khi truyền khối tiểu cầu cho bệnh nhân:',
    answer: 'Đáp án đúng: D. Xác định nhóm máu hệ ABO của bệnh nhân bằng 2 phương pháp',
  },

  {
    id: 334,
    question: 'Thứ tự lấy máu vào các loại ống nghiệm (nếu lấy nhiều ống) nào sau đây là đúng?',
    answer: 'Đáp án đúng: A. Cấy máu - Ống không chất chống đông - Ống đông máu - Ống chống đông',
  },

  {
    id: 335,
    question: 'Vị trí lấy máu tĩnh mạch phổ biến nhất là:',
    answer: 'Đáp án đúng: B. Tĩnh mạch khuỷu tay',
  },

  {
    id: 336,
    question: 'Điều dưỡng cần làm gì để tránh gây vỡ hồng cầu khi lấy máu?',
    answer: 'Đáp án đúng: D. Chọn kim có cỡ nòng phù hợp và thao tác nhẹ nhàng',
  },

  {
    id: 337,
    question: 'Khi lấy máu xét nghiệm đông máu, tỉ lệ máu và chất chống đông trong ống nghiệm phải:',
    answer: 'Đáp án đúng: C. Đúng tỉ lệ quy định',
  },

  {
    id: 338,
    question: 'Xét nghiệm nào sau đây thường dùng máu mao mạch?',
    answer: 'Đáp án đúng: C. Đường huyết',
  },

  {
    id: 339,
    question: 'Xét nghiệm nào sau đây dùng để đánh giá chức năng đông máu?',
    answer: 'Đáp án đúng: C. PT, APTT',
  },

  {
    id: 340,
    question: 'Xét nghiệm nước tiểu tổng phân tích (TTPT) giúp phát hiện:',
    answer: 'Đáp án đúng: B. Các bệnh lý về đường tiết niệu',
  },

  {
    id: 341,
    question: 'Xét nghiệm nào sau đây giúp phát hiện tình trạng thiếu máu?',
    answer: 'Đáp án đúng: B. Nồng độ hemoglobin',
  },

  {
    id: 342,
    question: 'Sai sót nào sau đây có thể dẫn đến kết quả xét nghiệm sai?',
    answer: 'Đáp án đúng: D. Tất cả các đáp án trên',
  },

  {
    id: 343,
    question: 'Nguyên tắc nào sau đây là quan trọng nhất để đảm bảo an toàn cho người bệnh và nhân viên y tế khi lấy mẫu?',
    answer: 'Đáp án đúng: B. Chính xác và vô khuẩn',
  },

  {
    id: 344,
    question: 'Chỉ số Hemoglobin (Hb) bình thường ở nữ giới là:',
    answer: 'Đáp án đúng: B. 120 - 150 g/L',
  },

  {
    id: 345,
    question: 'Số lượng bạch cầu (WBC) tăng cao thường gặp trong trường hợp nào?',
    answer: 'Đáp án đúng: B. Nhiễm trùng',
  },

  {
    id: 346,
    question: 'Chỉ số Glucose máu bình thường lúc đói là:',
    answer: 'Đáp án đúng: A. 3.9 – 6,4 mmol/L',
  },

  {
    id: 347,
    question: 'Chỉ số Creatinin máu tăng cao thường gặp trong bệnh lý nào?',
    answer: 'Đáp án đúng: B. Suy thận',
  },

  {
    id: 348,
    question: 'CRP (C-reactive protein) tăng cao cho thấy điều gì?',
    answer: 'Đáp án đúng: B. Tình trạng viêm cấp tính',
  },

  {
    id: 349,
    question: 'TSH (Thyroid-stimulating hormone) tăng cao gợi ý bệnh lý nào?',
    answer: 'Đáp án đúng: B. Suy giáp',
  },

  {
    id: 350,
    question: 'Bilirubin toàn phần tăng cao gây ra triệu chứng lâm sàng nào?',
    answer: 'Đáp án đúng: B. Vàng da',
  },

  {
    id: 351,
    question: 'Xét nghiệm Amylase máu tăng cao thường gặp trong bệnh cảnh nào?',
    answer: 'Đáp án đúng: A. Viêm tụy cấp',
  },

  {
    id: 352,
    question: 'Tình huống: Tại khoa Nội. Bác sĩ chỉ định xét nghiệm máu lúc 8h sáng. Điều dưỡng đã lấy máu ngay lúc 8h15, sau đó đi tiêm cho 10 NB đến 11h xong, 11h30 đ d mới phát hiện mẫu máu vẫn chưa được gửi đến khoa xét nghiệm. Điều dưỡng cần thực hiện hành động nào sau đây?',
    answer: 'Đáp án đúng: C. Hủy mẫu máu cũ, báo cáo với bác sĩ và xin chỉ định lấy lại mẫu mới',
  },

  {
    id: 353,
    question: 'Điều dưỡng cần hướng dẫn người bệnh như thế nào trước khi lấy máu xét nghiệm đường huyết đói?',
    answer: 'Đáp án đúng: B. Nhịn ăn ít nhất 8 giờ trước khi lấy máu',
  },

  {
    id: 354,
    question: 'Mẫu bệnh phẩm nào sau đây cần được bảo quản lạnh sau khi lấy?',
    answer: 'Đáp án đúng: C. Khí máu động mạch',
  },

  {
    id: 355,
    question: 'Bệnh viện đa khoa Hà Đông là bệnh viện',
    answer: 'Đáp án đúng: C. Hạng 1, cấp cơ bản',
  },

  {
    id: 356,
    question: 'Tổng số điều dưỡng , hộ sinh, kỹ thuật y trong toàn bệnh viện',
    answer: 'Đáp án đúng: D. 450-500',
  },

  {
    id: 357,
    question: 'Bệnh viện có tổng số bao nhiêu khoa phòng và đơn nguyên',
    answer: 'Đáp án đúng: B. 45',
  },

  {
    id: 358,
    question: 'Ngày Quốc tế Điều dưỡng được tổ chức vào ngày nào hằng năm',
    answer: 'Đáp án đúng: A. 12/5',
  },

  {
    id: 359,
    question: 'Ngày Điều dưỡng Việt Nam chính thức được công nhận tổ chức kỷ niệm vào ngày nào?',
    answer: 'Đáp án đúng: B. Ngày 26/10',
  },

  {
    id: 360,
    question: 'Ai hiện đang là Chủ tịch Hiệp Hội Điều dưỡng Việt Nam?',
    answer: 'Đáp án đúng: B. ThS. Phạm Đức Mục',
  },

  {
    id: 361,
    question: 'Hội Điều dưỡng Việt Nam có tên gọi chính thức là gì?',
    answer: 'Đáp án đúng: D. Hội Khoa học Điều dưỡng Việt Nam',
  },

  {
    id: 362,
    question: 'Ai hiện đang là Chủ tịch Hội Điều dưỡng Hà Nội?',
    answer: 'Đáp án đúng: C. ThS. Tưởng Thúy Hằng',
  },

  {
    id: 363,
    question: 'Ngày Quốc tế Điều dưỡng nhằm kỷ niệm sự kiện gì?',
    answer: 'Đáp án đúng: B. Ngày sinh của Florence Nightingale',
  },

  {
    id: 364,
    question: 'Ngày 27/2 ở Việt Nam gắn liền với sự kiện nào liên quan đến ngành Y tế, trong đó có Điều dưỡng?',
    answer: 'Đáp án đúng: B. Ngày Thầy thuốc Việt Nam',
  },

  {
    id: 365,
    question: 'Ai là người sáng lập nền Điều dưỡng hiện đại, được tôn vinh trong Ngày Quốc tế Điều dưỡng?',
    answer: 'Đáp án đúng: B. Florence Nightingale',
  },

  {
    id: 366,
    question: 'Tại Việt Nam, Hội Điều dưỡng Việt Nam chính thức được thành lập vào năm nào?',
    answer: 'Đáp án đúng: C. 1990',
  },

  {
    id: 367,
    question: 'Ngày Sức khỏe Thế giới (World Health Day) diễn ra vào ngày nào, liên quan đến chăm sóc sức khỏe cộng đồng, trong đó có vai trò của Điều dưỡng?',
    answer: 'Đáp án đúng: B. 7/4',
  },

  {
    id: 368,
    question: 'Chủ đề Ngày Quốc tế Điều dưỡng năm 2025 do Hội đồng Điều dưỡng Quốc tế (ICN) dự kiến lựa chọn sẽ tập trung vào lĩnh vực nào?',
    answer: 'Đáp án đúng: C. Đầu tư cho lực lượng điều dưỡng',
  },

  {
    id: 369,
    question: 'Mục đích của ngày Điều dưỡng Việt Nam là gì?',
    answer: 'Đáp án đúng: B. Kỷ niệm ngày thành lập Hội Điều dưỡng Việt Nam và tôn vinh vai trò người điều dưỡng',
  },

  {
    id: 370,
    question: '"Slogan hiện tại của Bệnh viện ĐK Hà Đông là gì?"',
    answer: 'Đáp án đúng: D. “Sự hài lòng của NB là uy tín của chúng tôi”',
  },

  {
    id: 371,
    question: 'Điều dưỡng cần làm gì để thể hiện tinh thần của slogan \'Chăm sóc tận tâm, phục vụ chuyên nghiệp\' trong công việc hàng ngày?',
    answer: 'Đáp án đúng: B. Lắng nghe và thấu hiểu nhu cầu của người bệnh',
  },

  {
    id: 372,
    question: 'Người bệnh điều trị nội trú cần tuân thủ về trang phục như sau',
    answer: 'Đáp án đúng: C. Người bệnh mặc đủ cả quần và áo',
  },

  {
    id: 373,
    question: 'Quy định giờ thăm người bệnh khu vực nội trú',
    answer: 'Đáp án đúng: D. B và C',
  },

  {
    id: 374,
    question: 'Mục đích của công tác đi buồng của điều dưỡng',
    answer: 'Đáp án đúng: E. Tất cả đáp án trên',
  },

  {
    id: 375,
    question: 'Nhiệm vụ đi buồng để nhắc nhở NB , NNNB tuân thủ nội quy, phối hợp chăm sóc điều trị',
    answer: 'Đáp án đúng: D. Tất cả NVYT trong khoa',
  },

  {
    id: 376,
    question: 'Trong khi đỡ rau nếu màng rau chưa bong hết thì:',
    answer: 'Đáp án đúng: B. Cho tay vào buồng tử cung lấy nốt phần còn lại.',
  },

  {
    id: 377,
    question: 'Thời điểm tốt nhất để khâu tầng sinh môn',
    answer: 'Đáp án đúng: D. Sau khi đã loại trừ sót rau và chấn thương cổ tử cung, âm đạo',
  },

  {
    id: 378,
    question: 'Dấu hiệu chính để chẩn đoán chuyển dạ?',
    answer: 'Đáp án đúng: A. Cổ tử cung mở 2cm',
  },

  {
    id: 379,
    question: 'Dấu hiệu đặc biệt nhất để chẩn đoán đờ tử cung sau đẻ?',
    answer: 'Đáp án đúng: C. Tử cung không có khối cầu an toàn',
  },

  {
    id: 380,
    question: 'Dấu hiệu đặc biệt nhất để chẩn đoán sót rau?',
    answer: 'Đáp án đúng: D. Kiểm tra bánh rau thấy thiếu múi rau',
  },

  {
    id: 380,
    question: 'Dấu hiệu đặc biệt nhất để chẩn đoán sót rau?',
    answer: 'D. Kiểm tra bánh rau thấy thiếu múi rau',
  },

  {
    id: 381,
    question: 'Tần suất theo dõi tim thai trong pha tích cực là?',
    answer: 'A. 15 phút / lần',
  },

  {
    id: 382,
    question: 'Dấu hiệu chính của tiền sản giật?',
    answer: 'D. Cả 3 đáp án trên',
  },

  {
    id: 383,
    question: 'Gọi là sảy thai sớm khi thai bị sảy trước tuần lễ thứ mấy?',
    answer: 'C. 12',
  },

  {
    id: 384,
    question: 'Sảy thai là thai bị tống ra ngoài khỏi buồng tử cung khi tuổi thai?',
    answer: 'C. Trước 22 tuần',
  },

  {
    id: 385,
    question: 'Sau bao lâu mà rau không bong thì phải tiến hành bóc rau?',
    answer: 'A. Trên 15 phút',
  },

  {
    id: 386,
    question: 'Dấu hiệu tiên lượng một cuộc đẻ khó khăn?',
    answer: 'C. Khi cổ tử cung mở 6 cm, đầu thai nhi có bướu huyết thanh',
  },

  {
    id: 387,
    question: 'Biểu hiện nào sau đây thường gặp ở trẻ sơ sinh bị viêm phổi?',
    answer: 'A. Thở nhanh, rút lõm lồng ngực',
  },

  {
    id: 388,
    question: 'Khi chăm sóc trẻ sơ sinh non tháng, điều dưỡng viên cần chú ý điều gì nhất?',
    answer: 'D. Tất cả các đáp án trên',
  },

  {
    id: 389,
    question: 'Khi trẻ đột ngột tím tái trong khi phun khí dung, điều dưỡng viên cần làm gì?',
    answer: 'A. Ngừng ngay khí dung, cho thở O₂, hút đàm và báo bác sĩ',
  },

  {
    id: 390,
    question: 'Dấu hiệu sớm nhất của viêm phổi ở trẻ em là?',
    answer: 'B. Thở nhanh',
  },

  {
    id: 391,
    question: 'Mức độ thở nhanh ở trẻ từ 2 tháng đến 12 tháng tuổi là bao nhiêu?',
    answer: 'B. ≥50 lần/phút',
  },

  {
    id: 392,
    question: 'Dấu hiệu mất nước nhẹ ở trẻ là:',
    answer: 'A. Mắt trũng, khát nước',
  },

  {
    id: 393,
    question: 'Khi trẻ bị co giật do sốt cao, điều dưỡng cần làm gì đầu tiên?',
    answer: 'C. Đặt trẻ nằm nghiêng, theo dõi hô hấp',
  },

  {
    id: 394,
    question: 'Thang điểm Humpty Dumpty (HDFS) được sử dụng để đánh giá yếu tố nào ở trẻ em?',
    answer: 'A. Nguy cơ té ngã',
  },

  {
    id: 395,
    question: 'Biểu hiện sớm nhất của bệnh sởi là gì?',
    answer: 'C. Đốm Koplik trong miệng',
  },

  {
    id: 396,
    question: 'Thời gian ủ bệnh của bệnh sởi là bao lâu?',
    answer: 'C. 10-14 ngày',
  },

  {
    id: 397,
    question: 'Sởi có thể lây nhiễm qua các dịch tiết nào?',
    answer: 'D. Dịch mũi',
  },

  {
    id: 398,
    question: 'Trong bệnh tay chân miệng, mụn nước thường xuất hiện ở đâu?',
    answer: 'D. Tay, chân và miệng',
  },

  {
    id: 399,
    question: 'Biến chứng nào có thể gặp trong bệnh tay chân miệng?',
    answer: 'A. Viêm não',
  },

  {
    id: 400,
    question: 'Viêm phổi ở trẻ em chủ yếu do tác nhân nào gây ra?',
    answer: 'D. Tất cả các nguyên nhân trên',
  },
    // Thêm các câu hỏi P4 khác vào đây...
  ],

  P5: [
    // Dán dữ liệu P5 vào đây
        {
    id: 401,
    question: 'Dấu hiệu lâm sàng quan trọng nhất trong viêm phổi ở trẻ em là gì?',
    answer: 'Đáp án đúng: B. Thở nhanh và khó thở',
  },

  {
    id: 402,
    question: 'Dấu hiệu nào cho thấy trẻ có thể bị viêm phổi nặng và cần cấp cứu ngay?',
    answer: 'Đáp án đúng: D. Tất cả các dấu hiệu trên',
  },

  {
    id: 403,
    question: 'Người bệnh bị tai nạn, máu phun thành tia đỏ tươi từ vết thương. Điều dưỡng nên:',
    answer: 'Đáp án đúng: A. Ép trực tiếp lên vết thương',
  },

  {
    id: 404,
    question: 'Trẻ em bị hóc, không nói được, mặt tím tái. Điều dưỡng cần thực hiện động tác:',
    answer: 'Đáp án đúng: C. Vỗ lưng và ấn bụng (Heimlich)',
  },

  {
    id: 405,
    question: 'Người bệnh bị bỏng nước sôi ở cẳng tay, điều dưỡng nên xử trí ban đầu:',
    answer: 'Đáp án đúng: C. Xối nước mát sạch lên vùng bỏng ít nhất 10–15 phút',
  },

  {
    id: 406,
    question: 'Bệnh nhân đái tháo đường, vã mồ hôi, run tay, mạch nhanh, khó nói – điều dưỡng nên:',
    answer: 'Đáp án đúng: C. Cho ăn kẹo/ngậm đường nhanh hấp thu',
  },

  {
    id: 407,
    question: 'Trong lúc tiêm, người bệnh lên cơn co giật. Điều dưỡng nên:',
    answer: 'Đáp án đúng: C. Đảm bảo an toàn, nghiêng đầu sang bên, theo dõi dấu hiệu sinh tồn',
  },

  {
    id: 408,
    question: 'Sau tiêm kháng sinh, người bệnh nổi mẩn đỏ, khó thở, tụt huyết áp. Điều dưỡng làm gì đầu tiên?',
    answer: 'Đáp án đúng: A. Cho nằm ngửa, tiêm Adrenlin tiêm bắp và gọi báo động đỏ',
  },

  {
    id: 409,
    question: 'Bệnh nhân gãy xương cẳng chân, đầu xương lòi ra ngoài da, còn chảy máu. Điều dưỡng cần:',
    answer: 'Đáp án đúng: C. Cầm máu, che phủ vết thương bằng gạc vô khuẩn, cố định xương',
  },

  {
    id: 410,
    question: 'Người bệnh bất ngờ ngưng thở, mạch không bắt được. Điều dưỡng nên xử trí:',
    answer: 'Đáp án đúng: B. Ép tim và thổi ngạt ngay theo quy trình hồi sức tim phổi',
  },

  {
    id: 411,
    question: 'Tình huống: Người bệnh hen lên cơn khó thở, co kéo cơ hô hấp. Điều dưỡng ưu tiên làm gì?',
    answer: 'Đáp án đúng: B. Hỗ trợ xịt thuốc giãn phế quản',
  },

  {
    id: 412,
    question: 'Tình huống: Người bệnh khó thở dữ dội, tím tái, bọt hồng ra miệng. Điều dưỡng cần làm gì đầu tiên?',
    answer: 'Đáp án đúng: A. Cho thở oxy, ngồi cao',
  },

  {
    id: 413,
    question: 'Tình huống: Người bệnh bị ngã, đau nhiều vùng cẳng chân, biến dạng rõ. Điều dưỡng xử trí ban đầu?',
    answer: 'Đáp án đúng: A. Cố định tạm bằng nẹp trước khi vận chuyển',
  },

  {
    id: 414,
    question: 'Tình huống: Bệnh nhân bị ngã, có vết thương đầu, đau đầu nhiều, buồn nôn. Điều dưỡng cần làm gì?',
    answer: 'Đáp án đúng: A. Cho nằm đầu cao, theo dõi dấu hiệu thần kinh',
  },

  {
    id: 415,
    question: 'Tình huống: Bệnh nhân bị tai nạn, đau vùng lưng dữ dội, không cử động được chân. Điều dưỡng cần làm gì?',
    answer: 'Đáp án đúng: A. Giữ tư thế cố định, không di chuyển bệnh nhân',
  },

  {
    id: 416,
    question: 'Tình huống: Người bệnh đái tháo đường đột nhiên run rẩy, vã mồ hôi, lú lẫn. Điều dưỡng nên làm gì?',
    answer: 'Đáp án đúng: A. Cho ăn kẹo hoặc uống nước đường',
  },

  {
    id: 417,
    question: 'Tình huống: Người bệnh bị điện giật, bất tỉnh. Điều dưỡng cần làm gì đầu tiên?',
    answer: 'Đáp án đúng: A. Cắt nguồn điện',
  },

  {
    id: 418,
    question: 'Tình huống: Người bệnh bị ngất sau khi làm việc dưới trời nắng gắt. Điều dưỡng làm gì?',
    answer: 'Đáp án đúng: A. Đưa vào nơi mát, bù nước',
  },

  {
    id: 419,
    question: 'Tai nạn giao thông, người bệnh bị chảy máu tai mũi, nghi ngờ chấn thương sọ não. Điều dưỡng cần:',
    answer: 'Đáp án đúng: C. Giữ nguyên tư thế, cố định cổ, theo dõi chặt chẽ',
  },

  {
    id: 420,
    question: 'Người bệnh bị chấn thương cột sống, đau nhiều, tê chân. Điều dưỡng nên:',
    answer: 'Đáp án đúng: B. Cố định cột sống, vận chuyển trên cáng cứng',
  },

  {
    id: 421,
    question: 'Bé 3 tuổi bị ngã, chảy máu mũi liên tục. Điều dưỡng làm gì?',
    answer: 'Đáp án đúng: B. Ngồi cúi nhẹ đầu, bóp cánh mũi 5–10 phút',
  },

  {
    id: 422,
    question: 'Sốc mất máu là khi:',
    answer: 'Đáp án đúng: B. Mạch nhanh, huyết áp tụt, da lạnh, vã mồ hôi',
  },

  {
    id: 423,
    question: 'Dấu hiệu sớm của sốc phản vệ:',
    answer: 'Đáp án đúng: B. Nổi ban, ngứa, khó thở',
  },

  {
    id: 424,
    question: 'Dấu hiệu sớm của tai biến mạch máu não:',
    answer: 'Đáp án đúng: B. Méo miệng, nói khó, yếu nửa người',
  },

  {
    id: 425,
    question: 'Người bệnh COPD đột ngột khó thở, tím tái, điều dưỡng cần:',
    answer: 'Đáp án đúng: B. Cho ngồi tư thế Fowler (nửa nằm nửa ngồi), thở oxy',
  },

  {
    id: 426,
    question: 'Người bệnh sốt cao 40°C, run lạnh, điều dưỡng nên:',
    answer: 'Đáp án đúng: B. Chườm mát, uống hạ sốt',
  },

  {
    id: 427,
    question: 'Người bệnh tiêu chảy nhiều, dấu hiệu mất nước:',
    answer: 'Đáp án đúng: A. Da khô, mắt trũng, mạch nhanh, huyết áp thấp',
  },

  {
    id: 428,
    question: 'Người bệnh uống nhầm hóa chất ăn mòn, điều dưỡng cần:',
    answer: 'Đáp án đúng: D. Cho nằm nghiêng',
  },

  {
    id: 429,
    question: 'Vết thương nhỏ nhưng chảy máu nhiều, điều dưỡng nên:',
    answer: 'Đáp án đúng: B. Rửa vết thương, băng ép',
  },

  {
    id: 430,
    question: 'Người bệnh tăng huyết áp, đau đầu nhiều, điều dưỡng nên:',
    answer: 'Đáp án đúng: A. Cho nằm nghỉ, đo huyết áp, báo bác sĩ',
  },

  {
    id: 431,
    question: 'Người bệnh nghi ngộ độc thuốc diệt cỏ Paraquat, điều dưỡng cần:',
    answer: 'Đáp án đúng: A. Gây nôn, than hoạt tính',
  },

  {
    id: 432,
    question: 'Người bệnh đau bụng dữ dội, sờ thấy phản ứng thành bụng, điều dưỡng nên:',
    answer: 'Đáp án đúng: C. Không cho ăn uống, theo dõi, báo bác sĩ',
  },

  {
    id: 433,
    question: 'Tai biến hay gặp nhất trong quá trình truyền dịch là:',
    answer: 'Đáp án đúng: C. Phù phổi cấp',
  },

  {
    id: 434,
    question: 'Thuốc gây mãng mục vị trí tiêm, không được tiêm bắp là:',
    answer: 'Đáp án đúng: B. Canxi Clorit',
  },

  {
    id: 435,
    question: 'Người bệnh Nguyễn Thị Hoa, 50 tuổi nhập viện với triệu chứng khó thở... Bạn sẽ chăm sóc theo thứ tự:',
    answer: 'Đáp án đúng: C. Hút đờm dãi, thở oxy, hạ sốt',
  },

  {
    id: 436,
    question: 'Sau khi tiêm thuốc xong, nếu người bệnh xuất hiện các triệu chứng phản vệ:',
    answer: 'Đáp án đúng: D. Tất cả A,B,C đúng',
  },

  {
    id: 437,
    question: 'Các thao tác sau đây nhằm tránh nguy cơ phơi nhiễm do kim đâm, TRỪ:',
    answer: 'Đáp án đúng: B. Dùng tay đậy nắp kim',
  },

  {
    id: 438,
    question: 'Nhằm phòng tránh đổ lỗi khi đi tiêm người điều dưỡng cần:',
    answer: 'Đáp án đúng: D. Tất cả A, B, C đều đúng',
  },

  {
    id: 439,
    question: 'Cách xử lý đối với vùng tổn thương do kim tiêm:',
    answer: 'Đáp án đúng: A. Rửa ngay vùng da bị tổn thương bằng xà phòng và nước, dưới vòi nước chảy',
  },

  {
    id: 440,
    question: 'Trong quy tắc ứng xử tại TT 07/2014/TT-BYT, không được làm với đồng nghiệp:',
    answer: 'Đáp án đúng: C. Né tránh, đẩy trách nhiệm cho đồng nghiệp',
  },

  {
    id: 441,
    question: 'Dấu hiệu nhận biết sốc phản vệ:',
    answer: 'Đáp án đúng: B. Khó thở, tụt huyết áp, mẩn ngứa',
  },

  {
    id: 442,
    question: 'Tư thế Fowler là tư thế nào?',
    answer: 'Đáp án đúng: C. Nằm ngửa đầu cao 45–60°',
  },

  {
    id: 443,
    question: 'Biểu hiện của hạ đường huyết:',
    answer: 'Đáp án đúng: B. Vã mồ hôi, run tay, lơ mơ',
  },

  {
    id: 444,
    question: 'Khi chăm sóc người bệnh truyền máu, dấu hiệu nguy hiểm là:',
    answer: 'Đáp án đúng: C. Sốt, rét run, khó thở',
  },

  {
    id: 445,
    question: 'Để tránh tai biến khi dùng thuốc lợi tiểu, điều dưỡng cần theo dõi:',
    answer: 'Đáp án đúng: C. Cân nặng và lượng nước tiểu',
  },

  {
    id: 446,
    question: 'Dấu hiệu mất nước nặng ở người cao tuổi:',
    answer: 'Đáp án đúng: B. Da khô, huyết áp tụt, mạch nhanh',
  },

  {
    id: 447,
    question: 'Một dấu hiệu của suy hô hấp cấp là:',
    answer: 'Đáp án đúng: B. Thở nhanh, tím tái, khó thở',
  },

  {
    id: 448,
    question: 'Tiến hành lấy nước tiểu để cấy tìm vi khuẩn cho người bệnh nghi ngờ bị nhiễm khuẩn tiết niệu, phương pháp tốt nhất là:',
    answer: 'Đáp án đúng: D. Lấy nước tiểu giữa dòng.',
  },

  {
    id: 449,
    question: 'Hướng dẫn người bệnh loét dạ dày – tá tràng uống các bảo vệ niêm mạc dạ dày (Bismuth, Sucralfate,...) nên uống:',
    answer: 'Đáp án đúng: A. Trước khi ăn',
  },

  {
    id: 450,
    question: 'Triệu chứng nào sau đây thường gặp nhất trong hội chứng tăng áp lực nội sọ:',
    answer: 'Đáp án đúng: A. Đau đầu',
  },

  {
    id: 451,
    question: 'Vị trí tiêm Insulin:',
    answer: 'Đáp án đúng: D. Cánh tay, bụng, đùi, mông',
  },

  {
    id: 452,
    question: 'Các biến chứng có thể gặp tại nơi tiêm Insulin:',
    answer: 'Đáp án đúng: A. Thoái hóa mỡ, áp xe, teo cơ tại chỗ, phì đại mỡ dưới da',
  },

  {
    id: 453,
    question: 'Biểu hiện lâm sàng thường gặp của bệnh tai biến mạch máu não:',
    answer: 'Đáp án đúng: D. Liệt nửa người',
  },

  {
    id: 454,
    question: 'Thuốc hạ sốt nào sau đây không nên dùng để hạ sốt trong sốt xuất huyết?',
    answer: 'Đáp án đúng: B. Ibuprofen',
  },

  {
    id: 455,
    question: 'Phát biểu nào sau đây phù hợp với chế độ ăn trong điều trị bệnh suy thận mãn',
    answer: 'Đáp án đúng: C. Ăn nhạt khi có phù và huyết áp cao, tránh dùng thức ăn có nhiều kali, giảm đạm',
  },

  {
    id: 456,
    question: 'Khi chăm sóc người bệnh có mở khí quản, cần phải đảm bảo duy trì việc……đường dẫn khí.',
    answer: 'Đáp án đúng: D. Khai thông',
  },

  {
    id: 457,
    question: 'Khi thay dây buộc canyn khí quản, người điều dưỡng phủ lên miệng ống một lớp gạc mỏng tẩm dung dịch NaCl 9‰ để tránh……và làm ẩm không khí trước khi vào phổi.',
    answer: 'Đáp án đúng: D. Dị vật rơi vào khí quản',
  },

  {
    id: 458,
    question: 'Nên cho người bệnh suy tim mạn dùng thuốc lợi tiểu vào……',
    answer: 'Đáp án đúng: A. Buổi sáng',
  },

  {
    id: 459,
    question: 'Để đảm bảo chức năng hô hấp cho người bệnh sau ngừng tim, phải cho người bệnh thở máy ít nhất……',
    answer: 'Đáp án đúng: B. 24 giờ',
  },

  {
    id: 460,
    question: 'Để đảm bảo chức năng tuần hoàn cho người bệnh sau ngừng tim, phải duy trì đường truyền tĩnh mạch trung tâm được liên tục,…',
    answer: 'Đáp án đúng: A. 24 giờ',
  },

  {
    id: 461,
    question: 'Trong chăm sóc người bệnh suy thận cấp, cần phải theo dõi và nhận định …của suy thận cấp.',
    answer: 'Đáp án đúng: B. Các dấu hiệu nặng',
  },

  {
    id: 462,
    question: 'Mục tiêu của chăm sóc người bệnh sốt cao là tránh được các tai biến như ……, sặc, cắn phải lưỡi.',
    answer: 'Đáp án đúng: D. Co giật',
  },

  {
    id: 463,
    question: 'Tác dụng phụ của thuốc giãn phế quản',
    answer: 'Đáp án đúng: C. Đánh trống ngực',
  },

  {
    id: 464,
    question: 'Chỉ số SpO2 dưới bao nhiêu là chỉ định thở oxy?',
    answer: 'Đáp án đúng: C. 90%',
  },

  {
    id: 465,
    question: 'Trong cấp cứu ngừng tuần hoàn, thời gian kiểm tra mạch mỗi chu kỳ là:',
    answer: 'Đáp án đúng: C. 10 giây',
  },

  {
    id: 466,
    question: 'Dấu hiệu lâm sàng của tràn khí dưới da là:',
    answer: 'Đáp án đúng: D. Lép bép dưới da',
  },

  {
    id: 467,
    question: 'Nguy cơ lớn nhất của truyền dịch nhanh qua đường ngoại vi là:',
    answer: 'Đáp án đúng: B. Phù phổi cấp',
  },

  {
    id: 468,
    question: 'Dấu hiệu sớm cảnh báo viêm tĩnh mạch do truyền dịch là:',
    answer: 'Đáp án đúng: B. Da vùng truyền đỏ, nóng, đau',
  },

  {
    id: 469,
    question: 'Dụng cụ cần thiết khi chuẩn bị đặt nội khí quản:',
    answer: 'Đáp án đúng: A. Máy hút, ống nội khí quản, bóng Ambu',
  },

  {
    id: 470,
    question: 'Trong quá trình chăm sóc bệnh nhân thở máy, nếu thấy SpO2 giảm đột ngột, điều dưỡng cần làm gì đầu tiên?',
    answer: 'Đáp án đúng: A. Kiểm tra ống nội khí quản và hệ thống máy',
  },

  {
    id: 471,
    question: 'Trong cấp cứu ngừng tuần hoàn, ép tim ngoài lồng ngực cần được thực hiện với tần suất bao nhiêu lần/phút?',
    answer: 'Đáp án đúng: C. 100–120 lần/phút',
  },

  {
    id: 472,
    question: 'Nếu bệnh nhân có dấu hiệu tắc nghẽn đường thở, điều dưỡng cần làm gì ngay lập tức?',
    answer: 'Đáp án đúng: D. Tiến hành đặt nội khí quản',
  },

  {
    id: 473,
    question: 'Khi bệnh nhân có dấu hiệu ngừng thở do ngộ độc CO, điều dưỡng cần:',
    answer: 'Đáp án đúng: B. Cho bệnh nhân thở oxy nồng độ cao hoặc oxy cao áp',
  },

  {
    id: 474,
    question: 'Tỷ lệ ép tim và thổi ngạt đúng cho người lớn khi hồi sức tim phổi là:',
    answer: 'Đáp án đúng: B. 30:2',
  },

  {
    id: 475,
    question: 'Vị trí ép tim hiệu quả nhất là:',
    answer: 'Đáp án đúng: B. 1/2 dưới xương ức',
  },

  {
    id: 476,
    question: 'Bệnh nhân nữ 70 tuổi đang truyền NaCl 0,9% với tốc độ 500ml/giờ. Sau 1 giờ, bệnh nhân khó thở, mạch nhanh, phổi ran ẩm. Điều dưỡng cần nghĩ đến:',
    answer: 'Đáp án đúng: C. Quá tải tuần hoàn',
  },

  {
    id: 477,
    question: 'Bệnh nhân viêm phổi, sốt 39°C, thở nhanh 28 lần/phút, SpO₂ 92%. Điều dưỡng nên làm gì đầu tiên?',
    answer: 'Đáp án đúng: B. Đặt bệnh nhân ở tư thế Fowler và cho thở oxy',
  },

  {
    id: 478,
    question: 'Bệnh nhân nam 50 tuổi, điều dưỡng đi buồng phát hiện BN ngừng tuần hoàn. Điều đầu tiên bạn cần làm là?',
    answer: 'Đáp án đúng: B. Lập tức ép tim ngoài lồng ngực',
  },

  {
    id: 479,
    question: 'Trong lúc cấp cứu ngưng tim, điều dưỡng thực hiện ép tim ngoài lồng ngực, nhưng thấy mạch cảnh không bắt được sau 2 phút. Điều dưỡng nên làm gì?',
    answer: 'Đáp án đúng: D. Đổi người ép tim, tiếp tục ép tim',
  },

  {
    id: 480,
    question: 'Bệnh nhân 65 tuổi vào viện vì khó thở cấp, SpO₂ 78% khi thở oxy gọng mũi 5 lít/phút. Điều dưỡng nên làm gì?',
    answer: 'Đáp án đúng: B. Chuyển sang mặt nạ oxy 10 lít/phút',
  },

  {
    id: 481,
    question: 'Bệnh nhân sau chấn thương sọ não có GCS 6 điểm, thở chậm, huyết áp tụt. Điều dưỡng ưu tiên thực hiện gì?',
    answer: 'Đáp án đúng: D. Chuẩn bị dụng cụ đặt nội khí quản và bóp bóng hỗ trợ thở',
  },

  {
    id: 482,
    question: 'Trong bệnh đái tháo đường, triệu chứng điển hình nào sau đây KHÔNG đúng?',
    answer: 'Đáp án đúng: C. Ngủ nhiều',
  },

  {
    id: 483,
    question: 'Trong khi truyền dịch, bệnh nhân thấy đau, sưng tại chỗ truyền, điều dưỡng xử trí:',
    answer: 'Đáp án đúng: C. Dừng truyền, rút kim',
  },

  {
    id: 484,
    question: 'Nguyên nhân làm tổn thương niêm mạc mũi miệng, khí phế quản của bệnh nhân khi hút đờm:',
    answer: 'Đáp án đúng: A. Áp lực hút quá cao',
  },

  {
    id: 485,
    question: 'Khi sát trùng cho BN để lấy máu, dung dịch sát trùng nào sau đây không được sử dụng:',
    answer: 'Đáp án đúng: D. Ethanol 90%',
  },

  {
    id: 486,
    question: 'Đối với NB có đặt sonde tiểu, khi di chuyển BN cần:',
    answer: 'Đáp án đúng: A. Kẹp (khóa) đường dẫn nước tiểu để tránh trào ngược từ túi nước tiểu vào bàng quang',
  },

  {
    id: 487,
    question: 'Thuốc đầu tay trong cấp cứu sốc phản vệ là:',
    answer: 'Đáp án đúng: A. Adrenalin',
  },

  {
    id: 488,
    question: 'Tác dụng của các chất trung gian hóa học trong sốc phản vệ là:',
    answer: 'Đáp án đúng: B. Gây co thắt phế quản',
  },

  {
    id: 489,
    question: 'Vùng nào dưới đây bị loét sớm nhất khi BN nằm ngửa kéo dài:',
    answer: 'Đáp án đúng: C. Vùng xương cùng cụt',
  },

  {
    id: 490,
    question: 'Cách đo khoảng cách đặt ống sonde khi đặt sonde dạ dày:',
    answer: 'Đáp án đúng: C. Từ cánh mũi đến dái tai rồi đến mũi ức',
  },

  {
    id: 491,
    question: 'Người bệnh bị trụy mạch, cần cho người bệnh thở oxy theo tư thế nào sau đây?',
    answer: 'Đáp án đúng: D. Nằm thẳng',
  },

  {
    id: 492,
    question: 'Nồng độ oxy khi thở qua ống thông mũi đạt được là bao nhiêu phần trăm?',
    answer: 'Đáp án đúng: D. 40%',
  },

  {
    id: 493,
    question: 'Nồng độ oxy khi thở qua mặt nạ đạt được là bao nhiêu phần trăm?',
    answer: 'Đáp án đúng: C. 60%',
  },

  {
    id: 494,
    question: 'Nồng độ oxy khi thở qua mặt nạ có bóng dự trữ đạt được là bao nhiêu phần trăm?',
    answer: 'Đáp án đúng: A. 100%',
  },

  {
    id: 495,
    question: 'Bệnh phổi tắc nghẽn mạn tính, liều lượng oxy cho bệnh nhân thở là bao nhiêu lít/phút?',
    answer: 'Đáp án đúng: D. 1 – 2 lít/phút',
  },

  {
    id: 496,
    question: 'Bệnh suy tim nặng, liều lượng oxy cho bệnh nhân thở là bao nhiêu lít/phút?',
    answer: 'Đáp án đúng: B. 4 – 6 lít/phút',
  },

  {
    id: 497,
    question: 'Bệnh phù phổi cấp, liều lượng oxy cho bệnh nhân thở là bao nhiêu lít/phút?',
    answer: 'Đáp án đúng: A. 6 – 8 lít/phút',
  },

  {
    id: 498,
    question: 'Bệnh nhân bị xuất huyết tiêu hóa đang chảy máu cho ăn theo chế độ nào sau đây?',
    answer: 'Đáp án đúng: B. Truyền dịch, không ăn',
  },

  {
    id: 499,
    question: 'Bệnh nhân tiểu đường đang điều trị, đột nhiên bị hôn mê đột ngột, vã mồ hôi, mạch nhanh, bạn nghĩ bệnh nhân đã bị bệnh gì?',
    answer: 'Đáp án đúng: B. Hạ đường máu',
  },

  {
    id: 500,
    question: 'Hãy nêu các yếu tố nguy cơ gây nhồi máu cơ tim ở Nam trên 40 tuổi?',
    answer: 'Đáp án đúng: E. Tất cả đúng',
  },

  {
    id: 501,
    question: 'Khi tiếp nhận bệnh nhân nhồi máu cơ tim, việc đầu tiên điều dưỡng cần trong chăm sóc bệnh nhân là?',
    answer: 'Đáp án đúng: C. Cho bệnh nhân thở oxy tại giường',
  },

  {
    id: 502,
    question: 'Khi tiếp bệnh nhân nhồi máu cơ tim ra viện, người điều dưỡng cần hướng dẫn cho bệnh nhân biện pháp cắt cơn đau ngực nhanh nhất là?',
    answer: 'Đáp án đúng: D. Luôn có thuốc Nitroglyxerin bên người và ngậm ngay một viên.',
  },

  {
    id: 503,
    question: 'Triệu chứng của cơn phù phổi cấp điển hình là?',
    answer: 'Đáp án đúng: A. Khó thở dữ dội, Ho khạc bọt màu hồng, Tim nhanh, HA hạ, Phổi có ran ẩm dâng từ đáy lên đỉnh.',
  },

  {
    id: 504,
    question: 'Các bước xử trí đầu tiên khi bệnh nhân Phù phổi cấp?',
    answer: 'Đáp án đúng: D. Cả A, B, C đúng',
  },
    // Thêm các câu hỏi P5 khác vào đây...
  ],
}
