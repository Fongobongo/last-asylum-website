---
title: "Plądrowanie: Kompletna mechanika"
description: "Dochód z plądrowania jest ograniczony dziennym limitem, który rośnie wraz z poziomem Sanktuarium. Znajomość tych progów zmienia moment, w którym należy przestać a…"
lang: pl
updated: "2026-10-12"
type: guide
---
## Plądrowanie: Kompletna mechanika {#plunder-mechanics}

Dochód z plądrowania jest ograniczony dziennym limitem, który rośnie wraz z poziomem Sanktuarium. Znajomość tych progów zmienia moment, w którym należy przestać atakować.

<!-- component:plunder-calculator -->

### Jak działa limit {#how-the-limit-works}

- Limit liczy Zboże, Drewno i Zioła przyniesione do domu z ataków.
- Poniżej limitu: przenosisz zasoby ze **100%** wydajnością.
- Od 1x limitu: wydajność spada do **15%**.
- Od 1.3x limitu: wydajność spada do **5%** — to jest dno.
- Limit resetuje się codziennie o **02:00 UTC**.
- Żółty trójkąt pod Potęgą celu to wskaźnik przekroczenia limitu — sprawdź go przez Przegląd Efektów, a następnie Zyski z Plądrowania.

### Dzienne limity według poziomu Sanktuarium {#plunder-limits-table}

| Sanktuarium | Limit dzienny | Sanktuarium | Limit dzienny | Sanktuarium | Limit dzienny |
|---|---|---|---|---|---|
| 10-12 | 2.5M | 18 | 8M | 24 | 18M |
| 13 | 3M | 19 | 9M | 25 | 20M |
| 14 | 4M | 20 | 10M | 26 | 22M |
| 15 | 5M | 21 | 12M | 27 | 24M |
| 16 | 6M | 22 | 14M | 28 | 26M |
| 17 | 7M | 23 | 16M | 29 / 30 | 28M / 30M |

Wzór: +1M na poziom Sanktuarium do 20, potem +2M na poziom do limitu 30M na 30. poziomie Sanktuarium. Dwie uwagi techniczne:

- Ulepszenie Sanktuarium podnosi limit **natychmiast** — bez czekania na reset. Jeśli jesteś blisko dziennego limitu i blisko ulepszenia Sanktuarium, najpierw je ukończ, a potem plądruj.
- Umiejętność Zaopatrzenie Wojenne z drzewka specjalizacji Dowódcy Legionu (Era Odrodzenia) podnosi limit o +6 / +14 / +24 / +36 / +50% na poziomach 1-5. Zobacz [przewodnik po Erze](/pl/era/).

## Zasada dziewięciu uderzeń {#nine-hit-rule}

Nigdy nie atakuj tej samej farmy więcej niż dziewięć razy z rzędu. Dziesiąte uderzenie niszczy miasto całkowicie i teleportuje właściciela — tracisz farmę, a gracz traci miasto. Dziewięć uderzeń to sufit; społeczność traktuje to jako obowiązek, a nie sugestię.

### Technika polowa: Uzyskanie pełnego plonu z farmy {#field-technique}

Sprawdzona przez społeczność procedura na pełną dzienną sesję plądrowania:

1. **Najpierw zwiad.** Otwórz pocztę po zwiadzie: raport pokazuje dokładnie, ile każdego zasobu posiada cel. Sprawdź 2–3 kandydatów i wybierz najbogatszego — wielu graczy jest załadowanych jednym typem zasobów.
2. **Pomiń graczy w sojuszu** — atakowanie członka sojuszu rozpoczyna wojny, na które twój sojusz nie wyraził zgody.
3. **Ustaw się na sąsiednim polu.** Wyślij swój oddział na pole zasobów obok celu; gdy już tam będzie, możesz przeprowadzić do ~8 szybkich ataków z rzędu bez czekania na marsz.
4. **Utrzymuj ich powyżej 2000 HP miasta.** Poniżej tej wartości teleportują się, a twoje miejsce do farmowania znika — użyj tej samej farmy jutro, przerywając ataki wcześniej.

**Ładowność żołnierzy** decyduje o tym, ile przenosisz na uderzenie. Rośnie o **+200 na poziom oddziału** (T6 = 1400, T7 = 1600, T8 = 1800...) i może być dalej zwiększana przez technologię **Trening Ładowności** w drzewku badań Żołnierzy. Oddziały wyższego poziomu plądrują ten sam cel w mniejszej liczbie uderzeń, oszczędzając energię.

## Matematyka energii: Dlaczego plądrowanie powyżej limitu zawodzi {#stamina-math}

Wydawanie energii na plądrowanie powyżej limitu to jeden z najgorszych interesów w grze:

- Przy 15% wydajności, każdy punkt energii zarabia około **7x mniej** niż normalnie.
- Przy 5% wydajności, około **20x mniej**.
- Ta sama energia wydana na potwory zarabia **pełną wartość niezależnie** od twojego statusu plądrowania.

Więc dzienny rytm pisze się sam: uderzaj w najbogatsze cele, które możesz pokonać, gdy jesteś na 100%, przestań atakować farmy w momencie przekroczenia limitu i wydaj resztę energii na potwory. W ramach swojego okna plądrowania zawsze uderzaj najpierw w najbogatszy cel — limit i tak nadejdzie, więc wypełnij go największymi dostępnymi liczbami.

## Karawany i Operacje Specjalne: Zawsze rób oba {#caravans-covert-ops}

Karawany i Operacje Specjalne to systemy oddzielne od plądrowania i omijają wszystkie powyższe ograniczenia: brak limitu plądrowania, brak realnych strat wojsk, brak kosztów energii. To czysty zysk, dlatego zasadą społeczności jest robienie obu codziennie.

- **Karawany** — twój zautomatyzowany dochód z handlu. Niech się ruszają.
- **Operacje Specjalne** — możesz splądrować do 5 Operacji Specjalnych innych graczy dziennie. Złote Operacje Specjalne płacą najlepsze nagrody — zawsze bierz złotą, gdy ją widzisz.
