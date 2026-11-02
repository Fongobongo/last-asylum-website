---
title: "1. Snapshotting van bouwbuffs & Timerwiskunde"
description: "Een van de duurste blunders van nieuwe commandanten is het verkeerd begrijpen van hoe snelheidsbuffs worden berekend."
lang: nl
updated: "2026-10-12"
type: guide
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
