export interface FaqItem {
  q: string;
  a: string;
}

// Questions les plus fréquentes des canaux FAQ/aide du Discord, formulées pour la recherche.
export const faqFr: FaqItem[] = [
  {
    q: 'Quelle est la meilleure équipe F2P dans Last Asylum: Plague ?',
    a: 'L’escouade F2P canonique est Arthur, Daskal, Marlena, Harper, Claire (tous Warriors — la mono-faction donne +20% HP/ATK/DEF). Arthur est gratuit dès le jour 1 ; le top-up de Marlena à 1 $ est considéré comme la meilleure offre du jeu. Daskal arrive lors de la première saison de l’Ère du Renouveau (jour 120+).',
  },
  {
    q: 'Que dois-je améliorer en premier ?',
    a: 'Le Sanctuaire d’abord, toujours — il verrouille tous les autres bâtiments et votre plafond de niveau de héros. Ensuite le Camp d’Entraînement, la Caserne, le Laboratoire de Recherche, l’Hôpital, le Mur. Gardez la Cabane du Bâtisseur au niveau du Sanctuaire jusqu’au Sanctuaire 15 pour des accélérations de construction gratuites.',
  },
  {
    q: 'Quand Marlena se débloque-t-elle ?',
    a: 'Le jour 66 gratuitement — ou immédiatement via le top-up de démarrage à 1 $. Économisez des fragments UR pour qu’elle arrive directement à 8★, puis poussez vers 10★.',
  },
  {
    q: 'Comment obtenir Cynthia en F2P ?',
    a: 'Cynthia arrive via la Roue des Vœux au jour 8. Économisez des diamants dès le jour 1 (ne dépensez rien ailleurs) — environ 11 500 diamants au total, et tournez toujours ×10 (les tirages simples gaspillent des jetons).',
  },
  {
    q: 'Comment obtenir de l’antitoxine ?',
    a: 'Atelier d’Antitoxine + production de l’Étable, chaque amélioration de bâtiment terminée, les quêtes du Faucon (presque toutes), Opérations Secrètes et Commerce de Caravane (y compris piller celles des autres — jusqu’à 5/jour), et les chasses Blight/Elite Blight (10/20 d’endurance). Les événements paient de grosses quantités.',
  },
  {
    q: 'Pourquoi mes revenus de pillage ont presque disparu ?',
    a: 'Vous avez atteint la limite quotidienne de pillage : sous la limite 100 %, à partir de 1× la limite vous ne gardez que 15 %, à partir de 1.3× seulement 5 %. Elle se réinitialise à 02:00 UTC. La limite évolue avec le niveau du Sanctuaire (2.5M aux niveaux 10–12 jusqu’à 30M au niveau 30) et monte dès l’amélioration du Sanctuaire. Un triangle jaune sous votre Puissance indique le statut.',
  },
  {
    q: 'Que faut-il acheter dans les boutiques ?',
    a: 'Boutiques du Sanctuaire/Expédition/Alliance : Essence de Corbeau et Omnifragments de Héros UR en premier. La boutique d’Honneur sert uniquement aux plans d’équipement (jamais de coffres d’épigraphes là-bas). Toutes les boutiques se réapprovisionnent le lundi.',
  },
  {
    q: 'Faut-il dépenser des diamants en accélérations ?',
    a: 'Seules les accélérations 8h de la boutique VIP sont considérées comme des achats acceptables — et seulement après les ressources pour les héros. Règle de la communauté : ne videz jamais vos diamants en accélérations au détriment des roues de héros (Cynthia jour 8, Joker après le jour 15).',
  },
  {
    q: 'Quelle faction dois-je construire ?',
    a: 'Les Warriors sont les meilleurs en début de jeu (fragments gratuits d’Arthur/Harper, Marlena à 1 $). Les Rangers culminent en milieu de jeu (contre les Warriors). Les Warlocks sont les meilleurs en fin de jeu mais exigent un lourd investissement à long terme. La mono-faction (5 héros d’un même type) est la méta actuelle car les épigraphes UR boostent une seule faction.',
  },
  {
    q: 'Comment fonctionne la conversion Claire SSR→UR ?',
    a: 'Elle s’ouvre au jour 8 de l’Ère. Elle arrive à 6★ et la montée vers 10★ coûte 1 600 fragments SSR (chaque palier coûte 2× le prix SSR). Il y a une baisse du bonus d’équipe entre 6★–9★ — évitez-la en accumulant des niveaux du Hall d’Honneur avant de convertir (Nv.60→8★, Nv.100→9★, Nv.160→10★ instantané).',
  },
  {
    q: 'Comment utiliser les codes cadeaux ?',
    a: 'En jeu : Avatar (en haut à gauche) → Paramètres → Code Cadeau. iOS ou web : connectez-vous sur la page officielle d’échange avec votre compte Facebook/Google lié, choisissez le serveur et le personnage, saisissez le code.',
  },
  {
    q: 'Quelles sont les plus grosses erreurs de débutant ?',
    a: 'Tout améliorer à égalité au lieu d’une seule escouade principale ; juger les héros avant les hautes étoiles (Marlena est la tardive classique) ; répartir les matériaux d’Éveil entre les héros ; gaspiller des gemmes en niveaux VIP au lieu des roues de héros ; sauter le pillage quotidien (~27M de ressources/jour) ; laisser l’endurance plafonner.',
  },
];
