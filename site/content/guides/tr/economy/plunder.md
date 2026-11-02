---
title: "Yağma: Eksiksiz Mekanikler"
description: "Yağma geliri günlük bir limitle sınırlandırılmıştır ve bu limit Sığınak seviyenizle ölçeklenir. Eşikleri bilmek, gün için saldırmayı ne zaman bırakacağınızı değiş…"
lang: tr
updated: "2026-10-12"
type: guide
---
## Yağma: Eksiksiz Mekanikler {#plunder-mechanics}

Yağma geliri günlük bir limitle sınırlandırılmıştır ve bu limit Sığınak seviyenizle ölçeklenir. Eşikleri bilmek, gün için saldırmayı ne zaman bırakacağınızı değiştirir.

<!-- component:plunder-calculator -->

### Limit Nasıl Çalışır {#how-the-limit-works}

- Limit, saldırılardan eve taşınan Tahıl, Kereste ve Otları sayar.
- Limit altında: hammaddeleri **%100** verimlilikle taşırsınız.
- Limit katından itibaren: verimlilik **%15**'e düşer.
- Limit 1.3 katından itibaren: verimlilik **%5**'e düşer — bu tabandır.
- Limit her gün **02:00 UTC**'de sıfırlanır.
- Bir hedefin Güç (Might) göstergesinin altındaki sarı üçgen, limit aşımı göstergesidir — Etki Genel Bakışı ve ardından Yağma Kazançları aracılığıyla kontrol edin.

### Sığınak Seviyesine Göre Günlük Limitler {#plunder-limits-table}

| Sığınak | Günlük limit | Sığınak | Günlük limit | Sığınak | Günlük limit |
|---|---|---|---|---|---|
| 10-12 | 2.5M | 18 | 8M | 24 | 18M |
| 13 | 3M | 19 | 9M | 25 | 20M |
| 14 | 4M | 20 | 10M | 26 | 22M |
| 15 | 5M | 21 | 12M | 27 | 24M |
| 16 | 6M | 22 | 14M | 28 | 26M |
| 17 | 7M | 23 | 16M | 29 / 30 | 28M / 30M |

Desen: 20'ye kadar Sığınak seviyesi başına +1M, ardından Sığınak 30'daki 30M sınırına kadar seviye başına +2M. İki teknik not:

- Bir Sığınak yükseltmesi limitinizi **hemen** yükseltir — sıfırlanma beklemesi yoktur. Günlük sınıra yakınsanız ve bir Sığınak seviyesi yakınsa, önce onu bitirin ve sonra yağmalayın.
- Lejyon Komutanı uzmanlık ağacındaki (Diriliş Çağı) Savaş İkmali yeteneği, 1-5 yetenek seviyelerinde sınırı +6 / +14 / +24 / +36 / +50% oranında yükseltir. [Çağ rehberine](/tr/era/) bakın.

## Dokuz Vuruş Kuralı {#nine-hit-rule}

Asla aynı çiftliğe üst üste dokuz kereden fazla saldırmayın. Onuncu vuruş şehri tamamen yok eder ve sahibini başka bir yere ışınlar — çiftliği kaybedersiniz ve oyuncu şehrini kaybeder. Dokuz vuruş tavandır; topluluk bunu bir öneri değil, bir zorunluluk olarak ele alır.

### Saha Tekniği: Tam Bir Çiftlik Turu Elde Etmek {#field-technique}

Tam günlük bir yağma oturumu için topluluk tarafından test edilmiş prosedür:

1. **Önce keşfedin.** Keşif yaptıktan sonra postanızı açın: rapor, hedefin her bir hammadde türünden tam olarak ne kadar tuttuğunu gösterir. 2–3 adaya göz atın ve en zenginini seçin — birçok hedef tek bir hammadde türüyle doludur.
2. **Bir ittifaktaki oyuncuları atlayın** — müttefik bir üyeye saldırmak, ittifakınızın imza atmadığı savaşlar başlatır.
3. **Bitişik bir karo üzerinde konuşlanın.** Birliğinizi hedefin yanındaki bir hammadde karosuna gönderin; oraya oturduğunda, yürüyüşleri beklemeden ~8 adede kadar hızlı arka arkaya saldırı başlatabilirsiniz.
4. **Şehir Canını 2.000'in üzerinde tutun.** Bunun altında uzağa ışınlanırlar ve çiftlik noktanız kaybolur — kısa keserek aynı çiftliği yarın yeniden kullanın.

**Asker Yükü (Soldier Load)** vuruş başına ne kadar taşıyacağınızı belirler. Birlik kademesi başına **+200 artar** (T6 = 1.400, T7 = 1.600, T8 = 1.800...) ve Asker araştırma ağacındaki **Yük Eğitimi** teknolojisi ile daha da yükseltilebilir. Daha yüksek kademeli birlikler aynı hedefi daha az vuruşta yağmalayarak dayanıklılık tasarrufu sağlar.

## Dayanıklılık Matematiği: Limit Aşan Yağmalar Neden Başarısız Olur {#stamina-math}

Limit aşan yağmaya dayanıklılık harcamak oyundaki en kötü takaslardan biridir:

- %15 verimlilikte, her dayanıklılık puanı normalden kabaca **7 kat daha az** kazandırır.
- %5 verimlilikte, kabaca **20 kat daha az**.
- Canavarlara harcanan aynı dayanıklılık, yağma durumunuzdan **bağımsız olarak tam değer** kazandırır.

Yani günlük ritim kendi kendini yazar: %100'deyken yenebileceğiniz en zengin hedeflere önce vurun, limiti aştığınız anda çiftliklere saldırmayı bırakın ve dayanıklılığınızın geri kalanını canavarlara boşaltın. Ve yağma pencereniz içinde, her zaman en zengin hedefe önce vurun — limit nasıl olsa gelecektir, o yüzden onu mevcut en büyük rakamlarla doldurun.

## Karavanlar ve Gizli Operasyonlar: Daima İkisini de Çalıştırın {#caravans-covert-ops}

Karavanlar ve Gizli Operasyonlar yağmadan ayrı sistemlerdir ve yukarıdaki her kısıtlamadan kaçarlar: yağma limiti yok, gerçek birlik kaybı yok, dayanıklılık maliyeti yok. Bunlar saf kazançtır, bu yüzden topluluk kuralı her iki sistemi de her gün çalıştırmaktır.

- **Karavanlar** — otomatik ticaret geliriniz. Onları hareket halinde tutun.
- **Gizli Operasyonlar** — günde diğer 5 oyuncunun Gizli Operasyonunu yağmalayabilirsiniz. Altın Gizli Operasyonlar en iyi ödülleri öder — bir tane gördğünüzde her zaman altın olanı kapın.
