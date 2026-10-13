---
title: "Honor levels: conditions, cost and payout"
description: "Honor levels are the last hero track, and it opens once a hero has every star. There are 600 of them, they work the same way for every hero, and they pay out in hit point…"
lang: ja
updated: "2026-10-12"
type: guide
---

> 英語版からの転載。数値はクライアント v1.0.87 で検証済み。
>
> Data verified against the game client (v1.0.87, source: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/hero-honor)).

Honor levels are the last hero track, and it opens once a hero has every star. There are 600 of them, they work the same way for every hero, and they pay out in hit points alone. The price is charged in the same personal shards that went into stars, so honor continues an existing expense rather than starting a new one.

## Three conditions to start

The track does not appear by itself, and the honor screen stays closed until three conditions are met.
- The hero is at maximum stars, all 50.
- The statue of their faction is built and raised to at least level twenty.
- The hero's personal shards are in stock, the same ones that went into stars.

The honor screen is entered through the statue itself: warriors through the ウォーリア像, warlocks and rangers through theirs.

## What it costs

The price of a level climbs as the track goes on, from ten shards for the early levels to forty for the last ones.

| Stretch | Shards per level |
|---|---|
| Early levels | 10 |
| Middle | 20 and 30 |
| Late | 40 |

All 600 levels together cost 15,030 shards of a single hero, noticeably more than any individual star asks for.

## What it gives

Honor grants hero HP and nothing else. The bonus is labeled as coming from the 栄光の講堂 and stacks with every other source, and it scales in proportion to the level: 160 HP at level 1, 64,000 at level 300 and 240,000 at level 600.

Later levels cost more and give proportionally more, because the rate holds at 16 HP per shard the whole way. Saving shards for a cheap stretch is pointless, as no such stretch exists.

Two more values sit beside each of those, twice and four times as large: 320 and 640 at level 1, 480,000 and 960,000 at level 600. They are probably the numbers for rarer heroes, but the guess could not be confirmed, since the game never shows which of them applies.

## What it means in practice

There is no choice between stars and honor, because honor opens only after stars and eats the same shards. The real choice comes earlier, at the statue. Until the faction statue reaches level twenty, shards spent on a finished hero sit idle.


## 名誉の殿堂：実践ノート（コミュニティ） {#dtf-hall-of-honor}

上記のクライアントリファレンスでは名誉のスタートラック側面について説明されています。以下のコミュニティの実践では、ヒーローが名誉の殿堂に到着した後、プレイヤーが実際にどのように殿堂でフラグメントを配分しているか（入場、グローバル体力、陣営のチェックポイント、シャードの経済）について解説します。

![名誉の殿堂と10スター以降の進行](/img/dtf/hero-honor/01.jpg)

### 入場：10スター、単なる到着ではステータスは上がらない {#dtf-hall-entry}

このガイドでは、ヒーローは追加のアンロック要素なしで、**10スター**到達後に名誉の殿堂で利用可能になります。到着しただけでは何も付与されません。ボーナスは、パーソナルシャードや一致するユニバーサルシャードを使用して、内部でヒーローのレベルを上げ続けた場合にのみ開始されます。

![10スター後の名誉への入場](/img/dtf/hero-honor/02.jpg)

赤いドットが点灯したという理由だけで（特にゴールドのシャードを）ユニバーサルシャードを殿堂のレベルに変換しないでください。まずヒーローとチェックポイントを選んでから、消費しましょう。

### 1人のヒーローのレベルが上がると、すべてのヒーローの体力が上昇する {#dtf-global-hp}

基本メカニズム：*どの*ヒーローであっても名誉の殿堂のレベルが上がれば、陣営、レアリティ（ゴールド、パープル、ブルー）、そのヒーローがまだ戦闘に参加しているかどうかにかかわらず、**アカウント全体でのロースター全体の体力ボーナス**が上昇します。

![殿堂レベルによるアカウント全体の体力ボーナス](/img/dtf/hero-honor/03.jpg)

1つの陣営の1人のヒーローを育成すればレンジャーやウォーロックも強化され、別の陣営を育成すれば合計値が再び上昇します。1つずつのレベルアップはわずかに見えるかもしれませんが、古いアカウントでは何十、何百と積み重なります。レアリティによって報酬がスケールします（ゴールドはパープルより、パープルはブルーより1レベルあたりの上昇量が多い）が、報酬よりもコストが重要です。そのため、ステータス単体ではなく、ステータスあたりのコストを判断してください。

![殿堂ボーナスのスクリーンショット](/img/dtf/hero-honor/04.jpg)

![殿堂ボーナスのスクリーンショット](/img/dtf/hero-honor/05.jpg)

![殿堂ボーナスのスクリーンショット](/img/dtf/hero-honor/06.jpg)

![殿堂ボーナスのスクリーンショット](/img/dtf/hero-honor/07.jpg)

![殿堂ボーナスのスクリーンショット](/img/dtf/hero-honor/08.jpg)

### 陣営チェックポイント：ヒーローの陣営のみが恩恵を受ける {#dtf-checkpoints}

ゴールドおよびパープルのヒーローは、固定された殿堂レベルで追加ボーナスをアンロックします。グローバル体力とは異なり、これらは**レベルアップしたヒーローの陣営にのみ**適用されます。ウォーリアーの攻撃力アップはウォーリアーを強化し、レンジャーやウォーロックは強化されません。ステータス自体はヒーローによって異なります（ある場所では攻撃力、別の場所では体力や防御力）。そのため、最初に陣営で選び、2番目にボーナスで選んでください。

### チェックポイントレベル：50 → 100 → 150 → 200 → 300 {#dtf-checkpoint-levels}

最初の追加ボーナスは**殿堂レベル50**で開放され、その後200まで50刻み（50 → 100 → 150 → 200）、そして次の**300**でステップが100に広がります。ガイドの例：Claireはチェックポイントでウォーリアーヒーローの攻撃力を0.25%上昇させ、Arthurはウォーリアーヒーローの体力を0.50%上昇させます。ウォーリアーのダメージ行軍にはClaireの攻撃力が魅力的であり、生存にはArthurの体力となります。

![チェックポイントレベル 50、100、150、200、300](/img/dtf/hero-honor/09.jpg)

200までは4つのボーナスが互いに近くに配置されているため、その区間が効率的です。200を超えると、コストが上昇し続ける一方で、次の意味のあるボーナスは300まで待つことになります。

「このヒーローが好きだから」ではなく、次のようにルートを決定してください：**メイン陣営 → 必要なステータス → 最寄りのチェックポイント → シャードのコスト** —— その後、アップグレードを押します。

### ブルーヒーロー：積載量と安価な名誉の殿堂への入場 {#dtf-blue-heroes}

ブルーヒーローは他のヒーローと同様にグローバル体力を追加し、さらに追加要素として**兵士の積載量**（採取行軍ごとの資源運搬量）を増加させます。派手さはありませんが、着実なファーム価値があります。そして、ユニバーサルブルーシャードはゴールドやパープルよりもはるかに安価です。

![ブルーヒーローの積載量ボーナス](/img/dtf/hero-honor/10.jpg)

すでに最も星とパーソナルシャードが多いブルーヒーローを選び、ユニバーサルブルーを使って10スターまで育ててください。見た目の良さだけのために、ゼロからより綺麗なポートレートの育成を始めないでください。

### ゴールドヒーロー：パーソナルシャードのみ {#dtf-gold-shards}

ゴールドの殿堂ヒーローは**パーソナルシャード**で育成してください。ユニバーサルゴールドシャードは、新しいメタヒーローが登場するまでは温存すべきであり、消費した50〜100個のユニバーサルは戻ってきません。発展途上のアカウントでは、特にF2P（無課金）において、強力なヒーローの新しい星は通常、複数の殿堂レベルよりも価値があります。

![パーソナルシャードによるゴールドヒーローの育成](/img/dtf/hero-honor/11.jpg)

### パープルの初期選択：Claire、Ash、Stellar {#dtf-purple-first}

ユニバーサルパープルシャードは、殿堂のためではなく、まずDemon King PvEのサポートとして10スターにするために、**Claire、Ash、Stellar**の3人に意図的に費やしてください。それぞれが自身の陣営のダメージをバフします：Claireはウォーリアーを助け（Call of the Brave）、Ashはレンジャーをブーストし（Focus）、Stellarはウォーロックと連携します（Wishing Star）。これにより、今のPvEヘルパーと、その後の殿堂トラックを購入することができます。

![PvEと殿堂のための Claire、Ash、Stellar](/img/dtf/hero-honor/12.jpg)

その他のパープル：実際にプレイで使用しているヒーロー（アリーナ、トライアングル、PvE、メイン行軍など）がいる場合は、まず実用的な星の数まで完了させましょう。今役に立つのは実用的なヒーローであり、殿堂はゆっくりとアカウントを強化するボーナスです。原則：必要なキャラクター → 無料のユニバーサルを殿堂へ。一度に十方向に分散させないこと。

### 殿堂内：1人のヒーローをチェックポイントまで育成する {#dtf-inside-priority}

コアおよびPvEの選択が完了したら、同じ陣営の殿堂ヒーローを解放し、短期的に最も有用なボーナス（攻撃部隊の場合は通常は攻撃力）を獲得します。**1人のヒーローをチェックポイントまで進め、次のヒーローに移る前に完全な陣営ボーナスを回収してください**。5人のヒーローにそれぞれ+10〜20レベルずつ分散させると、チェックポイントの恩恵を一切得られないままシャードを消費してしまう可能性があります。

200までは、近いチェックポイントを1人ずつ進めていきます（1人が攻撃力を、別の人が体力や防御力を与える場合があります。2人のヒーローをまたぐルートのほうが、1人を最大化するよりも優れていることがよくあります）。200に達したら、一度立ち止まって比較してください：1人のヒーローを300まで継続するか、同じ陣営の2人目のヒーローを育成し始めるか。

![殿堂レベル200までの段階的進行](/img/dtf/hero-honor/13.jpg)

### ブルーの方法と第2部隊のルール {#dtf-blue-method}

ブルー：最も星の多いヒーロー1人にユニバーサルブルーを投入し、10スターを突破して殿堂へ進めます。4つの遅いクロールよりも速く、グローバル体力と積載量のボーナスが得られます。

![高速な殿堂トラックのためのブルーヒーローの選択](/img/dtf/hero-honor/14.jpg)

殿堂のために第2部隊を犠牲にしないでください：メイン部隊 → 必要な第2部隊のヒーロー → 主要なPvE → 無料資源を殿堂へ。新しい星はスキルを解放またはブーストし、第2行軍を変えることができますが、少々の殿堂レベルではそれができません。もちろん、すでに10スターに到達しているヒーローのパーソナルシャードは殿堂に属します。

### なぜ殿堂は複利で効いてくるのか {#dtf-compounding}

グローバル体力は、これまで到着したすべてのヒーローに適用されます。今日の5人のメインのレベルは、数ヶ月後の第2および第3部隊の初期ボーナスとなり、新しく採用されたすべてのヒーローの初期ボーナスとなります。「少しずつ」の積み重ねが、サーバーの経過とともに深刻な数値になります。

![殿堂進行ルートのまとめ](/img/dtf/hero-honor/15.jpg)

経験則：まず実際のアカウントのタスク（メイン部隊、主要な星、必要なPvEヒーロー）、残りを殿堂へ、ユニバーサルゴールドは予備として保管。いかなるトップアップも「殿堂のどこか」ではなく、具体的なチェックポイント（適切なボーナスでの50/100/200）に結びつけること。

> Source: [Зал Чести в Last Asylum: Plague - кого качать и куда тратить фрагменты](https://dtf.ru/howto/5234963-zal-chesti-last-asylum-plague-prokatchka-geroev) by Гейм-Знаток on DTF.
