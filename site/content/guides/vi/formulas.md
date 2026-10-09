---
title: "Cách trò chơi tính toán: kim cương và tỷ lệ phần trăm"
description: "Cách trò chơi tính giá tăng tốc, tỷ lệ tài nguyên, tỷ lệ chí mạng và chi phí trinh sát thường được người chơi tự mày mò qua thử nghiệm. Trang này tổng hợp các phần đáng biết của những phép tính đó..."
lang: vi
updated: "2026-09-19"
type: guide
---

> Dữ liệu đã được xác thực với client trò chơi (v1.0.87, nguồn: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/formulas)).


Cách trò chơi tính giá tăng tốc, tỷ lệ tài nguyên, tỷ lệ chí mạng và chi phí trinh sát thường được người chơi tự mày mò qua thử nghiệm. Trang này tổng hợp các phần đáng biết của những phép tính đó mà không cần suy diễn phức tạp. Các tỷ lệ phần trăm cùng loại sẽ cộng dồn với nhau, trong khi thời gian sẽ chia cho tổng số đó, điều này khiến cho mỗi điểm tốc độ bổ sung sau đó sẽ cắt giảm thời gian ít hơn điểm trước đó.

## Tăng tốc bằng Kim cương sẽ rẻ hơn khi thời gian công việc càng dài

Giá kim cương tính theo thời gian và giá tính theo giờ tương ứng:

| Thời gian | Kim cương | Mỗi giờ |
|---|---|---|
| 1 phút | 5 | 300 |
| 15 phút | 55 | 220 |
| 1 giờ | 187 | 187 |
| 8 giờ | 1.194 | 149 |
| 1 ngày | 3.183 | 133 |
| 1 tuần | 18.072 | 108 |

Chi phí tăng chậm hơn thời gian, do đó một giờ dùng các gói tăng tốc nhỏ sẽ đắt gấp ba lần một giờ được cắt giảm từ công việc kéo dài một tuần. Dùng kim cương để hoàn thành ngay các việc nhỏ là cách có tỷ lệ quy đổi tệ nhất.

## Tài nguyên quy đổi theo kim cương

Một kim cương mua được Lương thực (grain): 1.000, Gỗ (timber): 1.000, Thảo dược (herbs): 600.

## Phần trăm cộng dồn, thời gian chia nhỏ

Quy tắc này nằm đằng sau mọi phần thưởng trong trò chơi. Tất cả các tỷ lệ phần trăm cùng loại đơn giản là cộng dồn lại với nhau: xây dựng, nghiên cứu, công nghệ liên minh, người sống sót (survivor), trang bị, VIP. Không có phép nhân nào ở đây cả, vì vậy +10% và +10% sẽ thành +20% thay vì +21%.

Điều gì xảy ra tiếp theo mới là điểm khác biệt, và đó là nơi cái bẫy xuất hiện. Khi áp dụng cho một đại lượng như sức chứa, sản lượng hoặc số lượng lính, tổng số sẽ được cộng trực tiếp và kết quả được nhân với một cộng với tổng đó. Khi áp dụng cho thời gian, tổng số tương tự sẽ được dùng để chia, và thời gian sẽ chia cho một cộng với tổng số. Bảng dưới đây cho thấy giá trị thực sự của phần thưởng tốc độ.

| Tổng phần thưởng tốc độ | Nhanh hơn gấp | Thời gian còn lại |
|---|---|---|
| +50% | 1,5 | 67% |
| +100% | 2 | 50% |
| +200% | 3 | 33% |
| +300% | 4 | 25% |
| +500% | 6 | 17% |

Một kết luận không hiển nhiên sẽ rút ra từ đây. Một trăm phần trăm tốc độ đầu tiên cắt giảm một nửa thời gian, một trăm phần trăm thứ hai cắt giảm thêm 17 điểm, trăm thứ ba cắt giảm thêm 8, và vượt qua mức đó thì mức tăng gần như không còn cảm nhận rõ nữa. Việc theo đuổi tốc độ mãi mãi là vô nghĩa, trong khi đạt được mốc 100% đầu tiên hầu như luôn mang lại hiệu quả xứng đáng.

Tổng số này cũng có một giới hạn tối thiểu cứng, không bao giờ giảm xuống dưới -90%, cho dù có bao nhiêu hiệu ứng làm chậm được chồng chất lên nhau.

## Những thông tin nhỏ đáng biết

Các phép tính còn lại chỉ chiếm một dòng mỗi cái, và chúng đáng chú ý chủ yếu để đảm bảo tính đầy đủ.
- Tỷ lệ chí mạng cơ bản là 5%, sau đó cộng thêm chí mạng của kẻ tấn công và trừ đi kháng chí mạng của mục tiêu.
- Kích thước liên minh bắt đầu từ 50 và tăng thêm năm mỗi cấp.
- Chi phí trinh sát là 1.000 cộng thêm một trăm cho mỗi cấp độ mục tiêu.
- Sĩ khí (Morale) được giới hạn trong khoảng từ 1 đến 2, vì vậy nó có thể tăng gấp đôi sức mạnh trong trận chiến là tối đa.
- Điểm Đấu trường phụ thuộc vào chênh lệch xếp hạng: đánh bại đối thủ mạnh hơn sẽ nhận được nhiều điểm hơn.