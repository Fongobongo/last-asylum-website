---
title: "World map: distances, speed and gathering"
description: "The world map is the shared field that holds player cities, resource nodes and monsters, with the Throne zone in the middle. Travel usually takes longer than the battle a…"
videoTopic: "general"
lang: pt
updated: "2026-09-19"
type: guide
---

> Baseado na versão em inglês; números verificados do cliente v1.0.87.
>
> Data verified against the game client (v1.0.87, source: [wiki-last-asylum.com](https://wiki-last-asylum.com/en/wiki/world-map)).

The world map is the shared field that holds player cities, resource nodes and monsters, with the Throne zone in the middle. Travel usually takes longer than the battle at the end of it, so the main thing to know about the map is how march speed works: it is identical for every troop type and does not depend on army composition. Only gathering, rallies and boss marches move at double speed, which is why a distant target is almost always taken by rally.

## Distances

The map is roughly a thousand tiles across and a thousand tiles down, with the Throne zone at the center. The longest march runs about 1,400 tiles, close to the full diagonal of the field.

## March speed

Base speed is the same for every troop type, and that is worth stating plainly, because the genre teaches otherwise. The familiar "light troops are faster" does not apply here, and composition changes nothing. Cargo changes nothing either: the speed calculation contains no term for what the army is carrying, so a loaded army returns at the same speed it left with.

What does make a difference is the queue the march starts from. The Squad building of that queue gives a noticeable speed bonus, larger than research and alliance technology combined.

## Gathering nodes and diamond mines

The map holds four node types: farms, lumberyards, herb gardens and diamond mines. Each has its own levels, and stock and output grow along with them. The table gives the bottom and the top of every node type.

| Node | Levels | Level one | Top level |
|---|---|---|---|
| Farm | 33 | 135,000 stock, 270,000/h | 1,800,000 stock, 10,800,000/h |
| Lumberyard | 32 | 135,000 stock, 270,000/h | 2,160,000 stock, 10,800,000/h |
| Herb garden | 30 | 67,500 stock, 108,000/h | 864,000 stock, 4,320,000/h |
| Diamond mine | 31 | 10 diamonds, 360/h | 185 diamonds, 5,400/h |

The diamond mine is the only source of diamonds on the map and also the smallest node by stock, since the top one yields 185 diamonds. It is worked by the same squads as ordinary resources and asks for nothing beyond the road to it.

A useful detail hides here, and it is easy to walk past. Carrying capacity is spent differently on different resources: one unit of grain, wood or herbs weighs 1, while a single diamond weighs 2,000. The army's total load is divided by the weight of one unit, which is why the top diamond mine and its 185 diamonds are emptied by a very small force. Its 185 diamonds at a weight of 2,000 come to 370,000 of load, and a tier ten soldier carries 2,200, so 169 of them are enough. A full farm holding 1,800,000 grain takes 819 such soldiers.

The practice follows on its own. Big armies are wasted on diamond mines, a couple of hundred soldiers is plenty there, and the main army belongs on resource nodes.

Rescue points also turn up on the map, carrying supplies, soldiers and resistance. They are one-time help rather than a source of steady income.

## What moves at double speed

March speed is taken from the slowest troop type in the army, but all thirty-one types share the same value of 500, so composition really does not matter. Travel time comes from multiplying the distance by 3,600 and dividing by speed. Without bonuses that works out to 7.2 seconds per tile, twelve minutes per hundred tiles and almost three hours at maximum range.

The doubling is not handed to every march, and the table shows which trips move fast and which run at the ordinary rate.

| March | Speed |
|---|---|
| Resource gathering | doubled |
| Rally on a monster or on a player city | doubled |
| World boss and weekend boss | doubled |
| Solo attack on a monster | normal |
| Solo attack on a player city | normal |
| Reinforcement and a solo temple battle march | normal |

Two conclusions follow that the genre does not usually suggest. Solo monster hunting runs at the same speed as a raid, so a distant monster costs twice the travel time of a distant gathering node. A rally, by contrast, reaches an enemy city twice as fast as a solo attack on the same city, and a distant target is therefore almost always taken by rally.

Speed bonuses stack unevenly as well. The Squad building adds to gathering, to attacks on players, to reinforcement and to rallies, while a solo temple battle march ignores it entirely and counts only the general march speed percentage.

## What is not written here

There is plenty of data on zones, shields and relocation, but independent checking confirmed less than half of it, so the page carries only speed, distances and the ratio of travel times.

##
