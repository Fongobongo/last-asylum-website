---
title: "1. Chụp nhanh (Snap-Shotting) Buff Xây Dựng & Toán học về Thời gian"
description: "Một trong những sai lầm đắt giá nhất mà các chỉ huy mới mắc phải là hiểu sai cách tính toán các buff tốc độ."
lang: vi
updated: "2026-10-12"
type: guide
---
## 1. Chụp nhanh (Snap-Shotting) Buff Xây Dựng & Toán học về Thời gian {#snapshotting}

Một trong những sai lầm đắt giá nhất mà các chỉ huy mới mắc phải là hiểu sai cách tính toán các buff tốc độ.

> [!IMPORTANT]
> **Quy tắc Chụp nhanh (Snap-Shotting):**
> Tất cả các buff tốc độ (trang bị, danh hiệu, rune, công nghệ liên minh) được tính toán **NGHIÊM NGẶT TẠI THỜI ĐIỂM CHÍNH XÁC KHI NHẤN NÂNG CẤP (BẮT ĐẦU)**. Bất kỳ buff nào được kích hoạt sau khi bộ đếm thời gian đã bắt đầu **SẼ KHÔNG LÀM GIẢM** thời gian còn lại của dự án đang thực hiện!

### Ứng dụng thực tế:
* Nếu bạn bắt đầu nâng cấp Sanctuary 30 ngày và 5 phút sau mới trang bị đồ xây dựng hoặc yêu cầu danh hiệu "Bộ trưởng Công trình" (+10%), bộ đếm thời gian vẫn không thay đổi! Trò chơi không tính toán lại các bộ đếm thời gian đang hoạt động một cách hồi tố.
* **Mẹo của người chơi chuyên nghiệp:** Trang bị đồ xây dựng, yêu cầu danh hiệu liên minh tạm thời "Bộ trưởng Công trình" (+10%), kích hoạt rune xây dựng (+5%), khởi chạy nâng cấp Sanctuary 30 ngày khổng lồ — và **ngay lập tức tháo trang bị và từ bỏ danh hiệu**! Buff đã được khóa vĩnh viễn (chụp nhanh) trong suốt 30 ngày đó.

### Toán học đằng sau bộ đếm thời gian:
Thời gian thực tế được xác định bởi:
$$T = \frac{T_{base}}{1 + \sum \text{SpeedBuffs}}$$

Do là phép chia, mỗi buff tốc độ +10% tiếp theo sẽ mang lại số giờ tiết kiệm được ít hơn một chút so với buff trước đó (lợi nhuận giảm dần theo giờ). Tuy nhiên, đối với các bộ đếm thời gian cuối game (Sanctuary 25–30, nơi thời gian cơ bản đạt 40–80 ngày), ngay cả một rune 5% cũng tiết kiệm được **vài ngày tăng tốc đầy đủ**!

## 2. Tràn Bệnh viện & Kỹ thuật Phòng thủ "Ghost Rally" {#ghost-rally}

Bệnh viện của bạn không chỉ là một túp lều chữa bệnh — nó là bức tường lửa quan trọng nhất ngăn chặn sự hủy diệt tài khoản vĩnh viễn.

### Quy tắc Tràn ẩn (Cái chết vĩnh viễn)
Khi thành phố của bạn bị tấn công, những quân lính sống sót sau thất bại sẽ bị thương và lấp đầy giường bệnh.
* Miễn là còn chỗ trong bệnh viện, quân lính sẽ ở trạng thái **Bị thương** và có thể được chữa trị nhanh chóng với tài nguyên rẻ.
* **Khi dung lượng Bệnh viện đạt 100%:** MỌI người lính bị thương sau đó **SẼ CHẾT VĨNH VIỄN**. Nếu một "cá voi" (người chơi nạp nhiều) tấn công thành phố của bạn 3 đến 4 lần liên tiếp trong khi bạn ngủ, hàng trăm nghìn quân cấp cao T8/T9 sẽ bị xóa sổ mãi mãi. Việc xây dựng lại đội quân đó mất hàng tháng trời.

### Bí mật "Ghost Rally" (Rally giả)
Bạn nên làm gì nếu một lực lượng tấn công của kẻ thù dịch chuyển đến tổ đội của bạn trong sự kiện KvK hoặc Kill Events, nhưng bạn không có Khiên Hòa bình (hoặc đã hết kim cương)?

> [!TIP]
> **Cách bảo vệ quân đội của bạn mà không cần khiên:**
> 1. Mở bản đồ thế giới và tìm một pháo đài bỏ hoang, hang ổ zombie cấp cao hoặc trại không hoạt động ở xa.
> 2. Nhấn **Rally** và chọn thời gian tối đa: **8 Giờ**.
> 3. Chỉ định toàn bộ đội hình chiến đấu chính với các anh hùng mạnh nhất của bạn vào rally này.

**Tại sao cách này hiệu quả:** Quân lính được chỉ định vào một rally đang hoạt động bên trong thành phố của bạn hoặc đang hành quân đến mục tiêu rally sẽ có **100% khả năng miễn nhiễm tuyệt đối với các cuộc tấn công sắp tới**. Ngay cả khi kẻ thù tấn công tường thành và đốt cháy thị trấn của bạn, quân lính trong rally của bạn vẫn nhận sát thương bằng 0! Sau khi mối đe dọa đã qua, hãy hủy rally chỉ bằng một cú nhấp chuột, và quân đội tinh nhuệ của bạn sẽ trở về doanh trại an toàn.

## 3. Bí mật Tháp Falcon & Khai quật Liên minh {#falcon-tower}

Các nhiệm vụ Tháp Falcon và bản đồ kho báu liên quan là một trong những nguồn cung cấp kim cương, mảnh anh hùng, tăng tốc và quà tặng liên minh hàng ngày chính. Tuy nhiên, những người chơi bình thường thường nhận chúng một cách ngẫu nhiên và lãng phí tới một nửa phần thưởng tiềm năng.

### Ba quy tắc vàng của việc tích trữ nhiệm vụ Falcon:

1. **Không xóa "Dấu chấm đỏ"**:
   Hoàn thành nhiệm vụ, nhưng **KHÔNG nhấn nút "Nhận"**. Các nhiệm vụ đã hoàn thành với dấu chấm đỏ không bao giờ hết hạn và không có thời hạn — chúng có thể nằm an toàn trên bảng của bạn vô thời hạn. Giữ phần thưởng chưa nhận cho đến khi ngày sự kiện máy chủ mục tiêu bắt đầu (Thứ Hai — Giai đoạn 1 Đấu trường Liên minh; Thứ Tư — Ngày Khoa học; Thứ Sáu — Huấn luyện Quân đội).

2. **Tích trữ đến "Tối đa − 1" (Stacking Max − 1)**:
   Giữ bảng nhiệm vụ của bạn gần đầy dung lượng — duy trì chính xác $N - 1$ nhiệm vụ đã hoàn thành (ví dụ: **24 trên 25 khả năng** ở dung lượng tối đa, hoặc 7 trên 8 ở các cấp độ đầu). Việc để trống một ô là bắt buộc để bộ đếm thời gian tạo nhiệm vụ nền tiếp tục chạy.

3. **Theo dõi giới hạn bảng của bạn (Không bao giờ đóng băng bộ đếm thời gian)**:
   Nếu bảng của bạn đạt dung lượng tối đa (ví dụ: 25 trên 25), **bộ đếm thời gian tạo nhiệm vụ sẽ ĐÓNG BĂNG NGAY LẬP TỨC**. Cho đến khi bạn xóa ít nhất một ô, sẽ không có nhiệm vụ mới nào được tạo ra và các nhiệm vụ hàng ngày miễn phí của bạn sẽ bị lãng phí vĩnh viễn. Hãy thường xuyên nhận các nhiệm vụ đã hoàn thành khi cần thiết để luôn có ít nhất một ô trống cho các nhiệm vụ mới xuất hiện.

> [!TIP]
> **Nhận tất cả bằng một lần nhấn ở cấp 8:** Đạt **Tháp Falcon Cấp 8** sẽ mở khóa tính năng "Nhận tất cả". Vào các ngày thu thập mục tiêu (Thứ Hai, Thứ Tư, Thứ Sáu), một lần nhấn sẽ ngay lập tức gửi toàn bộ kho lưu trữ 24 nhiệm vụ của bạn, mở khóa tất cả các rương phần thưởng sự kiện chỉ trong vài giây sau khi máy chủ đặt lại!

---

### Khai quật Liên minh {#excavations}

Hoàn thành nhiệm vụ Tháp Falcon sẽ nhận được **Bản đồ kho báu**, tạo ra các địa điểm khai quật trên bản đồ thế giới. Đây là một hoạt động liên minh hợp tác với hai loại phần thưởng riêng biệt: phần thưởng khai quật cơ bản và phần thưởng tốc độ khi hoàn thành.

#### 1. Phần thưởng Khai quật Cơ bản (Cho tất cả thành viên Liên minh)
* **Mọi người chạm vào địa điểm khai quật đều nhận được phần thưởng:** Bạn chỉ cần đội của mình đến và vào địa điểm khai quật trong một khoảnh khắc — sự tham gia được ghi nhận ngay lập tức.
* **Quy tắc cốt lõi: KHÔNG cắm trại/ngồi trên địa điểm khai quật!**
  Thời gian khai quật giảm nhanh chóng với mỗi đội đang tích cực đào trên ô đó. Nếu các thành viên liên minh cắm trại tại chỗ, địa điểm sẽ hoàn thành trong vài giây và các đồng minh hành quân từ các thành phố xa xôi **sẽ không đến kịp**.
  > [!IMPORTANT]
  > **Nghi thức Liên minh:** Chạm vào địa điểm khai quật trong một phần giây để xác nhận sự tham gia của bạn, sau đó **ngay lập tức triệu hồi đội của bạn**, cho phép bộ đếm thời gian mở đủ lâu để tất cả đồng đội đến địa điểm với tốc độ hành quân bình thường.

#### 2. Phần thưởng Tốc độ Thêm (Biểu tượng "Bàn tay" cho 10 người chơi)
* **Biểu tượng "Bàn tay" xuất hiện SAU KHI Khai quật kết thúc:**
  Ngay khoảnh khắc khai quật kết thúc, một **biểu tượng "Bàn tay"** xuất hiện phía trên địa điểm. Để lấy phần thưởng thêm này, hãy nhanh chóng nhấn vào **biểu tượng Bàn tay** hoặc chính **địa điểm khai quật**.
* **Giới hạn nghiêm ngặt 10 người chơi đến trước, phục vụ trước:**
  Đây là phần thưởng phản xạ nhanh: chỉ **10 thành viên liên minh đầu tiên** nhấn vào mới nhận được phần thưởng thêm.
* **Một người chơi may mắn nhận được phần thưởng gấp đôi ($2\times$):**
  Chính xác **một người chơi ngẫu nhiên** trong số 10 người nhấn may mắn này sẽ nhận được **Phần thưởng gấp đôi ($2\times$)**!
