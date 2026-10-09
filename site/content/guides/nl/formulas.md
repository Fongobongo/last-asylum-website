---
title: "Hoe het spel telt: diamanten en percentages"
description: "Hoe het spel de prijzen van versnellingen, grondstoffentarieven, crit-kans en verkenningskosten berekent, is iets wat spelers meestal door proefondervindelijk spel achterhalen. Deze pagina verzamelt de onderdelen van die …"
lang: nl
updated: "2026-09-19"
type: guide
---

> Gegevens geverifieerd tegen de spelclient (v1.0.87, bron: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/formulas)).


Hoe het spel de prijzen van versnellingen, grondstoffentarieven, crit-kans en verkenningskosten berekent, is iets wat spelers meestal door proefondervindelijk spel achterhalen. Deze pagina verzamelt de onderdelen van die berekeningen die de moeite waard zijn om te kennen, zonder enige afleiding. Percentages van dezelfde soort worden bij elkaar opgeteld, terwijl de tijd wordt gedeeld door de som, waardoor elk vorig punt aan versnelling minder tijd bespaart dan het punt ervoor.

## Diamanten versnellingen worden goedkoper naarmate de taak langer duurt

De diamantprijs per duur en dezelfde prijs per uur:

| Duur | Diamanten | Per uur |
|---|---|---|
| 1 minuut | 5 | 300 |
| 15 minuten | 55 | 220 |
| 1 uur | 187 | 187 |
| 8 uur | 1.194 | 149 |
| 1 dag | 3.183 | 133 |
| 1 week | 18.072 | 108 |

De kosten groeien langzamer dan de tijd, dus een uur aan kleine aanvullingen kost drie uur per uur dat wordt afgetrokken van een taak die een week duurt. Diamanten besteden aan kleine voltooiingen levert de slechtste verhouding op.

## Grondstoffen per diamant

Eén diamant koopt graan: 1.000, hout: 1.000, kruiden: 600.

## Percentages tellen op, tijd deelt

De regel zit achter elke bonus in het spel. Alle percentages van dezelfde soort worden simpelweg bij elkaar opgeteld: gebouw, onderzoek, alliantietechnologie, overlevende, uitrusting, VIP. Niets wordt ergens vermenigvuldigd, dus +10% en +10% komen uit op +20% in plaats van +21%.

Wat er vervolgens gebeurt verschilt, en dat is waar de valkuil zit. Toegepast op een hoeveelheid zoals capaciteit, opbrengst of soldatenaantal, wordt de som er direct bij opgeteld en wordt het resultaat vermenigvuldigd met één plus de som. Toegepast op tijd deelt dezelfde som, en wordt de tijd gedeeld door één plus de som. De tabel laat zien wat een snelheidsbonus werkelijk waard is.

| Totale snelheidsbonus | Keer sneller | Resterende tijd |
|---|---|---|
| +50% | 1,5 | 67% |
| +100% | 2 | 50% |
| +200% | 3 | 33% |
| +300% | 4 | 25% |
| +500% | 6 | 17% |

Hieruit volgt een niet-voor de hand liggende conclusie. De eerste honderd procent aan snelheid snijdt de tijd door de helft, de tweede honderd procent snijdt nog eens 17 punten af, de derde nog eens 8, en daarboven is de winst nauwelijks te voelen. Eeuwig achter snelheid aan jagen heeft geen zin, terwijl het bereiken van de eerste 100% bijna altijd loont.

De som heeft ook een harde ondergrens en daalt nooit onder -90%, hoeveel vertragingen er ook bovenop worden gestapeld.

## Kleine wetenswaardigheden

De resterende berekeningen passen elk op één regel, en ze zijn vooral de moeite waard om te kennen voor de volledigheid.
- De basis kans op een crit is 5%, waarna de crit van de aanvaller wordt opgeteld en de weerstand van het doelwit wordt afgetrokken.
- De alliantiegrootte begint bij 50 en groeit met vijf per niveau.
- Verkennen kost 1.000 plus honderd per doelwitniveau.
- Moraal wordt begrensd tussen 1 en 2, dus het kan een gevecht maximaal verdubbelen.
- Arenapunten zijn afhankelijk van het beoordelingsverschil: het verslaan van een sterkere tegenstander levert meer op.