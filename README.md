# 🎸 G4U Website

Chào mừng bạn đến với kho lưu trữ mã nguồn của **CLB Guitar G4U**.

Website được xây dựng bằng:

* ⚛️ React
* ⚡ Vite
* 🎨 Tailwind CSS
* ✨ Framer Motion

Mục tiêu của tài liệu này là giúp bất kỳ thành viên nào, kể cả người mới, có thể chạy website trên máy cá nhân một cách nhanh chóng.

---

# 🚀 Hướng dẫn khởi động (Dành cho Newbie)

## 1. Cài đặt Node.js

Trước tiên, hãy cài đặt **Node.js phiên bản LTS** tại:

https://nodejs.org/

Sau khi cài đặt xong, mở Terminal (Command Prompt hoặc PowerShell) và kiểm tra:

```bash
node -v
npm -v
```

Nếu hiển thị phiên bản, nghĩa là bạn đã cài đặt thành công.

Ví dụ:

```text
v22.x.x
10.x.x
```

---

## 2. Cài đặt và chạy dự án (Khuyến khích)

Dự án đã được chuẩn bị sẵn file script tự động.

### Đối với Windows

Chỉ cần:

* Mở thư mục dự án
* Double-click file:

```text
setup.bat
```

Script sẽ tự động:

1. Cài đặt toàn bộ thư viện cần thiết.
2. Khởi động website ở chế độ phát triển.
3. Hiển thị địa chỉ truy cập trên trình duyệt.

---

## 3. Chạy thủ công (Nếu cần)

### Bước 1: Cài đặt thư viện

Mở Terminal tại thư mục dự án và chạy:

```bash
npm install
```

Lệnh này sẽ tự động cài đặt toàn bộ package được khai báo trong `package.json`, bao gồm:

### Dependencies

* @radix-ui/react-slot
* class-variance-authority
* clsx
* framer-motion
* hls.js
* lucide-react
* motion
* react
* react-dom
* react-use-measure
* tailwind-merge

### Dev Dependencies

* @eslint/js
* @types/react
* @types/react-dom
* @vitejs/plugin-react
* autoprefixer
* eslint
* eslint-plugin-react-hooks
* eslint-plugin-react-refresh
* gh-pages
* globals
* postcss
* tailwindcss
* vite

> Bạn không cần cài đặt từng package riêng lẻ. `npm install` sẽ tự động xử lý tất cả.

---

### Bước 2: Khởi động website

Sau khi cài đặt hoàn tất:

```bash
npm run dev
```

Terminal sẽ hiển thị địa chỉ tương tự:

```text
Local:   http://localhost:5173/
```

Giữ phím **Ctrl** và click vào đường dẫn Local để mở website.

---

# 🛠 Cấu trúc dự án

```text
src/
├── assets/         # Hình ảnh, icon và tài nguyên
├── components/     # Các component giao diện
└── ...

public/             # Tài nguyên tĩnh
tailwind.config.js  # Cấu hình Tailwind CSS
vite.config.js      # Cấu hình Vite
package.json        # Danh sách thư viện và scripts
```

---

# 💡 Xử lý sự cố thường gặp

## `'node' is not recognized`

Nguyên nhân:

* Chưa cài Node.js.
* Chưa khởi động lại máy sau khi cài.

Cách khắc phục:

* Cài Node.js bản LTS.
* Restart máy tính hoặc mở lại Terminal.

---

## Lỗi khi cài đặt thư viện

Thử xoá thư mục cài đặt và cài lại:

### Windows

```bat
rmdir /s /q node_modules
del package-lock.json
npm install
```

### macOS / Linux

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Không truy cập được localhost

Hãy kiểm tra:

* Terminal có còn đang chạy không.
* Có thông báo lỗi màu đỏ hay không.
* Tường lửa hoặc phần mềm diệt virus có chặn Node.js hay không.

---

# ❤️ Đóng góp

Mọi đóng góp để cải thiện website đều được chào đón.

Nếu phát hiện lỗi hoặc có ý tưởng mới, hãy liên hệ đội ngũ kỹ thuật của CLB hoặc tạo Issue trên GitHub.

---

Cảm ơn bạn đã đồng hành cùng **G4U**.
