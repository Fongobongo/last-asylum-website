---
title: "1. Robienie zrzutów bonusów budowlanych a matematyka liczników czasu"
description: "Jedną z najkosztowniejszych pomyłek popełnianych przez nowych dowódców jest niezrozumienie sposobu, w jaki obliczane są bonusy do prędkości."
lang: pl
updated: "2026-10-12"
type: guide
---
## 1. Robienie zrzutów bonusów budowlanych a matematyka liczników czasu {#snapshotting}

Jedną z najkosztowniejszych pomyłek popełnianych przez nowych dowódców jest niezrozumienie sposobu, w jaki obliczane są bonusy do prędkości.

> [!IMPORTANT]
> **Zasada zrzutu (Snap-Shotting):**
> Wszystkie bonusy do prędkości (ekwipunek, tytuły, runy, technologia sojuszu) są obliczane **ŚCISLE W DOKŁADNYM MOMENCIE NACISKANIA PRZYCISKU ULEPSZENIA (START)**. Wszelkie bonusy aktywowane po uruchomieniu licznika **NIE ZREDUKUJĄ** pozostałego czasu trwania trwającego projektu!

### Zastosowanie praktyczne:
* Jeśli uruchomisz 30-dniowe ulepszenie Sanktuarium, a 5 minut później założysz sprzęt budowlany lub poprosisz o tytuł „Ministra Robót” (+10%), licznik czasu pozostanie bez zmian! Gra nie przelicza aktywnych liczników wstecz.
* **Sztuczka PRO gracza:** Załóż swój sprzęt budowlany, poproś o tymczasowy tytuł sojuszniczy „Ministra Robót” (+10%), aktywuj runę budowlaną (+5%), uruchom wielkie 30-dniowe ulepszenie Sanktuarium — a **natychmiast potem zdejmij sprzęt i zrezygnuj z tytułu**! Bonus został trwale zablokowany (zamrożony w zrzucie) na całe 30 dni.

### Matematyka stojąca za licznikami czasu:
Rzeczywisty czas trwania jest określony wzorem:
$$T = \frac{T_{base}}{1 + \sum \text{SpeedBuffs}}$$

Ze względu na dzielnik, każde kolejne +10% bonusu do prędkości daje nieco mniej bezwzględnych zaoszczędzonych godzin niż poprzednie (malejące zyski w godzinach). Jednak w przypadku liczników w późnej fazie gry (Sanktuarium 25–30, gdzie bazowy czas trwania osiąga 40–80 dni), nawet 5% runa oszczędza **kilka pełnych dni przyspieszeń**!

## 2. Przepełnienie szpitala i technika obronna „Ducha rajdu” (Ghost Rally) {#ghost-rally}

Twój szpital to nie tylko chatka do leczenia — to najważniejsza zapora ogniowa zapobiegająca permanentnemu zniszczeniu konta.

### Ukryta zasada przepełnienia (trwała śmierć)
Kiedy twoje miasto zostaje zaatakowane, ocaleni pokonani żołnierze zostają ranni i zapełniają łóżka szpitalne.
* Dopóki dostępne jest wolne miejsce w szpitalu, żołnierze są **Ranni** i można ich szybko wyleczyć za tanie surowce.
* **Gdy pojemność szpitala osiągnie 100%:** KAŻDY kolejny ranny żołnierz **GINIE NA ZAWSZE**. Jeśli wrogi wieloryb uderzy w twoje miasto 3 do 4 razy z rzędu, gdy spisz, setki tysięcy żołnierzy wysokiego poziomu T8/T9 zostają wymazane na zawsze. Odbudowa tej armii zajmuje miesiące.

### Sekret „Ducha rajdu” (Fałszywego rajdu)
Co powinieneś zrobić, jeśli wroga siła uderzeniowa przemieści się do waszego ula podczas KvK lub wydarzeń typu Kill Event, a ty nie masz Tarczy Pokoju (lub skończyły ci się diamenty)?

> [!TIP]
> **Jak chronić swoją armię bez tarczy:**
> 1. Otwórz mapę świata i zlokalizuj odległą, opuszczoną fortecę, legowisko zombie wysokiego poziomu lub nieaktywny obóz.
> 2. Stuknij w **Rajd** i wybierz maksymalny czas trwania: **8 godzin**.
> 3. Przypisz do tego rajdu cały swój główny oddział bojowy wraz z najsilniejszymi bohaterami.

**Dlaczego to działa:** Żołnierze przydzieleni do aktywnego rajdu wewnątrz twojego miasta lub marszczący w stronę celu rajdu posiadają **100% absolutnej odporności na nadchodzące ataki**. Nawet jeśli wróg uderzy w mury twojego miasta i podłoży ogień pod twoją osadę, twoje zaangażowane w rajd wojska odnotują zerowe straty! Gdy zagrożenie minie, anuluj rajd jednym kliknięciem, a Twoje elitarne wojska wrócą do koszar całe i zdrowe.

## 3. Sekrety Wieży Sokoła i wykopaliska sojuszu {#falcon-tower}

Zadania w Wieży Sokoła i powiązane z nimi mapy skarbów należą do głównych codziennych źródeł diamentów, odłamków bohaterów, przyspieszeń i prezentów sojuszniczych. Mimo to niedzielni gracze odbierają je losowo i trwonią nawet połowę swoich potencjalnych nagród.

### Trzy złote zasady kumulowania zadań Sokoła:

1. **Nie Odbieraj „Czerwonych Kropek”**:
   Wykonuj misje, ale **NIE STUKAJ w przycisk „Odbierz”**. Ukończone zadania z czerwonymi kropkami nigdy nie wygasają i nie mają terminu ważności — mogą bezpiecznie wisieć na twojej tablicy w nieskończoność. Trzymaj nagrody nieodebrane do momentu rozpoczęcia docelowego dnia wydarzenia serwerowego (poniedziałek — Faza 1 Pojedynku Sojuszy; środa — Dzień Nauki; piątek — Trening Wojsk).

2. **Kumuluj do „Maksimum − 1” (Stacking Max − 1)**:
   Utrzymuj tablicę zadań niemal zapełnioną — miej dokładnie $N - 1$ ukończonych zadań (np. **24 z 25 możliwych** przy maksymalnej pojemności lub 7 z 8 na wczesnych poziomach). Pozostawienie jednego wolnego slotu jest bezwzględnie wymagane, aby licznik czasu generowania zadań w tle działał dalej.

3. **Monitoruj limit tablicy (Nigdy nie zamrażaj licznika)**:
   Jeśli Twoja tablica kiedykolwiek osiągnie maksymalną pojemność (np. 25 na 25), **licznik odrodzenia zadań NATYCHMIAST ZAMRAŻA SIĘ**. Dopóki nie zwolnisz przynajmniej jednego slotu, nie wygenerują się żadne nowe zadania, a twoje darmowe codzienne misje przepadną na stałe. Regularnie odbieraj ukończone zadania w razie potrzeby, aby co najmniej jeden slot pozostawał otwarty na pojawienie się świeżych zadań.

> [!TIP]
> **Odbieranie jednym dotknięciem na 8. poziomie:** Osiągnięcie **8. poziomu Wieży Sokoła** odblokowuje funkcję „Odbierz wszystko”. W docelowe dni zbierania (pon., śr., pt.) jedno stuknięcie natychmiast zatwierdza cały zgromadzony zapas 24 zadań, odblokowując wszystkie skrzynki z nagrodami wydarzenia w ciągu kilku sekund od resetu serwera!

---

### Wykopaliska sojuszu {#excavations}

Ukończenie zadań Wieży Sokoła nagradza **Mapami Skarbów**, które tworzą miejsca wykopaliska na mapie świata. Jest to kooperacyjna aktywność sojusznicza oferująca dwa różne rodzaje nagród: bazową nagrodę za kopanie oraz bonus do prędkości po ukończeniu.

#### 1. Bazowa nagroda za wykopaliska (dla wszystkich członków sojuszu)
* **Każdy, kto dotknie miejsca wykopaliska, otrzymuje nagrodę:** Wystarczy, że twój oddział przybędzie i wejdzie w miejsce wykopaliska choćby na ułamek sekundy — udział zostaje zarejestrowany natychmiast.
* **Główna zasada: NIE koczuj / nie siedź na miejscu wykopalisk!**
  Czas trwania wykopaliska drastycznie spada z każdym oddziałem aktywnie kpiącym na kafelku. Jeśli członkowie sojuszu będą koczować w tym miejscu, wykopalisko zakończy się w kilka sekund, a sojusznici idący z odległych miast **nie zdążą na czas**.
  > [!IMPORTANT]
  > **Etykieta sojuszu:** Dotknij wykopaliska na ułamek sekundy, aby zablokować swój udział, a następnie **natychmiast wycofaj swój oddział**, pozwalając licznikowi pozostać otwartym wystarczająco długo, aby wszyscy koledzianki z drużyny zdążyli dotrzeć na miejsce z normalną prędkością marszu.

#### 2. Dodatkowy bonus do prędkości (ikona „Dłoni” dla 10 graczy)
* **Ikona „Dłoni” pojawia się PO zakończeniu wykopalisk:**
  W dokładnie tym momencie, w którym wykopalisko dobiega końca, nad miejscem pojawia się **ikona „Dłoni”**. Aby zgarnąć ten dodatkowy bonus, szybko stuknij w **ikonę dłoni** lub w **samo miejsce wykopaliska**.
* **Ścisły limit 10 graczy na zasadzie „kto pierwszy, ten lepszy”:**
  Jest to nagroda za czas reakcji w klikaniu: bonus otrzymuje tylko **pierwszych 10 członków sojuszu**, którzy w nią stukną.
* **Jeden szczęśliwy gracz otrzymuje podwójną nagrodę ($2\times$):**
  Dokładnie **jeden losowy gracz** spośród tych 10 szczęśliwych klikających otrzymuje **Podwójną Nagrodę ($2\times$)**!
