---
title: "4. Bẫy Tài nguyên trong Túi & Ngưỡng Bảo vệ Kho hàng"
description: "Kho hàng thành phố của bạn chỉ bảo vệ một lượng tài nguyên nhất định (ví dụ: 3.000.000 Thực phẩm, Gỗ và Thảo mộc ở cấp 20)."
lang: vi
updated: "2026-10-12"
type: guide
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
