# 🎸 G4U Website Migration

Chào mừng bạn đến với kho lưu trữ mã nguồn của CLB Guitar G4U. Dự án này đã được nâng cấp lên **React** kết hợp với **Vite** và **Tailwind CSS** nhằm mang lại trải nghiệm mượt mà và giao diện hiện đại hơn.

---

## 🚀 Hướng dẫn khởi động (Dành cho Newbie)

Nếu bạn chưa từng làm việc với React hoặc Vite, đừng lo. Chỉ cần làm theo các bước dưới đây để chạy trang web trên máy tính cá nhân.

### 1. Chuẩn bị môi trường

* Đảm bảo bạn đã cài đặt **Node.js** (khuyến khích sử dụng phiên bản **LTS**).
* Kiểm tra bằng cách mở Terminal và chạy:

```bash
node -v
```

Nếu Terminal hiển thị phiên bản Node.js, bạn đã sẵn sàng.

### 2. Cài đặt các gói thư viện

Mở Terminal tại thư mục dự án và chạy lệnh sau để tải tất cả các thư viện cần thiết:

```bash
npm install
```

### 3. Chạy trang web ở chế độ phát triển

Sau khi cài đặt hoàn tất, khởi động dự án bằng lệnh:

```bash
npm run dev
```

Sau đó, giữ phím **Ctrl** và nhấp vào đường dẫn xuất hiện trong Terminal (thường là `http://localhost:5173/` hoặc `http://localhost:5174/`) để mở trang web trên trình duyệt.

---

## 🛠 Cấu trúc dự án

```text
src/
├─ assets/       # Hình ảnh, icon và tài nguyên dùng trong React
├─ components/   # Các component giao diện tái sử dụng
├─ pages/        # Các trang chính của website
└─ ...           # Các file mã nguồn khác

public/          # Tài nguyên tĩnh (JSON, hình ảnh bổ sung, ...)
tailwind.config.js   # Cấu hình Tailwind CSS
vite.config.js       # Cấu hình Vite
```

---

## 🌐 Deploy lên GitHub Pages

Dự án đã được cấu hình để triển khai tự động lên **GitHub Pages**.

### Build phiên bản mới

```bash
npm run build
```

### Deploy lên nhánh `gh-pages`

```bash
npm run deploy
```

---

## 💡 Xử lý sự cố thường gặp

### Lỗi 404 sau khi deploy

Hãy kiểm tra các mục sau:

* Trong **Settings → Pages** của repository GitHub, đảm bảo nguồn deploy được chọn là:

  * Branch: `gh-pages`
  * Folder: `/ (root)`
* Kiểm tra file `vite.config.js` đã được cấu hình đúng:

```js
base: "/Update/";
```

> Thay `Update` bằng tên repository của bạn nếu sử dụng repository khác.

### Giao diện bị vỡ (logo quá to, mất màu, CSS không hoạt động)

Hãy thử:

```bash
npm install
npm run build
npm run deploy
```

Sau đó tải lại trang bằng cách xoá cache trình duyệt hoặc nhấn:

* Windows/Linux: `Ctrl + F5`
* macOS: `Cmd + Shift + R`

---

## ❤️ Đóng góp

Mọi đóng góp để cải thiện website đều được chào đón. Nếu phát hiện lỗi hoặc có đề xuất mới, hãy tạo issue hoặc liên hệ với đội ngũ kỹ thuật của CLB.

---

Cảm ơn bạn đã đồng hành cùng **G4U**! 🎶🎸
