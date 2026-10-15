/* =====================================================================
   CẤU HÌNH KHẢO SÁT. Chỉ sửa file này, không cần sửa index.html.
   Sửa xong bấm "Commit changes" trên GitHub; khoảng 1 phút sau link tự cập nhật.
   Giữ nguyên dấu ngoặc kép "..." và dấu phẩy ở cuối mỗi dòng.
   ===================================================================== */
window.SURVEY_CONFIG = {

  /* 1. Mã thí nghiệm DataPipe (Experiment ID), lấy ở dashboard DataPipe.
        Mỗi study một mã riêng để dữ liệu nằm ở thư mục riêng.
        "1-pilot" là mã cho pilot Study 1 (link có &mode=pilot). */
  DATAPIPE_ID: {
    "1": "",
    "1-pilot": "",
    "2": "",
    "3": ""
  },

  /* 2. Tên tham số chứa mã người tham gia trên link panel.
        Ví dụ panel gửi link .../?s=1&pid=AB123 thì để "pid". */
  PID_PARAM: "pid",

  /* 3. Link chuyển người tham gia về panel sau khi xong. {PID} sẽ được thay bằng mã người tham gia.
        Để trống "" nếu không dùng panel; khi đó trang cuối hiện mã hoàn thành ở COMPLETION_CODE. */
  REDIRECT: {
    complete: "",    // làm xong (kể cả người chọn rút dữ liệu ở debrief)
    screenout: "",   // bị sàng lọc hoặc không đồng ý tham gia
    quotafull: ""    // chuỗi của họ đã đủ quota (Study 1)
  },
  COMPLETION_CODE: "",

  /* 4. Thông tin trên trang đồng ý tham gia. */
  ORG: "[Tên trường/viện]",
  ETHICS_BOARD: "[Hội đồng đạo đức]",
  ETHICS_NO: "[số phê duyệt]",
  RESEARCHER: "[Tên nghiên cứu viên]",
  EMAIL: "[email]",
  STORAGE_PLACE: "Google Drive của nhóm nghiên cứu",
  STORAGE_TIME: "[thời gian lưu trữ, ví dụ 5 năm]",
  INCENTIVE: "[mức và hình thức thù lao]",
  STOP_RULE: "[quy định thù lao khi dừng giữa chừng]",

  /* 5. Study 1: danh sách chuỗi bán lẻ. v là mã số trong dữ liệu (1, 2, 3...).
        cat: 1 = điện máy, 2 = nhà thuốc, 3 = mỹ phẩm, 4 = siêu thị. */
  CHAINS: [
    { v: 1, name: "[Chuỗi 1]", cat: 1 },
    { v: 2, name: "[Chuỗi 2]", cat: 2 },
    { v: 3, name: "[Chuỗi 3]", cat: 3 },
    { v: 4, name: "[Chuỗi 4]", cat: 4 },
    { v: 5, name: "[Chuỗi 5]", cat: 4 }
  ],

  /* Chuỗi đã đủ quota: ghi mã v, ví dụ [2] hoặc [2, 4]. Người chọn chuỗi này
     được chuyển sang chuỗi đủ điều kiện khác còn quota (RET_SWITCH = 1). */
  QUOTA_FULL: [],

  /* 6. Hai item ATCB còn thiếu (bản tiếng Việt). Để trống thì bảng hỏi bỏ qua item đó. */
  ATCB3: "",
  ATCB4: ""
};
