---
title: "Dünya haritası: mesafeler, hız ve toplama"
description: "Dünya haritası; ortasında Taht bölgesi bulunan, oyuncu şehirlerini, kaynak noktalarını ve canavarları barındıran ortak bir alandır. Seyahat genellikle sonundaki…"
videoTopic: "general"
lang: tr
updated: "2026-09-19"
type: guide
---

> Veriler oyun istemcisi üzerinden doğrulanmıştır (v1.0.87, kaynak: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/world-map)).

Dünya haritası; ortasında Taht bölgesi bulunan, oyuncu şehirlerini, kaynak noktalarını ve canavarları barındıran ortak bir alandır. Seyahat genellikle sonundaki savaştan daha uzun sürer, bu nedenle harita hakkında bilinmesi gereken en önemli şey yürüyüş hızının nasıl çalıştığıdır: hız, tüm birlik türleri için tamamen aynıdır ve ordu kompozisyonuna bağlı değildir. Yalnızca kaynak toplama, birlik saldırıları (rally) ve patron (boss) yürüyüşleri iki kat hızla hareket eder, bu yüzden uzak bir hedef neredeyse her zaman birlik saldırısıyla alınır.

## Mesafeler

Harita, ortasında Taht bölgesi olmak üzere dikeyde ve yatayda kabaca bin karelik bir alandır. En uzun yürüyüş, sahadaki tam çapraz mesafeye yakın bir şekilde yaklaşık 1.400 kare sürer.

## Yürüyüş hızı

Temel hız her birlik türü için aynıdır ve bunu açıkça belirtmek gerekir, çünkü bu türdeki diğer oyunlar aksini öğretir. Alışagelmiş "hafifsiklet birlikler daha hızlıdır" kuralı burada geçerli değildir ve kompozisyon hiçbir şeyi değiştirmez. Yük de hiçbir şeyi değiştirmez: hız hesaplaması ordunun ne taşıdığına dair bir girdi içermez, bu nedenle yük taşıyan bir ordu yola çıktığı aynı hızla geri döner.

Fark yaratan şey, yürüyüşün başlatıldığı kuyruktur. Bu kuyruğun Birlik (Squad) binası, araştırmalardan ve ittifak teknolojisinden daha büyük, fark edilir bir hız bonusu sağlar.

## Kaynak toplama noktaları ve elmas madenleri

Haritada dört tür nokta bulunur: çiftlikler, kereste depoları, bitki bahçeleri ve elmas madenleri. Her birinin kendi seviyeleri vardır ve stok ile üretim miktarları bunlarla birlikte artar. Aşağıdaki tablo, her kaynak türünün en düşük ve en yüksek seviyelerini göstermektedir.

| Nokta | Seviyeler | Birinci Seviye | En Yüksek Seviye |
|---|---|---|---|
| Çiftlik | 33 | 135.000 stok, 270.000/s | 1.800.000 stok, 10.800.000/s |
| Kereste deposu | 32 | 135.000 stok, 270.000/s | 2.160.000 stok, 10.800.000/s |
| Bitki bahçesi | 30 | 67.500 stok, 108.000/s | 864.000 stok, 4.320.000/s |
| Elmas madeni | 31 | 10 elmas, 360/s | 185 elmas, 5.400/s |

Elmas madeni, haritadaki tek elmas kaynağıdır ve aynı zamanda en küçük stoklu noktadır; en üst düzeydeki maden 185 elmas verir. Sıradan kaynaklarla aynı birlikler tarafından çalıştırılır ve kendisine giden yoldan başka bir şey gerektirmez.

Burada gözden kaçırması kolay, faydalı bir detay gizlidir. Taşıma kapasitesi farklı kaynaklara göre farklı harcanır: birim başına bir birim tahıl, odun veya bitkinin ağırlığı 1 iken, tek bir elmasın ağırlığı 2.000'dir. Ordunun toplam yükü, bir birimin ağırlığına bölünür; bu yüzden en üst düzey elmas madeni ve içerdiği 185 elmas, çok küçük bir kuvvet tarafından boşaltılabilir. 2.000 ağırlığındaki 185 elmas toplam 370.000 yük eder ve onuncu seviye bir asker 2.200 taşıyabildiğinden, 189 asker fazlasıyla yeterlidir. 1.800.000 tahıl tutan dolu bir çiftlik ise aynı askerlerden 819 tanesini gerektirir.

Uygulama da buna göre şekillenir. Büyük ordular elmas madenleri için boşa harcanır; buralar için birkaç yüz asker fazlasıyla yeterlidir ve asıl ordu kaynak noktalarına gönderilmelidir.

Ayrıca haritada ikmal malzemeleri, askerler ve direniş sağlayan kurtarma noktaları da ortaya çıkar. Bunlar düzenli bir gelir kaynağı olmaktan ziyade tek seferlik yardımlardır.

## Neler iki kat hızla hareket eder?

Yürüyüş hızı ordudaki en yavaş birlik türünden alınır, ancak otuz bir türün tamamı 500'lük aynı değere sahiptir; dolayısıyla kompozisyon gerçekten de önemli değildir. Seyahat süresi, mesafenin 3.600 ile çarpılıp hıza bölünmesiyle bulunur. Bonuslar olmadığında bu, kare başına 7,2 saniye, yüz kare başına on iki dakika ve maksimum menzilde neredeyse üç saat anlamına gelir.

İki katına çıkarma her yürüyüşe uygulanmaz; aşağıdaki tablo hangi seyahatlerin hızlı, hangilerinin normal hızda gerçekleştiğini göstermektedir.

| Yürüyüş | Hız |
|---|---|
| Kaynak toplama | iki katına çıkar |
| Canavara veya oyuncu şehrine birlik saldırısı (Rally) | iki katına çıkar |
| Dünya patronu ve hafta sonu patronu | iki katına çıkar |
| Canavara tek başına saldırı | normal |
| Oyuncu şehrine tek başına saldırı | normal |
| Takviye ve tek başına tapınak savaş yürüyüşü | normal |

Türün genelde düşündürttüğünün aksine buradan iki sonuç çıkar. Tek başına canavar avı, bir baskınla aynı hızda gerçekleşir; bu nedenle uzaktaki bir canavar, uzaktaki bir toplama noktasının iki katı seyahat süresine mal olur. Buna karşılık bir birlik saldırısı (rally), düşman şehrine aynı şehre yapılan tek başına bir saldırıdan iki kat daha hızlı ulaşır; dolayısıyla uzak bir hedef neredeyse her zaman birlik saldırısıyla alınır.

Hız bonusları da dengesiz bir şekilde üst üste biner. Birlik (Squad) binası; kaynak toplamaya, oyunculara yapılan saldırılara, takviyelere ve birlik saldırılarına katkıda bulunurken, tek başına tapınak savaş yürüyüşü bunu tamamen göz ardı eder ve yalnızca genel yürüyüş hızı yüzdesini hesaba katar.

## Neler burada yazmıyor?

Bölgeler, kalkanlar ve yer değiştirmeler hakkında bolca veri var ancak bağımsız incelemeler bunların yarısından azını doğruladı; bu yüzden sayfa yalnızca hızı, mesafeleri ve seyahat süresi oranlarını içermektedir.