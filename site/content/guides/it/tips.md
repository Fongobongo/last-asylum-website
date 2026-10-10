---
title: "🧠 Consigli pro, meccaniche nascoste e segreti"
description: "L'enciclopedia completa delle meccaniche nascoste in Last Asylum: Plague — snapshot dei bonus di costruzione, tattiche di difesa con i Rally Fittizi (Ghost Rally), gestione del traboccamento dell'ospedale, trappole di conversione di Claire, pre-raccolta delle tessere e segreti dell'economia dei diamanti."
lang: it
updated: "2026-09-04"
videoTopic: tips
---

La maggior parte dei giochi strategici per dispositivi mobili sembra ingannevolmente semplice a prima vista: potenzia gli edifici, fai salire di livello gli eroi e tocca i pulsanti con i puntini rossi. Tuttavia, sotto la superficie di **Last Asylum: Plague** si nasconde un motore matematico sofisticato con decine di regole non scritte che il gioco non spiega mai.

I sopravvissuti che comprendono queste meccaniche progrediscono **da 2 a 3 volte più velocemente**, non perdono mai il proprio esercito in attacchi a sorpresa nel cuore della notte e sconfiggono costantemente avversari con una Potenza superiore del 30–50%. Di seguito è riportato il compendio curato di regole non ovvie, sfumature nascoste e tattiche collaudate in battaglia utilizzate dai veterani delle alleanze principali.

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

---

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

---

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

---

## 4. Trappola delle risorse nello zaino e soglie di protezione del magazzino {#warehouse-secrets}

### Risorse protette vs risorse esposte
Il magazzino della tua città protegge solo una quantità rigidamente limitata di ciascuna risorsa (ad esempio, 3.000.000 di cibo, legname ed erbe al livello 20).
* Tutte le risorse mostrate sulla barra superiore che superano il limite di protezione del magazzino sono **ESPOSTE**.
* Nel momento in cui un esploratore nemico individua milioni di risorse esposte, la tua città diventa un bersaglio primario e gli attaccanti raseranno al suolo le tue riserve.

> [!CAUTION]
> **La regola d'oro della gestione delle risorse:**
> Non aprire **mai e poi mai sacchetti o forzieri di risorse dal tuo inventario in anticipo**!

* Le risorse conservate all'interno dei sacchetti dell'inventario sono **completamente invisibili ai rapporti di ricognizione nemici** e protette al 100% dai saccheggi.
* Apri solo il numero esatto di sacchetti necessari per avviare uno specifico edificio o progetto di ricerca immediatamente prima di toccare l'aggiornamento. La tua città dovrebbe sempre sembrare "al verde" agli esploratori nemici.

---

## 5. Posizionamento tattico e meccaniche nascoste di "Spostamento di riga" {#row-shift}

Il combattimento in Last Asylum si svolge in una formazione a due file: prima linea (2 eroi) e retroguardia (3 eroi). Tuttavia, il targeting degli attacchi automatici e i danni ad area (splash damage) seguono rigide regole geometriche.

```
FORMAZIONE NEMICA:
[ Fronte Nemico 1 ]   [ Fronte Nemico 2 ]
[ Retro Nemico 1 ]    [ Retro Nemico 2 ]    [ Retro Nemico 3 ]
        ▲                   ▲
        │                   │ (Focus diretto attacco automatico)
        ▼                   ▼
[ Tuo Tank 1 ]      [ Tuo Tank 2 ]
[ Tuo Carry 1 ]     [ Tuo Supporto ]    [ Tuo Carry 2 ]
TUA FORMAZIONE:
```

### Targeting diretto e deviazioni diagonali
* Gli attacchi automatici in mischia danno la priorità all'unità in prima linea nemica che si trova direttamente di fronte.
* Se il tuo tank sul fianco sinistro (ad es. Arthur) cade prima del tuo tank sul fianco destro (ad es. Daskal), il fianco sinistro nemico **NON passa al tank destro**! Invece, i loro attacchi si riversano direttamente sul carry della tua retroguardia che si trova dietro ad Arthur!
* **Regola tattica:** Posiziona il tuo tank principale di resistenza direttamente di fronte al carry con i danni da scoppio (burst) più elevati della squadra nemica.

### Sinergia mono-fazione ed epigrafi di Raven
Schierare 5 eroi della stessa classe (ad es. 5 Guerrieri) garantisce un bonus base alla squadra del **+20% di ATT, HP e DIF**.
Tuttavia, il vero cambiamento di gioco emerge a fine gioco: **Le Epigrafi UR di Raven** forniscono enormi moltiplicatori percentuali di statistiche che si applicano ESCLUSIVAMENTE a una fazione specifica.
* In una squadra pura mono-guerriero da 5 elementi, ogni epigrafe potenziata potenzia il 100% dei tuoi eroi.
* In una squadra mista (2 Guerrieri, 2 Ranger, 1 Warlock), il valore della tua epigrafe cala di **oltre il 60%**, perché solo una frazione dei tuoi eroi beneficia dei bonus.

---

## 6. La trappola di conversione di Claire (SSR ➔ UR) {#claire-conversion}

All'8° giorno della stagione "Era della Rinascita", i comandanti sbloccano la capacità di convertire la SSR Claire in un eroe UR leggendario. Migliaia di giocatori toccano immediatamente il pulsante, solo per scoprire che il danno totale della loro squadra è misteriosamente **diminuito**!

### Perché si verifica il calo dei danni:
* Una Claire SSR completamente potenziata fornisce un affidabile bonus passivo a tutta la squadra del **+16% di danni**.
* Al momento della conversione iniziale in un'UR a 6★, quel passivo di squadra scende al **+10%**. Le sue statistiche base personali aumentano leggermente, ma il danno di scoppio (burst) complessivo della tua squadra subisce un calo evidente.

### Come evitare il calo:
Non convertire Claire nel momento esatto in cui diventa disponibile!
1. Accumula in anticipo token e frammenti della Sala dell'Onore (punta al Livello 100 o al Livello 160 nella Sala).
2. Nel giorno della conversione, immetti tutte le risorse salvate in una sola volta per spingerla istantaneamente oltre le 6★ direttamente a **9★ o 10★**.
3. A 10★ UR, Claire fornisce un incremento di potenza che decide le sorti della partita: **moltiplicatore di danno personale x2,20** e sblocca la *Tenacia Avanzata* (+20% ATT/DIF/HP e -10% di riduzione del tempo di ricarica per l'intera squadra).

---

## 7. Pre-raccolta delle tessere di risorse per il Giorno della Raccolta e il Duello dell'Alleanza {#pre-farming}

Il Giorno della Raccolta (Fase 1 del Duello dell'Alleanza di lunedì, o Giorno 1 / Giorno 7 del Guaritore Supremo) è un'opportunità privilegiata per ottenere un rapido vantaggio iniziale. Le alleanze veterane ottengono regolarmente la vittoria nei primi 5 minuti dopo la mezzanotte.

> [!TIP]
> **Il segreto del calcolo dei punteggi:**
> Il gioco assegna i punti Raccolta **NON mentre si estrae la tessera, ma NEL SECONDO ESATTO IN CUI LA MARCIA RITORNA nella tua città**!

### Protocollo di pre-raccolta passo dopo passo:
1. Alla vigilia del Giorno della Raccolta (ad es. la domenica sera circa 4-5 ore prima del ripristino giornaliero alle 02:00 UTC), invia tutte le marce di raccolta verso i nodi di risorse di Livello 6 o 7 più ricchi (preferibilmente Oro o Erbe).
2. Calcola i tempi delle marce in modo che la raccolta termini e le truppe rientrino nel tuo cancello tra le **02:02 e le 02:05 UTC (00:02–00:05 ora del server) nel giorno del ripristino**.
3. Nel momento in cui l'orologio scocca il ripristino, 5 ore di punti raccolta di marce multiple vengono incassati simultaneamente, fruttando istantaneamente **da 1,5 a 2,5 milioni di punti** e sbloccano da 2 a 3 livelli di forzieri in pochi secondi!

### Etichetta della mappa del mondo: Rimozione delle tessere
Non lasciare mai dietro di te nodi di risorse parzialmente raccolti. Se un alleato lascia 4.000 di legno rimanenti su un nodo da 500.000, quella tessera rimarrà inattiva fino a 12 ore, bloccando la comparsa di un nuovo nodo di alto livello. Pulisci sempre le tessere fino a 0 o invia una marcia di ricognizione di 1 truppa per ripulire gli scarti.

---

## 8. Campi di Addestramento: La suddivisione a 4 campi e il trucco di promozione T4 {#troop-promotion}

I livelli delle truppe si sbloccano in base al livello del Campo di Addestramento: T6 al Liv. 17, T7 al 20, T8 al 24, T9 al 27 e T10 al Liv. 30 con la ricerca Truppe d'Élite completata.

La maggior parte dei giocatori principianti commette un errore catastrofico: potenzia tutti e quattro i Campi di Addestramento in modo equo e addestra il loro livello più alto sbloccato da zero su ciascuno di essi. Questo brucia decine di milioni di risorse e impone timer di oltre 30 ore. I giocatori veterani usano la **Suddivisione 1 Max + 3 Basse**.

### La suddivisione dei livelli dei 4 Campi di Addestramento:
* **1 Campo di Addestramento Principale (Livello Massimo):** Mantienilo in linea con il limite del tuo Santuario. È l'unico edificio necessario per sbloccare il tuo livello addestrativo più alto (ad es. T9 al Liv. 27, T10 al Liv. 30).
* **3 Campi di Addestramento di Supporto (Livello 10):** Mantienili rigorosamente al **Livello 10**! Il livello 10 sblocca le truppe di **Livello 4 (T4)**. Il 4° Campo di Addestramento si sblocca verso il fondo dell'albero di ricerca dello **Sviluppo**: sbloccale il prima possibile.
* Perché? Potenziare tutti e 4 i campi al Liv. 27–30 consuma enormi quantità di Legno, Grano ed Erbe senza sbloccare alcun livello aggiuntivo. Il gioco richiede **un solo** edificio massimizzato per addestrare e promuovere al livello superiore.

### La pipeline "Fabbrica T4 → Promuovi":
1. **Fase A (Produzione T4 parallela):** Metti in coda soldati di Livello 4 in tutti e tre i campi di livello 10 contemporaneamente.
   * Su un campo, un lotto di T4 richiede circa 10,5 ore (~455 soldati).
   * Su tre campi, produci **~1.365 soldati T4** nello stesso identico lasso di tempo di ~10,5 ore.
2. **Fase B (Promuovi sul Campo Principale):** Apri il tuo Campo di Addestramento massimizzato, passa da "Addestra" a **"Promuovi"** e promuovi i tuoi soldati T4 accumulati al tuo livello più alto (ad es. T9 o T10).
   * Promuovere un intero lotto da T4 a T9 richiede solo **~16,5 ore** (rispetto alle ~33 ore per addestrare i T9 da zero!).
3. **Confronto del ciclo totale:**
   * **Percorso di Promozione:** 10,5h (T4) + 16,5h (promozione) = **~26 ore**.
   * **Coda diretta di alto livello:** Singolo lotto T9 = **~33 ore**.
   * **Vantaggio netto:** Risparmia **da 6 a 7 ore per ciclo**, mantiene la caserma operativa 24 ore su 24, 7 giorni su 7, e preserva milioni di risorse.

> [!NOTE] Punteggio del Duello dell'Alleanza (Venerdì — Addestramento Truppe)
> * Mettere in coda truppe T4 sui 3 campi di supporto assegna punti di addestramento completi (i punti vengono assegnati **nel momento in cui la coda inizia**, non al momento della riscossione!).
> * Promuovere i soldati assegna punti evento per la differenza di livello tra T4 e T9/T10.
> * Qualsiasi acceleratore speso nelle code di promozione viene conteggiato interamente nelle categorie di eventi di consumo di acceleratori.

---

## 9. Ricerca: Il blocco dei forzieri del Duello dell'Alleanza (Super Ricompensa 1 e 2) {#duel-research-lock}

Il Laboratorio di Ricerca presenta 13 alberi distinti. La soglia di progressione iniziale più critica è nascosta all'interno del ramo del **Duello dell'Alleanza**:

* Questo ramo contiene due traguardi non negoziabili: **Super Ricompensa 1** e **Super Ricompensa 2**.
* **Senza la Super Ricompensa 1, non puoi aprire i forzieri delle ricompense del Duello di Livello 4–6**, anche se guadagni i punti richiesti!
* **Senza la Super Ricompensa 2, i forzieri di Livello 7–9 sono fisicamente bloccati!**
* Questi forzieri superiori contengono la linfa vitale della progressione dell'account: migliaia di Pergamene di Studio, Frammenti Universali Eroe UR, materiali per equipaggiamento di Livello 11 e fino a **10.000 Diamanti**.
* **Regola F2P:** Subito dopo i nodi di Sviluppo di base (Velocità di Costruzione e Ricerca), canalizza le tue Pergamene di Studio verso la Super Ricompensa 1 e 2. Questo sblocca il motore di ricompense che finanzia il tuo account per mesi.

---

## 10. Priorità dell'equipaggiamento: Officina di Fondersi Liv. 25 e ottimizzazione degli slot {#gear-priorities-tips}

Le Pietre dell'Equipaggiamento sono severamente limitate. Distribuirle su slot di equipaggiamento casuali paralizza le prestazioni di metà gioco:

1. **Officina di Fondersi → Livello 25:** Porta l'Officina di Fondersi al Livello 25 non appena il tuo Santuario lo consente. È il principale collo di bottiglia per la raffinazione delle Pietre dell'Equipaggiamento. Ritardarla lascerà il tuo carry sottodotato proprio quando la difficoltà aumenterà vertiginosamente.
2. **Priorità slot DPS / Carry:**
   * **Massima priorità:** Arma (Spada) e Guanti (aumentano ATT, Critico e Perforazione Armatura).
   * **Seconda priorità:** Stivali (velocità e sopravvivenza di base).
   * **Pettorale:** Lascialo al livello base. Una DIF extra su un carry ha un impatto quasi pari a zero sulla vittoria.
3. **Priorità slot Tank:**
   * **Massima priorità:** Pettorale e Stivali (HP puri e mitigazione del danno).
   * **Arma (Spada):** **Non spendere mai pietre sull'arma di un tank!** I tank vincono sopravvivendo e proteggendo la retroguardia. Raffinare la spada di un tank gonfia la Potenza visibile senza aggiungere reale valore in combattimento.
4. **Negozio d'Onore:** Acquista **esclusivamente Progetti di Equipaggiamento (UR)**. Salta i Forzieri di Curiosità e i frammenti universali: i progetti bloccano ogni livello di promozione dell'equipaggiamento arancione (Liv. 10, 20, 30, 40).

---

## 11. Specialisti dei Boss Mondiali: Ash e Celia {#boss-specialists}

Mentre gli eroi viola (SSR) vengono esclusi dalle formazioni PvP in anticipo, due personaggi presentano un'utilità insostituibile contro i Boss Mondiali:

* **Ash:** La sua passiva «Focus» potenzia il **danno ai mostri** inflitto dai due ranger con l'attacco più alto nella squadra (secondo la versione client v1.0.102).
* **Celia:** Aumenta le gocce di risorse bonus e le ricompense di uccisione dai Boss Mondiali.
* Investire pietre abilità viola di scorta in questi due personaggi ripaga con dividendi per tutta la vita in termini di bottino dei boss.

---

## 12. Disciplina dei Diamanti: Dove spenderli vs cosa evitare {#diamond-discipline}

I diamanti sono la valuta principale. Sebbene siano generosi nelle prime fasi di gioco, una spesa sconsiderata lascia i giocatori a corto di risorse quando arrivano eventi critici.

| Investimenti di alto livello (PRO) | Non spendere mai diamanti qui (NOOB) |
|---|---|
| **Ruota dei Desideri** all'8° giorno (Cynthia) e dal 36° giorno in poi (Eroi UR). Pesca sempre in blocchi da 10x per le garanzie. | Reclutamenti standard alla Taverna (basse probabilità di UR, zero rete di sicurezza). |
| **Punti VIP** durante gli eventi di rimborso dei diamanti per spingere verso il VIP 8 (2° costruttore permanente) e VIP 11 (velocità +10% permanente). | Salti istantanei del timer di costruzione direttamente con diamanti grezzi. |
| **Scudi di Pace da 8 ore** durante la KvK e gli Eventi di Uccisione del fine settimana. | Acquistare cibo o legname standard direttamente dal negozio di oggetti. |
| **Negozio dell'Alleanza e Mercante Misterioso** si aggiornano per acceleratori scontati del 70–80%. | Rievocare truppe standard al di fuori della difesa critica della fortezza. |

---

## 13. Checklist di riepilogo: I 12 comandamenti della sopravvivenza {#ten-commandments}

1. **I bonus di velocità fanno uno snapshot all'avvio** — Attiva i titoli ministeriali, le rune e l'equipaggiamento PRIMA di premere l'aggiornamento.
2. **Ospedale vuoto = esercito vivo** — Il traboccamento dell'ospedale causa la morte permanente e irreversibile delle truppe.
3. **Rally Fittizio (Ghost Rally) per proteggere le truppe** — Nascondi la tua marcia migliore in un rally di 8 ore quando affronti raid impossibili da vincere.
4. **Non aprire mai i sacchetti di risorse dell'inventario** — Tieni i sacchetti sigillati fino al momento esatto in cui inizia un potenziamento.
5. **Torre dei Falchi: Accumulo Max − 1** — Tieni uno slot aperto per mantenere le generazioni in background; riscuoti lunedì/mercoledì/venerdì.
6. **Non convertire Claire SSR troppo presto** — Accumula i token della Sala dell'Onore per saltare il calo delle statistiche a 6★ e passare direttamente a 9★/10★.
7. **Pre-raccogli le tessere di risorse alla vigilia del Giorno della Raccolta** — Programma i ritorni per le 00:05 UTC del giorno di ripristino (es. dalla domenica sera al lunedì) per richiedere forzieri istantanei.
8. **La divisione a 4 campi (1 Max + 3 Liv.10):** Coltiva in parallelo i T4 su 3 campi di supporto e promuovili sul tuo campo principale, risparmiando 6–7 ore per ciclo.
9. **Super Ricompensa 1 e 2 nel Laboratorio — Non negoziabili:** Senza di esse, i livelli dei forzieri del Duello 4–9 rimangono permanentemente bloccati.
10. **Non raffinare mai la spada di un tank:** Le pietre dell'equipaggiamento appartengono alla Spada/Guanti del Carry e al Pettorale/Stivali del Tank.
11. **Non spendere mai diamanti per pescate grezze alla Taverna** — Risparmia ~1.500 per il traguardo della Ruota dei Desideri (7 giri gratuiti + 3 a pagamento = copia di Cynthia) e spingi il resto nella progressione VIP.
12. **La mono-fazione batte le configurazioni ibride** — Cinque eroi della stessa classe massimizzati con le Epigrafi di Raven dominano le composizioni miste.

---

## I primi 5 rimpianti di Korpez a inizio gioco — Non ripeterli {#korpez-regrets}

Da 7 mesi di gioco sull'account principale, cinque errori che i veterani continuano a dire ai nuovi giocatori di evitare:

1. **Acquistare forzieri di Curiosità nel negozio dell'Onore invece dei progetti.** I progetti di equipaggiamento sono l'unica cosa che l'Onore acquista e che scarseggia ovunque. Le curiosità droppano passivamente; i progetti no.
2. **Dare gli Omni UR in pasto ad Arthur.** Invecchia male. Conservali per portare **Marlena a 10★**: lei trasporta l'intera squadra per i primi 30–60 giorni.
3. **Ignorare le Officine di Fondersi.** Cinque di esse al livello 23–25 = 44K di pietre dell'equipaggiamento/settimana passive. Spingerle tardi è ciò che blocca ogni successivo punto di arresto al livello 40.
4. **Spargere pietre dell'equipaggiamento sull'equipaggiamento viola (SSR).** L'equipaggiamento giusto per l'eroe giusto solo: spada+guanti+stivali per il DPS, pettorale+stivali per i tank, tutto il resto a zero fino agli UR.
5. **Potenziare le abilità di attacco sui tank.** L'attacco di un tank non serve a nulla; le loro abilità funzionano invece scalando su DIF/HP.