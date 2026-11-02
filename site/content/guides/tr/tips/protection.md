---
title: "4. Çanta Kaynak Tuzağı ve Depo Koruma Eşikleri"
description: "Şehir deponuz (Warehouse) her bir kaynaktan yalnızca kesin olarak sınırlanmış bir miktarı korur (örn. 20. seviyede 3.000.000 Yiyecek, Kereste ve Ot)."
lang: tr
updated: "2026-10-12"
type: guide
---
## 4. Çanta Kaynak Tuzağı ve Depo Koruma Eşikleri {#warehouse-secrets}

### Güvenli ve Açıkta Kalan Kaynaklar
Şehir deponuz (Warehouse) her bir kaynaktan yalnızca kesin olarak sınırlanmış bir miktarı korur (örn. 20. seviyede 3.000.000 Yiyecek, Kereste ve Ot).
* Üst çubuğunuzda depo koruma sınırının üzerinde gösterilen tüm kaynaklar **AÇIKTADIR**.
* Bir düşman gözcüsü açıkta kalan milyonlarca kaynağı fark ettiği anda şehriniz birincil hedef haline gelir ve saldırganlar rezervlerinizi sonuna kadar soyar.

> [!CAUTION]
> **Kaynak Yönetiminin Altın Kuralı:**
> Hiçbir koşulda, **envanterinizdeki kaynak çantalarını veya sandıklarını önceden açmayın**!

* Envanter çantalarınızın içinde saklanan kaynaklar **düşman gözcü raporlarına karşı tamamen görünmezdir** ve yağmaya karşı %100 bağışıktır.
* Belirli bir bina veya araştırma projesini başlatmak için gereken tam çanta sayısını, yalnızca yükseltmeye basmadan hemen önce açın. Şehriniz düşman gözcülerine karşı her zaman "tahsilsiz/fakir" görünmelidir.

## 5. Taktiksel Konumlandırma ve Gizli "Sıra Kaydırma" (Row Shift) Mekanikleri {#row-shift}

Last Asylum'daki savaş iki sıralı bir düzende gerçekleşir: Ön Saf (2 kahraman) ve Arka Saf (3 kahraman). Ancak, otomatik saldırı hedeflemesi ve alan hasarı sıkı geometrik kuralları takip eder.

```
 DÜŞMAN DÜZENİ:
 [ Düşman Ön 1 ]    [ Düşman Ön 2 ]
 [ Düşman Arka 1 ]  [ Düşman Arka 2 ]  [ Düşman Arka 3 ]
         ▲                  ▲
         │                  │ (Doğrudan Otomatik Saldırı Odağı)
         ▼                  ▼
 [ Sizin Tank 1 ]   [ Sizin Tank 2 ]
 [ Sizin Taşıyıcı 1 ] [ Sizin Destek ] [ Sizin Taşıyıcı 2 ]
 SİZİN DÜZENİNİZ:
```

### Doğrudan Hedefleme ve Çapraz Sızıntılar
* Yakın dövüş otomatik saldırıları, doğrudan karşısında duran düşman ön saf birimine öncelik verir.
* Sol kanattaki tankınız (örn. Arthur) sağ kanattaki tankınızdan (örn. Daskal) önce düşerse, düşmanın sol kanadı **sağ tanka geçiş YAPMAZ**! Bunun yerine saldırıları, doğrudan Arthur'un arkasında duran arka saf taşıyıcınıza sızar!
* **Taktiksel kural:** Birincil dayanıklılık tankınızı, doğrudan düşman birliğinin en yüksek patlama hasarı (burst) veren taşıyıcısının karşısına yerleştirin.

### Tek-Irk (Mono-Faction) Sinerjisi ve Raven Yazıtları
Aynı sınıftan 5 kahraman konuşlandırmak (örn. 5 Savaşçı) temel bir **+20% ATK, HP ve DEF** birim bonusu sağlar.
Ancak oyunun kurallarını değiştiren asıl unsur oyunun ilerleyen aşamalarında ortaya çıkar: **UR Raven Yazıtları**, MÜSTESNA OLARAK yalnızca belirli bir gruba uygulanan devasa yüzde istatistik çarpanları sağlar.
* Saf bir 5 Savaşçılı tekli birlikte, yükseltilen her yazıt kahramanlarınızın %100'ünü güçlendirir.
* Karma bir birlikte (2 Savaşçı, 2 Korucu, 1 Büyücü), kahramanlarınızın yalnızca bir kısmı bonuslardan yararlandığı için yazıt değeriniz **%60'tan fazla** düşer.
