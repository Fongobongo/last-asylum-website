---
title: "Onur seviyeleri: koşullar, maliyet ve ödüller"
description: "Onur seviyeleri son kahraman geliştirme yoludur ve bir kahraman tüm yıldızlara ulaştığında açılır. 600 seviye bulunur, her kahraman için aynı şekilde çalışır ve yalnızca can (HP) kazandırır..."
lang: tr
updated: "2026-10-12"
type: guide
---

> Veriler oyun istemcisi üzerinden doğrulanmıştır (v1.0.87, kaynak: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/hero-honor)).

Onur seviyeleri son kahraman geliştirme yoludur ve bir kahraman tüm yıldızlara ulaştığında açılır. 600 seviye bulunur, her kahraman için aynı şekilde çalışır ve yalnızca can (HP) kazandırır. Bedel olarak yıldızlar için kullanılan kişisel parçalar harcanır, yani onur sistemi yeni bir masraf başlatmak yerine mevcut masrafı devam ettirir.

## Başlamak için üç koşul

Bu yol kendiliğinden görünmez ve üç koşul yerine getirilene kadar onur ekranı kapalı kalır.
- Kahraman maksimum yıldız seviyesinde, yani 50 yıldızda olmalıdır.
- Kahramanın ait olduğu faction (birlik) heykeli inşa edilmiş ve en az 20. seviyeye yükseltilmiş olmalıdır.
- Kahramanın yıldızları için kullanılanlarla aynı olan kişisel parçaları envanterde bulunmalıdır.

Onur ekranına heykelin kendisinden girilir: Savaşçılar Savaşçı Heykeli'nden, büyücüler ve korucular ise kendi heykellerinden giriş yapar.

## Maliyeti nedir?

Bir seviyenin bedeli, ilk seviyelerdeki on parçadan son seviyelerdeki kırk parçaya kadar yol boyunca artar.

| Aralık | Seviye başına parça |
|---|---|
| İlk seviyeler | 10 |
| Orta | 20 ve 30 |
| Son | 40 |

Toplam 600 seviyenin tamamı tek bir kahraman için 15.030 parçaya mal olur; bu miktar, herhangi bir bireysel yıldızın talep ettiğinden belirgin şekilde fazladır.

## Ne kazandırır?

Onur, kahramana sadece HP (can) kazandırır, başka hiçbir şey vermez. Bonus, Onur Salonu'ndan (Onur Salonu) geliyormuş gibi etiketlenir ve diğer tüm kaynaklarla toplanarak birikir; ayrıca seviyeyle orantılı olarak artar: 1. seviyede 160 HP, 300. seviyede 64.000 ve 600. seviyede 240.000 HP.

Daha yüksek seviyeler daha fazla maliyetlidir ve orantılı olarak daha çok kazandırır, çünkü oran baştan sona her parça başına 16 HP olarak sabit kalır. Parçaları ucuz bir aralık için saklamak mantıksızdır, çünkü böyle bir aralık mevcut değildir.

Bunların yanında iki değer daha bulunur; bunlar iki ve dört kat büyüktür: 1. seviyede 320 ve 640, 600. seviyede ise 480.000 ve 960.000. Bunlar muhtemelen daha nadir kahramanlar için geçerli olan sayılardır, ancak oyun bunlardan hangisinin geçerli olduğunu asla göstermediği için bu tahmin doğrulanamamıştır.

## Pratikte ne anlama gelir?

Yıldızlar ile onur arasında bir seçim yapmak söz konusu değildir, çünkü onur yalnızca yıldızlar bittikten sonra açılır ve aynı parçaları tüketir. Asıl seçim daha erken bir aşamada, heykelde yapılır. Fraction (birlik) heykeli yirmi seviyeye ulaşana kadar, tamamlanmış bir kahramana harcanan parçalar boşta bekler.

## Onur Salonu: Pratik Notlar (Topluluk) {#dtf-hall-honor}

Yukarıdaki istemci referansı, Onur'un yıldız takibi yönünü açıklamaktadır. Aşağıdaki topluluk pratiği, kahramanlar oraya ulaştıktan sonra oyuncuların parçaları Salon üzerinden gerçekte nasıl yönlendirdiğini kapsamaktadır — giriş, genel sağlık, faction (birlik) kontrol noktaları ve parça ekonomisi.

![Onur Salonu ve 10 yıldız sonrası ilerleme](/img/dtf/hero-honor/01.jpg)

### Giriş: 10 yıldız, tek başına varış için stat yok {#dtf-hall-entry}

Bu rehberde bir kahraman, ekstra hiçbir şeyin kilidini açmadan **10 yıldız** sonrasında Onur Salonu'nda erişilebilir hale gelir. Tek başına varış hiçbir şey kazandırmaz — bonuslar ancak kahramanı içeride kişisel parçalarla veya eşleşen evrensel parçalarla seviye atlatmaya devam ettiğinizde başlar.

![10 yıldızdan sonra Salon girişi](/img/dtf/hero-honor/02.jpg)

Sırf kırmızı bir nokta yanıyor diye evrensel parçaları Salon seviyelerine dönüştürmeyin — özellikle altın olanları. Önce kahramanı ve kontrol noktasını seçin, ardından harcama yapın.

### Bir kahraman seviye atlar, her kahraman sağlık kazanır {#dtf-global-hp}

Temel mekanik: *Herhangi bir* kahramandaki her Salon seviyesi, faction, nadirlik (altın, mor, mavi) veya kahramanın hâlâ savaşıp savaşmadığına bakılmaksızın **tüm kadro için hesap genelindeki sağlık bonusunu** artırır.

![Salon seviyelerinden hesap geneli sağlık bonusu](/img/dtf/hero-honor/03.jpg)

Bir faction'dan bir kahramanı seviye atlatın, Rangers (Menzilliler) ve Warlocks (Savaş Büyücüleri) de kazanır; başka bir faction'ı seviye atlatın, toplam tekrar yükselir. Tekli seviyeler önemsiz görünür, ancak onlarca ve yüzlerce seviye eski bir hesapta birikir. Nadirlik getiriyi ölçeklendirir (altın mor'a göre seviye başına daha fazla verir, mor da maviye göre) — ancak fiyat getiriden daha önemlidir, bu yüzden yalnız başına stat değerine değil, stat başına maliyete göre değerlendirin.

![Salon bonusu ekran görüntüleri](/img/dtf/hero-honor/04.jpg)

![Salon bonusu ekran görüntüleri](/img/dtf/hero-honor/05.jpg)

![Salon bonusu ekran görüntüleri](/img/dtf/hero-honor/06.jpg)

![Salon bonusu ekran görüntüleri](/img/dtf/hero-honor/07.jpg)

![Salon bonusu ekran görüntüleri](/img/dtf/hero-honor/08.jpg)

### Faction kontrol noktaları: Yalnızca kahramanın faction'ı kazanır {#dtf-checkpoints}

Altın ve mor kahramanlar, sabit Salon seviyelerinde ekstra bonusların kilidini açar. Genel sağlığın aksine, bunlar **yalnızca seviye atlayan kahramanın faction'ına** uygulanır: bir saldırı başlatan Savaşçı, Rangers veya Warlocks'u değil Savaşçıları güçlendirir. Statın kendisi kahraman başına değişir (bir yerde saldırı, başka bir yerde sağlık veya savunma), bu yüzden önce faction'a ve ikinci olarak bonusa göre seçim yapın.

### Kontrol noktası seviyeleri: 50 → 100 → 150 → 200 → 300 {#dtf-checkpoint-levels}

İlk ekstra bonus **Salon seviyesi 50**'de açılır, ardından 200'e kadar her 50'de bir (50 → 100 → 150 → 200) devam eder, sonrasında adım sonraki **300** ile 100'e çıkar. Rehberden örnek: Claire, kontrol noktalarında Savaşçı kahramanların saldırısını %0,25 artırır, Arthur Savaşçı kahramanların sağlığını %0,50 artırır — Savaşçı hasar yürüyüşü için Claire'in saldırısı ilginç olandır, hayatta kalma için Arthur'un sağlığı.

![Kontrol noktası seviyeleri 50, 100, 150, 200 ve 300](/img/dtf/hero-honor/09.jpg)

200'e kadar dört bonus birbirine yakın durur, bu da o aralığı verimli kılar; 200'den sonra maliyetler yükselmeye devam ederken bir sonraki anlamlı bonus 300'e kadar bekler.

Şöyle yönlendirin, "Bu kahramanı seviyorum" demeyin: **ana faction → gereken stat → en yakın kontrol noktası → parça maliyeti** — ardından yükseltmeye basın.

### Mavi kahramanlar: Yük kapasitesi ve ucuz bir Salon girişi {#dtf-blue-heroes}

Mavi kahramanlar herkes gibi genel sağlık ve ek olarak **asker yük kapasitesi** (toplama turu başına taşınan kaynaklar) ekler. Göz alıcı değildir, ancak istikrarlı çiftlik değeridir — ve evrensel mavi parçalar altın veya mor olanlardan çok daha ucuzdur.

![Mavi kahraman yük kapasitesi bonusu](/img/dtf/hero-honor/10.jpg)

Hangi mavinin halihazırda en çok yıldızı ve kişisel parçası varsa onu seçin ve evrensel mavilerle 10 yıldıza taşıyın; sırf görsellik için sıfırdan daha güzel bir portre başlatmayın.

### Altın kahramanlar: Yalnızca kişisel parçalar {#dtf-gold-shards}

Altın Salon kahramanlarını **kişisel parçalarla** geliştirin. Evrensel altın parçalar, bir güncelleme yeni bir meta kahraman getirene kadar az görünür — ve harcanan 50–100 evrensel parça geri gelemez. Gelişmekte olan bir hesapta, güçlü bir kahramandaki yeni bir yıldız genellikle birkaç Salon seviyesini yener, özellikle F2P için.

![Kişisel parçalarla altın kahramanları geliştirme](/img/dtf/hero-honor/11.jpg)

### Mor ilk seçimler: Claire, Ash, Stellar {#dtf-purple-first}

Evrensel mor parçaları Salon'un kendisi için değil, Demon King PvE destekleri olarak ilk önce 10 yıldıza ulaşacak üç kahramana bilinçli olarak harcayın — **Claire, Ash ve Stellar**, her biri kendi faction'ının hasarını güçlendirir: Claire Savaşçılara yardım eder (Call of the Brave), Ash Rangers'ı güçlendirir (Focus), Stellar Warlocks ile çalışır (Wishing Star). Bu, şimdi bir PvE yardımcısı ve sonrasında onun Salon yolunu satın alır.

![PvE ve Salon için Claire, Ash ve Stellar](/img/dtf/hero-honor/12.jpg)

Diğer morlar: Biri gerçekten oynuyorsa (Arena, Triangle, PvE, ana yürüyüş), önce çalışan bir yıldız sayısına ulaştırın — çalışan bir kahraman şimdi yardımcı olur, Salon yavaş bir hesap bonusudur. Prensip: gereken karakterler → Salon'a ücretsiz evrenseller. Aynı anda on yöne püskürtmeyin.

### Salon içinde: Kontrol noktasına bir kahraman {#dtf-inside-priority}

Çekirdek ve PvE seçimleri tamamlandığında, aynı faction'daki Salon kahramanlarını açın ve en yakın vadede en yararlı bonusu alın — genellikle saldıran bir birlik için saldırı. **Bir kahramanı kontrol noktasına sürün ve devam etmeden önce tam faction bonusunu toplayın**: her birinde +10–20 seviye olan beş kahraman, muhtemelen gösterecek hiç kontrol noktası olmadan parçaları harcar.

200'e kadar, yakın kontrol noktaları aracılığıyla kahraman kahraman ilerleyin (biri saldırı verebilir, diğeri sağlık veya savunma — iki kahraman arasındaki rota genellikle birini maksimize etmeyi yener). 200'de duraklayın ve karşılaştırın: bir kahramanı 300'e devam ettirmek ile aynı faction'dan ikinci bir kahraman başlatmak.

![Salon seviyesi 200'e kademeli ilerleme](/img/dtf/hero-honor/13.jpg)

### Mavi yöntemi ve ikinci birlik kuralı {#dtf-blue-method}

Maviler: En çok yıldızı olan bir kahraman, içine evrensel maviler, 10 yıldız boyunca ve Salon'a doğru — dört yavaş sürünmeden daha hızlı genel sağlık artı yük bonusları.

![Hızlı bir Salon yolu için mavi kahramanı seçme](/img/dtf/hero-honor/14.jpg)

Salon için ikinci birliği mahrum bırakmayın: ana birlik → gereken ikinci birlik kahramanları → anahtar PvE → Salon'a ücretsiz kaynaklar. Yeni bir yıldız bir becerinin kilidini açabilir veya güçlendirebilir ve ikinci bir yürüyüşü değiştirebilir; birkaç Salon seviyesi nadiren yapar. Zaten 10 yıldızlı bir kahramanın kişisel parçaları elbette Salon'a aittir.

### Salon neden bileşikleşir? {#dtf-compounding}

Genel sağlık, gelen her kahramana uygulanır: beş ana karakter için bugünün seviyeleri, aylar sonra ikinci ve üçüncü birliklerin ve yeni işe alınan her kahramanın başlangıç bonusu olur. "Parça parça", sunucu yaşıyla ciddi bir sayıda toplanır.

![Salon ilerleme rotası özeti](/img/dtf/hero-honor/15.jpg)

Altın kural: Önce gerçek hesap görevleri (ana birlik, anahtar yıldızlar, gereken PvE kahramanları); kalanlar Salon'a; evrensel altınlar rezerve tutulur. Herhangi bir yüklemeyi somut bir kontrol noktasına (doğru bonus üzerinde 50/100/200) bağlayın, asla Salon'da "bir yere" bağlamayın.

> Kaynak: DTF üzerinde Гейм-Знаток tarafından yazılan [Зал Чести в Last Asylum: Plague - кого качать и куда тратить фрагменты](https://dtf.ru/howto/5234963-zal-chesti-last-asylum-plague-prokatchka-geroev) başlıklı makale.
