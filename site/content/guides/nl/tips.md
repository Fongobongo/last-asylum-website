---
title: "🧠 Pro-tips, Verborgen Mechanieken & Geheimen"
description: "De complete encyclopedie van verborgen mechanieken in Last Asylum: Plague — snapshotting van bouwbuffs, verdedigingstactieken via Ghost Rallies, overloopmechanieken in het ziekenhuis, de conversieval van Claire, het vooraf farmen van tegels en geheimen rondom de diamond-economie."
lang: nl
updated: "2026-09-04"
videoTopic: tips
---

De meeste mobiele strategiegames lijken op het eerste gezicht bedrieglijk eenvoudig: upgrade gebouwen, level helden en tik op knoppen met rode stippen. Onder de oppervlakte van **Last Asylum: Plague** schuilt echter een geavanceerde wiskundige engine met tientallen ongeschreven regels die het spel nergens uitlegt.

Overlevenden die deze mechanieken begrijpen, boeken **2 tot 3 keer snellere voortgang**, verliezen hun leger nooit aan verrassende nachtelijke raids en verslaan consistent tegenstanders met 30–50% meer Machtsbeheersing (Might). Hieronder vind je het samengestelde compendium van niet-obvious regels, verborgen nuances en in de strijd geteste tactieken die door topspelers in allianties worden gebruikt.

---

## 1. Snapshotting van bouwbuffs & Timerwiskunde {#snapshotting}

Een van de duurste blunders van nieuwe commandanten is het verkeerd begrijpen van hoe snelheidsbuffs worden berekend.

> [!IMPORTANT]
> **De Snapshotting-regel:**
> Alle snelheidsbuffs (uitrusting, titels, runen, alliantietechnologie) worden **STRIKT BEREKEND OP HET EXACTE MOMENT DAT JE OP UPGRADE (START) DRUKT**. Buffs die worden geactiveerd nadat de timer al is gestart, **VERKORTEN DE RESTERENDE DUUR** van eender welk lopend project **NIET**!

### Praktische toepassing:
* Als je een Sanctuary-upgrade van 30 dagen start en 5 minuten later constructie-uitrusting uitrust of om de titel "Minister of Works" (+10%) vraagt, blijft de timer ongewijzigd! Het spel berekent actieve timers niet met terugwerkende kracht.
* **De pro-spelerstruc:** Rust je constructie-uitrusting uit, vraag de tijdelijke alliantietitel "Minister of Works" (+10%) aan, activeer een constructierune (+5%), start die enorme Sanctuary-upgrade van 30 dagen — en **trek direct de uitrusting weer uit en leg de titel neer**! De buff is permanent vastgelegd (gesnapshott) voor de volledige 30 dagen.

### De wiskunde achter timers:
De werkelijke duur wordt bepaald door:
$$T = \frac{T_{base}}{1 + \sum \text{SpeedBuffs}}$$

Vanwege de noemer levert elke opeenvolgende snelheidsbuff van +10% iets minder absolute bespaarde uren op dan de vorige (afnemend rendement in uren). Bij timers in de late game (Sanctuary 25–30, waar de basisduur oploopt tot 40–80 dagen) bespaart zelfs een rune van 5% echter **verschillende volle dagen aan versnellingen**!

---

## 2. Ziekenhuisoverloop & De "Ghost Rally"-verdedigingstactiek {#ghost-rally}

Je ziekenhuis is niet zomaar een genezingshut — het is de allereerste en meest kritieke firewall die permanente accountvernietiging voorkomt.

### De verborgen overloopregel (permanente dood)
Wanneer je stad wordt aangevallen, raken overlevende, verslagen troepen gewond en vullen ze de ziekenhuisbedden.
* Zolang er ziekenhuisruimte beschikbaar is, zijn troepen **Gewond** en kunnen ze snel worden genezen voor goedkope grondstoffen.
* **Zodra de ziekenhuiscapaciteit 100% bereikt:** STERFT ELKE volgende gewonde soldaat **PERMANENT**. Als een vijandelijke 'whale' je stad 3 tot 4 keer achter elkaar nul-hits terwijl je slaapt, worden honderdduizenden hoogste-tier T8/T9-troepen voorgoed wegvaagd. Het herbouwen van dat leger kost maanden.

### Het "Ghost Rally" (Neprally)-geheim
Wat moet je doen als een vijandelijke aanvalsmacht zich naar je 'hive' teleporteert tijdens KvK of Kill Events, maar je geen Vredesschild (Peace Shield) hebt (of door je diamonds heen bent)?

> [!TIP]
> **Hoe je je leger beschermt zonder schild:**
> 1. Open de wereldkaart en zoek een verre, verlaten vesting, een zombiehol van een hoog niveau of een inactief kamp.
> 2. Tik op **Rally** en selecteer de maximale timerduur: **8 uur**.
> 3. Wijs je volledige primaire vechtzesental met je sterkste helden toe aan deze rally.

**Waarom dit werkt:** Troepen die zijn toegewezen aan een actieve rally binnen je stad of op marss naar een rallydoel hebben **100% absolute immuniteit tegen inkomende aanvallen**. Zelfs als de vijand je stadsmuren bestormt en je stad in lichterlaaie zet, lopen je geralliede troepen nul schade op! Zodra de dreiging is geweken, annuleer je de rally met één klik en keren je elitetroepen veilig en wel terug naar je kazerne.

---

## 3. Falcon Tower-geheimen & Alliantie-opgravingen {#falcon-tower}

Falcon Tower-quests en de bijbehorende schatkaarten behoren tot de belangrijkste dagelijkse bronnen van diamonds, heldenscherven, versnellingen en alliantiegeschenken. Toch claimen spelers ze willekeurig en verspillen ze tot de helft van hun potentiële beloningen.

### De drie gouden regels voor het stapelen van Falcon-quests:

1. **Wis geen "Rode Stippen"**:
   Voltooi missies, maar **TIK NIET op de knop "Claim"**. Voltooide quests met rode stippen verlopen nooit en hebben geen deadline — ze kunnen voor onbepaalde tijd op je bord blijven staan. Bewaar beloningen tot de dag van het dolevents begint (maandag — Fase 1 Alliantieduel; woensdag — Wetenschapsdag; vrijdag — Troepentraining).

2. **Stapel tot "Max − 1" (Stapelen tot Max − 1)**:
   Houd je questbord bijna vol — behoud precies $N - 1$ voltooide quests (bijv. **24 van de 25 mogelijke** bij maximale capaciteit, of 7 van de 8 bij vroege levels). Het openlaten van één slot is strikt noodzakelijk om de achtergrondtimer voor het genereren van quests te laten doorlopen.

3. **Beheer je bordlimiet (bevries de timer nooit)**:
   Als je bord ooit de maximale capaciteit bereikt (bijv. 25 van de 25), **BEVRIEST DE QUEST-SPAWNTIMER ONMIDDELLIJK**. Totdat je ten minste één slot vrijmaakt, worden er nul nieuwe quests gegenereerd en verbrand je je gratis dagelijkse missies permanent. Claim voltooide quests regelmatig wanneer dat nodig is, zodat er ten minste één slot open blijft voor nieuwe quests.

> [!TIP]
> **Eén-klik claim op Level 8:** Het bereiken van **Falcon Tower Lv. 8** ontgrendelt de functie "Alles claimen". Op verzameldagen (ma, wo, vr) kun je met een enkele tik je volledige opgeslagen voorraad van 24 quests direct indienen, waardoor alle eventbeloningskisten binnen enkele seconden na de server-reset worden ontgrendeld!

---

### Alliantie-opgravingen {#excavations}

Het voltooien van Falcon Tower-quests levert **Schatkaarten** op, die opgravingsterreinen op de wereldkaart laten verschijnen. Dit is een coöperatieve alliantieactiviteit met twee verschillende beloningstypes: de basisopgravingsbeloning en een snelheidsbonus bij voltooiing.

#### 1. Basisopgravingsbeloning (voor alle alliantieleden)
* **Iedereen die het opgravingsterrein aanraakt, ontvangt de beloning:** Je hoeft er alleen voor te zorgen dat je eenheid arriveert en het terrein voor een enkel moment betreedt — deelname wordt direct geregistreerd.
* **De gulden regel: KAMPEER/ZIT NIET op het opgravingsterrein!**
  De duur van de opgraving neemt snel af naarmate er meer eenheden actief graven op de tegel. Als alliantieleden ter plekke blijven kamperen, is de site in seconden klaar en **halen** bondgenoten die vanuit verre steden marcheren **het niet op tijd**.
  > [!IMPORTANT]
  > **Alliantie-etiquette:** Raak de opgraving een fractie van een seconde aan om je deelname vast te leggen en **roep je eenheid daarna direct terug**, zodat de timer lang genoeg open blijft voor alle teamgenoten om de site op normale marssnelheid te bereiken.

#### 2. Extra snelheidsbonus ("Hand"-icoon voor 10 spelers)
* **"Hand"-icoon verschijnt NADAT de opgraving is afgelopen:**
  Op het exacte moment dat de opgraving eindigt, verschijnt er een **"Hand"-icoon** boven de site. Om deze extra bonus te pakken, tik je snel op het **Hand-icoon** of op de **opgravingslocatie zelf**.
* **Strikte limiet van "wie het eerst komt, het eerst maalt" voor 10 spelers:**
  Dit is een reactiebeloning op basis van snelheid: alleen de **eerste 10 alliantieleden** die tikken ontvangen de bonusprijs.
* **Één gelukkige speler krijgt een dubbele beloning ($2\times$):**
  Precies **één willekeurige speler** uit deze 10 gelukkige klikkers ontvangt een **Dubbele Beloning ($2\times$)**!

---

## 4. De voorraadtasval & Opslagplaats-beschermingsdrempels {#warehouse-secrets}

### Veilige vs. blootgestelde grondstoffen
Je stadspakhuis (Warehouse) beschermt slechts een strikt begrensde hoeveelheid van elke grondstof (bijv. 3.000.000 Voedsel, Hout en Kruiden op level 20).
* Grondstoffen die boven de beschermingslimiet op je bovenste balk worden weergegeven, zijn **BLOOTGESTELD**.
* Zodra een vijandelijke verkenner miljoenen aan blootgestelde grondstoffen ontdekt, wordt je stad een primair doelwit en strippen aanvallers je reserves tot op het bot.

> [!CAUTION]
> **De gouden regel voor grondstoffenbeheer:**
> Open in geen enkel geval **voorraadtassen of kisten uit je inventaris van tevoren**!

* Grondstoffen die in je inventaristassen zijn opgeslagen, zijn **volledig onzichtbaar voor vijandelijke verkenningsrapporten** en 100% immuun voor plunderingen.
* Open alleen het exacte aantal tassen dat nodig is om een specifiek gebouw of onderzoeksproject te starten vlak voordat je op upgrade drukt. Je stad moet er voor vijandelijke verkenners altijd "blut" uitzien.

---

## 5. Tactische positionering & Verborgen "Rijwisseling"-mechanieken {#row-shift}

Gevechten in Last Asylum vinden plaats in een opstelling van twee rijen: de frontlinie (2 helden) en de achterste rij (3 helden). Automatische aanvalsdoelwitten en 'splash damage' volgen echter strikte geometrische regels.

```
VIJANDELIJKE OPSTELLING:
[ Vijand Front 1 ]   [ Vijand Front 2 ]
[ Vijand Achter 1 ]  [ Vijand Achter 2 ]  [ Vijand Achter 3 ]
        ▲                    ▲
        │                    │ (Directe focus op auto-attacks)
        ▼                    ▼
[ Jouw Tank 1 ]      [ Jouw Tank 2 ]
[ Jouw Schade 1 ]    [ Jouw Support ]    [ Jouw Schade 2 ]
JOUW OPSTELLING:
```

### Direct doelwiten en diagonale lekkage
* Melee auto-attacks prioriteren de vijandelijke frontlinie-eenheid die er direct tegenover staat.
* Als je tank op de linkerflank (bijv. Arthur) valt voordat je tank op de rechterflank (bijv. Daskal) neergaat, **schakelt de linkerflank van de vijand NIET over naar de rechter tank**! In plaats daarvan lekken hun aanvallen direct door naar je schade-eenheid in de achterste rij die achter Arthur staat!
* **Tactische regel:** Plaats je primaire 'durability'-tank recht tegenover de eenheid van de vijand met de hoogste burst-schade.

### Mono-factiesynergie & Raven-epigrafen
Het inzetten van 5 helden van dezelfde klasse (bijv. 5 Warriors) levert een basisbonussquadron op van **+20% ATK, HP en DEF**.
De echte gamechanger ontstaat echter in de late game: **UR Raven-epigrafen** bieden enorme procentuele stat-multipliers die UITSLUITEND van toepassing zijn op één specifieke factie.
* In een puur mono-squadron van 5 Warriors bufft elke geüpgradede epigraaf 100% van je helden.
* In een gemengd squadron (2 Warriors, 2 Rangers, 1 Warlock) daalt de waarde van je epigraaf met **ruim 60%**, omdat slechts een fractie van je helden profiteert van de buffs.

---

## 6. De conversieval van Claire (SSR ➔ UR) {#claire-conversion}

Op dag 8 van het "Era of Revival"-seizoen ontgrendelen commandanten de mogelijkheid om SSR Claire te converteren naar een legendarische UR-held. Duizenden spelers drukken direct op de knop — om er vervolgens achter te komen dat de totale schade van hun squadron op mysterieuze wijze is **afgenomen**!

### Waarom de schadeval optreedt:
* Een volledig gemaxte SSR Claire biedt een betrouwbare teamrede passieve buff van **+16% schade**.
* Bij de eerste conversie naar een 6★ UR daalt die teamrede passieve buff naar **+10%**. Haar persoonlijke basisstats stijgen enigszins, maar de totale burst-schade van je squadron daalt merkbaar.

### Zo vermijd je de schadeval:
Converteer Claire niet op het exacte moment dat ze beschikbaar komt!
1. Verzamel vooraf Erehal-tokens en -scherven (mik op Level 100 of Level 160 in de Hall).
2. Injecteer op de conversiedag al je opgeslagen grondstoffen in één keer om haar direct voorbij 6★ naar **9★ of 10★** te tillen.
3. Bij 10★ UR levert Claire een wedstrijd-winnende krachtsboost op: **x2.20 persoonlijke schade-multiplier** en ontgrendelt ze *Adv. Tenacity* (+20% ATK/DEF/HP en -10% cooldown-reductie voor het hele squadron).

---

## 7. Het vooraf farmen van grondstoftegels voor Verzameldag & Alliantieduel {#pre-farming}

Verzameldag (Fase 1 van het Alliantieduel op maandag, of Dag 1 / Dag 7 van Supreme Healer) is een uitgelezen kans voor een vliegende start. Veteraan-allianties verzegelen de overwinning routinematig binnen de eerste 5 minuten na middernacht.

> [!TIP]
> **Het geheime puntental:**
> Het spel kent verzamelpunten toe **NIET tijdens het mijnen van de tegel, maar OP HET EXACTE SECUNDE DAT DE MARSS TERUGKEERT naar je stad**!

### Stapsgewist protocol voor vooraf farmen:
1. Stuur aan de eve van de Verzameldag (bijv. zondagavond zo'n 4 à 5 uur voor de dagelijkse reset om 02:00 UTC) alle verzamelmarssen naar de rijkste Level 6 of 7 grondstofnodes (bij voorkeur Goud of Kruiden).
2. Tim de marssen zo dat het verzamelen is voltooid en de troepen terug naar je poort marcheren om **02:02–02:05 UTC (00:02–00:05 servertijd) op de resetdag**.
3. Zodra de klok de reset slaat, worden 5 uur aan verzamelpunten van meerdere marssen tegelijkertijd bijgeschreven — dit levert direct **1,5 tot 2,5 miljoen punten** op en ontgrendelt binnen enkele seconden 2 tot 3 kistentiers!

### Wereldkaart-etiquette: Tegels leegmaken
Laat nooit gedeeltelijk verzamelde grondstofnodes achter. Als een bondgenoot 4.000 hout laat liggen op een node van 500.000, blijft die tegel tot wel 12 uur doodliggen, wat de spawn van een nieuwe high-tier node blokkeert. Maak tegels altijd leeg tot 0 of stuur een verkenner-eenheid van 1 troep om de resten op te ruimen.

---

## 8. Trainingsgronden: De opdeling in 4 gronden & De T4-promotietruc {#troop-promotion}

Trooptiers worden ontgrendeld op basis van het level van de Trainingsgrond: T6 op Lv. 17, T7 op 20, T8 op 24, T9 op 27 en T10 op Lv. 30 met het voltooien van het Elite Troop-onderzoek.

De meeste beginnende spelers maken een catastrofale fout: ze levelen alle vier de trainingsgronden gelijkmatig en trainen hun hoogst ontgrendelde tier vanaf nul op elk van hen. Dit kost tientallen miljoenen grondstoffen en dwingt timers van 30+ uur af. Ervaren spelers gebruiken de **1 Max + 3 Laag-verdeling**.

### De niveauverdeling van de 4 trainingsgronden:
* **1 Hoofdtrainingsterrein (Max Level):** Houd dit gelijk aan je Sanctuary-limiet. Dit is het enige gebouw dat nodig is om je hoogst trainbare tier te ontgrendelen (bijv. T9 op Lv. 27, T10 op Lv. 30).
* **3 Ondersteunende trainingsterreinen (Level 10):** Houd deze strikt op **Level 10**! Level 10 ontgrendelt **Tier 4 (T4)** troepen. Het 4e trainingsterrein wordt ontgrendeld nabij de onderkant van de **Development**-onderzoeksboom — ontgrendel dit zo snel mogelijk.
* Waarom? Het upgraden van alle 4 de terreinen naar Lv. 27–30 verbruikt enorm veel Hout, Graan en Kruiden voor nul extra tier-ontgrendelingen. Het spel vereist slechts **één** gemaxte gebouw om te trainen en te promoveren naar de hoogste tier.

### De "T4 Fabriek → Promoveren"-pijplijn:
1. **Fase A (Parallelle T4-productie):** Zet Tier 4-soldaten gelijktijdig in de wachtrij op alle drie de Level 10-terreinen.
   * Op één terrein kost een batch T4 ongeveer 10,5 uur (~455 soldaten).
   * Over drie terreinen produceer je **~1.365 T4-soldaten** in precies dezelfde ~10,5 uur.
2. **Fase B (Promoveren op hoofdterrein):** Open je gemaxte trainingsterrein, schakel over van "Train" naar **"Promote"**, en promoveer je opgeslagen T4-soldaten naar je hoogste tier (bijv. T9 of T10).
   * Het promoveren van een volledige batch T4 naar T9 kost slechts **~16,5 uur** (vergeleken met ~33 uur voor het trainen van T9 vanaf nul!).
3. **Totale cyclusvergelijking:**
   * **Promotieroute:** 10,5u (T4) + 16,5u (promotie) = **~26 uur**.
   * **Directe high-tier wachtrij:** Enkele T9-batch = **~33 uur**.
   * **Netto voordeel:** Bespaart **6 tot 7 uur per cyclus**, houdt kazernes 24/7 aan het werk en behoudt miljoenen grondstoffen.

> [!NOTE] Alliantieduel-scoring (Vrijdag — Troepentraining)
> * Het in de wachtrij zetten van T4-troepen op de 3 ondersteunende terreinen levert volledige trainingspunten op (punten worden toegekend **op het moment dat de wachtrij start**, niet bij het innen!).
> * Het promoveren van soldaten levert eventpunten op voor het tierverschil tussen T4 en T9/T10.
> * Alle versnellingen die worden besteed aan promotiewachtrijen tellen volledig mee voor de versnellingsverbruikscategorieën van het event.

---

## 9. Onderzoek: Het Alliantieduel-kistenslot (Super Reward 1 & 2) {#duel-research-lock}

Het onderzoeks laboratorium heeft 13 verschillende bomen. De meest kritieke vroege voortgangspoort zit verstopt in de **Alliantieduel**-tak:

* Deze boom bevat twee niet-onderhandelbare mijlpalen: **Super Reward 1** en **Super Reward 2**.
* **Zonder Super Reward 1 kun je Tier 4–6 Duel-beloningskisten niet openen**, zelfs niet als je de vereiste punten verdient!
* **Zonder Super Reward 2 zijn Tier 7–9 kisten fysiek vergrendeld!**
* Deze topkisten bevatten de levensader van accountvoortgang: duizenden studierollen, UR Hero Omni Shards, level 11 uitrustingsmaterialen en maximaal **10.000 Diamonds**.
* **F2P-regel:** Kanaliseer je studierollen direct na de basis-ontwikkelingsknoppen (Bouw- en Onderzoekssnelheid) naar Super Reward 1 & 2. Dit ontgrendelt de beloningsengine die je account maandenlang financiert.

---

## 10. Uitrustingsprioriteiten: Smelterij Lv. 25 & Slot-optimalisatie {#gear-priorities-tips}

Gear Stones (Uitrustingsstenen) zijn uiterst schaars. Ze verspreiden over willekeurige uitrustingsslots verlamt de prestaties in de mid-game:

1. **Smelterij → Level 25:** Duw de Smelterij naar Level 25 zodra je Sanctuary dit toelaat. Dit is de primaire knelpunt voor het verfijnen van Gear Stones. Het vertragen hiervan zorgt ervoor dat je schade-eenheid slecht is uitgerust op het moment dat de moeilijkheidsgraad piekt.
2. **Prioriteit DPS / Schade-slot:**
   * **Toprioriteit:** Wapens (Zwaard) en Handschoenen (verhoogt ATK, Crit en Pantserdoorboring).
   * **Tweede prioriteit:** Laarzen (snelheid en basisoverleefbaarheid).
   * **Borstplaat:** Laat op basisniveau staan. Extra DEF op een schade-eenheid heeft vrijwel geen invloed op de overwinning.
3. **Prioriteit Tank-slot:**
   * **Toprioriteit:** Borstplaat en Laarzen (pure HP en schade-mitigatie).
   * **Wapen (Zwaard):** **Besteed nooit steden aan het wapen van een tank!** Tanks winnen door te overleven en de achterhoede te beschermen. Het verfijnen van het zwaard van een tank blaast de zichtbare macht op zonder echte gevechtswaarde toe te voegen.
4. **Honor Shop:** Koop uitsluitend **Gear Blueprints (UR)**. Sla Curio-kisten en universele scherven over — blauwdrukken beveiligen elke oranje uitrustingspromotietier (Lv. 10, 20, 30, 40).

---

## 11. Wereldbaasspecialisten: Ash en Celia {#boss-specialists}

Hoewel paarse (SSR) helden al vroeg in PvP-opstellingen verdwijnen, hebben twee personages onvervangbaar nut bij Wereldbazen:

* **Ash:** Haar passieve vaardigheid «Focus» bufft de **monsterschade** toegebracht door de twee rangers met de meeste aanvalskracht in het team (volgens client v1.0.102).
* **Celia:** Verhoogt bonussen op grondstofdrops en kill-beloningen van Wereldbazen.
* Het investeren van overige paarse vaardigheidsstenen in deze twee levert levenslang dividend op in baasbuit.

---

## 12. Diamond-discipline: Waar te besteden vs. Wat te vermijden {#diamond-discipline}

Diamonds zijn de belangrijkste valuta. Hoewel gul in de vroege game, laat roekeloos uitgeven spelers hongeren wanneer kritieke evenementen aanbreken.

| Topinvesteringen (PRO) | Geef hier NOOIT Diamonds aan uit (NOOB) |
|---|---|
| **Wensrad** op Dag 8 (Cynthia) en Dag 36+ (UR Helden). Trek altijd in batches van 10 voor garanties. | Standaard Taveerne-rekruteringen (povere UR-kansen, geen vangnet). |
| **VIP Points** tijdens Diamond Rebate-evenementen om te pushen naar VIP 8 (2e permanente bouwer) en VIP 11 (permanent +10% snelheid). | Directe versnelling van bouwtimers met losse diamonds. |
| **8-uur Vredesschilden** tijdens KvK en weekend Kill Events. | Directe aankoop van standaard Voedsel of Hout in de itemwinkel. |
| **Alliance Shop & Mystery Merchant** vernieuwingen voor snelheidsstenen met 70–80% korting. | Het reviven van standaard troepen buiten kritieke verdediging van forten. |

---

## 13. Overzichtelijke checklist: De 12 geboden voor overleven {#ten-commandments}

1. **Snelheidsbuffs 'snapschotten' bij start** — Activeer ministeriële titels, runen en uitrusting VOORDAT je op upgrade drukt.
2. **Leeg ziekenhuis = levend leger** — Ziekenhuisoverloop veroorzaakt onherroepelijke permanente dood van troepen.
3. **Ghost Rally om troepen te beschermen** — Verberg je beste marss in een rally van 8 uur bij onverwinbare raids.
4. **Open nooit inventaris-voorraadtassen** — Houd tassen verzegeld tot het exacte moment dat een upgrade start.
5. **Falcon Tower: Stapelen tot Max − 1** — Houd één slot open om achtergrondspawns te behouden; innen op ma/wo/vr.
6. **Converteer SSR Claire niet te vroeg** — Bewaar Erehal-tokens om de 6★ stat-dip over te slaan naar direct 9★/10★.
7. **Boerderij verzamelnodes vooraf op de avond voor Verzameldag** — Tim terugkeer naar 00:05 UTC op de resetdag (bijv. zondagavond op maandag) om direct kisten te claimen.
8. **De 4-grondverdeling (1 Max + 3 Lv.10):** Parallel farmen van T4 op 3 ondersteunende gronden en promoveren op je hoofdterrein, wat 6–7 uur per cyclus bespaart.
9. **Super Reward 1 & 2 in Lab — Niet-onderhandelbaar:** Zonder hen blijven Duel-kistentiers 4–9 permanent vergrendeld.
10. **Verfijn nooit het zwaard van een tank:** Uitrustingsstenen horen thuis op Carry-zwaard/handschoenen en Tank-borstplaat/laarzen.
11. **Besteed nooit diamonds aan losse Taveerne-trekken** — Bewaar ~1.500 voor de Wensrad-mijlpaal (7 gratis spins + 3 betaalde = Cynthia-kopie) en duw de rest in VIP-voortgang.
12. **Mono-factie verslaat hybride opstellingen** — Vijf helden van dezelfde klasse gemaximaliseerd met Raven-epigrafen domineren gemengde composities.

---

## Korpez' Top-5 vroege-game spijtpunten — Herhaal ze niet {#korpez-regrets}

Uit 7 maanden spelen met een hoofdaccount, vijf fouten die veteranen nieuwe spelers blijven aanraden te vermijden:

1. **Het kopen van Curio-kisten in de Honor shop in plaats van blauwdrukken.** Uitrustingsblauwdrukken zijn het enige dat Honor koopt dat overal anders schaars is. Curio's vallen passief; blauwdrukken niet.
2. **Het voeren van UR Omnis aan Arthur.** Hij veroudert slecht. Sla ze op voor **Marlena naar 10★** — zij draagt de hele eerste 30–60 dagen.
3. **Het negeren van de Smelting Workshops.** Vijf stuks op level 23–25 = 44K gearstones/week passief. Ze laat pushen is wat elk level-40 breekpunt later blokkeert.
4. **Gearstones druppelen over paarse (SSR) uitrusting.** De juiste uitrusting voor de juiste held alleen: zwaard+handschoenen+laarzen voor DPS, borst+laarzen voor tanks, al het andere op nul tot UR.
5. **Het upgraden van aanvalsvaardigheden op tanks.** De aanval van een tank doet niets; hun vaardigheden werken daarentegen op schuivende DEF/HP.