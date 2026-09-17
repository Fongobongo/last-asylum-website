---
title: "🧠 Conseils de pro, mécaniques cachées et secrets"
description: "L'encyclopédie complète des mécaniques cachées dans Last Asylum: Plague — snapshot des bonus de construction, tactiques de défense par « Ghost Rally », gestion du débordement de l'hôpital, pièges de conversion de Claire, pré-farming de tuiles et secrets de l'économie de diamants."
lang: fr
updated: "2026-09-04"
videoTopic: tips
---

La plupart des jeux de stratégie mobiles semblent trompeusement simples au premier abord : améliorer des bâtiments, faire monter les héros en niveau et cliquer sur les boutons avec des points rouges. Cependant, sous la surface de **Last Asylum: Plague** se cache un moteur mathématique sophistiqué avec des dizaines de règles non écrites que le jeu n'explique jamais.

Les survivants qui maîtrisent ces mécaniques progressent **2 à 3 fois plus vite**, ne perdent jamais leur armée lors de raids surprises nocturnes et battent systématiquement des adversaires ayant 30 à 50 % de Puissance en plus. Vous trouverez ci-dessous le recueil des règles non évidentes, des nuances cachées et des tactiques éprouvées utilisées par les vétérans des meilleures alliances.

---

## 1. Snapshot des bonus de construction et mathématiques des minuteurs {#snapshotting}

L'une des erreurs les plus coûteuses commises par les nouveaux commandants est de mal comprendre comment les bonus de vitesse sont calculés.

> [!IMPORTANT]
> **La règle du Snapshot (instantané) :**
> Tous les bonus de vitesse (équipement, titres, runes, technologie d'alliance) sont calculés **STRICTEMENT AU MOMENT EXACT DU LANCEMENT DE L'AMÉLIORATION (DÉBUT)**. Tout bonus activé après le démarrage du minuteur **NE RÉDUIRA PAS** la durée restante d'un projet en cours !

### Application pratique :
* Si vous lancez une amélioration du Sanctuaire de 30 jours et que, 5 minutes plus tard, vous équipez votre équipement de construction ou demandez le titre « Ministre des Travaux » (+10 %), le minuteur reste inchangé ! Le jeu ne recalcule pas les minuteurs actifs de manière rétroactive.
* **L'astuce du joueur pro :** Équipez votre équipement de construction, demandez le titre d'alliance temporaire « Ministre des Travaux » (+10 %), activez une rune de construction (+5 %), lancez l'amélioration massive de 30 jours du Sanctuaire — et **retirez immédiatement l'équipement et renoncez au titre** ! Le bonus a été verrouillé de manière permanente (snapshot) pour toute la durée des 30 jours.

### Les mathématiques derrière les minuteurs :
La durée réelle est déterminée par :
$$T = \frac{T_{base}}{1 + \sum \text{BonusVitesse}}$$

En raison du diviseur, chaque bonus de vitesse de +10 % supplémentaire génère légèrement moins d'heures absolues économisées que le précédent (rendement décroissant en heures). Cependant, sur les minuteurs de fin de jeu (Sanctuaire 25–30, où la durée de base atteint 40–80 jours), même une rune de 5 % permet d'économiser **plusieurs jours complets d'accélérateurs** !

---

## 2. Débordement de l'hôpital et technique de défense « Ghost Rally » {#ghost-rally}

Votre hôpital n'est pas seulement une infirmerie — c'est le pare-feu le plus critique pour éviter la destruction permanente de votre compte.

### La règle cachée du débordement (Mort permanente)
Lorsque votre ville est attaquée, les troupes survivantes vaincues sont blessées et remplissent les lits de l'hôpital.
* Tant qu'il y a de la place à l'hôpital, les troupes sont **Blessées** et peuvent être soignées rapidement pour un coût modique en ressources.
* **Une fois que la capacité de l'hôpital atteint 100 % :** CHAQUE soldat blessé supplémentaire **MEURT DÉFINITIVEMENT**. Si une « baleine » ennemie attaque votre ville 3 ou 4 fois de suite pendant que vous dormez, des centaines de milliers de troupes de haut niveau (T8/T9) sont anéanties pour toujours. Reconstruire cette armée prend des mois.

### Le secret du « Ghost Rally » (Faux ralliement)
Que faire si une force de frappe ennemie se téléporte dans votre ruche pendant un KvK ou un événement de tuerie, alors que vous n'avez pas de Bouclier de paix (ou plus de diamants) ?

> [!TIP]
> **Comment protéger votre armée sans bouclier :**
> 1. Ouvrez la carte du monde et localisez une forteresse abandonnée lointaine, un repaire de zombies de haut niveau ou un camp inactif.
> 2. Appuyez sur **Ralliement** et sélectionnez la durée maximale : **8 heures**.
> 3. Assignez votre escouade de combat principale avec vos héros les plus puissants dans ce ralliement.

**Pourquoi cela fonctionne :** Les troupes assignées à un ralliement actif à l'intérieur de votre ville ou en marche vers une cible possèdent une **immunité absolue de 100 % aux attaques entrantes**. Même si l'ennemi frappe vos remparts et met votre ville en feu, vos troupes ralliées ne subissent aucun dégât ! Une fois la menace passée, annulez le ralliement d'un simple clic, et vos troupes d'élite retourneront dans vos casernes, saines et sauves.

---

## 3. Secrets de la Tour du Faucon et fouilles d'alliance {#falcon-tower}

Les quêtes de la Tour du Faucon et leurs cartes au trésor associées sont parmi les sources quotidiennes principales de diamants, d'éclats de héros, d'accélérateurs et de cadeaux d'alliance. Pourtant, les joueurs occasionnels les récupèrent au hasard et gaspillent jusqu'à la moitié de leurs récompenses potentielles.

### Les trois règles d'or du cumul des quêtes du Faucon :

1. **Ne nettoyez pas les « points rouges »** :
   Terminez les missions, mais **NE cliquez PAS sur le bouton « Récupérer »**. Les quêtes terminées avec des points rouges n'expirent jamais et n'ont pas de date limite — elles peuvent rester tranquillement sur votre tableau indéfiniment. Gardez les récompenses non collectées jusqu'à ce que le jour de l'événement serveur cible commence (Lundi — Phase 1 Duel d'alliance ; Mercredi — Jour de la Science ; Vendredi — Entraînement des troupes).

2. **Cumulez jusqu'à « Max − 1 »** :
   Gardez votre tableau de quêtes presque plein — maintenez exactement $N - 1$ quêtes terminées (par exemple, **24 sur 25 possibles** à capacité maximale, ou 7 sur 8 aux niveaux inférieurs). Laisser un emplacement libre est strictement nécessaire pour que le minuteur de génération de quêtes en arrière-plan continue de tourner.

3. **Surveillez la limite de votre tableau (Ne bloquez jamais le minuteur)** :
   Si votre tableau atteint sa capacité maximale (par exemple 25 sur 25), **le minuteur d'apparition des quêtes SE BLOQUE IMMÉDIATEMENT**. Tant que vous ne libérez pas au moins un emplacement, aucune nouvelle quête ne sera générée, et vos missions quotidiennes gratuites sont définitivement perdues. Récupérez régulièrement les quêtes terminées si nécessaire afin qu'au moins un emplacement reste ouvert pour l'apparition de nouvelles quêtes.

> [!TIP]
> **Récupération en un clic au niveau 8 :** Atteindre le **niveau 8 de la Tour du Faucon** débloque la fonction « Tout récupérer ». Les jours de collecte cibles (lun, mer, ven), un seul clic soumet instantanément tout votre stock de 24 quêtes, débloquant tous les coffres de récompenses d'événement quelques secondes après la réinitialisation du serveur !

---

### Fouilles d'alliance {#excavations}

Terminer les quêtes de la Tour du Faucon octroie des **Cartes au trésor**, qui font apparaître des sites de fouilles sur la carte du monde. Il s'agit d'une activité coopérative d'alliance comportant deux types de récompenses distincts : la récompense de fouille de base et un bonus de vitesse à la fin.

#### 1. Récompense de fouille de base (Pour tous les membres de l'alliance)
* **Tous ceux qui touchent le site de fouille reçoivent la récompense :** Il suffit que votre escouade arrive et entre sur le site de fouille un seul instant — la participation est enregistrée immédiatement.
* **La règle cardinale : NE campez PAS sur le site de fouille !**
  La durée de la fouille diminue rapidement avec chaque escouade creusant activement sur la tuile. Si les membres de l'alliance campent sur place, le site se termine en quelques secondes, et les alliés marchant depuis des villes lointaines **n'arriveront pas à temps**.
  > [!IMPORTANT]
  > **Étiquette d'alliance :** Touchez la fouille pendant une fraction de seconde pour valider votre participation, puis **rappelez immédiatement votre escouade**, permettant au minuteur de rester ouvert assez longtemps pour que tous les coéquipiers atteignent le site à une vitesse de marche normale.

#### 2. Bonus de vitesse supplémentaire (Icône « Main » pour 10 joueurs)
* **L'icône « Main » apparaît APRÈS la fin de la fouille :**
  Au moment précis où la fouille se termine, une **icône « Main »** apparaît au-dessus du site. Pour obtenir ce bonus supplémentaire, appuyez rapidement sur l'icône **Main** ou sur l'emplacement de la fouille lui-même.
* **Limite stricte de 10 joueurs (premier arrivé, premier servi) :**
  Il s'agit d'une récompense de réflexe : seuls les **10 premiers membres de l'alliance** qui cliquent dessus reçoivent le prix bonus.
* **Un joueur chanceux obtient une double récompense ($2\times$) :**
  Exactement **un joueur aléatoire** parmi ces 10 cliqueurs chanceux reçoit une **Double Récompense ($2\times$)** !

---

## 4. Piège des ressources en sac et seuils de protection de l'entrepôt {#warehouse-secrets}

### Ressources sûres vs exposées
L'entrepôt de votre ville ne protège qu'une quantité strictement limitée de chaque ressource (par exemple, 3 000 000 de nourriture, bois et herbes au niveau 20).
* Toutes les ressources affichées dans votre barre supérieure au-delà de la limite de protection de l'entrepôt sont **EXPOSÉES**.
* Dès qu'un éclaireur ennemi repère des millions de ressources exposées, votre ville devient une cible de choix, et les attaquants dépouilleront vos réserves jusqu'à l'os.

> [!CAUTION]
> **La règle d'or de la gestion des ressources :**
> N'ouvrez jamais, sous aucun prétexte, **les sacs ou coffres de ressources de votre inventaire à l'avance** !

* Les ressources stockées dans vos sacs d'inventaire sont **totalement invisibles aux rapports d'éclaireurs ennemis** et immunisées à 100 % contre le pillage.
* N'ouvrez que le nombre exact de sacs nécessaires pour démarrer un bâtiment ou un projet de recherche spécifique juste avant de cliquer sur améliorer. Votre ville doit toujours paraître « fauchée » aux yeux des éclaireurs ennemis.

---

## 5. Positionnement tactique et mécaniques cachées de « décalage de rangée » {#row-shift}

Le combat dans Last Asylum se déroule en formation sur deux rangées : Ligne de front (2 héros) et Ligne arrière (3 héros). Cependant, le ciblage des attaques automatiques et les dégâts de zone suivent des règles géométriques strictes.

```
FORMATION ENNEMIE :
[ Front Ennemi 1 ]   [ Front Ennemi 2 ]
[ Arrière Ennemi 1 ] [ Arrière Ennemi 2 ] [ Arrière Ennemi 3 ]
        ▲                   ▲
        │                   │ (Focus attaque auto directe)
        ▼                   ▼
[ Votre Tank 1 ]     [ Votre Tank 2 ]
[ Votre Carry 1 ]    [ Votre Soutien ]    [ Votre Carry 2 ]
VOTRE FORMATION :
```

### Ciblage direct et fuites diagonales
* Les attaques automatiques de mêlée privilégient l'unité de front ennemie située directement en face.
* Si votre tank de flanc gauche (ex: Arthur) tombe avant votre tank de flanc droit (ex: Daskal), le flanc gauche ennemi **ne passe PAS sur le tank de droite** ! Au lieu de cela, leurs attaques fuient directement vers votre carry de ligne arrière situé derrière Arthur !
* **Règle tactique :** Placez votre tank principal le plus résistant directement en face du carry ennemi infligeant le plus de dégâts.

### Synergie mono-faction et épigraphes de corbeau
Déployer 5 héros de la même classe (ex: 5 Guerriers) octroie un bonus d'escouade de base de **+20 % ATQ, PV et DÉF**.
Cependant, le véritable changement de jeu apparaît en fin de partie : les **Épigraphes de corbeau UR** fournissent des multiplicateurs de statistiques en pourcentage massifs qui s'appliquent EXCLUSIVEMENT à une faction spécifique.
* Dans une escouade mono-Guerrier pure, chaque épigraphe amélioré renforce 100 % de vos héros.
* Dans une escouade mixte (2 Guerriers, 2 Rangers, 1 Démoniste), la valeur de votre épigraphe chute de **plus de 60 %**, car seule une fraction de vos héros bénéficie des bonus.

---

## 6. Le piège de la conversion de Claire (SSR ➔ UR) {#claire-conversion}

Au 8ème jour de la saison « Ère du renouveau », les commandants débloquent la possibilité de convertir Claire SSR en un héros UR légendaire. Des milliers de joueurs cliquent sur le bouton immédiatement — pour découvrir que leurs dégâts totaux d'escouade ont mystérieusement **diminué** !

### Pourquoi la baisse de dégâts se produit :
* Une Claire SSR entièrement optimisée fournit un bonus passif fiable à toute l'équipe de **+16 % de dégâts**.
* Lors de la conversion initiale en UR 6★, ce passif d'équipe tombe à **+10 %**. Ses statistiques de base personnelles augmentent légèrement, mais le burst global de votre escouade baisse sensiblement.

### Comment éviter la baisse :
Ne convertissez pas Claire dès qu'elle devient disponible !
1. Accumulez des jetons et des éclats du Hall d'honneur au préalable (visez le niveau 100 ou 160 dans le Hall).
2. Le jour de la conversion, injectez vos ressources économisées d'un seul coup pour booster instantanément son niveau au-delà de 6★, directement à **9★ ou 10★**.
3. À 10★ UR, Claire délivre un pic de puissance décisif : **multiplicateur de dégâts personnels x2,20** et débloque *Ténacité avancée* (+20 % ATQ/DÉF/PV et -10 % de réduction de temps de recharge pour toute l'escouade).

---

## 7. Pré-farming de tuiles de ressources pour le Jour de collecte et le Duel d'alliance {#pre-farming}

Le Jour de collecte (Phase 1 du Duel d'alliance le lundi, ou Jour 1 / Jour 7 du Guérisseur suprême) est une excellente occasion de prendre une longueur d'avance. Les alliances vétérans remportent régulièrement la victoire dans les 5 premières minutes après minuit.

> [!TIP]
> **Le secret du calcul des points :**
> Le jeu n'accorde pas de points de collecte pendant l'extraction sur la tuile, mais **À LA SECONDE PRÉCISE OÙ LA MARCHE RETOURNE dans votre ville** !

### Protocole de pré-farming étape par étape :
1. La veille du Jour de collecte (ex: dimanche soir, environ 4 à 5 heures avant la réinitialisation quotidienne à 02:00 UTC), envoyez toutes vos marches de collecte vers les nœuds de ressources de niveau 6 ou 7 les plus riches (de préférence Or ou Herbes).
2. Chronométrez les marches pour que la collecte se termine et que les troupes rentrent dans votre porte à **02:02–02:05 UTC (00:02–00:05 heure du serveur) le jour de la réinitialisation**.
3. Au moment où l'horloge sonne la réinitialisation, 5 heures de collecte multi-marches sont encaissées simultanément — rapportant instantanément **1,5 à 2,5 millions de points** et débloquant 2 à 3 niveaux de coffres en quelques secondes !

### Étiquette de la carte du monde : Nettoyage des tuiles
Ne laissez jamais derrière vous des nœuds de ressources partiellement collectés. Si un allié laisse 4 000 bois sur un nœud de 500 000, cette tuile restera morte jusqu'à 12 heures, bloquant l'apparition d'un nouveau nœud de haut niveau. Nettoyez toujours les tuiles jusqu'à 0 ou envoyez une marche d'éclaireur d'une seule troupe pour finir les restes.

---

## 8. Terrains d'entraînement : La répartition sur 4 terrains et l'astuce de promotion T4 {#troop-promotion}

Les niveaux de troupes se débloquent selon le niveau du Terrain d'entraînement : T6 au niv. 17, T7 au 20, T8 au 24, T9 au 27, et T10 au niv. 30 avec la recherche Troupes d'élite terminée.

La plupart des joueurs débutants commettent une erreur catastrophique : ils améliorent les quatre terrains d'entraînement de manière égale et entraînent leur plus haut niveau débloqué à partir de zéro sur chacun. Cela brûle des dizaines de millions de ressources et impose des minuteurs de plus de 30 heures. Les joueurs vétérans utilisent la **répartition 1 Max + 3 Bas**.

### La répartition des niveaux sur 4 terrains d'entraînement :
* **1 Terrain d'entraînement principal (Niveau Max) :** Gardez-le au niveau de votre plafond de Sanctuaire. C'est le seul bâtiment nécessaire pour débloquer votre plus haut niveau entraînable (ex: T9 au niv. 27, T10 au niv. 30).
* **3 Terrains d'entraînement de soutien (Niveau 10) :** Gardez-les strictement au **niveau 10** ! Le niveau 10 débloque les troupes de **niveau 4 (T4)**. Le 4ème terrain d'entraînement est débloqué près du bas de l'arbre de recherche **Développement** — débloquez-le dès que possible.
* Pourquoi ? Améliorer les 4 terrains aux niv. 27–30 consomme d'énormes quantités de bois, grain et herbes pour zéro déblocage de niveau supplémentaire. Le jeu ne nécessite qu'**un seul** bâtiment maximisé pour entraîner et promouvoir au plus haut niveau.

### Le pipeline « Usine T4 → Promotion » :
1. **Phase A (Production T4 parallèle) :** Mettez en file d'attente des soldats de niveau 4 sur les trois terrains de niveau 10 simultanément.
   * Sur un terrain, un lot de T4 prend ~10,5 heures (~455 soldats).
   * Sur trois terrains, vous produisez **~1 365 soldats T4** dans les mêmes ~10,5 heures.
2. **Phase B (Promotion sur le terrain principal) :** Ouvrez votre terrain d'entraînement maximisé, passez de « Entraîner » à **« Promouvoir »**, et promouvez vos soldats T4 stockés vers votre plus haut niveau (ex: T9 ou T10).
   * Promouvoir un lot complet de T4 en T9 ne prend que **~16,5 heures** (contre ~33 heures pour entraîner des T9 à partir de zéro !).
3. **Comparaison du cycle total :**
   * **Route de promotion :** 10,5h (T4) + 16,5h (promotion) = **~26 heures**.
   * **File d'attente directe haut niveau :** Lot unique de T9 = **~33 heures**.
   * **Avantage net :** Économise **6 à 7 heures par cycle**, maintient les casernes en activité 24/7 et préserve des millions de ressources.

> [!NOTE] Score du Duel d'alliance (Vendredi — Entraînement des troupes)
> * Mettre en file d'attente des troupes T4 sur les 3 terrains de soutien octroie tous les points d'entraînement (les points sont attribués **au moment où la file d'attente démarre**, pas à la collecte !).
> * Promouvoir des soldats octroie des points d'événement pour la différence de niveau entre T4 et T9/T10.
> * Tous les accélérateurs dépensés sur les files d'attente de promotion comptent entièrement pour les catégories d'événement de consommation d'accélérateurs.

---

## 9. Recherche : Le verrouillage des coffres du Duel d'alliance (Super récompense 1 & 2) {#duel-research-lock}

Le laboratoire de recherche propose 13 arbres distincts. Le verrou de progression initiale le plus critique est caché dans la branche **Duel d'alliance** :

* Cet arbre contient deux jalons non négociables : **Super récompense 1** et **Super récompense 2**.
* **Sans Super récompense 1, vous ne pouvez pas ouvrir les coffres de récompenses de Duel de niveaux 4 à 6**, même si vous gagnez les points requis !
* **Sans Super récompense 2, les coffres de niveaux 7 à 9 sont physiquement verrouillés !**
* Ces coffres supérieurs contiennent le sang vital de la progression du compte : des milliers de Parchemins d'étude, des Éclats omni de héros UR, des matériaux d'équipement de niveau 11 et jusqu'à **10 000 Diamants**.
* **Règle F2P :** Immédiatement après les nœuds de développement de base (vitesse de construction et de recherche), canalisez vos Parchemins d'étude vers Super récompense 1 & 2. Cela débloque le moteur de récompenses qui finance votre compte pendant des mois.

---

## 10. Priorités d'équipement : Atelier de fusion niv. 25 et optimisation des emplacements {#gear-priorities-tips}

Les Pierres d'équipement sont sévèrement limitées. Les disperser sur des emplacements d'équipement aléatoires paralyse les performances en milieu de partie :

1. **Atelier de fusion → Niveau 25 :** Poussez l'Atelier de fusion au niveau 25 dès que votre Sanctuaire le permet. C'est le goulot d'étranglement principal pour raffiner les Pierres d'équipement. Le retarder laisse votre carry sous-équipé au moment où la difficulté augmente.
2. **Priorité Emplacement DPS / Carry :**
   * **Priorité absolue :** Arme (Épée) et Gants (boostent ATQ, Critique et Percée d'armure).
   * **Deuxième priorité :** Bottes (vitesse et survie de base).
   * **Plastron :** Laissez au niveau de base. La DÉF supplémentaire sur un carry a presque zéro impact sur la victoire.
3. **Priorité Emplacement Tank :**
   * **Priorité absolue :** Plastron et Bottes (PV bruts et atténuation des dégâts).
   * **Arme (Épée) :** **Ne dépensez jamais de pierres sur l'arme d'un tank !** Les tanks gagnent en survivant et en protégeant la ligne arrière. Raffiner l'épée d'un tank gonfle la Puissance visible sans ajouter de valeur de combat réelle.
4. **Boutique d'honneur :** Achetez exclusivement des **Plans d'équipement (UR)**. Ignorez les coffres de curiosités et les éclats universels — les plans verrouillent chaque niveau de promotion d'équipement orange (niv. 10, 20, 30, 40).

---

## 11. Spécialistes des Boss mondiaux : Ash et Cecilia {#boss-specialists}

Bien que les héros violets (SSR) soient rapidement écartés des compositions PvP, deux personnages possèdent une utilité irremplaçable pour les Boss mondiaux :

* **Ash :** Sa compétence passive amplifie directement les dégâts totaux de l'escouade infligés aux **Boss mondiaux**.
* **Cecilia :** Augmente les bonus de ressources et les récompenses de mise à mort des Boss mondiaux.
* Investir des pierres de compétence violettes inutilisées dans ces deux personnages rapporte des dividendes à vie en butin de boss.

---

## 12. Discipline des diamants : Où dépenser vs quoi éviter {#diamond-discipline}

Les diamants sont la monnaie premium. Bien qu'ils soient généreux en début de partie, les dépenses imprudentes laissent les joueurs à sec lorsque des événements critiques arrivent.

| Investissements de haut niveau (PRO) | Ne dépensez jamais de diamants ici (NOOB) |
|---|---|
| **Roue des souhaits** au jour 8 (Cynthia) et jour 36+ (Héros UR). Tirez toujours par lots de 10 pour les garanties. | Recrutements standards à la taverne (taux UR médiocres, aucun filet de sécurité). |
| **Points VIP** pendant les événements de remise en diamants pour viser le VIP 8 (2ème bâtisseur permanent) et VIP 11 (+10 % de vitesse permanent). | Sauter instantanément les minuteurs de construction avec des diamants bruts. |
| **Boucliers de paix de 8 heures** pendant le KvK et les événements de tuerie du week-end. | Acheter de la nourriture ou du bois standard directement dans la boutique d'objets. |
| **Boutique d'alliance & Marchand mystère** rafraîchissements pour des accélérateurs à -70–80 %. | Réanimer des troupes standards en dehors d'une défense de forteresse critique. |

---

## 13. Liste de contrôle récapitulative : Les 12 commandements de la survie {#ten-commandments}

1. **Les bonus de vitesse sont snapshotés au démarrage** — Activez les titres ministériels, les runes et l'équipement AVANT d'appuyer sur améliorer.
2. **Hôpital vide = armée vivante** — Le débordement de l'hôpital cause la mort permanente et irréversible des troupes.
3. **Ghost Rally pour protéger les troupes** — Cachez votre meilleure marche dans un ralliement de 8 heures face à des raids impossibles à gagner.
4. **N'ouvrez jamais les sacs de ressources de l'inventaire** — Gardez les sacs scellés jusqu'au moment précis où une amélioration commence.
5. **Tour du Faucon : Cumul Max − 1** — Gardez un emplacement ouvert pour maintenir les apparitions en arrière-plan ; encaissez les lun/mer/ven.
6. **Ne convertissez pas Claire SSR trop tôt** — Accumulez des jetons du Hall d'honneur pour sauter la baisse de stats du 6★ directement vers 9★/10★.
7. **Pré-farm des nœuds de collecte la veille du Jour de collecte** — Chronométrez les retours pour 00:05 UTC le jour de la réinitialisation (ex: dimanche soir vers lundi) pour réclamer des coffres instantanés.
8. **La répartition sur 4 terrains (1 Max + 3 niv. 10) :** Produisez en parallèle des T4 sur 3 terrains de soutien et promouvez sur votre terrain principal, économisant 6–7 heures par cycle.
9. **Super récompense 1 & 2 au Labo — Non négociable :** Sans elles, les niveaux de coffres de Duel 4–9 restent verrouillés en permanence.
10. **Ne raffinez jamais l'épée d'un tank :** Les pierres d'équipement vont sur l'épée/gants du Carry et le plastron/bottes du Tank.
11. **Ne dépensez jamais de diamants sur des tirages Tavern bruts** — Économisez ~1 500 pour le jalon de la Roue des souhaits (7 tours gratuits + 3 payés = copie de Cynthia) et poussez le reste dans la progression VIP.
12. **Le mono-faction bat les setups hybrides** — Cinq héros de la même classe maximisés avec des Épigraphes de corbeau dominent les compositions mixtes.

---

## Les 5 regrets de Korpez en début de partie — Ne les répétez pas {#korpez-regrets}

Après 7 mois de jeu sur mon compte principal, voici cinq erreurs que les vétérans conseillent aux nouveaux joueurs d'éviter :

1. **Acheter des coffres de curiosités dans la boutique d'honneur au lieu des plans.** Les plans d'équipement sont la seule chose que l'honneur achète qui est rare partout ailleurs. Les curiosités tombent passivement ; les plans non.
2. **Donner des Omnis UR à Arthur.** Il vieillit mal. Gardez-les pour **Marlena jusqu'à 10★** — elle porte toute l'équipe les 30–60 premiers jours.
3. **Ignorer les Ateliers de fusion.** Cinq d'entre eux au niveau 23–25 = 44K pierres d'équipement/semaine passive. Les pousser tardivement est ce qui bloque chaque palier de niveau 40 plus tard.
4. **Disperser les pierres d'équipement sur l'équipement violet (SSR).** Le bon équipement pour le bon héros uniquement : épée+gants+bottes pour le DPS, plastron+bottes pour les tanks, tout le reste à zéro jusqu'à l'UR.
5. **Améliorer les compétences d'attaque sur les tanks.** L'attaque d'un tank ne sert à rien ; leurs compétences fonctionnent sur la mise à l'échelle DÉF/PV à la place.