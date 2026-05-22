# Online Guestbook (Lưu bút Online)

Đây là phiên bản Lưu bút Online hiện đại, được viết lại bằng **Next.js 16 (App Router)**. Giao diện thiết kế theo phong cách "Liquid Glass", hỗ trợ Dark Mode và gửi email bảo mật qua Emailjs.

---

##  Hướng dẫn cài đặt & Chạy (Local)

Trước tiên, hãy đảm bảo máy bạn đã cài **Node.js** (v20 trở lên) và **git**.

1.  **Clone source code:**
    ```bash
    git clone https://github.com/yunkhngn/online-guestbook.git
    cd online-guestbook
    ```

2.  **Cài đặt thư viện:**
    ```bash
    npm install
    # hoặc
    yarn install
    ```

3.  **Chạy server development:**
    ```bash
    npm run dev
    # hoặc
    yarn dev
    ```
    Truy cập [http://localhost:3000](http://localhost:3000) để xem web.

---

## ⚙️ Config Data (Nội dung)

Mọi nội dung hiển thị trên web (tên, lời chào, ảnh nền...) đều được cấu hình tập trung tại file `lib/DataConfig.js`.

Bạn mở file này ra và sửa các thông tin sau:

-   `meta`: Cấu hình SEO và hiển thị trên mạng xã hội.
    -   `title`: Tên hiển thị trên tab trình duyệt.
    -   `description`: Mô tả ngắn gọn (hiện trên Google).
    -   `img`: Ảnh đại diện khi chia sẻ link (OG Image).
-   `headCard`: Cấu hình phần Hero (Trang chủ & Trang cảm ơn).
    -   `title`: Tiêu đề lớn (tự động ghép với tên bạn).
    -   `image`: Link ảnh nền (nên dùng ảnh ngang, chất lượng cao).
    -   `content`, `content2`: Lời ngỏ đầu trang.
-   `writePage`: Cấu hình trang viết thư.
    -   `dateLabel`: Nhãn hiển thị ngày tháng (VD: "Ngày viết").
    -   `titlePlaceholder`, `namePlaceholder`, `rolePlaceholder`: Các dòng gợi ý nhập liệu.
-   `submit`: Cấu hình popup/trang sau khi gửi.
    -   `title`, `subheader`, `content`: Lời cảm ơn sau khi gửi.
    -   `returnButtonText`, `returnButtonUrl`: Nút quay về (VD: Direct cho tớ).
    -   `playlistButtonText`, `playlistButtonUrl`: Nút nghe nhạc (VD: Playlist chữa lành).

**Lưu ý:** Phần credit `@yunkhngn` ở cuối trang đã được hardcode để giữ bản quyền tác giả gốc.

---

## Config Env (EmailJS)

Để tính năng gửi thư hoạt động, bạn cần cấu hình **EmailJS**.

1.  Đăng ký tài khoản tại [EmailJS.com](https://www.emailjs.com/).
2.  Tạo một **Email Service** (kết nối với Gmail của bạn).
3.  Tạo một **Email Template**.
    -   Mở file `email-template-COPY-THIS-TO-EMAILJS.html` trong dự án này.
    -   Copy toàn bộ code HTML đó.
    -   Paste vào phần "Source code" trong editor của EmailJS Template.
    -   Lưu lại (**Save**).
4.  Lấy các Key sau trong EmailJS:
    -   **Service ID**: Trong tab Email Services.
    -   **Template ID**: Trong tab Email Templates.
    -   **Public Key**: Trong Account > General.
    -   **Private Key**: Trong Account > Security (Tùy chọn, để bảo mật hơn).

5.  Về lại dự án, tạo file `.env` (từ file `.env.example`):
    ```ini
    EMAILJS_SERVICE_ID=service_xxxxxx
    EMAILJS_TEMPLATE_ID=template_xxxxxx
    EMAILJS_PUBLIC_KEY=user_xxxxxx
    EMAILJS_PRIVATE_KEY=your_private_key
    ```
    *Thay `xxxxxx` bằng mã thật của bạn.*

---

## Deploy Vercel (Miễn phí)

Cách dễ nhất để đưa web lên mạng là dùng Vercel.

1.  Đẩy code của bạn lên **GitHub** (hoặc GitLab/Bitbucket).
2.  Truy cập [Vercel.com](https://vercel.com/) và đăng nhập.
3.  Chọn **"Add New..."** -> **"Project"**.
4.  Chọn repo GitHub bạn vừa push code lên.
5.  Tại mục **Environment Variables**, điền 4 key EmailJS bạn đã lấy ở bước trên:
    -   `EMAILJS_SERVICE_ID`
    -   `EMAILJS_TEMPLATE_ID`
    -   `EMAILJS_PUBLIC_KEY`
    -   `EMAILJS_PRIVATE_KEY`
6.  Ấn **Deploy**. Chờ khoảng 1-2 phút là xong!

---

## Tính năng Developer Tools (Review)

Khi chạy ở chế độ dev (`yarn dev`), trang Viết thư (`/write`) và Xem thư (`/letter`) sẽ có thêm hộp công cụ **Dev Zone**:

-   **Test Mode**: Gửi thư giả lập (không thực sự gửi email) để test giao diện.
-   **Reset Local Data**: Xóa sạch dữ liệu nháp trong máy để test lại flow từ đầu "như mới".

---
*Created by @Hai Namm*
