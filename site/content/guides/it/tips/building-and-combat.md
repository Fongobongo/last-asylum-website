---
title: "1. Snapshot dei bonus di costruzione e matematica dei timer"
description: "Uno degli errori più costosi commessi dai nuovi comandanti è non capire come vengono calcolati i bonus di velocità."
lang: it
updated: "2026-10-12"
type: guide
---
## 1. Snapshot dei bonus di costruzione e matematica dei timer {#snapshotting}

Uno degli errori più costosi commessi dai nuovi comandanti è non capire come vengono calcolati i bonus di velocità.

> [!IMPORTANT]
> **La regola dello Snapshot (Istantanea):**
> Tutti i bonus di velocità (equipaggiamento, titoli, rune, tecnologia dell'alleanza) vengono calcolati **SEVERAMENTE NEL MOMENTO ESATTO IN CUI SI PREME IL PULSANTE DI AGGIORNAMENTO (AVVIO)**. Qualsiasi bonus attivato dopo l'avvio del timer **NON RIDURRÀ** la durata rimanente di un progetto in corso!

### Applicazione pratica:
* Se avvii un potenziamento del Santuario di 30 giorni e 5 minuti dopo equipaggi l'equipaggiamento da costruzione o richiedi il titolo di "Ministro dei Lavori" (+10%), il timer rimane invariato! Il gioco non ricalcola retroattivamente i timer attivi.
* **Il trucco del giocatore pro:** Equipaggia il tuo set da costruzione, richiedi il titolo temporaneo di alleanza "Ministro dei Lavori" (+10%), attiva una runa di costruzione (+5%), avvia il massiccio potenziamento del Santuario di 30 giorni — e **rimuovi immediatamente l'equipaggiamento e rinuncia al titolo**! Il bonus è stato bloccato in modo permanente (tramite snapshot) per tutti i 30 giorni.

### La matematica dietro i timer:
La durata effettiva è determinata da:
$$T = \frac{T_{base}}{1 + \sum \text{SpeedBuffs}}$$

A causa del divisore, ogni ulteriore bonus di velocità del +10% produce leggermente meno ore assolute salvate rispetto al precedente (rendimento decrescente in ore). Tuttavia, sui timer di fine gioco (Santuario 25–30, dove la durata base raggiunge i 40–80 giorni), anche una runa del 5% fa risparmiare **diversi giorni interi di acceleratori**!

## 2. Traboccamento dell'ospedale e tecnica di difesa del "Rally Fittizio" (Ghost Rally) {#ghost-rally}

Il tuo ospedale non è una semplice capanna di guarigione: è l'unico firewall fondamentale che impedisce la distruzione permanente dell'account.

### La regola nascosta del traboccamento (Morte permanente)
Quando la tua città viene attaccata, le truppe sconfitte sopravvissute rimangono ferite e riempiono i letti dell'ospedale.
* Finché c'è spazio disponibile nell'ospedale, le truppe sono **Ferite** e possono essere curate rapidamente a basso costo di risorse.
* **Una volta che la capacità dell'ospedale raggiunge il 100%:** OGNI soldato ferito successivo **MUORE PERMANENTEMENTE**. Se un "balena" nemica azzera la tua città 3 o 4 volte consecutivamente mentre dormi, centinaia di migliaia di truppe di alto livello T8/T9 vengono spazzate via per sempre. Ricostruire quell'esercito richiede mesi.

### Il segreto del "Rally Fittizio" (Ghost Rally)
Cosa dovresti fare se una forza d'attacco nemica si teletrasporta nel tuo alveare durante la KvK o gli eventi di uccisione, ma non hai alcuno Scudo della Pace (o hai esaurito i diamanti)?

> [!TIP]
> **Come proteggere il tuo esercito senza uno scudo:**
> 1. Apri la mappa del mondo e individua una fortezza abbandonata lontana, un covo di zombi di alto livello o un campo inattivo.
> 2. Tocca **Rally** e seleziona la durata massima del timer: **8 ore**.
> 3. Assegna l'intera squadra di combattimento principale con i tuoi eroi più forti a questo rally.

**Perché funziona:** Le truppe assegnate a un rally attivo all'interno della tua città o in marcia verso un bersaglio di rally possiedono un'**immunità assoluta del 100% agli attacchi in arrivo**. Anche se il nemico colpisce le mura della tua città e incendia il tuo insediamento, le tue truppe in rally subiscono zero danni! Una volta passata la minaccia, annulla il rally con un solo clic e le tue truppe d'élite torneranno alla caserma sane e salve.

## 3. Segreti della Torre dei Falchi e Scavi dell'Alleanza {#falcon-tower}

Le missioni della Torre dei Falchi e le relative mappe del tesoro sono tra le principali fonti giornalistiche di diamanti, frammenti di eroi, acceleratori e doni dell'alleanza. Eppure i giocatori occasionali le riscuotono a caso e sprecano fino alla metà delle loro ricompense potenziali.

### Le tre regole d'oro per l'accumulo delle missioni del Falco:

1. **Non cancellare i "Puntini Rossi"**:
   Completa le missioni, ma **NON toccare il pulsante "Riscuoti"**. Le missioni completate con i puntini rossi non scadono mai e non hanno scadenze: possono rimanere tranquillamente sulla tua bacheca a tempo indeterminato. Tieni le ricompense non riscosse fino all'inizio del giorno dell'evento server di riferimento (lunedì — Fase 1 Duello dell'Alleanza; mercoledì — Giorno della Scienza; venerdì — Addestramento Truppe).

2. **Accumula fino a "Max − 1" (Stacking Max − 1)**:
   Tieni la bacheca delle missioni quasi piena al massimo della capacità: mantieni esattamente $N - 1$ missioni completate (ad esempio, **24 su 25 possibili** alla massima capacità, o 7 su 8 ai livelli iniziali). Lasciare uno slot aperto è strettamente necessario affinché il timer di generazione delle missioni in background continui a girare.

3. **Monitora il limite della bacheca (Non bloccare mai il timer)**:
   Se la tua bacheca raggiunge la capacità massima (ad es. 25 su 25), **il timer di generazione delle missioni SI BLOCCA IMMEDIATAMENTE**. Finché non liberi almeno uno slot, non verrà generata nessuna nuova missione e le tue missioni giornaliere gratuite andranno sprecate per sempre. Riscuoti regolarmente le missioni terminate quando necessario, in modo che rimanga almeno uno slot aperto per la generazione di nuove missioni.

> [!TIP]
> **Riscossione con un tocco al livello 8:** Raggiungere la **Torre dei Falchi Liv. 8** sblocca la funzione "Riscuoti tutto". Nei giorni di raccolta di riferimento (lun, mer, ven), un singolo tocco invia istantaneamente l'intero accumulo di 24 missioni immagazzinate, sbloccando tutti i forzieri delle ricompense degli eventi a pochi secondi dal ripristino del server!

---

### Scavi dell'Alleanza {#excavations}

Completare le missioni della Torre dei Falchi assegna **Mappe del Tesoro**, che fanno apparire siti di scavo sulla mappa del mondo. Si tratta di un'attività cooperativa dell'alleanza caratterizzata da due distinti tipi di ricompensa: la ricompensa di scavo di base e un bonus di velocità al completamento.

#### 1. Ricompensa di scavo di base (per tutti i membri dell'alleanza)
* **Chiunque tocchi il sito di scavo riceve la ricompensa:** Ti basta far arrivare la tua squadra ed entrare nel sito di scavo per un solo momento: la partecipazione viene registrata immediatamente.
* **La regola d'oro: NON accamparsi/rimanere sul sito di scavo!**
  La durata dello scavo diminuisce rapidamente con ogni squadra che scava attivamente sulla tessera. Se i membri dell'alleanza si accampano sul posto, il sito si conclude in pochi secondi e gli alleati in marcia dalle città distanti **non faranno in tempo ad arrivare**.
  > [!IMPORTANT]
  > **Etichetta dell'alleanza:** Tocca lo scavo per una frazione di secondo per registrare la tua partecipazione, quindi **richiama immediatamente la tua squadra**, consentendo al timer di rimanere aperto abbastanza a lungo affinché tutti i compagni di squadra raggiungano il sito alla normale velocità di marcia.

#### 2. Bonus di velocità extra (Icona "Mano" per 10 giocatori)
* **L'icona "Mano" appare DOPO la fine dello scavo:**
  Nel momento esatto in cui lo scavo termina, un'**icona "Mano"** appare sopra il sito. Per accaparrarti questo bonus extra, tocca rapidamente l'**icona della mano** o il **luogo dello scavo stesso**.
* **Limite rigoroso di arrivo per primi di 10 giocatori:**
  Questa è una ricompensa basata sulla velocità di reazione dei clic: solo i **primi 10 membri dell'alleanza** che la toccano ricevono il premio bonus.
* **Un giocatore fortunato ottiene una doppia ricompensa ($2\times$):**
  Esattamente **un giocatore casuale** tra questi 10 fortunati cliccatori riceve una **Doppia Ricompensa ($2\times$)**!
