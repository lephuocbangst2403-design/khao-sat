# Bảng hỏi Study 1–3 (Chuỗi A)

Ba bảng hỏi chạy trên GitHub Pages. Mỗi người trả lời được DataPipe (https://pipe.jspsych.org) lưu thành một file CSV trong Google Drive của nhóm nghiên cứu.

## Các bước

1. Tạo repo **Public** trên GitHub, tải lên `index.html`, `config.js`, `README.md`.
2. Settings → Pages → Deploy from a branch → `main`, `/ (root)` → Save. Link gốc có dạng `https://<tài-khoản>.github.io/<repo>/`.
3. Trên DataPipe: kết nối Google Drive, tạo 4 experiment (Study 1, Study 1 pilot, Study 2, Study 3).
   - Study 2 và 3: bật "Assign conditions in sequence" với **8** điều kiện.
   - Không bật "Stop after a set number of sessions".
   - Bật "Accept new data" khi bắt đầu thử thật.
4. Điền `config.js` (chỉ sửa file này): 4 Experiment ID, link panel, thông tin trang đồng ý, tên chuỗi, quota, item ATCB3–ATCB4.
5. Thử thật 2–3 phiếu, kiểm tra file CSV trong Google Drive, xóa file thử rồi mới mời người tham gia.

## Link

| Dùng cho | Link |
| --- | --- |
| Study 1 | `<link gốc>?s=1&pid=...` |
| Pilot Study 1 | `<link gốc>?s=1&mode=pilot&pid=...` |
| Study 2 | `<link gốc>?s=2&pid=...` |
| Study 3 | `<link gốc>?s=3&pid=...` |
| Tự thử, không lưu | thêm `&test=1` |

Hướng dẫn đầy đủ và cách đọc dữ liệu: tab "Triển khai thu dữ liệu" trong doc của dự án.
