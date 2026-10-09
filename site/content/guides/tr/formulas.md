---
title: "Oyun nasıl hesaplar: Elmaslar ve yüzdeler"
description: "Hızlandırma fiyatları, kaynak oranları, kritik şansı ve keşif maliyetlerinin oyun tarafından nasıl hesaplandığı genellikle oyuncular tarafından deneme yanılma yoluyla öğrenilir. Bu sayfa, o hesaplamaların …"
lang: tr
updated: "2026-09-19"
type: guide
---

> Veriler oyun istemcisi üzerinden doğrulanmıştır (v1.0.87, kaynak: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/formulas)).


Hızlandırma fiyatları, kaynak oranları, kritik şansı ve keşif maliyetlerinin oyun tarafından nasıl hesaplandığı genellikle oyuncular tarafından deneme yanılma yoluyla öğrenilir. Bu sayfa, bu hesaplamaların bilinmesi gereken kısımlarını herhangi bir türetme yapmaksızın bir araya getirmektedir. Aynı türdeki yüzdeler kendi arasında toplanırken zaman, bu toplamın bir fazlasına bölünür; bu da hız bonusundaki her yeni puanın, bir öncekinden daha az zaman kazandırmasına neden olur.

## Elmasla hızlandırmalar, süre uzadıkça ucuzlar

Süre başına elmas fiyatı ve aynı fiyatın saatlik karşılığı:

| Süre | Elmas | Saatlik |
|---|---|---|
| 1 dakika | 5 | 300 |
| 15 dakika | 55 | 220 |
| 1 saat | 187 | 187 |
| 8 saat | 1.194 | 149 |
| 1 gün | 3.183 | 133 |
| 1 hafta | 18.072 | 108 |

Maliyet süreden daha yavaş artar; bu nedenle, küçük eklemelerle harcanan bir saatlik süre, bir haftalık bir işten düşülen bir saatlik sürenin üç katına mal olur. Elmasları küçük bitirmeler için harcamak en kötü orandır.

## Elmas başına kaynaklar

Bir elmasın satın aldığı miktar: Tahıl: 1.000, Kereste: 1.000, Ot: 600.

## Yüzdeler toplanır, zaman bölünür

Bu kural, oyundaki her bonusun temelinde yer alır. Aynı türdeki tüm yüzdeler basitçe toplanır: bina, araştırma, ittifak teknolojisi, kurtulan (survivor), ekipman, VIP. Hiçbir yerde çarpma işlemi yapılmaz, dolayısıyla +%10 ve +%10, +%21 yerine +%20 yapar.

Bundan sonra ne olacağı değişir ve tuzak da burada yatar. Kapasite, üretim veya asker sayısı gibi bir miktara uygulandığında, toplam doğrudan eklenir ve sonuç, bir artı bu toplamla çarpılır. Zamana uygulandığında ise aynı toplam bölen olur ve süre, bir artı bu toplama bölünür. Tablo, bir hız bonusunun gerçekten ne kadar değer taşıdığını göstermektedir.

| Toplam hız bonusu | Kaç kat daha hızlı | Kalan süre |
|---|---|---|
| +%50 | 1,5 | %67 |
| +%100 | 2 | %50 |
| +%200 | 3 | %33 |
| +%300 | 4 | %25 |
| +%500 | 6 | %17 |

Buradan bariz olmayan bir sonuca varılabilir. Hızdaki ilk yüz yüzde süreyi yarıya indirir, ikinci yüz yüzde 17 puan daha kısaltır, üçüncüsü bir 8 puan daha kısaltır ve bundan sonra kazanç neredeyse hiç hissedilmez. Sonsuza kadar hız kovalamak anlamsızdır, buna karşın ilk %100'e ulaşmak neredeyse her zaman karşılığını verir.

Toplamın ayrıca katı bir tabanı vardır; üst üste ne kadar yavaşlatma biriktirilirse biriktirilsin, asla -%90'ın altına düşmez.

## Bilmeye değer küçük gerçekler

Kalan hesaplamaların her biri bir satıra sığar ve bunları bilmek çoğunlukla tamlık açısından faydalıdır.
- Temel kritik şansı %5'tir, ardından saldırganın kritik değeri eklenir ve hedefin direnişi çıkarılır.
- İttifak boyutu 50 ile başlar ve seviye başına beş artar.
- Keşif maliyeti 1.000 artı hedef seviyesi başına yüzdür.
- Moral 1 ile 2 arasında sınırlandırılmıştır, bu nedenle bir savaşı en fazla iki katına çıkarabilir.
- Arena puanları derecelendirme farkına bağlıdır: daha güçlü bir rakibi yenmek daha çok kazandırır.