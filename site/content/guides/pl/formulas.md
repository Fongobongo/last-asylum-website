---
title: "Jak gra liczy: diamenty i procenty"
description: "Sposób, w jaki gra oblicza ceny przyspieszeń, tempo produkcji zasobów, szansę na trafienie krytyczne i koszty zwiadu, jest zazwyczaj odkrywany przez graczy metodą prób i błędów. Ta strona zbiera najważniejsze informacje o tych obliczeniach."
lang: pl
updated: "2026-09-19"
type: guide
---

> Dane zweryfikowane na podstawie klienta gry (wersja 1.0.87, źródło: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/formulas)).

Sposób, w jaki gra oblicza ceny przyspieszeń, tempo produkcji zasobów, szansę na trafienie krytyczne i koszty zwiadu, jest zazwyczaj odkrywany przez graczy metodą prób i błędów. Ta strona zbiera najważniejsze informacje o tych obliczeniach bez zagłębiania się w ich wyprowadzanie. Procenty tego samego rodzaju sumują się, podczas gdy czas jest dzielony przez sumę, co sprawia, że każdy kolejny punkt przyspieszenia skraca czas o mniej niż poprzedni.

## Przyspieszenia za diamenty są tańsze przy dłuższych zadaniach

Cena w diamentach za czas trwania oraz ta sama cena w przeliczeniu na godzinę:

| Czas trwania | Diamenty | Na godzinę |
|---|---|---|
| 1 minuta | 5 | 300 |
| 15 minut | 55 | 220 |
| 1 godzina | 187 | 187 |
| 8 godzin | 1 194 | 149 |
| 1 dzień | 3 183 | 133 |
| 1 tydzień | 18 072 | 108 |

Koszt rośnie wolniej niż czas, więc godzina małych przyspieszeń kosztuje trzy razy więcej niż godzina odjęta od tygodniowego zadania. Wydawanie diamentów na kończenie krótkich zadań jest najbardziej nieopłacalne.

## Zasoby za diamenty

Jeden diament pozwala kupić: zboże: 1 000, drewno: 1 000, zioła: 600.

## Procenty się sumują, czas się dzieli

Ta zasada stoi za każdym bonusem w grze. Wszystkie procenty tego samego rodzaju po prostu się sumują: budowa, badania, technologia sojuszu, ocalali, wyposażenie, VIP. Nic nie jest mnożone, więc +10% i +10% daje +20%, a nie +21%.

To, co dzieje się później, jest inne i właśnie tutaj kryje się pułapka. W przypadku wartości takich jak pojemność, produkcja czy liczba żołnierzy, suma jest dodawana bezpośrednio, a wynik mnożony przez jeden plus suma. W przypadku czasu ta sama suma dzieli, a czas jest dzielony przez jeden plus suma. Tabela pokazuje, ile naprawdę wart jest bonus do szybkości.

| Całkowity bonus szybkości | Ile razy szybciej | Pozostały czas |
|---|---|---|
| +50% | 1,5 | 67% |
| +100% | 2 | 50% |
| +200% | 3 | 33% |
| +300% | 4 | 25% |
| +500% | 6 | 17% |

Wniosek jest nieoczywisty. Pierwsze sto procent szybkości skraca czas o połowę, drugie sto procent skraca go o kolejne 17 punktów, trzecie o kolejne 8, a powyżej tego poziomu zysk jest ledwo odczuwalny. Gonienie za szybkością w nieskończoność nie ma sensu, podczas gdy osiągnięcie pierwszych 100% prawie zawsze się opłaca.

Suma ma również twardy limit dolny – nigdy nie spada poniżej -90%, niezależnie od tego, ile spowolnień zostanie nałożonych.

## Przydatne fakty

Pozostałe obliczenia mieszczą się w jednym wierszu i warto je znać głównie dla kompletności.
- Bazowa szansa na trafienie krytyczne wynosi 5%, do tego dodaje się krytyk atakującego i odejmuje odporność celu.
- Wielkość sojuszu zaczyna się od 50 i rośnie o pięć na każdy poziom.
- Zwiad kosztuje 1 000 plus sto za każdy poziom celu.
- Morale jest ograniczone między 1 a 2, więc może maksymalnie podwoić siłę walki.
- Punkty areny zależą od różnicy w rankingu: pokonanie silniejszego przeciwnika daje więcej punktów.