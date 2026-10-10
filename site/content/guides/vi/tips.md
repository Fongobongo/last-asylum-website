---
title: "🧠 Mẹo Chuyên Nghiệp, Cơ Chế Ẩn & Bí Mật"
description: "Bách khoa toàn thư đầy đủ về các cơ chế ẩn trong Last Asylum: Plague — chụp nhanh buff xây dựng, chiến thuật phòng thủ Ghost Rally, cơ chế tràn bệnh viện, bẫy chuyển đổi Claire, canh tác tài nguyên trước sự kiện và bí mật kinh tế kim cương."
lang: vi
updated: "2026-09-04"
videoTopic: tips
---

Hầu hết các trò chơi chiến thuật di động thoạt nhìn có vẻ đơn giản: nâng cấp công trình, tăng cấp anh hùng và nhấn vào các nút có dấu chấm đỏ. Tuy nhiên, ẩn sâu bên dưới **Last Asylum: Plague** là một bộ máy toán học tinh vi với hàng chục quy tắc bất thành văn mà trò chơi không bao giờ giải thích.

Những người sống sót hiểu rõ các cơ chế này sẽ tiến bộ **nhanh gấp 2 đến 3 lần**, không bao giờ để mất quân đội trong các cuộc đột kích bất ngờ lúc nửa đêm và luôn đánh bại đối thủ có Might cao hơn 30–50%. Dưới đây là bản tổng hợp các quy tắc không rõ ràng, những sắc thái ẩn và các chiến thuật đã được kiểm chứng qua trận chiến bởi các cựu binh liên minh hàng đầu.

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

---

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

---

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

---

## 4. Bẫy Tài nguyên trong Túi & Ngưỡng Bảo vệ Kho hàng {#warehouse-secrets}

### Tài nguyên An toàn vs Tài nguyên Bị lộ
Kho hàng thành phố của bạn chỉ bảo vệ một lượng tài nguyên nhất định (ví dụ: 3.000.000 Thực phẩm, Gỗ và Thảo mộc ở cấp 20).
* Bất kỳ tài nguyên nào hiển thị trên thanh trên cùng của bạn vượt quá giới hạn bảo vệ của Kho hàng đều **BỊ LỘ**.
* Ngay khoảnh khắc kẻ thù trinh sát phát hiện hàng triệu tài nguyên bị lộ, thành phố của bạn sẽ trở thành mục tiêu hàng đầu và những kẻ tấn công sẽ cướp sạch kho dự trữ của bạn.

> [!CAUTION]
> **Quy tắc vàng về Quản lý Tài nguyên:**
> Không bao giờ, trong bất kỳ trường hợp nào, **mở túi hoặc rương tài nguyên từ kho đồ của bạn trước**!

* Tài nguyên được lưu trữ bên trong túi kho đồ của bạn **hoàn toàn vô hình đối với các báo cáo trinh sát của kẻ thù** và miễn nhiễm 100% với việc cướp bóc.
* Chỉ mở chính xác số lượng túi cần thiết để bắt đầu một công trình hoặc dự án nghiên cứu cụ thể ngay trước khi nhấn nâng cấp. Thành phố của bạn phải luôn trông "nghèo nàn" đối với các trinh sát của kẻ thù.

---

## 5. Định vị Chiến thuật & Cơ chế "Dịch chuyển Hàng" ẩn {#row-shift}

Chiến đấu trong Last Asylum diễn ra theo đội hình hai hàng: Hàng trước (2 anh hùng) và Hàng sau (3 anh hùng). Tuy nhiên, việc nhắm mục tiêu tấn công tự động và sát thương lan tuân theo các quy tắc hình học nghiêm ngặt.

```
ĐỘI HÌNH KẺ THÙ:
[ Enemy Front 1 ]   [ Enemy Front 2 ]
[ Enemy Back 1 ]    [ Enemy Back 2 ]    [ Enemy Back 3 ]
        ▲                   ▲
        │                   │ (Tập trung tấn công tự động trực tiếp)
        ▼                   ▼
[ Your Tank 1 ]     [ Your Tank 2 ]
[ Your Carry 1 ]    [ Your Support ]    [ Your Carry 2 ]
ĐỘI HÌNH CỦA BẠN:
```

### Nhắm mục tiêu trực tiếp và Rò rỉ chéo
* Các đòn tấn công tự động cận chiến ưu tiên đơn vị hàng trước của kẻ thù đứng trực tiếp đối diện.
* Nếu xe tăng cánh trái của bạn (ví dụ: Arthur) ngã xuống trước xe tăng cánh phải (ví dụ: Daskal), cánh trái của kẻ thù **KHÔNG chuyển sang xe tăng bên phải**! Thay vào đó, các đòn tấn công của chúng rò rỉ trực tiếp vào tướng chủ lực hàng sau của bạn đứng sau Arthur!
* **Quy tắc chiến thuật:** Đặt xe tăng có độ bền cao nhất của bạn trực tiếp đối diện với tướng chủ lực gây sát thương lớn nhất của đội hình kẻ thù.

### Hiệp lực Đơn phe phái & Raven Epigraphs
Triển khai 5 anh hùng cùng lớp (ví dụ: 5 Chiến binh) sẽ cấp phần thưởng đội hình cơ bản **+20% ATK, HP và DEF**.
Tuy nhiên, yếu tố thay đổi cuộc chơi thực sự xuất hiện ở cuối game: **UR Raven Epigraphs** cung cấp các hệ số nhân chỉ số phần trăm khổng lồ áp dụng ĐỘC QUYỀN cho một phe phái cụ thể.
* Trong một đội hình 5 Chiến binh thuần túy, mọi epigraph được nâng cấp đều buff 100% cho các anh hùng của bạn.
* Trong một đội hình hỗn hợp (2 Chiến binh, 2 Kiểm lâm, 1 Warlock), giá trị epigraph của bạn giảm **hơn 60%**, vì chỉ một phần nhỏ anh hùng của bạn được hưởng lợi từ các buff.

---

## 6. Bẫy Chuyển đổi Claire (SSR ➔ UR) {#claire-conversion}

Vào Ngày thứ 8 của mùa "Kỷ nguyên Hồi sinh", các chỉ huy mở khóa khả năng chuyển đổi SSR Claire thành một anh hùng UR huyền thoại. Hàng nghìn người chơi nhấn nút ngay lập tức — chỉ để nhận ra rằng tổng sát thương đội hình của họ đã **giảm** một cách bí ẩn!

### Tại sao sát thương lại giảm:
* Một SSR Claire được tối đa hóa cung cấp một buff bị động toàn đội đáng tin cậy là **+16% sát thương**.
* Sau khi chuyển đổi ban đầu sang UR 6★, buff bị động toàn đội đó giảm xuống còn **+10%**. Chỉ số cơ bản cá nhân của cô ấy tăng nhẹ, nhưng sát thương tổng thể của đội hình bạn giảm đáng kể.

### Cách bỏ qua sự sụt giảm:
Đừng chuyển đổi Claire ngay khi cô ấy khả dụng!
1. Tích trữ mã thông báo và mảnh Hội Trường Vinh Quang trước đó (nhắm đến Cấp 100 hoặc Cấp 160 trong Hall).
2. Vào ngày chuyển đổi, hãy sử dụng tài nguyên đã lưu của bạn cùng một lúc để tăng cấp cho cô ấy vượt qua 6★ trực tiếp lên **9★ hoặc 10★**.
3. Tại UR 10★, Claire mang lại một cú hích sức mạnh chiến thắng: **hệ số nhân sát thương cá nhân x2.20** và mở khóa *Adv. Tenacity* (+20% ATK/DEF/HP và -10% giảm thời gian hồi chiêu cho toàn đội).

---

## 7. Canh tác Tài nguyên trước cho Ngày Thu thập & Đấu trường Liên minh {#pre-farming}

Ngày Thu thập (Giai đoạn 1 của Đấu trường Liên minh vào Thứ Hai, hoặc Ngày 1 / Ngày 7 của Supreme Healer) là cơ hội tuyệt vời để khởi đầu nhanh chóng. Các liên minh kỳ cựu thường xuyên giành chiến thắng trong vòng 5 phút đầu tiên sau nửa đêm.

> [!TIP]
> **Bí mật tính toán điểm số:**
> Trò chơi trao điểm Thu thập **KHÔNG phải khi đang khai thác ô, mà TẠI GIÂY CHÍNH XÁC ĐỘI HÀNH QUÂN TRỞ VỀ thành phố của bạn**!

### Quy trình Canh tác trước từng bước:
1. Vào đêm trước Ngày Thu thập (ví dụ: tối Chủ nhật khoảng 4 đến 5 giờ trước khi đặt lại hàng ngày lúc 02:00 UTC), hãy cử tất cả các đội thu thập đến các nút tài nguyên Cấp 6 hoặc 7 giàu có nhất (tốt nhất là Vàng hoặc Thảo mộc).
2. Tính thời gian hành quân để việc thu thập hoàn tất và quân đội hành quân trở lại cổng của bạn vào lúc **02:02–02:05 UTC (00:02–00:05 giờ máy chủ) vào ngày đặt lại**.
3. Ngay khoảnh khắc đồng hồ điểm đặt lại, 5 giờ thu thập đa đội sẽ được tính cùng lúc — ngay lập tức mang lại **1,5 đến 2,5 triệu điểm** và mở khóa 2 đến 3 cấp rương trong vài giây!

### Nghi thức Bản đồ Thế giới: Dọn sạch ô
Không bao giờ để lại các nút tài nguyên đã thu thập một phần. Nếu một đồng minh để lại 4.000 gỗ trên một nút 500.000, ô đó sẽ bị chết trong tối đa 12 giờ, chặn sự xuất hiện của một nút cấp cao mới. Luôn dọn sạch các ô về 0 hoặc cử một đội trinh sát 1 quân để hoàn thành phần còn lại.

---

## 8. Sân tập: Chia tách 4 Sân & Mẹo Thăng cấp T4 {#troop-promotion}

Các cấp quân đội mở khóa theo cấp độ Sân tập: T6 ở Lv. 17, T7 ở 20, T8 ở 24, T9 ở 27 và T10 ở Lv. 30 với nghiên cứu Quân đội Tinh nhuệ đã hoàn thành.

Hầu hết người chơi mới mắc một sai lầm thảm hại: họ nâng cấp cả bốn Sân tập bằng nhau và huấn luyện cấp cao nhất đã mở khóa từ đầu trên mỗi sân. Điều này đốt cháy hàng chục triệu tài nguyên và buộc phải chờ đợi hơn 30 giờ. Người chơi kỳ cựu sử dụng **Chia tách 1 Tối đa + 3 Thấp**.

### Chia tách cấp độ 4 Sân tập:
* **1 Sân tập Chính (Cấp tối đa):** Giữ cấp độ này khớp với giới hạn Sanctuary của bạn. Đây là công trình duy nhất cần thiết để mở khóa cấp độ huấn luyện cao nhất của bạn (ví dụ: T9 ở Lv. 27, T10 ở Lv. 30).
* **3 Sân tập Hỗ trợ (Cấp 10):** Giữ các sân này nghiêm ngặt ở **Cấp 10**! Cấp 10 mở khóa quân đội **Cấp 4 (T4)**. Sân tập thứ 4 được mở khóa gần cuối cây nghiên cứu **Phát triển** — hãy mở khóa nó càng sớm càng tốt.
* Tại sao? Nâng cấp cả 4 sân lên Lv. 27–30 tiêu tốn một lượng lớn Gỗ, Ngũ cốc và Thảo mộc mà không mở khóa thêm cấp độ nào. Trò chơi chỉ yêu cầu **một** công trình tối đa để huấn luyện và thăng cấp lên cấp cao nhất.

### Đường ống "Nhà máy T4 → Thăng cấp":
1. **Giai đoạn A (Sản xuất T4 song song):** Xếp hàng lính Cấp 4 trên cả ba sân cấp 10 cùng lúc.
   * Trên một sân, một lô T4 mất ~10,5 giờ (~455 lính).
   * Trên ba sân, bạn sản xuất **~1.365 lính T4** trong cùng khoảng thời gian ~10,5 giờ đó.
2. **Giai đoạn B (Thăng cấp trên Sân chính):** Mở Sân tập tối đa của bạn, chuyển từ "Huấn luyện" sang **"Thăng cấp"**, và thăng cấp lính T4 đã tích trữ của bạn lên cấp cao nhất (ví dụ: T9 hoặc T10).
   * Thăng cấp một lô T4 đầy đủ lên T9 chỉ mất **~16,5 giờ** (so với ~33 giờ để huấn luyện T9 từ đầu!).
3. **So sánh chu kỳ tổng thể:**
   * **Lộ trình Thăng cấp:** 10,5h (T4) + 16,5h (thăng cấp) = **~26 giờ**.
   * **Hàng đợi cấp cao trực tiếp:** Một lô T9 đơn lẻ = **~33 giờ**.
   * **Lợi ích ròng:** Tiết kiệm **6 đến 7 giờ mỗi chu kỳ**, giữ cho doanh trại hoạt động 24/7 và bảo toàn hàng triệu tài nguyên.

> [!NOTE] Tính điểm Đấu trường Liên minh (Thứ Sáu — Huấn luyện Quân đội)
> * Xếp hàng lính T4 trên 3 sân hỗ trợ sẽ nhận được điểm huấn luyện đầy đủ (điểm được trao **tại khoảnh khắc hàng đợi bắt đầu**, không phải khi thu thập!).
> * Thăng cấp lính sẽ nhận được điểm sự kiện cho sự khác biệt cấp độ giữa T4 và T9/T10.
> * Bất kỳ tăng tốc nào được sử dụng cho hàng đợi thăng cấp đều được tính đầy đủ vào các danh mục sự kiện tiêu thụ tăng tốc.

---

## 9. Nghiên cứu: Khóa Rương Đấu trường Liên minh (Siêu phần thưởng 1 & 2) {#duel-research-lock}

Phòng thí nghiệm Nghiên cứu có 13 cây nghiên cứu riêng biệt. Cửa ải tiến triển sớm quan trọng nhất nằm ẩn trong nhánh **Đấu trường Liên minh**:

* Cây này chứa hai cột mốc không thể thương lượng: **Siêu phần thưởng 1** và **Siêu phần thưởng 2**.
* **Nếu không có Siêu phần thưởng 1, bạn không thể mở rương phần thưởng Đấu trường Cấp 4–6**, ngay cả khi bạn kiếm đủ điểm yêu cầu!
* **Nếu không có Siêu phần thưởng 2, rương Cấp 7–9 sẽ bị khóa vật lý!**
* Những rương hàng đầu này chứa huyết mạch của sự tiến triển tài khoản: hàng nghìn Cuộn nghiên cứu, Mảnh UR Hero Omni, vật liệu trang bị cấp 11 và lên đến **10.000 Kim cương**.
* **Quy tắc F2P:** Ngay sau các nút Phát triển cơ bản (Tốc độ Xây dựng và Nghiên cứu), hãy tập trung Cuộn nghiên cứu của bạn vào Siêu phần thưởng 1 & 2. Điều này mở khóa bộ máy phần thưởng tài trợ cho tài khoản của bạn trong nhiều tháng.

---

## 10. Ưu tiên Trang bị: Xưởng Luyện kim Lv. 25 & Tối ưu hóa Ô {#gear-priorities-tips}

Đá trang bị bị hạn chế nghiêm trọng. Việc rải chúng trên các ô trang bị ngẫu nhiên sẽ làm tê liệt hiệu suất giữa game:

1. **Xưởng Luyện kim → Cấp 25:** Đẩy Xưởng Luyện kim lên Cấp 25 ngay khi Sanctuary của bạn cho phép. Đây là nút thắt chính để tinh chế Đá trang bị. Trì hoãn nó sẽ khiến tướng chủ lực của bạn thiếu trang bị đúng lúc độ khó tăng vọt.
2. **Ưu tiên ô DPS / Chủ lực:**
   * **Ưu tiên hàng đầu:** Vũ khí (Kiếm) và Găng tay (tăng ATK, Crit và Xuyên giáp).
   * **Ưu tiên thứ hai:** Giày (tốc độ và khả năng sống sót cơ bản).
   * **Giáp ngực:** Để ở cấp cơ bản. DEF thêm trên tướng chủ lực gần như không có tác động đến chiến thắng.
3. **Ưu tiên ô Xe tăng:**
   * **Ưu tiên hàng đầu:** Giáp ngực và Giày (HP thô và giảm sát thương).
   * **Vũ khí (Kiếm):** **Không bao giờ dùng đá cho kiếm của xe tăng!** Xe tăng chiến thắng bằng cách sống sót và bảo vệ hàng sau. Tinh chế kiếm của xe tăng chỉ làm tăng Might hiển thị mà không thêm giá trị chiến đấu thực tế.
4. **Cửa hàng Danh dự:** Mua **Bản thiết kế trang bị (UR)** độc quyền. Bỏ qua Rương Curio và mảnh vạn năng — bản thiết kế là cửa ải cho mọi cấp độ thăng cấp trang bị cam (Lv. 10, 20, 30, 40).

---

## 11. Chuyên gia Trùm Thế giới: Ash và Celia {#boss-specialists}

Trong khi các anh hùng tím (SSR) bị loại khỏi đội hình PvP sớm, hai nhân vật có tiện ích Trùm Thế giới không thể thay thế:

* **Ash:** Kỹ năng bị động «Focus» của cô ấy buff **sát thương lên quái vật** gây ra bởi hai kiểm lâm có chỉ số tấn công cao nhất trong đội (theo client v1.0.102).
* **Celia:** Tăng phần thưởng tài nguyên thêm và phần thưởng tiêu diệt từ Trùm Thế giới.
* Đầu tư đá kỹ năng tím dự phòng vào hai nhân vật này mang lại lợi tức trọn đời trong chiến lợi phẩm trùm.

---

## 12. Kỷ luật Kim cương: Nơi chi tiêu vs Những gì cần tránh {#diamond-discipline}

Kim cương là loại tiền tệ hàng đầu. Mặc dù hào phóng trong giai đoạn đầu game, việc chi tiêu liều lĩnh sẽ khiến người chơi bị thiếu hụt khi các sự kiện quan trọng đến.

| Đầu tư hàng đầu (PRO) | Không bao giờ tiêu kim cương ở đây (NOOB) |
|---|---|
| **Vòng quay Kì nguyện** vào Ngày 8 (Xynthia) và Ngày 36+ (Anh hùng UR). Luôn quay theo lô 10x để đảm bảo. | Tuyển dụng Quán Rượu tiêu chuẩn (tỷ lệ UR thấp, không có lưới an toàn). |
| **Điểm VIP** trong các sự kiện Hoàn trả Kim cương để đẩy lên VIP 8 (thợ xây vĩnh viễn thứ 2) và VIP 11 (+10% tốc độ vĩnh viễn). | Bỏ qua thời gian xây dựng ngay lập tức bằng kim cương thô. |
| **Khiên Hòa bình 8 giờ** trong các sự kiện KvK và Kill Events cuối tuần. | Mua Thực phẩm hoặc Gỗ tiêu chuẩn trực tiếp từ cửa hàng vật phẩm. |
| Làm mới **Cửa hàng Liên minh & Thương nhân Bí ẩn** để nhận tăng tốc giảm giá 70–80%. | Hồi sinh quân đội tiêu chuẩn bên ngoài phòng thủ pháo đài quan trọng. |

---

## 13. Danh sách kiểm tra tóm tắt: 12 Điều răn về sự sống sót {#ten-commandments}

1. **Buff tốc độ chụp nhanh khi bắt đầu** — Kích hoạt danh hiệu bộ trưởng, rune và trang bị TRƯỚC KHI nhấn nâng cấp.
2. **Bệnh viện trống = quân đội sống** — Tràn bệnh viện gây ra cái chết vĩnh viễn không thể đảo ngược cho quân đội.
3. **Ghost Rally để bảo vệ quân đội** — Ẩn đội hành quân tốt nhất của bạn trong một rally 8 giờ khi đối mặt với các cuộc đột kích không thể thắng.
4. **Không bao giờ mở túi tài nguyên kho đồ** — Giữ túi niêm phong cho đến khoảnh khắc chính xác khi nâng cấp bắt đầu.
5. **Tháp Falcon: Tích trữ Tối đa − 1** — Giữ một ô trống để duy trì sự xuất hiện nền; nhận vào Thứ Hai/Thứ Tư/Thứ Sáu.
6. **Không chuyển đổi SSR Claire quá sớm** — Tích trữ mã thông báo Hội Trường Vinh Quang để bỏ qua sự sụt giảm chỉ số 6★ trực tiếp lên 9★/10★.
7. **Canh tác trước các nút thu thập vào đêm trước Ngày Thu thập** — Tính thời gian trở về lúc 00:05 UTC vào ngày đặt lại (ví dụ: tối Chủ nhật sang Thứ Hai) để nhận rương ngay lập tức.
8. **Chia tách 4 Sân (1 Tối đa + 3 Lv.10):** Canh tác song song T4 trên 3 sân hỗ trợ và thăng cấp trên sân chính của bạn, tiết kiệm 6–7 giờ mỗi chu kỳ.
9. **Siêu phần thưởng 1 & 2 trong Lab — Không thể thương lượng:** Nếu không có chúng, các cấp rương Đấu trường 4–9 vẫn bị khóa vĩnh viễn.
10. **Không bao giờ tinh chế kiếm của xe tăng:** Đá trang bị thuộc về Kiếm/Găng tay chủ lực và Giáp ngực/Giày xe tăng.
11. **Không bao giờ tiêu kim cương vào các lần quay Quán Rượu thô** — Tiết kiệm ~1.500 cho cột mốc Vòng quay Kì nguyện (7 lần quay miễn phí + 3 lần trả phí = bản sao Xynthia) và đẩy phần còn lại vào tiến trình VIP.
12. **Đơn phe phái đánh bại các thiết lập hỗn hợp** — Năm anh hùng cùng lớp được tối đa hóa với Raven Epigraphs thống trị các đội hình hỗn hợp.

---

## 5 Hối tiếc hàng đầu của Korpez trong giai đoạn đầu game — Đừng lặp lại chúng {#korpez-regrets}

Từ 7 tháng chơi tài khoản chính, năm sai lầm mà các cựu binh liên tục khuyên người chơi mới nên tránh:

1. **Mua rương Curio trong cửa hàng Danh dự thay vì bản thiết kế.** Bản thiết kế trang bị là thứ duy nhất Danh dự mua được mà khan hiếm ở mọi nơi khác. Curio rơi thụ động; bản thiết kế thì không.
2. **Cho Arthur ăn UR Omnis.** Anh ta già đi rất tệ. Hãy giữ chúng cho **Marlena lên 10★** — cô ấy gánh toàn bộ 30–60 ngày đầu tiên.
3. **Bỏ qua các Xưởng Luyện kim.** Năm xưởng ở cấp 23–25 = 44K đá trang bị/tuần thụ động. Đẩy chúng muộn là điều chặn mọi điểm dừng cấp 40 sau này.
4. **Rải đá trang bị trên trang bị tím (SSR).** Trang bị đúng cho đúng anh hùng: kiếm+găng tay+giày cho DPS, giáp ngực+giày cho xe tăng, mọi thứ khác ở mức không cho đến khi UR.
5. **Nâng cấp kỹ năng tấn công trên xe tăng.** Tấn công của xe tăng không làm gì cả; kỹ năng của họ hoạt động dựa trên DEF/HP thay thế.