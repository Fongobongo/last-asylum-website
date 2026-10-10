---
title: "Mappa del mondo: distanze, velocità e raccolta"
description: "La mappa del mondo è il campo condiviso che ospita le città dei giocatori, i nodi di risorse e i mostri, con la zona del Trono al centro. Lo spostamento richiede solitamente più tempo della battaglia a…"
videoTopic: "general"
lang: it
updated: "2026-09-19"
type: guide
---

> Dati verificati con il client di gioco (v1.0.87, fonte: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/world-map)).

La mappa del mondo è il campo condiviso che ospita le città dei giocatori, i nodi di risorse e i mostri, con la zona del Trono al centro. Lo spostamento richiede solitamente più tempo della battaglia alla fine dello stesso, quindi la cosa principale da sapere sulla mappa è come funziona la velocità di marcia: è identica per ogni tipo di truppa e non dipende dalla composizione dell'esercito. Solo la raccolta, i raduni e le marce contro i boss si muovono a doppia velocità, motivo per cui un bersaglio distante viene quasi sempre affrontato tramite raduno.

## Distanze

La mappa misura circa mille caselle in larghezza e mille in altezza, con la zona del Trono al centro. La marcia più lunga copre circa 1.400 caselle, vicina alla diagonale completa del campo.

## Velocità di marcia

La velocità base è la stessa per ogni tipo di truppa, e vale la pena ribadirlo chiaramente, poiché il genere ci ha abituato diversamente. Il familiare "le truppe leggere sono più veloci" non si applica qui, e la composizione non cambia nulla. Anche il carico non cambia nulla: il calcolo della velocità non include alcun parametro relativo a ciò che l'esercito sta trasportando, quindi un esercito carico fa ritorno alla stessa velocità con cui è partito.

Ciò che fa la differenza è la coda da cui parte la marcia. L'edificio Squadra di quella coda fornisce un bonus di velocità notevole, superiore alla ricerca e alla tecnologia dell'alleanza messe insieme.

## Nodi di raccolta e miniere di diamanti

La mappa contiene quattro tipi di nodi: fattorie, segherie, giardini di erbe e miniere di diamanti. Ognuno ha i propri livelli, e le scorte e la produzione crescono di conseguenza. La tabella mostra il livello minimo e massimo per ogni tipo di nodo.

| Nodo | Livelli | Primo livello | Livello massimo |
|---|---|---|---|
| Fattoria | 33 | 135.000 scorte, 270.000/h | 1.800.000 scorte, 10.800.000/h |
| Segheria | 32 | 135.000 scorte, 270.000/h | 2.160.000 scorte, 10.800.000/h |
| Giardino di erbe | 30 | 67.500 scorte, 108.000/h | 864.000 scorte, 4.320.000/h |
| Miniera di diamanti | 31 | 10 diamanti, 360/h | 185 diamanti, 5.400/h |

La miniera di diamanti è l'unica fonte di diamanti sulla mappa ed è anche il nodo più piccolo per scorte, poiché il livello massimo produce 185 diamanti. Viene sfruttata dalle stesse squadre delle risorse ordinarie e non richiede altro che una strada per raggiungerla.

Qui si nasconde un dettaglio utile, facile da trascurare. La capacità di carico viene spesa in modo diverso a seconda della risorsa: un'unità di grano, legno o erbe pesa 1, mentre un singolo diamante pesa 2.000. Il carico totale dell'esercito viene diviso per il peso di una singola unità, motivo per cui la miniera di diamanti di livello massimo e i suoi 185 diamanti vengono svuotati da una forza molto ridotta. I suoi 185 diamanti a un peso di 2.000 equivalgono a 370.000 di carico, e un soldato di livello dieci ne trasporta 2.200, quindi ne bastano 169. Una fattoria piena contenente 1.800.000 unità di grano richiede invece 819 soldati simili.

La conseguenza pratica è ovvia. Eserciti enormi sono sprecati sulle miniere di diamanti, dove un paio di centinaia di soldati sono più che sufficienti, mentre l'esercito principale va destinato ai nodi di risorse.

Sulla mappa compaiono anche punti di soccorso, che forniscono rifornimenti, soldati e resistenza. Si tratta di un aiuto una tantum piuttosto che di una fonte di reddito costante.

## Cosa si muove a doppia velocità

La velocità di marcia viene determinata dal tipo di truppa più lento nell'esercito, ma tutti i trentuno tipi condividono lo stesso valore di 500, quindi la composizione non ha davvero importanza. Il tempo di viaggio si calcola moltiplicando la distanza per 3.600 e dividendo per la velocità. Senza bonus, questo si traduce in 7,2 secondi per casella, dodici minuti ogni cento caselle e quasi tre ore alla portata massima.

Il raddoppio non si applica a tutte le marce, e la tabella mostra quali viaggi sono veloci e quali procedono alla velocità normale.

| Marcia | Velocità |
|---|---|
| Raccolta di risorse | raddoppiata |
| Raduno contro un mostro o la città di un giocatore | raddoppiata |
| Boss mondiale e boss del fine settimana | raddoppiata |
| Attacco in solitaria a un mostro | normale |
| Attacco in solitaria alla città di un giocatore | normale |
| Rinforzo e marcia di battaglia per il tempio in solitaria | normale |

Ne conseguono due conclusioni che di solito il genere non suggerisce. La caccia ai mostri in solitaria avviene alla stessa velocità di un'incursione, quindi un mostro distante richiede il doppio del tempo di viaggio rispetto a un nodo di raccolta distante. Un raduno, al contrario, raggiunge la città nemica due volte più velocemente rispetto a un attacco in solitaria sulla stessa città, e un bersaglio distante viene quindi quasi sempre affrontato tramite raduno.

Anche i bonus di velocità si accumulano in modo non uniforme. L'edificio Squadra contribuisce alla raccolta, agli attacchi contro i giocatori, ai rinforzi e ai raduni, mentre una marcia di battaglia per il tempio in solitaria lo ignora completamente e tiene conto unicamente della percentuale di velocità di marcia generale.

## Cosa non è scritto qui

Ci sono molti dati su zone, scudi e ricollocazione, ma verifiche indipendenti ne hanno confermato meno della metà, quindi la pagina riporta solo velocità, distanze e rapporto dei tempi di viaggio.