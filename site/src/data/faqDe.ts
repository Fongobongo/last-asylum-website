export interface FaqItem {
  q: string;
  a: string;
}

// Top-Fragen aus den Discord-FAQ/Hilfe-Kanälen, suchmaschinenfreundlich formuliert.
export const faqDe: FaqItem[] = [
  {
    q: 'Was ist das beste F2P-Team in Last Asylum: Plague?',
    a: 'Die kanonische F2P-Truppe ist Arthur, Daskal, Marlena, Harper, Claire (alle Warriors — Mono-Fraktion gibt +20% HP/ATK/DEF). Arthur ist ab Tag 1 kostenlos; der Marlena-Top-up für 1 $ gilt als das beste Angebot im Spiel. Daskal kommt in der ersten Era-of-Revival-Saison (Tag 120+).',
  },
  {
    q: 'Was soll ich zuerst ausbauen?',
    a: 'Immer zuerst das Heiligtum — es begrenzt alle anderen Gebäude und dein Helden-Level-Cap. Danach Übungsgelände, Kaserne, Forschungslabor, Lazarett, Mauer. Halte die Baumeisterhütte auf Heiligtum-Stufe bis Heiligtum 15 für kostenlose Bau-Beschleunigungen.',
  },
  {
    q: 'Wann schaltet Marlena frei?',
    a: 'Tag 66 kostenlos — oder sofort über den 1-$-Starter-Top-up. Spar UR-Scherben, damit sie direkt bei 8★ landet, dann auf 10★ pushen.',
  },
  {
    q: 'Wie bekomme ich Cynthia als F2P?',
    a: 'Cynthia kommt über das Wunschrad an Tag 8. Spar Diamanten ab Tag 1 (gib sonst nichts aus) — insgesamt ca. 11.500 Diamanten, und ziehe immer ×10 (Einzelzüge verschwenden Token).',
  },
  {
    q: 'Wie bekomme ich Antitoxin?',
    a: 'Antitoxin-Werkstatt + Stalls-Produktion, jede abgeschlossene Gebäude-Verbesserung, Falken-Quests (fast alle), Covert Ops und Karawanen-Handel (inkl. Plündern fremder Ops — bis 5/Tag) sowie Blight/Elite-Blight-Jagden (10/20 Ausdauer). Events zahlen große Mengen.',
  },
  {
    q: 'Warum ist mein Plünder-Ertrag fast auf null gefallen?',
    a: 'Du hast das tägliche Plünder-Limit erreicht: unter dem Limit 100%, ab 1× dem Limit behältst du nur 15%, ab 1.3× nur 5%. Reset um 02:00 UTC. Das Limit skaliert mit der Heiligtum-Stufe (2,5M bei Stufe 10–12 bis 30M bei Stufe 30) und steigt sofort nach einer Heiligtum-Verbesserung. Ein gelbes Dreieck unter deiner Macht zeigt den Status.',
  },
  {
    q: 'Was soll ich in den Shops kaufen?',
    a: 'Heiligtum-/Expeditions-/Allianz-Shops: zuerst Krähen-Essenz und UR-Omnifragmente. Der Ehren-Shop ist nur für Ausrüstungs-Baupläne (niemals Epigraph-Truhen dort). Alle Shops stocken montags auf.',
  },
  {
    q: 'Lohnt es sich, Diamanten für Beschleunigungen auszugeben?',
    a: 'Nur die 8h-Beschleunigungen aus dem VIP-Shop gelten als akzeptable Käufe — und erst nach Helden-Ressourcen. Community-Regel: nie Diamanten in Beschleunigungen statt in Helden-Räder stecken (Cynthia Tag 8, Joker nach Tag 15).',
  },
  {
    q: 'Welche Fraktion soll ich aufbauen?',
    a: 'Warriors sind früh am stärksten (kostenlose Arthur/Harper-Scherben, Marlena für 1 $). Rangers peaken im Midgame (kontern Warriors). Warlocks sind im Lategame am besten, brauchen aber langfristige Investitionen. Mono-Fraktion (5 Helden eines Typs) ist die aktuelle Meta, weil UR-Epigraphen eine einzige Fraktion buffen.',
  },
  {
    q: 'Wie funktioniert die Claire-SSR→UR-Konvertierung?',
    a: 'Öffnet an Era-Tag 8. Sie landet bei 6★, und der Weg zu 10★ kostet 1.600 SSR-Scherben (jede Zwischenstufe kostet 2× den SSR-Preis). Zwischen 6★–9★ gibt es einen Team-Buff-Dip — überspringe ihn, indem du vorher Ehrenhalle-Level anspart (St.60→8★, St.100→9★, St.160→sofort 10★).',
  },
  {
    q: 'Wie löse ich Geschenkcodes ein?',
    a: 'Im Spiel: Avatar (oben links) → Einstellungen → Geschenkcode. iOS oder Web: melde dich auf der offiziellen Einlöse-Seite mit deinem verknüpften Facebook/Google-Konto an, wähle Server und Charakter, gib den Code ein.',
  },
  {
    q: 'Was sind die größten Anfängerfehler?',
    a: 'Alles gleichmäßig ausbauen statt eines Haupttruppe; Helden vor hohen Sternen bewerten (Marlena ist der klassische Spätzünder); Erweckungsmaterialien auf Helden verteilen; Gems in VIP-Level statt Helden-Räder verbrennen; das tägliche Plündern auslassen (~27M Ressourcen/Tag); Ausdauer voll laufen lassen.',
  },
];
