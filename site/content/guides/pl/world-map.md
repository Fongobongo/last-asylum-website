---
title: "Mapa świata: odległości, prędkość i zbieranie"
description: "Mapa świata to wspólny obszar, na którym znajdują się miasta graczy, węzły zasobów i potwory, a w samym środku strefa Tronu. Podróż zazwyczaj trwa dłużej niż sama bitwa, więc najważniejszą rzeczą, którą należy wiedzieć o mapie, jest to, jak działa prędkość marszu: jest ona identyczna dla każdego typu jednostek i nie zależy od składu armii. Tylko zbieranie zasobów, rajdy i marsze na bossów poruszają się z podwójną prędkością, dlatego odległe cele są prawie zawsze przejmowane za pomocą rajdów."
videoTopic: "general"
lang: pl
updated: "2026-09-19"
type: guide
---

> Dane zweryfikowane z klientem gry (wersja 1.0.87, źródło: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/world-map)).

Mapa świata to wspólny obszar, na którym znajdują się miasta graczy, węzły zasobów i potwory, a w samym środku strefa Tronu. Podróż zazwyczaj trwa dłużej niż sama bitwa, więc najważniejszą rzeczą, którą należy wiedzieć o mapie, jest to, jak działa prędkość marszu: jest ona identyczna dla każdego typu jednostek i nie zależy od składu armii. Tylko zbieranie zasobów, rajdy i marsze na bossów poruszają się z podwójną prędkością, dlatego odległe cele są prawie zawsze przejmowane za pomocą rajdów.

## Odległości

Mapa ma około tysiąca pól szerokości i tysiąca pól wysokości, ze strefą Tronu w centrum. Najdłuższy marsz wynosi około 1400 pól, co jest bliskie pełnej przekątnej obszaru.

## Prędkość marszu

Prędkość podstawowa jest taka sama dla każdego typu jednostek i warto to wyraźnie zaznaczyć, ponieważ gatunek ten uczy czegoś innego. Znane stwierdzenie „lekkie jednostki są szybsze” tutaj nie ma zastosowania, a skład armii niczego nie zmienia. Ładunek również niczego nie zmienia: obliczenie prędkości nie zawiera czynnika określającego, co armia niesie, więc załadowana armia wraca z taką samą prędkością, z jaką wyruszyła.

To, co robi różnicę, to kolejka, z której rozpoczyna się marsz. Budynek Oddziału (Squad building) dla tej kolejki daje zauważalną premię do prędkości, większą niż badania i technologia sojuszu razem wzięte.

## Węzły zbierania i kopalnie diamentów

Na mapie znajdują się cztery typy węzłów: farmy, tartaki, ogrody ziołowe i kopalnie diamentów. Każdy z nich ma swoje poziomy, a zapasy i wydajność rosną wraz z nimi. Tabela przedstawia najniższy i najwyższy poziom każdego typu węzła.

| Węzeł | Poziomy | Poziom pierwszy | Najwyższy poziom |
|---|---|---|---|
| Farma | 33 | 135 000 zapasów, 270 000/h | 1 800 000 zapasów, 10 800 000/h |
| Tartak | 32 | 135 000 zapasów, 270 000/h | 2 160 000 zapasów, 10 800 000/h |
| Ogród ziołowy | 30 | 67 500 zapasów, 108 000/h | 864 000 zapasów, 4 320 000/h |
| Kopalnia diamentów | 31 | 10 diamentów, 360/h | 185 diamentów, 5 400/h |

Kopalnia diamentów jest jedynym źródłem diamentów na mapie, a także najmniejszym węzłem pod względem zapasów, ponieważ najwyższy poziom daje 185 diamentów. Obsługują ją te same oddziały, co zwykłe zasoby, i nie wymaga niczego poza drogą do niej.

Kryje się tu przydatny szczegół, który łatwo przeoczyć. Udźwig jest zużywany inaczej w zależności od zasobów: jedna jednostka zboża, drewna lub ziół waży 1, podczas gdy pojedynczy diament waży 2000. Całkowity ładunek armii jest dzielony przez wagę jednej jednostki, dlatego najwyższy poziom kopalni diamentów i jej 185 diamentów jest opróżniany przez bardzo małe siły. 185 diamentów o wadze 2000 daje 370 000 ładunku, a żołnierz dziesiątego poziomu niesie 2200, więc wystarczy ich 169. Pełna farma mieszcząca 1 800 000 zboża wymaga 819 takich żołnierzy.

Praktyka wynika z tego sama. Duże armie są marnowane na kopalnie diamentów, wystarczy tam kilkuset żołnierzy, a główna armia powinna zajmować się węzłami zasobów.

Na mapie pojawiają się również punkty ratunkowe (Rescue points), zawierające zapasy, żołnierzy i odporność. Są one jednorazową pomocą, a nie źródłem stałego dochodu.

## Co porusza się z podwójną prędkością

Prędkość marszu jest brana z najwolniejszego typu jednostek w armii, ale wszystkie trzydzieści jeden typów ma tę samą wartość 500, więc skład naprawdę nie ma znaczenia. Czas podróży oblicza się, mnożąc odległość przez 3600 i dzieląc przez prędkość. Bez premii daje to 7,2 sekundy na pole, dwanaście minut na sto pól i prawie trzy godziny przy maksymalnym zasięgu.

Podwojenie nie dotyczy każdego marszu, a tabela pokazuje, które wyprawy poruszają się szybko, a które z normalną prędkością.

| Marsz | Prędkość |
|---|---|
| Zbieranie zasobów | podwojona |
| Rajd na potwora lub miasto gracza | podwojona |
| Boss światowy i boss weekendowy | podwojona |
| Samotny atak na potwora | normalna |
| Samotny atak na miasto gracza | normalna |
| Posiłki i marsz na samotną bitwę o świątynię | normalna |

Wynikają z tego dwa wnioski, których gatunek ten zazwyczaj nie sugeruje. Samotne polowanie na potwory odbywa się z tą samą prędkością co rajd, więc odległy potwór kosztuje dwa razy więcej czasu podróży niż odległy węzeł zasobów. Rajd natomiast dociera do miasta wroga dwa razy szybciej niż samotny atak na to samo miasto, dlatego odległy cel jest prawie zawsze przejmowany za pomocą rajdu.

Premie do prędkości również kumulują się nierównomiernie. Budynek Oddziału dodaje premię do zbierania, ataków na graczy, posiłków i rajdów, podczas gdy marsz na samotną bitwę o świątynię całkowicie ją ignoruje i liczy tylko ogólny procent prędkości marszu.

## Czego tu nie napisano

Istnieje mnóstwo danych na temat stref, tarcz i relokacji, ale niezależna weryfikacja potwierdziła mniej niż połowę z nich, więc ta strona zawiera tylko prędkość, odległości i stosunek czasów podróży.