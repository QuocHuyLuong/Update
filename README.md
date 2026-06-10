# HƯỚNG DẪN ĐƯA WEBSITE G4U LÊN GITHUB PAGES & QUẢN TRỊ NỘI DUNG

Thư mục này chứa toàn bộ các tệp tin cần thiết được đóng gói sẵn để bạn tải lên GitHub và chạy trang web trực tuyến (Live Server) thông qua dịch vụ **GitHub Pages** hoàn toàn miễn phí. 

Sau khi đưa lên GitHub, bạn có thể chỉnh sửa nội dung, danh sách video, hình ảnh sự kiện trực tiếp trên giao diện web của GitHub mà không cần cài đặt bất kỳ phần mềm lập trình nào trên máy tính.

---

## PHẦN 1: HƯỚNG DẪN ĐƯA WEB LÊN GITHUB PAGES (CHẠY ONLINE)

### Bước 1: Tạo Repository (Kho chứa) trên GitHub
1. Truy cập [github.com](https://github.com/) và đăng nhập tài khoản của bạn.
2. Nhấp vào nút **New** (hoặc biểu tượng dấu cộng `+` ở góc trên bên phải -> **New repository**).
3. Đặt tên cho kho chứa (ví dụ: `g4u-guitar-club`).
4. Chọn chế độ **Public** (Bắt buộc để chạy được GitHub Pages miễn phí).
5. Nhấp nút **Create repository**.

### Bước 2: Tải các tệp tin lên GitHub
*Bạn chỉ cần tải lên toàn bộ các tệp tin và thư mục nằm trong thư mục `github_deploy` này (bao gồm tệp `index.html`, thư mục `public`, thư mục `src` và tệp `README.md` này).*

**Cách tải trực tiếp trên trình duyệt (Dành cho người mới):**
1. Trên trang repository mới tạo, nhấp vào liên kết **"uploading an existing file"** ở dòng giới thiệu đầu tiên.
2. Kéo và thả toàn bộ nội dung bên trong thư mục `github_deploy` (gồm tệp `index.html`, thư mục `public`, `src`) vào vùng tải lên của trình duyệt.
3. Chờ trình duyệt tải lên toàn bộ tệp tin (không đóng tab).
4. Nhập mô tả thay đổi ở ô dưới cùng (ví dụ: `Khởi tạo website G4U`) và nhấp nút **Commit changes**.

### Bước 3: Kích hoạt dịch vụ Live Server (GitHub Pages)
1. Tại giao diện repository trên GitHub, chọn tab **Settings** (Cài đặt) ở thanh công cụ phía trên.
2. Ở menu bên trái, tìm và nhấp vào mục **Pages** (nằm dưới mục *Code and automation*).
3. Tại phần **Build and deployment** -> **Source**: Chọn **Deploy from a branch**.
4. Tại phần **Branch**: 
   - Đổi từ `None` thành **`main`** (hoặc `master`).
   - Ô thư mục giữ nguyên là **`/ (root)`**.
5. Nhấp nút **Save** (Lưu).
6. F5 lại trang sau 1-2 phút, bạn sẽ thấy đường link trang web của mình xuất hiện ở đầu trang cài đặt Pages dưới dạng: `https://<ten-tai-khoan>.github.io/<ten-repository>/`. Nhấp vào đường link đó để truy cập website online của bạn!

---

## PHẦN 2: HƯỚNG DẪN CHỈNH SỬA NỘI DUNG TRỰC TIẾP TRÊN GITHUB

Khi website đã chạy online, mỗi lần bạn chỉnh sửa tệp tin trên GitHub, website sẽ tự động cập nhật sau khoảng 1 phút.

### 1. Thay đổi danh sách video Phòng nhạc (G4U Studio)
- Đường dẫn file cấu hình: `public/videos/videos.json`
- **Cách sửa:**
  1. Nhấp vào tệp `public/videos/videos.json` trên GitHub.
  2. Nhấp vào biểu tượng **cây bút chì** (Edit this file) ở góc trên bên phải.
  3. Thêm/sửa các khối video. Ví dụ cấu trúc của một video:
     ```json
     {
       "id": 1,
       "title": "Tên bài hát / Video mới",
       "description": "Trình bày: Thành viên A, Thành viên B",
       "videoUrl": "ĐƯỜNG_DẪN_NHÚNG_VIDEO",
       "date": "08/06/2026"
     }
     ```
     *(Xem hướng dẫn chi tiết cách lấy đường dẫn nhúng từ YouTube hoặc Facebook trong tệp `public/videos/HUONG_DAN_UPLOAD.txt`)*
  4. Nhấp nút **Commit changes** ở góc trên để lưu lại.

### 2. Thay đổi Sự kiện & Hoạt động nổi bật
- Đường dẫn file cấu hình: `public/events/events.json`
- **Cách sửa:**
  1. Nhấp mở file `public/events/events.json` trên GitHub -> bấm biểu tượng **bút chì**.
  2. Sửa các thông số của sự kiện:
     - `title`: Tiêu đề sự kiện (Viết HOA để hiển thị đẹp hơn).
     - `status`: Trạng thái (Ví dụ: `Sắp diễn ra`, `Nổi bật`, `Vừa diễn ra`).
     - `image`: Đường dẫn ảnh sự kiện (Ví dụ: `/events/ten_anh.jpg`).
     - `date`: Ngày diễn ra sự kiện.
     - `location`: Địa điểm tổ chức sự kiện.
     - `desc`: Mô tả ngắn gọn về sự kiện.
     - `tagColor`: Màu sắc nhãn trạng thái (ví dụ: `var(--color-primary)` cho màu đỏ, `var(--color-secondary)` cho màu tím).
  3. Lưu lại bằng nút **Commit changes**.

### 3. Thay đổi hình ảnh Thư viện khoảnh khắc G4U
- Đường dẫn file cấu hình: `public/gallery/gallery.json`
- **Cách sửa:**
  1. Nhấp mở file `public/gallery/gallery.json` trên GitHub -> bấm biểu tượng **bút chì**.
  2. Bạn có thể thêm các bức ảnh mới bằng cách thêm một khối:
     ```json
     {
       "id": 7,
       "src": "/gallery/ten_anh_moi.jpg",
       "category": "perform",
       "title": "Tiêu đề ảnh hiển thị khi di chuột"
     }
     ```
     - Các danh mục (`category`) được hỗ trợ:
       - `life`: Sinh hoạt nội bộ
       - `perform`: Biểu diễn/Acoustic
       - `liveshow`: Các dự án Liveshow lớn
  3. Lưu lại bằng nút **Commit changes**.

### 4. Thay đổi danh sách sản phẩm Merchandise (Quà lưu niệm CLB)
- Đường dẫn file cấu hình: `public/merchandise/merchandise.json`
- **Cách sửa:**
  1. Nhấp mở file `public/merchandise/merchandise.json` trên GitHub -> bấm biểu tượng **bút chì**.
  2. Bạn có thể thêm sản phẩm mới hoặc sửa sản phẩm hiện có bằng cách thêm hoặc chỉnh sửa khối:
     ```json
     {
       "id": 4,
       "name": "Tên sản phẩm",
       "price": "Giá bán (ví dụ: 150.000 VNĐ)",
       "description": "Mô tả sản phẩm ngắn gọn",
       "image": "/merchandise/ten_anh.png"
     }
     ```
  3. Để tải ảnh sản phẩm mới, bạn truy cập thư mục `public/merchandise/` trên GitHub, chọn **Add file** -> **Upload files** để tải ảnh lên trước, sau đó cập nhật tên ảnh tương ứng vào trường `"image"`.
  4. Lưu lại bằng nút **Commit changes**.

---

## ⚠️ CÁC LƯU Ý QUAN TRỌNG ĐỂ TRÁNH LỖI GIAO DIỆN

1. **Quy tắc viết file JSON (Rất quan trọng):**
   - Tất cả các khóa (keys) và chuỗi chữ (strings) phải được bọc trong **dấu ngoặc kép đôi `""`** (Ví dụ: `"title": "Còn Gì Đẹp Hơn"`). Tuyệt đối không dùng dấu ngoặc đơn `''`.
   - Các khối thông tin trong mảng cách nhau bằng dấu phẩy `,`.
   - **Lưu ý:** Không để dấu phẩy `,` ở khối cuối cùng trước dấu ngoặc vuông đóng `]`. Việc thừa dấu phẩy này sẽ khiến trang web bị lỗi cấu hình và quay về giao diện mặc định.
2. **Quy tắc đặt và cập nhật ảnh:**
   - Để thay đổi hình ảnh (ví dụ ảnh đại diện ban hoạt động, ảnh sự kiện, ảnh thư viện), bạn hãy lưu ảnh mới trên máy tính với **định dạng `.jpg` hoặc `.png`** và đặt trùng tên tệp cũ.
   - Truy cập thư mục tương ứng trên GitHub (ví dụ: `public/departments/` để đổi ảnh ban, `public/events/` để đổi ảnh sự kiện), bấm **Add file** -> **Upload files** và kéo đè tệp ảnh mới lên để thay thế tệp cũ.
3. **Chỉnh sửa các văn bản tĩnh trên trang:**
   - Các nội dung tĩnh như thông tin mô tả CLB, địa chỉ, email, số điện thoại hoặc tiêu đề lớn nằm trực tiếp trong file **`index.html`** ở thư mục gốc.
   - Bạn chỉ cần nhấp mở file `index.html` trên GitHub, bấm biểu tượng **bút chì**, nhấn `Ctrl + F` tìm từ khóa cần sửa (ví dụ: tìm `Địa chỉ sinh hoạt` hoặc `clbguitardhtdt@gmail.com`), tiến hành sửa nội dung chữ và nhấn **Commit changes** là hoàn thành.
