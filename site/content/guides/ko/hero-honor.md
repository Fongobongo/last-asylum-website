---
title: "Honor levels: conditions, cost and payout"
description: "Honor levels are the last hero track, and it opens once a hero has every star. There are 600 of them, they work the same way for every hero, and they pay out in hit point…"
lang: ko
updated: "2026-10-12"
type: guide
---

> 영어 버전 기반. 수치는 클라이언트 v1.0.87에서 검증됨.
>
> Data verified against the game client (v1.0.87, source: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/hero-honor)).

Honor levels are the last hero track, and it opens once a hero has every star. There are 600 of them, they work the same way for every hero, and they pay out in hit points alone. The price is charged in the same personal shards that went into stars, so honor continues an existing expense rather than starting a new one.

## Three conditions to start

The track does not appear by itself, and the honor screen stays closed until three conditions are met.
- The hero is at maximum stars, all 50.
- The statue of their faction is built and raised to at least level twenty.
- The hero's personal shards are in stock, the same ones that went into stars.

The honor screen is entered through the statue itself: warriors through the 전사 조각상, warlocks and rangers through theirs.

## What it costs

The price of a level climbs as the track goes on, from ten shards for the early levels to forty for the last ones.

| Stretch | Shards per level |
|---|---|
| Early levels | 10 |
| Middle | 20 and 30 |
| Late | 40 |

All 600 levels together cost 15,030 shards of a single hero, noticeably more than any individual star asks for.

## What it gives

Honor grants hero HP and nothing else. The bonus is labeled as coming from the 영예 강당 and stacks with every other source, and it scales in proportion to the level: 160 HP at level 1, 64,000 at level 300 and 240,000 at level 600.

Later levels cost more and give proportionally more, because the rate holds at 16 HP per shard the whole way. Saving shards for a cheap stretch is pointless, as no such stretch exists.

Two more values sit beside each of those, twice and four times as large: 320 and 640 at level 1, 480,000 and 960,000 at level 600. They are probably the numbers for rarer heroes, but the guess could not be confirmed, since the game never shows which of them applies.

## What it means in practice

There is no choice between stars and honor, because honor opens only after stars and eats the same shards. The real choice comes earlier, at the statue. Until the faction statue reaches level twenty, shards spent on a finished hero sit idle.


## 명예의 전당: 실전 노트 (커뮤니티) {#dtf-hall-of-honor}

위의 클라이언트 참고 자료는 명예의 별 트랙 측면을 설명합니다. 아래의 커뮤니티 실전 가이드는 영웅들이 명예의 전당에 도착한 후 플레이어가 실제로 조각을 배치하는 방법(입장, 글로벌 체력, 진영 체크포인트, 조각 경제)을 다룹니다.

![명예의 전당 및 10성 이후 성장](/img/dtf/hero-honor/01.jpg)

### 입장: 10성 달성, 단순 도착 시 능력치 없음 {#dtf-hall-entry}

이 가이드에서 영웅은 추가 해제 없이 **10성**에 도달하면 명예의 전당에서 이용 가능해집니다. 단순 도착만으로는 아무것도 부여되지 않으며, 개인 조각이나 일치하는 범용 조각을 사용하여 내부에서 영웅의 레벨을 계속 올릴 때만 보너스가 시작됩니다.

![10성 달성 후 명예의 전당 입장](/img/dtf/hero-honor/02.jpg)

빨간색 점이 켜진다고 해서 (특히 골드 조각을) 범용 조각을 명예의 전당 레벨로 짓밟듯 변환하지 마십시오. 먼저 영웅과 체크포인트를 선택한 다음 소모하세요.

### 한 영웅의 레벨 상승, 모든 영웅의 체력 증가 {#dtf-global-hp}

기본 메커니즘: *어떤* 영웅이든 명예의 전당 레벨이 오르면 진영, 희귀도(골드, 보라색, 파란색), 영웅의 전투 참여 여부와 관계없이 **전체 로스터에 계정 전체 체력 보너스**가 부여됩니다.

![명예의 전당 레벨에 따른 계정 전체 체력 보너스](/img/dtf/hero-honor/03.jpg)

한 진영의 영웅 한 명의 레벨을 올리면 레인저와 워록도 함께 이득을 얻으며, 다른 진영의 레벨을 올리면 총합이 다시 올라갑니다. 단일 레벨은 사소해 보이지만, 오래된 계정에서는 수십, 수백 레벨이 쌓이면 큰 차이를 만듭니다. 희귀도에 따라 보상이 스케일링되지만(골드가 레벨당 보라색보다 더 많이 주고, 보라색은 파란색보다 더 많이 줍니다), 보상보다는 비용이 더 중요하므로 능력치 단독이 아니라 능력치당 비용을 판단해야 합니다.

![명예의 전당 보너스 스크린샷](/img/dtf/hero-honor/04.jpg)

![명예의 전당 보너스 스크린샷](/img/dtf/hero-honor/05.jpg)

![명예의 전당 보너스 스크린샷](/img/dtf/hero-honor/06.jpg)

![명예의 전당 보너스 스크린샷](/img/dtf/hero-honor/07.jpg)

![명예의 전당 보너스 스크린샷](/img/dtf/hero-honor/08.jpg)

### 진영 체크포인트: 해당 영웅의 진영만 이득 획득 {#dtf-checkpoints}

골드 및 보라색 영웅은 고정된 명예의 전당 레벨에서 추가 보너스를 해제합니다. 글로벌 체력과 달리, 이 보너스는 **레벨이 오른 영웅의 진영에만 적용**됩니다. 워리어 공격력을 여는 버프는 레인저나 워록이 아닌 워리어에게 적용됩니다. 능력치 자체는 영웅마다 다르므로(어디서는 공격력, 다른 곳에서는 체력이나 방어력), 진영을 먼저 선택하고 보너스를 나중에 선택하세요.

### 체크포인트 레벨: 50 → 100 → 150 → 200 → 300 {#dtf-checkpoint-levels}

첫 번째 추가 보너스는 **명예의 전당 레벨 50**에서 열리고, 그 후 200까지 50단위로(50 → 100 → 150 → 200), 그 다음에는 간격이 100으로 넓어져 **300**에서 다음 보너스가 열립니다. 가이드의 예시: Claire는 체크포인트에서 워리어 영웅의 공격력을 0.25% 올리고, Arthur는 워리어 영웅의 체력을 0.50% 올립니다. 워리어 피해 행군의 경우 Claire의 공격력이 흥미롭고, 생존용으로는 Arthur의 체력이 유리합니다.

![체크포인트 레벨 50, 100, 150, 200, 300](/img/dtf/hero-honor/09.jpg)

200까지는 네 개의 보너스가 서로 가깝게 위치하여 해당 구간이 효율적입니다. 200을 지나면 비용이 계속 증가하는 반면 다음 의미 있는 보너스는 300까지 기다려야 합니다.

"이 영웅이 좋아"가 아니라 다음과 같이 경로를 설정하세요: **주요 진영 → 필요한 능력치 → 가장 가까운 체크포인트 → 조각 비용** — 그 후 업그레이드를 누르세요.

### 파란색 영웅: 적재량 및 저렴한 명예의 전당 입장 {#dtf-blue-heroes}

파란색 영웅은 다른 영웅들처럼 글로벌 체력을 더해주며, 추가로 **병사 적재량**(수집 런당 운반하는 자원)을 추가로 제공합니다. 화려하지는 않지만 꾸준한 파밍 가치가 있으며, 범용 파란색 조각은 골드나 보라색 조각보다 훨씬 저렴합니다.

![파란색 영웅 적재량 보너스](/img/dtf/hero-honor/10.jpg)

이미 별과 개인 조각이 가장 많은 파란색 영웅을 골라 범용 파란색 조각으로 10성까지 키우세요. 외모가 예쁘다고 해서 0성부터 더 예쁜 초상화를 시작하지 마세요.

### 골드 영웅: 개인 조각 전용 {#dtf-gold-shards}

골드 명예의 전당 영웅은 **개인 조각**으로 육성하세요. 범용 골드 조각은 새로운 메타 영웅이 출시될 때까지 부족해 보이기 마련이며 — 한 번 쓴 50~100개의 범용 조각은 되돌릴 수 없습니다. 성장 중인 계정에서는 (특히 무과금 유저의 경우) 강한 영웅의 새로운 별 하나가 보통 여러 개의 명예의 전당 레벨보다 좋습니다.

![개인 조각으로 골드 영웅 육성](/img/dtf/hero-honor/11.jpg)

### 보라색 우선순위 픽: Claire, Ash, Stellar {#dtf-purple-first}

범용 보라색 조각은 명예의 전당 자체가 아니라 데몬 킹 PvE 서포터로서 진영 피해를 각각 버프하는 **Claire, Ash, Stellar** 세 영웅에게 먼저 10성을 달성하는 데 의도적으로 투자하세요. Claire는 워리어(용사의 함성)를 돕고, Ash는 레인저(집중)를 강화하며, Stellar는 워록(소원의 별)과 협력합니다. 이를 통해 지금 당장 PvE 도우미를 얻고 그 이후에 명예의 전당 트랙을 올릴 수 있습니다.

![PvE 및 명예의 전당을 위한 Claire, Ash, Stellar](/img/dtf/hero-honor/12.jpg)

기타 보라색 영웅: 실제로 플레이하는 영웅이 있다면(아레나, 트라이앵글, PvE, 메주 주력 행군), 먼저 유효한 별 개수까지 완성하세요. 활약하는 영웅은 지금 당장 도움이 되지만, 명예의 전당은 느린 계정 보너스입니다. 원칙: 필요한 캐릭터 → 무료 범용 조각을 명예의 전당으로. 한 번에 열 방향으로 분산하지 마세요.

### 전당 내부: 체크포인트까지 한 영웅 집중 {#dtf-inside-priority}

코어 및 PvE 픽이 완료되면, 같은 진영의 명예의 전당 영웅을 열고 단기적으로 가장 유용한 보너스(보통 공격형 스쿼드의 경우 공격력)를 챙기세요. **한 영웅을 체크포인트까지 밀어붙여 전체 진영 보너스를 회수하고 나서 다음으로 넘어가세요.** 다섯 명의 영웅에게 각각 +10~20레벨씩 분산 투자하면 체크포인트 하나 건지지 못하고 조각만 낭비할 수 있습니다.

200까지는 가까운 체크포인트를 따라 영웅별로 단계적으로 진행하세요(어떤 영웅은 공격력을, 다른 영웅은 체력이나 방어력을 줄 수 있으며, 두 영웅을 거치는 경로가 하나를 최대화하는 것보다 나은 경우가 많습니다). 200레벨에서는 잠시 멈추고 비교해 보세요: 한 영웅을 300까지 계속 키울 것인가, 아니면 같은 진영의 두 번째 영웅을 시작할 것인가.

![명예의 전당 레벨 200까지 단계별 성장](/img/dtf/hero-honor/13.jpg)

### 파란색 방식 및 두 번째 부대 규칙 {#dtf-blue-method}

파란색 영웅: 가장 별이 많은 영웅 하나를 골라, 범용 파란색 조각을 투입해 10성을 거쳐 명예의 전당까지 진입시키세요. 네 번의 느린 크롤링보다 글로벌 체력과 적재량 보너스를 더 빨리 얻을 수 있습니다.

![빠른 명예의 전당 트랙을 위한 파란색 영웅 선택](/img/dtf/hero-honor/14.jpg)

명예의 전당을 위해 두 번째 부대를 굶기지 마세요: 메인 부대 → 필요한 두 번째 부대 영웅 → 핵심 PvE → 남는 자원을 명예의 전당에 투자. 새로운 별은 스킬을 해제하거나 강화하여 두 번째 행군을 바꿀 수 있지만, 몇 안 되는 명예의 전당 레벨은 그러기 어렵습니다. 물론 이미 10성인 영웅의 개인 조각은 명예의 전당으로 가야 합니다.

### 명예의 전당이 복리로 작용하는 이유 {#dtf-compounding}

글로벌 체력은 도달하는 모든 영웅에게 적용됩니다. 오늘 다섯 명의 메인 영웅을 위해 올린 레벨은 몇 달 뒤 두 번째, 세 번째 부대와 새로 영입되는 모든 영웅의 시작 보너스가 됩니다. "조금씩 쌓이는 것"이 서버 연령에 따라 상당한 수치로 불어납니다.

![명예의 전당 진행 경로 요약](/img/dtf/hero-honor/15.jpg)

경험 법칙: 실제 계정 과제 우선(메인 부대, 핵심 별, 필요한 PvE 영웅); 남은 자원은 명예의 전당으로; 범용 골드 조각은 예비로 보유. 모든 투자는 구체적인 체크포인트(올바른 보너스의 50/100/200)에 맞추고, "명예의 전당 어딘가"에 막연하게 투자하지 마세요.

> 출처: Гейм-Знаток의 [Зал Чести в Last Asylum: Plague - кого качать и куда тратить фрагменты](https://dtf.ru/howto/5234963-zal-chesti-last-asylum-plague-prokatchka-geroev) (DTF).
