---
title: "1. İnşaat Bonusu Anlık Görüntülemesi (Snapshotting) ve Zamanlayıcı Matematiği"
description: "Yeni komutanların yaptığı en pahalı hatalardan biri, hız bonuslarının nasıl hesaplandığını yanlış anlamaktır."
lang: tr
updated: "2026-10-12"
type: guide
---
## 1. İnşaat Bonusu Anlık Görüntülemesi (Snapshotting) ve Zamanlayıcı Matematiği {#snapshotting}

Yeni komutanların yaptığı en pahalı hatalardan biri, hız bonuslarının nasıl hesaplandığını yanlış anlamaktır.

> [!IMPORTANT]
> **Anlık Görüntüleme (Snapshotting) Kuralı:**
> Tüm hız bonusları (ekipmanlar, unvanlar, rünler, ittifak teknolojisi) **KESİNLİKLE YÜKSELTMEYE BASILDIĞI ANDA (BAŞLANGIÇTA)** hesaplanır. Zamanlayıcı başladıktan sonra etkinleştirilen hiçbir bonus, devam eden bir projenin kalan süresini **AZALTMAZ**!

### Pratik Uygulama:
* 30 günlük bir Sığınak (Sanctuary) yükseltmesi başlatıp 5 dakika sonra inşaat ekipmanı kuşanır veya "İşler Bakanı" unvanını (+%10) talep ederseniz, zamanlayıcı değişmeden kalır! Oyun aktif zamanlayıcıları geriye dönük olarak yeniden hesaplamaz.
* **Pro Oyuncu Hilesi:** İnşaat ekipmanınızı kuşanın, geçici "İşler Bakanı" ittifak unvanını (+%10) isteyin, bir inşaat rünü etkinleştirin (+%5), devasa 30 günlük Sığınak yükseltmesini başlatın — ve **hemen ekipmanı çıkarıp unvanı bırakın**! Bonus, tüm 30 gün boyunca kalıcı olarak kilitlenmiştir (anlık görüntüsü alınmıştır).

### Zamanlayıcıların Arkasındaki Matematik:
Gerçek süre şu formülle belirlenir:
$$T = \frac{T_{base}}{1 + \sum \text{SpeedBuffs}}$$

Bölen nedeniyle, sonraki her +10% hız bonusu, bir öncekinden biraz daha az mutlak saat tasarrufu sağlar (saat cinsinden azalan verim). Ancak, oyunun son aşamalarındaki zamanlayıcılarda (temel sürenin 40–80 güne ulaştığı Sığınak 25–30 seviyelerinde), %5'lik bir rün bile **birkaç tam günlük hızlandırma** tasarrufu sağlar!

## 2. Hastane Dolup Taşması ve "Hayalet Ralli" Savunma Tekniği {#ghost-rally}

Hastaneniz yalnızca bir iyileştirme kulübesi değildir — kalıcı hesap imhasını önleyen tek en kritik güvenlik duvarıdır.

### Gizli Dolup Taşma Kuralı (Kalıcı Ölüm)
Şehriniz saldırıya uğradığında, sağ kalan mağlup birlikler yaralanır ve hastane yataklarını doldurur.
* Hastanede boş yer olduğu sürece birlikler **Yaralı** durumdadır ve ucuz kaynaklarla hızlı bir şekilde iyileştirilebilir.
* **Hastane kapasitesi %100'e ulaştığında:** Sonrasındaki HER yaralı asker **KALICI OLARAK ÖLÜR**. Siz uyurken düşman bir balina şehrinize art arda 3 ila 4 kez sıfırlama saldırısı yaparsa, yüzbinlerce yüksek kademeli T8/T9 birlik sonsuza dek silinir. Bu orduyu yeniden inşa etmek aylar sürer.

### "Hayalet Ralli" (Sahte Ralli) Sırrı
KvK veya Savaş Etkinlikleri (Kill Events) sırasında bir düşman saldırı gücü üssünüze ışınlanırsa ancak Barış Kalkanınız yoksa (veya elmaslarınız tükendiyse) ne yapmalısınız?

> [!TIP]
> **Ordunuzu kalkan olmadan nasıl korursunuz:**
> 1. Dünya haritasını açın ve uzaklarda terk edilmiş bir kaleyi, yüksek seviyeli bir zombi yuvasını veya etkin olmayan bir kampı bulun.
> 2. **Ralli** (Rally) seçeneğine dokunun ve maksimum zamanlayıcı süresini seçin: **8 Saat**.
> 3. En güçlü kahramanlarınızla birlikte tüm ana savaş birliğinizi bu ralliyede görevlendirin.

**Neden işe yarar:** Şehrinizin içinde aktif bir rallide görevlendirilen veya bir ralli hedefine doğru yürüyüşte olan birlikler, **gelen saldırılara karşı %100 mutlak dokunulmazlığa** sahiptir. Düşman şehir duvarlarınıza saldırsa ve kasabanızı ateşe verse bile, rallideki birlikleriniz sıfır hasar alır! Tehdit geçtiğinde tek bir tıklamayla ralliyi iptal edin; elit birlikleriniz güvenli ve sağ salim kışlalarına geri dönecektir.

## 3. Şahin Kulesi Sırları ve İttifak Kazıları {#falcon-tower}

Şahin Kulesi (Falcon Tower) görevleri ve bunlarla ilgili hazine haritaları; elmasların, kahraman parçalarının, hızlandırmaların ve ittifak hediyelerinin günlük temel kaynakları arasındadır. Yine de sıradan oyuncular bunları rastgele alır ve potansiyel ödüllerinin yarısına kadar olan kısmını boşa harcar.

### Şahin Görevi Biriktirmenin Üç Altın Kuralı:

1. **"Kırmızı Noktaları" Temizlemeyin**:
   Görevleri tamamlayın, ancak **"Topla" (Claim) düğmesine BASMAYIN**. Kırmızı noktalı tamamlanan görevlerin süresi asla dolmaz ve son teslim tarihi yoktur — tahtanızda süresiz olarak güvenle durabilirler. Hedef sunucu etkinlik günü başlayana kadar ödülleri toplanmamış halde tutun (Pazartesi — Aşama 1 İttifak Düellosu; Çarşamba — Bilim Günü; Cuma — Birlik Eğitimi).

2. "Max − 1" Seviyesine Kadar Biriktirin (Stacking Max − 1):
   Görev tahtanızı kapasiteye yakın doldurun — tam olarak $N - 1$ tamamlanmış görev tutun (örneğin maksimum kapasitede **25 olası görevden 24'ü** veya erken seviyelerde 8 görevden 7'si). Arka plan görev oluşturma zamanlayıcısının çalışmaya devam etmesi için kesinlikle bir açık slot bırakılması gerekir.

3. Tahta Sınırınızı İzleyin (Zamanlayıcıyı Asla Dondurmayın):
   Tahtanız hiçbir zaman maksimum kapasiteye ulaşmazsa (örn. 25'te 25), **grev oluşturma zamanlayıcısı HEMEN DONAR**. En az bir slotu temizleyene kadar sıfır yeni görev üretilir ve ücretsiz günlük görevleriniz kalıcı olarak yanar. Taze görevlerin ortaya çıkması için en az bir slotun açık kalması amacıyla gerektiğinde bitmiş görevleri düzenli olarak toplayın.

> [!TIP]
> **Seviye 8'de Tek Dokunuşla Toplama:** **Şahin Kulesi Sv. 8** seviyesine ulaşmak "Hepsini Topla" (Claim All) özelliğinin kilidini açar. Hedef toplama günlerinde (Pzt, Çar, Cum), tek bir dokunuşla kayıtlı 24 görevlik tüm zulanız anında teslim edilir ve sunucu sıfırlamasından saniyeler sonra tüm etkinlik ödül sandıklarının kilidi açılır!

---

### İttifak Kazıları {#excavations}

Şahin Kulesi görevlerini tamamlamak, dünya haritasında kazı alanları oluşturan **Hazine Haritaları** kazandırır. Bu, temel kazı ödülü ve tamamlama üzerine bir hız bonusu olmak üzere iki farklı ödül türü içeren ortak bir ittifak faaliyetidir.

#### 1. Temel Kazı Ödülü (Tüm İttifak Üyeleri İçin)
* **Kazı Alanına Dokunan Herkes Ödülü Alır:** Birliğinizin gelmesi ve kazı alanına tek bir an için girmesi yeterlidir — katılım hemen kaydedilir.
* **Ana Kural: Kazı Alanında Kamp Kurmayın/Oturmayın!**
  Kazı süresi, karoda aktif olarak kazı yapan her bir birlikle birlikte hızla azalır. İttifak üyeleri bu noktada kamp kurarsa, alan saniyeler içinde biter ve uzak şehirlerden yürüyen müttefikler **zamanında yetişemez**.
  > [!IMPORTANT]
  > **İttifak Görgü Kuralları:** Katılımınızı kilitlemek için kazıya saliselik bir süre dokunun, ardından **birliğinizi hemen geri çağırın**; bu, zamanlayıcının tüm takım arkadaşlarının normal yürüyüş hızında sahaya ulaşabileceği kadar uzun süre açık kalmasını sağlar.

#### 2. Ekstra Hız Bonusu (10 Oyuncu İçin "El" Simgesi)
* **"El" Simgesi Kazı Bittikten SONRA Görünür:**
  Kazının bittiği kesin anda, sahanın üzerinde bir **"El" simgesi** belirir. Bu ekstra bonusu kapmak için hızla **El simgesine** veya **kazı konumunun kendisine** dokunun.
* **Kesin İlk Gelen İlk Alır Kuralı ve 10 Oyuncu Sınırı:**
  Bu bir hız-tıklama tepki ödülüdür: bonus ödülü yalnızca **tıklayan ilk 10 ittifak üyesi** alır.
* **Şanslı Bir Oyuncu Çift Ödül Alır ($2\times$):**
  Bu 10 şanslı tıklayıcıdan tam olarak **rastgele bir oyuncu** **Çift Ödül ($2\times$)** alır!
