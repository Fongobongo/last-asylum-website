#!/usr/bin/env python3
"""Generate missing event pages (dwarven-mine, pandemic-experience, crystal-cluster) for 7 languages."""

import os

LANGS = {
    'de': {
        'dwarven': {
            'title': 'Zwergenmine: Spitzhacken-Vorrat & 100-Etagen-MR-Bauplan',
            'desc': 'Der 7-Tage-Minen-Event: Die 750-Spitzhacken-Regel für F2P, Etagenaufstieg durch Jackpots und Kräuter vs. Ausrüstungssteine im Endgame.',
            'content': """
<p>Die <strong>Zwergenmine</strong> ist ein wiederkehrendes 7-Tage-Event: Man gräbt Felder mit <strong>Spitzhacken</strong> aus, findet Jackpots für den Etagenaufstieg und wer <strong>Etage 100</strong> erreicht, sichert sich den Hauptpreis — einen <strong>MR-Ausrüstungs-Bauplan</strong>.</p>

<h2 id="mechanics">Mechaniken</h2>
<ul>
  <li><strong>Dauer: 7 Tage</strong>, zyklisch wiederkehrend.</li>
  <li>Du gräbst Kacheln mit Spitzhacken ab; das <strong>Jackpot-Feld</strong> bringt dich sofort in die nächste Etage.</li>
  <li><strong>Hauptpreis auf Etage 100: MR-Bauplan (Rot/Mythisch).</strong></li>
  <li>Am Rad des Events kann man mit Glück direkt fertige rote Ausrüstungsteile ziehen.</li>
</ul>

<h2 id="hoarding">Die 750-Spitzhacken-F2P-Regel</h2>
<blockquote>F2P-Grundregel: Spiele das Event nicht spontan — <strong>spare mindestens 750 Spitzhacken</strong> über mehrere Zyklen an, bevor du ernsthaft gräbst.</blockquote>
<p>Mit weniger als ~750 Spitzhacken erreicht man Etage 100 kaum realistisch. Wer zwischendurch verbraucht, verbrennt wertvolle Ressourcen ohne Hauptpreis.</p>

<h2 id="reward-choice">Kräuter vs. Ausrüstungssteine</h2>
<p>Bei jedem Etagen-Aufstieg wählt man zwischen zwei Belohnungen:</p>
<ul>
  <li><strong>Kräuter (~8M pro Wahl):</strong> ✅ <strong>Beste Wahl für das Mid- und Endgame.</strong> Kräuter sind das Nadelöhr für hochstufige Forschung.</li>
  <li><strong>Ausrüstungssteine:</strong> ❌ Im späteren Spielverlauf hat man Hunderttausende Steine auf Lager. Das Nadelöhr sind Baupläne, nicht Steine.</li>
</ul>
""",
        },
        'pandemic': {
            'title': 'Pandemie-Erfahrung: Infektionspunkte & Antidot-Management',
            'desc': 'Maximiere Belohnungen im Pandemie-Event: Kisten-Meilensteine, Antidot-Ressourcen und Truppen-Heilung ohne Ressourcenverlust.',
            'content': """
<p>Das <strong>Pandemie-Erfahrungs-Event</strong> belohnt Spieler für die Bewältigung der Seuche, Antidot-Produktion und das Heilen infizierter Überlebender im Schutzraum.</p>

<h2 id="mechanics">Hauptmechaniken</h2>
<ul>
  <li><strong>Infektionswellen:</strong> Tägliche Ausbrüche erfordern gezielte Antidot-Zuteilung im Seuchenlazarett.</li>
  <li><strong>Belohnungsmeilensteine:</strong> Schließe 9 Stufen an Aufgaben ab, um UR-Heldenfragmente und Beschleuniger zu erhalten.</li>
  <li><strong>Truppen-Sicherheit:</strong> Achte darauf, dass Infizierte rechtzeitig kuriert werden, um Malus auf Kampfkraft zu vermeiden.</li>
</ul>

<h2 id="strategy">F2P-Strategie</h2>
<ul>
  <li>Verbrauche Antidote gebündelt während der Punkte-Multiplikatoren.</li>
  <li>Kombiniere die Heilung mit den Allianz-Duell-Aufgaben am entsprechenden Wochentag.</li>
</ul>
""",
        },
        'crystal': {
            'title': 'Kristall-Cluster-Tal: Sammelrouten und F2P-Belohnungen',
            'desc': 'Sichere Kristall-Farming-Routen, Schutz vor feindlichen Überfällen und Prioritäten im Kristall-Tal-Shop.',
            'content': """
<p>Das <strong>Kristall-Cluster-Tal</strong> ist eine spezielle Ressourcenzone, in der Allianzen um hochgradige Kristalladern und seltene Erze kämpfen.</p>

<h2 id="mechanics">Minen-Mechanik</h2>
<ul>
  <li><strong>Kristalladern (Lv 1–5):</strong> Höhere Stufen bieten schnellere Abbauraten, sind jedoch umkämpft.</li>
  <li><strong>Überfall-Schutz:</strong> Sende stets Defensiv-Helden (Arthur/Lucius) mit den Sammeltruppen.</li>
  <li><strong>Allianz-Bonus:</strong> Baue in der Nähe von Allianz-Außenposten ab für +25% Sammelgeschwindigkeit.</li>
</ul>
""",
        },
    },
    'es': {
        'dwarven': {
            'title': 'Mina Enana: Acumulación de picos y 100 pisos para planos MR',
            'desc': 'El evento de 7 días de minería: la regla F2P de 750 picos, progresión por botes y elección de Hierbas sobre Piedras de equipo en el juego tardío.',
            'content': """
<p>La <strong>Mina Enana</strong> es un evento de 7 días: gastas <strong>Picos</strong> para cavar casillas, encuentras botes para subir de piso y quien completa <strong>100 pisos</strong> se lleva el premio máximo: un <strong>plano de equipo MR</strong>.</p>

<h2 id="mechanics">Mecánicas</h2>
<ul>
  <li><strong>Duración: 7 días</strong>, evento recurrente.</li>
  <li>Cavas una cuadrícula; la casilla del <strong>bote</strong> te sube al siguiente piso con mejores recompensas.</li>
  <li><strong>Premio superior en Piso 100: plano de equipo MR (Mítico Rojo).</strong></li>
  <li>La ruleta del evento también puede otorgar equipo rojo terminado.</li>
</ul>

<h2 id="hoarding">La regla F2P de ahorrar 750 picos</h2>
<blockquote>Comprobación de realidad F2P: ahorra al menos <strong>750 picos</strong> entre ciclos de eventos antes de cavar en serio.</blockquote>
<p>Con menos de ~750 picos no hay forma realista de alcanzar el Piso 100. Gastar picos fuera de ciclo solo quema recursos sin premio mayor.</p>

<h2 id="reward-choice">Hierbas vs Piedras de equipo</h2>
<ul>
  <li><strong>Hierbas (~8M por elección):</strong> ✅ <strong>La mejor opción para el juego tardío.</strong> Bloquean investigaciones de alto nivel.</li>
  <li><strong>Piedras de equipo:</strong> ❌ Más adelante tendrás cientos de miles sin gastar. El cuello de botella son los planos.</li>
</ul>
""",
        },
        'pandemic': {
            'title': 'Experiencia Pandémica: Puntos de infección y antídotos',
            'desc': 'Cómo maximizar recompensas en el evento de pandemia: cofres de hitos, producción de antídotos y curación de tropas.',
            'content': """
<p>El evento <strong>Experiencia Pandémica</strong> premia a los jugadores por controlar brotes, producir antídoto y tratar sobrevivientes infectados.</p>

<h2 id="mechanics">Mecánicas principales</h2>
<ul>
  <li><strong>Brotes diarios:</strong> Asigna antídotos en la clínica para sumar puntos de hito.</li>
  <li><strong>Cofres de recompensa:</strong> Completa 9 niveles para obtener fragmentos de héroe UR y aceleradores.</li>
</ul>
""",
        },
        'crystal': {
            'title': 'Valle de Cúmulos de Cristal: Rutas y recompensas F2P',
            'desc': 'Zonas seguras de recolección de cristales, defensa contra saqueos y prioridades en la tienda del valle.',
            'content': """
<p>El <strong>Valle de Cúmulos de Cristal</strong> es una zona especial donde las alianzas compiten por vetas de cristales de alto nivel.</p>

<h2 id="mechanics">Mecánicas</h2>
<ul>
  <li><strong>Vetas de Cristal (Niveles 1–5):</strong> Los niveles más altos otorgan mayor tasa de recolección.</li>
  <li><strong>Protección de marcha:</strong> Usa tanques en tus marchas de recolección para evitar pérdidas por emboscadas.</li>
</ul>
""",
        },
    },
    'fr': {
        'dwarven': {
            'title': 'Mine des Nains : Réserve de pioches et 100 étages pour le plan MR',
            'desc': 'Comment fonctionne l’événement de la Mine des Nains : règle des 750 pioches F2P, paliers de jackpot et choix des Herbes en endgame.',
            'content': """
<p>La <strong>Mine des Nains</strong> est un événement récurrent de 7 jours : vous dépensez des <strong>Pioches</strong> pour creuser, trouver le jackpot et gravir les étages. Atteindre l’<strong>étage 100</strong> offre la récompense suprême : un <strong>plan d’équipement MR</strong>.</p>

<h2 id="mechanics">Mécaniques</h2>
<ul>
  <li><strong>Durée : 7 jours</strong>, événement cyclique.</li>
  <li>Creusez la grille ; la tuile <strong>jackpot</strong> vous propulse à l’étage supérieur.</li>
  <li><strong>Récompense ultime à l'étage 100 : plan d'équipement MR (rouge).</strong></li>
</ul>

<h2 id="hoarding">La règle des 750 pioches F2P</h2>
<blockquote>Conseil F2P : économisez au moins <strong>750 pioches</strong> sur plusieurs cycles avant de tenter l'étage 100.</blockquote>
""",
        },
        'pandemic': {
            'title': 'Expérience Pandémique : Points d\'infection et antidotes',
            'desc': 'Maximisez vos récompenses : étapes de coffres, fabrication d\'antidote et soins des troupes.',
            'content': """
<p>L'événement <strong>Expérience Pandémique</strong> récompense la gestion des épidémies et la production d'antidote pour soigner les survivants.</p>
""",
        },
        'crystal': {
            'title': 'Vallée des Cristaux : Itinéraires et récompenses F2P',
            'desc': 'Zones de récolte de cristaux, protection contre les pillages et boutique de l\'événement.',
            'content': """
<p>La <strong>Vallée des Cristaux</strong> est une zone de conflit axée sur l'extraction de filons de minerai précieux.</p>
""",
        },
    },
    'id': {
        'dwarven': {
            'title': 'Tambang Kurcaci: Menimbun Beliung & 100 Lantai Cetak Biru MR',
            'desc': 'Panduan Tambang Kurcaci: Aturan 750 beliung F2P, jackpot tiap lantai, dan memilih Tanaman Obat dibanding Batu Perlengkapan.',
            'content': """
<p><strong>Tambang Kurcaci</strong> adalah event 7 hari di mana Anda menggali ubin dengan <strong>Beliung</strong>. Pemain yang menyelesaikan <strong>100 lantai</strong> memenangkan <strong>cetak biru perlengkapan MR</strong>.</p>
""",
        },
        'pandemic': {
            'title': 'Pengalaman Pandemi: Poin Infeksi & Manajemen Antidot',
            'desc': 'Maksimalkan hadiah event pandemi: peti misi, produksi penawar racun, dan pengobatan pasukan.',
            'content': """
<p>Event <strong>Pengalaman Pandemi</strong> memberi hadiah untuk pengendalian wabah dan pengobatan survivor di klinik pengungsian.</p>
""",
        },
        'crystal': {
            'title': 'Lembah Klaster Kristal: Rute Pengumpulan & Hadiah F2P',
            'desc': 'Area aman tambang kristal, perlindungan serangan musuh, dan prioritas belanja toko.',
            'content': """
<p><strong>Lembah Klaster Kristal</strong> adalah zona khusus untuk menambang urat kristal berharga tinggi.</p>
""",
        },
    },
    'ja': {
        'dwarven': {
            'title': 'ドワーフの鉱山: ツルハシ貯蓄と100階MR設計図攻略',
            'desc': 'ドワーフの鉱山イベント完全攻略: 無課金750ツルハシ貯蓄ルール、ジャックポットによる階層突破、終盤の薬草優先戦略。',
            'content': """
<p><strong>ドワーフの鉱山</strong>は7日間の採掘イベントです。<strong>ツルハシ</strong>を消費してマスを掘り、<strong>100階</strong>をクリアすると最高報酬である<strong>MR装備設計図</strong>を獲得できます。</p>

<h2 id="hoarding">無課金の750ツルハシ貯蓄ルール</h2>
<blockquote>無課金の鉄則: イベントごとにツルハシを中途半端に使わず、<strong>750本以上貯蓄</strong>してから一気に100階を目指しましょう。</blockquote>
""",
        },
        'pandemic': {
            'title': 'パンデミック体験: 感染ポイントと解毒剤管理',
            'desc': 'パンデミック体験イベントで報酬を最大化する方法: 任務宝箱、解毒剤の調合、感染治療。',
            'content': """
<p><strong>パンデミック体験</strong>は感染爆発を制御し、解毒剤を調合して生存者を治療することで大量の報酬を得るイベントです。</p>
""",
        },
        'crystal': {
            'title': 'クリスタルクラスターの谷: 採掘ルートとF2P報酬',
            'desc': '安全なクリスタル採掘ルート、略奪対策、クリスタルショップの交換優先順位。',
            'content': """
<p><strong>クリスタルクラスターの谷</strong>は同盟間で高純度クリスタル鉱脈を奪い合う採掘特化エリアです。</p>
""",
        },
    },
    'ko': {
        'dwarven': {
            'title': '드워프 광산: 곡괭이 비축 및 100층 MR 설계도 공략',
            'desc': '드워프 광산 이벤트 공략: 무과금 750 곡괭이 존버 규칙, 잭팟 층수 돌파, 종결 약초 우선 선택법.',
            'content': """
<p><strong>드워프 광산</strong>은 7일간 진행되는 채굴 이벤트로, <strong>곡괭이</strong>를 사용하여 타일을 파고 <strong>100층</strong>에 도달하면 최고 보상인 <strong>MR 장비 설계도</strong>를 획득합니다.</p>

<h2 id="hoarding">무과금 750 곡괭이 존버 규칙</h2>
<blockquote>무과금 핵심 전략: 곡괭이를 평소에 쓰지 말고 <strong>최소 750개 이상 비축</strong>한 뒤 한 번의 이벤트에 모두 쏟아부으세요.</blockquote>
""",
        },
        'pandemic': {
            'title': '팬데믹 경험: 감염 포인트 및 해독제 관리',
            'desc': '팬데믹 이벤트 보상 극대화: 퀘스트 상자, 해독제 생산 및 감염 병력 치료.',
            'content': """
<p><strong>팬데믹 경험</strong>은 전염병 발생을 억제하고 해독제를 투여하여 생존자를 치료하는 주간 이벤트입니다.</p>
""",
        },
        'crystal': {
            'title': '크리스탈 클러스터 계곡: 채집 경로 및 F2P 보상',
            'desc': '안전한 크리스탈 채집지, 약탈 방어 전략 및 계곡 상점 우선순위.',
            'content': """
<p><strong>크리스탈 클러스터 계곡</strong>은 고급 광맥을 채취하여 연맹 포인트를 획득하는 전용 이벤트 구역입니다.</p>
""",
        },
    },
    'pt': {
        'dwarven': {
            'title': 'Mina dos Anões: Acúmulo de picaretas e 100 andares para projeto MR',
            'desc': 'Como funciona o evento da Mina dos Anões: regra de 750 picaretas F2P, progressão de andares por jackpot e escolha de Ervas no endgame.',
            'content': """
<p>A <strong>Mina dos Anões</strong> é um evento recorrente de 7 dias: você gasta <strong>Picaretas</strong> para escavar blocos e quem atinge o <strong>andar 100</strong> recebe o prêmio máximo: um <strong>projeto de equipamento MR</strong>.</p>

<h2 id="hoarding">A regra F2P de 750 picaretas</h2>
<blockquote>Dica F2P essencial: economize pelo menos <strong>750 picaretas</strong> entre ciclos antes de tentar a corrida do andar 100.</blockquote>
""",
        },
        'pandemic': {
            'title': 'Experiência Pandêmica: Pontos de infecção e antídotos',
            'desc': 'Maximize recompensas no evento pandêmico: marcos de baús, produção de antídoto e cura de tropas.',
            'content': """
<p>O evento <strong>Experiência Pandêmica</strong> recompensa a gestão de surtos e produção de antídotos para curar sobreviventes.</p>
""",
        },
        'crystal': {
            'title': 'Vale dos Cachos de Cristal: Rotas de coleta e recompensas F2P',
            'desc': 'Zonas seguras de mineração de cristal, defesa contra saques e loja do vale.',
            'content': """
<p>O <strong>Vale dos Cachos de Cristal</strong> é uma zona de recursos especiais para coletar minérios valiosos em aliança.</p>
""",
        },
    },
}

EVENT_SLUGS = {
    'dwarven': 'dwarven-mine',
    'pandemic': 'pandemic-experience',
    'crystal': 'crystal-cluster',
}

VIDEO_TOPICS = {
    'dwarven': 'dwarven',
    'pandemic': 'pandemic',
    'crystal': 'crystal_cluster',
}

def make_astro_file(lang, key, data):
    slug = EVENT_SLUGS[key]
    topic = VIDEO_TOPICS[key]
    title = data['title'].replace('"', '\\"')
    desc = data['desc'].replace('"', '\\"')
    content = data['content'].strip()

    return f"""---
import Base from '../../../layouts/Base.astro';
import GuidePage from '../../../components/GuidePage.astro';
import VideoSection from '../../../components/VideoSection.astro';
import DiscordBanner from '../../../components/DiscordBanner.astro';
import {{ t }} from '../../../i18n/ui';
import type {{ Lang }} from '../../../i18n/utils';

const lang: Lang = '{lang}';
---

<Base lang={{lang}} path="/{lang}/events/{slug}/" title="{title}" description="{desc}">
  <GuidePage
    title="{title}"
    description="{desc}"
    lang={{lang}}
    breadcrumbs={{[{{ label: t(lang, 'nav.home'), href: '/{lang}/' }}, {{ label: t(lang, 'nav.events'), href: '/{lang}/events/' }}, {{ label: '{title.split(":")[0]}' }}]}}
  >
    {content}

    <VideoSection topic="{topic}" lang={{lang}} />

    <DiscordBanner lang={{lang}} />
  </GuidePage>
</Base>
"""

total = 0
for lang, events in LANGS.items():
    dir_path = f"site/src/pages/{lang}/events"
    os.makedirs(dir_path, exist_ok=True)
    for key, data in events.items():
        slug = EVENT_SLUGS[key]
        filepath = os.path.join(dir_path, f"{slug}.astro")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(make_astro_file(lang, key, data))
        total += 1
        print(f"Created: {filepath}")

print(f"Successfully generated {total} localized event pages!")
