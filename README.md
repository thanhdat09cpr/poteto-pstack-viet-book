# Làm việc cùng AI, có bằng chứng

Sách thực hành tiếng Việt về poteto-kit và pstack: tư duy, kiểm chứng, học từ failure, kỹ năng điều phối và vận dụng vào dự án.

## Bản học sâu — 30/10/2026

35 chương. Bổ sung định hướng nguồn gốc, hai ca poteto-kit, một ca pstack, xưởng failure và chương phối hợp Piggery; thay lộ trình học bằng bài tập có đầu ra và câu hỏi tự kiểm tra. Giữ nguyên ID các chương cũ để bảo toàn liên kết và ghi chú. Xem CHANGELOG.md và upstream-check.json.

## Đọc sách

- Trực tuyến: https://thanhdat09cpr.github.io/poteto-pstack-viet-book/
- Offline: tải `doc-offline.html` và mở bằng trình duyệt. File đã gói CSS, JavaScript và toàn bộ nội dung; liên kết source vẫn cần Internet.
- Bản website: `index.html`, `book.css`, `book.js`. Không cần build hoặc dependency.
- Nút in trên thanh công cụ dựng toàn bộ sách để in hoặc lưu PDF qua trình duyệt.

Ghi chú và tiến độ lưu bằng localStorage trong trình duyệt, theo từng thiết bị/origin. Không gửi ghi chú lên máy chủ. Dùng nút xuất ghi chú để giữ bản sao.

## Nguồn

- epistex-dev/poteto-kit: `0b357c1ec9f6d676fd2e5477d84cdcb34ff40493`
- cursor/plugins, thư mục pstack: `c742dd61706fbacc1b95f1a20b7b988cf096ce6c`
- Biên soạn: 28/10/2026.

Đây là bản diễn giải và tổng hợp độc lập, không phải ấn phẩm chính thức của tác giả hay Cursor. Nội dung phân biệt đề xuất từ source, kết quả chạy thử cụ thể và phần vận dụng do sách tổng hợp. Chỉ mục nguồn không phải chứng nhận kiểm toán toàn bộ code hoặc đã chạy toàn bộ test.

Xem `THIRD_PARTY_NOTICES.txt` để biết bản quyền và giấy phép MIT của hai nguồn. Không có tài liệu nội bộ hay thông tin đăng nhập trong bản xuất bản.

## Cấu trúc

- `book-data.json`: nội dung từng chương, dùng để chỉnh sửa/tái sử dụng.
- `source-inventory.json`: danh mục source snapshot có liên kết cố định.
- `index.html`: nội dung nhúng trực tiếp để đọc không cần API.
- `book.css`, `book.js`: giao diện và tương tác đọc.
- `doc-offline.html`: phiên bản một file tự chứa.

Nếu sửa `book-data.json`, chạy `node scripts/rebuild.mjs` để đồng bộ nội dung HTML và tạo lại bản offline trước khi publish. Bản xuất bản hiện tại là website tĩnh, không gọi connector hay thực thi skill được mô tả trong sách.

Nguồn bổ sung: Piggery `dc15dff9e3d99cf2a573337f5319d802b90315e4`. Các ca mới là diễn giải/bài tập, chưa phải kết quả tích hợp runtime.
