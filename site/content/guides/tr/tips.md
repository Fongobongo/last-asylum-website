---
title: "🧠 Profesyonel İpuçları, Gizli Mekanikler ve Sırlar"
description: "Last Asylum: Plague oyunundaki gizli mekaniklerin eksiksiz ansiklopedisi — inşaat bonusu anlık görüntülemesi (snapshotting), Hayalet Ralli savunma taktikleri, hastane dolup taşma mekanikleri, Claire dönüştürme tuzakları, kaynakta bekletme (pre-farming) ve elmas ekonomisi sırları."
lang: tr
updated: "2026-09-04"
videoTopic: tips
---

Çoğu mobil strateji oyunu ilk bakışta aldatıcı bir şekilde basit görünür: binaları geliştir, kahramanları seviye atlat ve kırmızı noktalı düğmelere dokun. Ancak **Last Asylum: Plague** oyununun derinliklerinde, oyunun asla açıklamadığı onlarca yazılı olmayan kurala sahip gelişmiş bir matematiksel motor yatar.

Bu mekanikleri anlayan kurtulanlar **2 ila 3 kat daha hızlı** ilerler, sürpriz gece baskınlarında ordularını asla kaybetmez ve %30–50 daha yüksek Güç (Might) değerine sahip rakipleri sürekli olarak alt eder. Aşağıda, en üst düzey ittifak kıdemlileri tarafından kullanılan bariz olmayan kuralların, gizli inceliklerin ve savaşta test edilmiş taktiklerin derlenmiş bir özeti yer almaktadır.

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

---

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

---

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

---

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

---

## 6. Claire Dönüştürme Tuzağı (SSR ➔ UR) {#claire-conversion}

"Diriliş Çağı" (Era of Revival) sezonunun 8. gününde komutanlar, SSR Claire'i efsanevi bir UR kahramanına dönüştürme yeteneğinin kilidini açar. Binlerce oyuncu hemen düğmeye basar — ancak toplam birim hasarlarının gizemli bir şekilde **azaldığını** fark ederler!

### Hasar Düşüşü Neden Olur:
* Tamamen maksimum seviyeye getirilmiş bir SSR Claire, **%16 hasar** değerinde güvenilir bir takım çapında pasif bonus sağlar.
* 6★ UR'ye ilk dönüştürmede, bu takım çapında pasif bonus **%10**'a düşer. Kişisel temel istatistikleri biraz yükselir, ancak genel birim patlama hasarınız fark edilir ölçüde düşer.

### Düşüşten Nasıl Kaçınılır:
Claire'i kullanılabilir olduğu anda dönüştürmeyin!
1. Önceden Onur Salonu (Onur Salonu) tokenlerini ve parçalarını zula yapın (Salonda 100. veya 160. Seviyeyi hedefleyin).
2. Dönüşüm günü, kaydedilen kaynaklarınızı tek seferde enjekte ederek onu 6★'in ötesine doğrudan **9★ veya 10★** seviyesine anında yükseltin.
3. 10★ UR'de Claire, oyunu kazandıran bir güç sıçraması sunar: **x2.20 kişisel hasar çarpanı** ve *Gelişmiş Dayanıklılık* (*Adv. Tenacity* - tüm birlik için +%20 ATK/DEF/HP ve -%10 bekleme süresi azalması) kilidini açar.

---

## 7. Toplama Günü ve İttifak Düellosu İçin Kaynak Karosu Ön-Tarımı (Pre-Farming) {#pre-farming}

Toplama Günü (Pazartesi günkü İttifak Düellosu Aşama 1 veya Yüce Şifacı'nın 1. / 7. Günü), hızlı bir başlangıç için mükemmel bir fırsattır. Kıdemli ittifaklar genellikle gece yarısından sonraki ilk 5 dakika içinde zaferi mühürler.

> [!TIP]
> **Puan Hesaplama Sırrı:**
> Oyun toplama puanlarını **karoyu madenlerken değil, BİRLİK ŞEHRİNİZE GERİ DÖNDÜĞÜ TAM SANİYEDE** verir!

### Adım Adım Ön-Tarım Protokolü:
1. Toplama Günü'nün arifesinde (örn. Pazar akşamı 02:00 UTC günlük sıfırlamadan yaklaşık 4 ila 5 saat önce), tüm toplama yürüyüşlerini en zengin Seviye 6 veya 7 kaynak noktalarına (tercihen Altın veya Ot) gönderin.
2. Yürüyüşleri, toplama tamamlanacak ve birlikler sıfırlama gününde **02:02–02:05 UTC (00:02–00:05 sunucu saati)** arasında kapınızdan içeri girecek şekilde zamanlayın.
3. Saat sıfırlamayı gösterdiği anda, çoklu yürüyüş toplama puanlarının 5 saati aynı anda nakde çevrilir — anında **1,5 ila 2,5 milyon puan** kazandırır ve saniyeler içinde 2 ila 3 sandık kademesinin kilidini açar!

### Dünya Haritası Görgü Kuralları: Karo Soyma
Kısmen toplanmış kaynak noktalarını asla arkanızda bırakmayın. Bir müttefik 500.000'lik bir karoda 4.000 odun bırakırsa, bu karo 12 saate kadar ölü kalır ve yeni bir yüksek kademeli karonun ortaya çıkmasını engeller. Karoları her zaman 0'a kadar temizleyin veya artıkları bitirmek için 1 birlik gözcü yürüyüşü gönderin.

---

## 8. Eğitim Alanları: 4 Alanlı Bölünme ve T4 Terfi Hilesi {#troop-promotion}

Birlik kademeleri Eğitim Alanı (Training Ground) seviyesine göre açılır: Sv. 17'de T6, 20'de T7, 24'te T8, 27'de T9 ve Elit Birlik araştırması tamamlandığında Sv. 30'da T10.

Çoğu acemi oyuncu felaket bir hata yapar: dört Eğitim Alanının dördünü de eşit şekilde yükseltir ve her birinde sıfırdan en yüksek kilitli kademesini eğitir. Bu, on milyonlarca kaynağı yakar ve 30+ saatlik zamanlayıcılara zemin hazırlar. Kıdemli oyuncular **1 Max + 3 Düşük Bölünmesi**ni kullanır.

### 4 Eğitim Alanı Seviye Bölünmesi:
* **1 Ana Eğitim Alanı (Maksimum Seviye):** Bunu Sığınak sınırınızla eşleşecek şekilde tutun. En yüksek eğitilebilir kademenizin kilidini açmak için gereken tek binadır (örn. Sv. 27'de T9, Sv. 30'da T10).
* **3 Destek Eğitim Alanı (Seviye 10):** Bunları kesinlikle **Seviye 10**'da tutun! Seviye 10, **Seviye 4 (T4)** birliklerin kilidini açar. 4. Eğitim Alanı, **Geliştirme** (Development) araştırma ağacının alt kısmına yakın bir yerde açılır — mümkün olan en kısa sürede kilidini açın.
* Neden mi? 4 alanı da Sv. 27–30'a yükseltmek, ek kademe kilidi açmadan çok büyük miktarda Odun, Tahıl ve Ot tüketir. Oyun, en üst kademeye eğitmek ve terfi ettirmek için yalnızca **bir** maksimum seviyeli bina gerektirir.

### "T4 Fabrikası → Terfi" Hattı:
1. **Aşaması (Paralel T4 Üretimi):** Seviye 10 olan üç alanın tümünde aynı anda Seviye 4 asker sıraya koyun.
   * Bir alanda bir parti T4 yaklaşık 10,5 saat sürer (~455 asker).
   * Üç alanda, tam olarak aynı ~10,5 saatte **~1.365 T4 asker** üretirsiniz.
2. **B Aşaması (Ana Alanda Terfi Ettirme):** Maksimum seviyedeki Eğitim Alanınızı açın, "Eğit"ten **"Terfi"ye** geçiş yapın ve stokladığınız T4 askerlerinizi en yüksek kademenize (örn. T9 veya T10) terfi ettirin.
   * Tam bir parti T4'ü T9'a terfi ettirmek yalnızca **~16,5 saat** sürer (sıfırdan T9 eğitmek için gereken ~33 saate kıyasla!).
3. **Toplam Döngü Karşılaştırması:**
   * **Terfi Rotası:** 10,5 sa (T4) + 16,5 sa (terfi) = **~26 saat**.
   * **Doğrudan Yüksek Kademe Kuyruğu:** Tek T9 partisi = **~33 saat**.
   * **Net Fayda:** **Döngü başına 6 ila 7 saat** tasarruf sağlar, kışlaların 7/24 çalışmasını sağlar ve milyonlarca kaynağı korur.

> [!NOTE] İttifak Düellosu Puanlaması (Cuma — Birlik Eğitimi)
> * 3 destek alanında T4 birlikleri sıraya koymak tam eğitim puanı kazandırır (puanlar toplama anında değil, **kuyruğun başladığı anda** verilir!).
> * Askerleri terfi ettirmek, T4 ile T9/T10 arasındaki kademe farkı için etkinlik puanı kazandırır.
> * Terfi kuyruklarında harcanan herhangi bir hızlandırma, hızlandırma tüketimi etkinlik kategorilerine tamamen sayılır.

---

## 9. Araştırma: İttifak Düellosu Sandık Kilidi (Süper Ödül 1 ve 2) {#duel-research-lock}

Araştırma Laboratuvarı 13 farklı ağaç içerir. En kritik erken ilerleme kapısı **İttifak Düellosu** dalının içinde gizlidir:

* Bu ağaç müzakere edilemeyen iki kilometre taşı içerir: **Süper Ödül 1** ve **Süper Ödül 2**.
* **Süper Ödül 1 olmadan, gerekli puanları kazansanız bile Seviye 4–6 Düello ödül sandıklarını açamazsınız!**
* **Süper Ödül 2 olmadan, Seviye 7–9 sandıkları fiziksel olarak kilitlidir!**
* Bu üst sandıklar hesap ilerlemesinin can damarını içerir: binlerce Çalışma Parşömeni (Study Scrolls), UR Kahraman Omni Parçaları, Seviye 11 ekipman malzemeleri ve **10.000 Elmas**'a kadar ödül.
* **F2P Kuralı:** Temel Geliştirme nodlarından (İnşaat ve Araştırma Hızı) hemen sonra, Çalışma Parşömenlerinizi Süper Ödül 1 ve 2'ye kanalize edin. Bu, hesabınızı aylarca finanse edecek ödül motorunun kilidini açar.

---

## 10. Ekipman Öncelikleri: Eritme Atölyesi Sv. 25 ve Slot Optimizasyonu {#gear-priorities-tips}

Ekipman Taşları (Gear Stones) son derece sınırlıdır. Bunları rastgele ekipman slotlarına dağıtmak orta oyun performansını felç eder:

1. **Eritme Atölyesi → Seviye 25:** Sığınağınız izin verir vermez Eritme Atölyesini (Eritme Atölyesi) Seviye 25'e çıkarın. Ekipman Taşlarını arıtmak için birincil dar boğazdır. Bunu geciktirmek, zorluk seviyesi zirveye ulaştığında taşıyıcınızı (carry) ekipmansız bırakır.
2. **DPS / Taşıyıcı Slot Önceliği:**
   * **Birincil Öncelik:** Silah (Kılıç) ve Eldivenler (ATK, Kritik ve Zırh Delme artışı).
   * **İkincil Öncelik:** Botlar (hız ve temel hayatta kalabilirlik).
   * **Göğüs Zırhı:** Temel seviyede bırakın. Bir taşıyıcı üzerindeki ekstra DEF'in zafer üzerinde neredeyse sıfır etkisi vardır.
3. **Tank Slot Önceliği:**
   * **Birincil Öncelik:** Göğüs Zırhı ve Botlar (ham HP ve hasar azaltma).
   * **Silah (Kılıç):** **Bir tankın silahına asla taş harcamayın!** Tanklar hayatta kalarak ve arka safı koruyarak kazanır. Bir tankın kılıcını arıtmak, gerçek bir savaş değeri katmadan görünür Güç (Might) değerini şişirir.
4. **Onur Mağazası (Honor Shop):** Yalnızca **Ekipman Taslakları (UR)** satın alın. Merak Sandıklarını (Curio Chests) ve evrensel parçaları atlayın — taslaklar her turuncu ekipman terfi kademesini (Sv. 10, 20, 30, 40) sınırlar.

---

## 11. Dünya Patronu Uzmanları: Ash ve Celia {#boss-specialists}

Mor (SSR) kahramanlar erken aşamada PvP kadrolarından çıkarılırken, iki karakter yeri doldurulamaz Dünya Patronu (World Boss) faydası sunar:

* **Ash:** Pasif yeteneği «Odaklanma» (Focus), takımdaki en yüksek saldırı gücüne sahip iki korucu tarafından verilen **canavar hasarını** artırır (istemci v1.0.102 başına).
* **Celia:** Dünya Patronlarından gelen bonus kaynak düşüşlerini ve öldürme ödüllerini artırır.
* Yedek mor beceri taşlarını bu ikisine yatırım yapmak, patron ganimetlerinde ömür boyu temettü öder.

---

## 12. Elmas Disiplini: Nereye Harcanmalı, Neden Kaçınılmalı {#diamond-discipline}

Elmaslar en önemli para birimidir. Erken oyunda cömert olsalar da, düşüncesizce harcama yapmak kritik etkinlikler geldiğinde oyuncuları aç bırakır.

| Üst Düzey Yatırımlar (PRO) | Elmasları Asla Buraya Harcamayın (NOOB) |
|---|---|
| 8. Günde (Cynthia) ve 36+. Günde (UR Kahramanlar) **Dilek Çarkı (Dilek Çarkı)**. Garantiler için her zaman 10'lu gruplar halinde çekin. | Standart Meyhane (Meyhane) alımları (kötü UR olasılıkları, sıfır emniyet ağı). |
| VIP 8 (2. kalıcı inşaatçı) ve VIP 11'e (kalıcı +%10 hız) ulaşmak için Elmas İndirimi etkinlikleri sırasında **VIP Puanları**. | Doğrudan ham elmaslarla anında bina zamanlayıcısı atlamaları. |
| KvK ve hafta sonu Savaş Etkinlikleri (Kill Events) sırasında **8 Saatlik Barış Kalkanları**. | Ürün mağazasından doğrudan standart Yiyecek veya Kereste satın almak. |
| %70–80 indirimli hızlandırmalar için **İttifak Mağazası ve Gizemli Tüccar (Mystery Merchant)** yenilemeleri. | Kritik kale savunması dışında standart birlikleri diriltmek. |

---

## 13. Özet Kontrol Listesi: Hayatta Kalmanın 12 Emri {#ten-commandments}

1. **Hız bonusları başlangıçta anlık görüntülenir** — Yükseltmeye basmadan ÖNCE bakanlık unvanlarını, rünleri ve ekipmanları etkinleştirin.
2. **Boş hastane = yaşayan ordu** — Hastanenin dolup taşması geri dönüşü olmayan kalıcı birlik ölümlerine neden olur.
3. **Birliklerinizi korumak için Hayalet Ralli kullanın** — Kazanılamayacak baskınlarla karşılaştığınızda en iyi yürüyüşünüzü 8 saatlik bir rallide saklayın.
4. **Envanter kaynak çantalarını asla açmayın** — Çantaları, bir yükseltmenin başladığı tam ana kadar mühürlü tutun.
5. **Şahin Kulesi: Max − 1 Biriktirme** — Arka plan yumurtlamalarını sürdürmek için bir slotu açık tutun; Pzt/Çar/Cum günleri nakde çevirin.
6. **SSR Claire'i çok erken dönüştürmeyin** — 6★ istatistik düşüşünü doğrudan 9★/10★'a atlamak için Onur Salonu tokenlerini zula yapın.
7. **Toplama Günü arifesinde toplama karolarını önceden ekin** — Anında sandıklar talep etmek için sıfırlama gününde 00:05 UTC'ye (örn. Pazar akşamından Pazartesiye) dönüşleri zamanlayın.
8. **4 Alanlı Bölünme (1 Max + 3 Sv.10):** 3 destek alanında T4'ü paralel olarak çiftçilik yapın ve ana alanınızda terfi ettirerek döngü başına 6–7 saat tasarruf edin.
9. **Labda Süper Ödül 1 ve 2 — Pazarlık konusu yapılamaz:** Onlar olmadan, Düello sandık kademeleri 4–9 kalıcı olarak kilitli kalır.
10. **Bir tankın kılıcını asla arıtmayın:** Ekipman taşları Taşıyıcı Kılıç/Eldiven ve Tank Göğüs/Botlarına aittir.
11. **Ham Meyhane çekilişlerine asla elmas harcamayın** — Dilek Çarkı dönüm noktası için ~1.500 saklayın (7 ücretsiz çevirmen + 3 ücretli = Cynthia kopyası) ve geri kalanını VIP ilerlemesine itin.
12. **Tek-ırk (Mono-faction) hibrit düzenleri alt eder** — Raven Yazıtları ile maksimuma çıkarılmış aynı sınıftan beş kahraman karma kompozisyonlara hakim olur.

---

## Korpez'in İlk Oyun Pişmanlıkları Top-5'i — Bunları Tekrarlamayın {#korpez-regrets}

Ana hesapla geçen 7 aylık oyundan, veterinerlerin yeni oyuncuların kaçınmasını söylediği beş hata:

1. **Onur mağazasında taslaklar yerine Merak sandıkları (Curio chests) satın almak.** Ekipman taslakları, Onur'un satın aldığı ve başka hiçbir yerde bulunmayan nadir şeydir. Meraklar pasif olarak düşer; taslaklar düşmez.
2. **UR Omni'lerini Arthur'a beslemek.** Kötü yaşlanıyor. Onları **10★ Marlena** için kasada saklayın — ilk 30–60 günün tamamını o taşıyor.
3. **Eritme Atölyelerini görmezden gelmek.** 23–25 seviyesinde beş tanesi = haftalık pasif 44K ekipman taşı. Bunları geç itmek, daha sonra 40. seviye kırılma noktasını sınıran şeydir.
4. **Ekipman taşlarını mor (SSR) ekipmanlar üzerine damla damla harcamak.** Her kahraman için doğru ekipman: DPS için kılıç+eldiven+bot, tanklar için göğüs+bot, UR olana kadar geri kalan her şey sıfırda.
5. **Tanklarda saldırı becerilerini yükseltmek.** Bir tankın saldırısı hiçbir şey yapmaz; becerileri bunun yerine ölçeklenen DEF/HP üzerinde çalışır.