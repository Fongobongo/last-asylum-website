---
title: "Come calcola il gioco: diamanti e percentuali"
description: "Il modo in cui il gioco calcola i prezzi dei potenziamenti, i tassi di risorse, la probabilità di critico e i costi di esplorazione è qualcosa che i giocatori di solito scoprono per tentativi. Questa pagina raccoglie le parti di quei calcoli che vale la pena conoscere, senza derivazioni."
lang: it
updated: "2026-09-19"
type: guide
---

> Dati verificati sul client di gioco (v1.0.87, fonte: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/formulas)).


Il modo in cui il gioco calcola i prezzi dei potenziamenti, i tassi di risorse, la probabilità di critico e i costi di esplorazione è qualcosa che i giocatori di solito scoprono per tentativi. Questa pagina raccoglie le parti di quei calcoli che vale la pena conoscere, senza derivazioni. Le percentuali dello stesso tipo si sommano, mentre il tempo viene diviso per la somma, il che fa sì che ogni ulteriore punto di velocità riduca meno tempo rispetto al precedente.

## I potenziamenti in diamanti diventano più economici per i lavori più lunghi

Il prezzo in diamanti per durata e lo stesso prezzo all'ora:

| Durata | Diamanti | All'ora |
|---|---|---|
| 1 minuto | 5 | 300 |
| 15 minuti | 55 | 220 |
| 1 ora | 187 | 187 |
| 8 ore | 1.194 | 149 |
| 1 giorno | 3.183 | 133 |
| 1 settimana | 18.072 | 108 |

Il costo cresce più lentamente del tempo, quindi un'ora di piccoli completamenti costa tre volte un'ora sottratta a un lavoro della durata di una settimana. Spendere diamanti per piccoli completamenti è il tasso peggiore.

## Risorse per diamante

Un diamante acquista grano: 1.000, legname: 1.000, erbe: 600.

## Le percentuali si sommano, il tempo si divide

Questa regola è alla base di ogni bonus nel gioco. Tutte le percentuali di uno stesso tipo si sommano semplicemente: costruzione, ricerca, tecnologia dell'alleanza, sopravvissuto, equipaggiamento, VIP. Nulla si moltiplica da nessuna parte, quindi +10% e +10% danno +20% anziché +21%.

Ciò che accade dopo differisce, ed è lì che si cela la trappola. Applicata a una quantità come la capacità, la produzione o il numero di soldati, la somma viene aggiunta direttamente e il risultato viene moltiplicato per uno più la somma. Applicata al tempo, la stessa somma divide, e il tempo viene diviso per uno più la somma. La tabella mostra quanto vale realmente un bonus di velocità.

| Bonus di velocità totale | Volte più veloce | Tempo rimanente |
|---|---|---|
| +50% | 1,5 | 67% |
| +100% | 2 | 50% |
| +200% | 3 | 33% |
| +300% | 4 | 25% |
| +500% | 6 | 17% |

Ne consegue una conclusione non ovvia. Il primo centinaio per cento di velocità dimezza il tempo, il secondo centinaio taglia altri 17 punti, il terzo altri 8, e oltre a ciò il guadagno si avverte a malapena. Inseguire la velocità per sempre è inutile, mentre raggiungere il primo 100% ripaga quasi sempre.

La somma ha anche un limite minimo invalicabile, non scendendo mai al di sotto del -90%, per quanti rallentamenti vengano accumulati.

## Piccoli fatti che vale la pena conoscere

I calcoli rimanenti trovano spazio in una riga ciascuno, e vale la pena conoscerli principalmente per completezza.
- La probabilità di critico base è del 5%, a cui si aggiunge il critico dell'attaccante e si sottrae la resistenza del bersaglio.
- Le dimensioni dell'alleanza partono da 50 e crescono di cinque per livello.
- L'esplorazione costa 1.000 più cento per livello del bersaglio.
- Il morale è limitato tra 1 e 2, quindi può al massimo raddoppiare l'efficacia in combattimento.
- I punti dell'Arena dipendono dal divario di punteggio: sconfiggere un avversario più forte rende di più.