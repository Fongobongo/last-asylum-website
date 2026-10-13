---
title: "🧠 Consejos Pro, Mecánicas Ocultas y Secretos"
description: "La enciclopedia completa de mecánicas ocultas en Last Asylum: Plague — instantánea de bonificaciones de construcción, tácticas de defensa con 'Ghost Reunión', mecánica de desbordamiento del hospital, trampas de conversión de Claire, pre-cultivo de casillas y secretos de la economía de diamantes."
lang: es
updated: "2026-10-12"
videoTopic: tips
---

La mayoría de los juegos de estrategia para móviles parecen engañosamente simples a primera vista: mejorar edificios, subir de nivel a los héroes y tocar botones con puntos rojos. Sin embargo, bajo la superficie de **Last Asylum: Plague** se esconde un sofisticado motor matemático con docenas de reglas no escritas que el juego nunca explica.

Los supervivientes que comprenden estas mecánicas progresan **de 2 a 3 veces más rápido**, nunca pierden su ejército en incursiones sorpresa a medianoche y derrotan constantemente a oponentes con un 30–50% más de Poder. A continuación, presento el compendio curado de reglas no obvias, matices ocultos y tácticas probadas en batalla utilizadas por los veteranos de las mejores alianzas.

---

## 1. Instantánea (Snap-Shotting) de Bonificaciones de Construcción y Matemáticas de Temporizadores {#snapshotting}

Uno de los errores más costosos cometidos por los nuevos comandantes es malinterpretar cómo se calculan las bonificaciones de velocidad.

> [!IMPORTANT]
> **La Regla de la Instantánea (Snap-Shotting):**
> Todas las bonificaciones de velocidad (equipo, títulos, runas, tecnología de alianza) se calculan **ESTRICTAMENTE EN EL MOMENTO EXACTO DE PRESIONAR MEJORAR (INICIO)**. ¡Cualquier bonificación activada después de que el temporizador haya comenzado **NO REDUCIRÁ** la duración restante de un proyecto en curso!

### Aplicación práctica:
* Si inicias una mejora del Santuario de 30 días y 5 minutos después equipas equipo de construcción o pides el título de "Ministro de Obras" (+10%), ¡el temporizador permanece sin cambios! El juego no recalcula los temporizadores activos de forma retroactiva.
* **El truco del jugador profesional:** Equipa tu equipo de construcción, solicita el título temporal de alianza "Ministro de Obras" (+10%), activa una runa de construcción (+5%), inicia la mejora masiva del Santuario de 30 días y, **¡quítate el equipo y renuncia al título inmediatamente!** La bonificación ha quedado bloqueada permanentemente (instantánea) durante los 30 días completos.

### Las matemáticas detrás de los temporizadores:
La duración real se determina mediante:
$$T = \frac{T_{base}}{1 + \sum \text{BonificacionesDeVelocidad}}$$

Debido al divisor, cada bonificación de velocidad del +10% posterior produce ligeramente menos horas absolutas ahorradas que la anterior (rendimientos decrecientes en horas). Sin embargo, en los temporizadores del final del juego (Santuario 25–30, donde la duración base alcanza los 40–80 días), ¡incluso una runa del 5% ahorra **varios días completos de aceleradores**!

---

## 2. Desbordamiento del Hospital y la Técnica de Defensa "Ghost Reunión" {#ghost-rally}

Tu Hospital no es solo una choza de curación; es el cortafuegos más crítico para evitar la destrucción permanente de tu cuenta.

### La Regla del Desbordamiento Oculto (Muerte Permanente)
Cuando tu ciudad es atacada, las tropas supervivientes derrotadas resultan heridas y llenan las camas del hospital.
* Mientras haya espacio disponible en el hospital, las tropas están **Heridas** y pueden curarse rápidamente con recursos baratos.
* **Una vez que la capacidad del Hospital alcanza el 100%:** CADA soldado herido posterior **MUERE PERMANENTEMENTE**. Si una ballena enemiga ataca tu ciudad 3 o 4 veces consecutivas mientras duermes, cientos de miles de tropas de alto nivel T8/T9 son eliminadas para siempre. Reconstruir ese ejército lleva meses.

### El secreto del "Ghost Reunión" (Reunión Falso)
¿Qué debes hacer si una fuerza de ataque enemiga se teletransporta a tu colmena durante el KvK o eventos de asesinato, pero no tienes Escudo de Paz (o te quedaste sin diamantes)?

> [!TIP]
> **Cómo proteger a tu ejército sin un escudo:**
> 1. Abre el mapa mundial y localiza una fortaleza abandonada lejana, una guarida de zombis de alto nivel o un campamento inactivo.
> 2. Toca **Reunión** y selecciona la duración máxima del temporizador: **8 Horas**.
> 3. Asigna a tu escuadrón de combate principal con tus héroes más fuertes en este rally.

**Por qué funciona:** Las tropas asignadas a un rally activo dentro de tu ciudad o marchando hacia un objetivo de rally poseen **inmunidad absoluta del 100% a los ataques entrantes**. Incluso si el enemigo ataca los muros de tu ciudad y prende fuego a tu pueblo, ¡tus tropas en rally no reciben daño! Una vez que la amenaza haya pasado, cancela el rally con un solo clic y tus tropas de élite regresarán a tus barracones sanas y salvas.

---

## 3. Secretos de la Torre Falcon y Excavaciones de Alianza {#falcon-tower}

Las misiones de la Torre Falcon y sus mapas del tesoro asociados son una de las principales fuentes diarias de diamantes, fragmentos de héroe, aceleradores y regalos de alianza. Sin embargo, los jugadores casuales los reclaman al azar y desperdician hasta la mitad de sus recompensas potenciales.

### Las tres reglas de oro para acumular misiones de Falcon:

1. **No limpies los "Puntos Rojos"**:
   Completa las misiones, pero **NO toques el botón "Reclamar"**. Las misiones completadas con puntos rojos nunca caducan y no tienen fecha límite; pueden permanecer en tu tablero indefinidamente. Mantén las recompensas sin recoger hasta que comience el día del evento del servidor objetivo (lunes — Fase 1 Duelo de Alianzas; miércoles — Día de Ciencia; viernes — Entrenamiento de Tropas).

2. **Acumula hasta "Máx − 1"**:
   Mantén tu tablero de misiones casi lleno; mantén exactamente $N - 1$ misiones completadas (por ejemplo, **24 de 25 posibles** en capacidad máxima, o 7 de 8 en niveles iniciales). Dejar un espacio abierto es estrictamente necesario para que el temporizador de generación de misiones en segundo plano continúe funcionando.

3. **Monitorea el límite de tu tablero (Nunca congeles el temporizador)**:
   Si tu tablero alcanza la capacidad máxima (ej. 25 de 25), **el temporizador de aparición de misiones SE CONGELA INMEDIATAMENTE**. Hasta que no liberes al menos un espacio, no se generarán nuevas misiones y tus misiones diarias gratuitas se perderán permanentemente. Reclama regularmente las misiones terminadas cuando sea necesario para que al menos un espacio permanezca abierto para que aparezcan nuevas misiones.

> [!TIP]
> **Reclamación con un toque en Nivel 8:** Alcanzar el **Nivel 8 de la Torre Falcon** desbloquea la función "Reclamar todo". En los días de recolección objetivo (lun, mié, vie), un solo toque envía instantáneamente todo tu botín almacenado de 24 misiones, desbloqueando todos los cofres de recompensa del evento segundos después del reinicio del servidor.

---

### Excavaciones de Alianza {#excavations}

Completar las misiones de la Torre Falcon otorga **Mapas del Tesoro**, que generan sitios de excavación en el mapa mundial. Esta es una actividad cooperativa de alianza que presenta dos tipos de recompensas distintas: la recompensa base de excavación y una bonificación de velocidad al finalizar.

#### 1. Recompensa Base de Excavación (Para todos los miembros de la alianza)
* **Todos los que tocan el sitio de excavación reciben la recompensa:** Solo necesitas que tu escuadrón llegue y entre al sitio de excavación por un solo momento; la participación se registra inmediatamente.
* **La Regla de Oro: ¡NO acampes/te quedes en el sitio de excavación!**
  La duración de la excavación disminuye rápidamente con cada escuadrón excavando activamente en la casilla. Si los miembros de la alianza acampan en el lugar, el sitio termina en segundos y los aliados que marchan desde ciudades distantes **no llegarán a tiempo**.
  > [!IMPORTANT]
  > **Etiqueta de Alianza:** Toca la excavación por una fracción de segundo para asegurar tu participación, luego **retira a tu escuadrón inmediatamente**, permitiendo que el temporizador permanezca abierto el tiempo suficiente para que todos los compañeros de equipo lleguen al sitio a velocidad de marcha normal.

#### 2. Bonificación de Velocidad Extra (Icono de "Mano" para 10 jugadores)
* **El icono de "Mano" aparece DESPUÉS de que termina la excavación:**
  En el momento exacto en que termina la excavación, aparece un **icono de "Mano"** sobre el sitio. Para obtener esta bonificación adicional, toca rápidamente el **icono de la Mano** o la **ubicación de la excavación en sí**.
* **Límite estricto de 10 jugadores por orden de llegada:**
  Esta es una recompensa de reacción de clic rápido: solo los **primeros 10 miembros de la alianza** que la toquen reciben el premio adicional.
* **Un jugador afortunado obtiene una recompensa doble ($2\times$):**
  ¡Exactamente **un jugador aleatorio** de estos 10 afortunados recibe una **Recompensa Doble ($2\times$)**!

---

## 4. Trampa de Recursos en Bolsa y Umbrales de Protección del Almacén {#warehouse-secrets}

### Recursos Seguros vs. Expuestos
El Almacén de tu ciudad solo protege una cantidad estrictamente limitada de cada recurso (ej. 3,000,000 de Comida, Madera y Hierbas en el nivel 20).
* Cualquier recurso que se muestre en tu barra superior por encima del límite de protección del Almacén está **EXPUESTO**.
* En el momento en que un explorador enemigo detecta millones en recursos expuestos, tu ciudad se convierte en un objetivo principal y los atacantes vaciarán tus reservas hasta los huesos.

> [!CAUTION]
> **La Regla de Oro de la Gestión de Recursos:**
> ¡Nunca, bajo ninguna circunstancia, **abras bolsas o cofres de recursos de tu inventario por adelantado**!

* Los recursos almacenados dentro de las bolsas de tu inventario son **completamente invisibles para los informes de exploración enemigos** e inmunes al saqueo al 100%.
* Solo abre la cantidad exacta de bolsas necesarias para iniciar un edificio o proyecto de investigación específico inmediatamente antes de tocar mejorar. Tu ciudad siempre debe parecer "en bancarrota" para los exploradores enemigos.

---

## 5. Posicionamiento Táctico y Mecánicas Ocultas de "Cambio de Fila" {#row-shift}

El combate en Last Asylum ocurre en una formación de dos filas: Primera línea (2 héroes) y Retaguardia (3 héroes). Sin embargo, la selección de objetivos de ataque automático y el daño de área siguen reglas geométricas estrictas.

```
FORMACIÓN ENEMIGA:
[ Frente Enemigo 1 ]   [ Frente Enemigo 2 ]
[ Atrás Enemigo 1 ]    [ Atrás Enemigo 2 ]    [ Atrás Enemigo 3 ]
        ▲                   ▲
        │                   │ (Enfoque de ataque automático directo)
        ▼                   ▼
[ Tu Tanque 1 ]     [ Tu Tanque 2 ]
[ Tu Carry 1 ]      [ Tu Soporte ]    [ Tu Carry 2 ]
TU FORMACIÓN:
```

### Selección de objetivos directa y fugas diagonales
* Los ataques automáticos cuerpo a cuerpo priorizan a la unidad de primera línea enemiga que está directamente enfrente.
* Si tu tanque del flanco izquierdo (ej. Arturo) cae antes que tu tanque del flanco derecho (ej. Daskal), el flanco izquierdo enemigo **¡NO cambia al tanque derecho!** ¡En cambio, sus ataques se filtran directamente hacia tu carry de retaguardia que está detrás de Arturo!
* **Regla táctica:** Coloca a tu tanque de mayor durabilidad directamente frente al carry de mayor daño explosivo del escuadrón enemigo.

### Sinergia Mono-Facción y Epígrafes de Cuervo
Desplegar 5 héroes de la misma clase (ej. 5 Guerreros) otorga una bonificación de escuadrón base de **+20% ATK, HP y DEF**.
Sin embargo, el verdadero cambio de juego surge al final del juego: los **Epígrafes de Cuervo UR** proporcionan multiplicadores de estadísticas porcentuales masivos que se aplican EXCLUSIVAMENTE a una facción específica.
* En un escuadrón mono-Guerrero puro de 5, cada epígrafe mejorado potencia al 100% de tus héroes.
* En un escuadrón mixto (2 Guerreros, 2 Rangers, 1 Brujo), el valor de tu epígrafe cae en **más del 60%**, porque solo una fracción de tus héroes se beneficia de las bonificaciones.

---

## 6. La Trampa de Conversión de Claire (SSR ➔ UR) {#claire-conversion}

En el día 8 de la temporada "Era del Renacimiento", los comandantes desbloquean la capacidad de convertir a Claire SSR en una heroína UR legendaria. Miles de jugadores presionan el botón inmediatamente, ¡solo para descubrir que el daño total de su escuadrón **disminuyó** misteriosamente!

### Por qué ocurre la caída de daño:
* Una Claire SSR totalmente maximizada proporciona una bonificación pasiva confiable para todo el equipo de **+16% de daño**.
* Tras la conversión inicial a una UR de 6★, esa pasiva de equipo cae a **+10%**. Sus estadísticas base personales aumentan ligeramente, pero el daño explosivo general de tu escuadrón cae notablemente.

### Cómo evitar la caída:
¡No conviertas a Claire en el instante en que esté disponible!
1. Acumula fichas y fragmentos del Salón de Honor de antemano (apunta al Nivel 100 o Nivel 160 en el Salón).
2. El día de la conversión, inyecta tus recursos guardados de una sola vez para impulsarla instantáneamente más allá de 6★ directamente a **9★ o 10★**.
3. A 10★ UR, Claire ofrece un pico de poder ganador: **multiplicador de daño personal x2.20** y desbloquea *Tenacidad Avanzada* (+20% ATK/DEF/HP y -10% de reducción de enfriamiento para todo el escuadrón).

---

## 7. Pre-cultivo de Casillas de Recursos para el Día de Recolección y Duelo de Alianzas {#pre-farming}

El Día de Recolección (Fase 1 del Duelo de Alianzas el lunes, o Día 1 / Día 7 de Sanador Supremo) es una excelente oportunidad para una ventaja inicial rápida. Las alianzas veteranas suelen sellar la victoria en los primeros 5 minutos después de la medianoche.

> [!TIP]
> **El Secreto del Cálculo de Puntuación:**
> El juego otorga puntos de Recolección **¡NO mientras se mina la casilla, sino EN EL SEGUNDO EXACTO EN QUE LA MARCHA REGRESA a tu ciudad!**

### Protocolo de Pre-cultivo paso a paso:
1. En la víspera del Día de Recolección (ej. domingo por la noche, aproximadamente 4 a 5 horas antes del reinicio diario a las 02:00 UTC), envía todas las marchas de recolección a los nodos de recursos de Nivel 6 o 7 más ricos (preferiblemente Oro o Hierbas).
2. Cronometra las marchas para que la recolección se complete y las tropas regresen a tu puerta a las **02:02–02:05 UTC (00:02–00:05 hora del servidor) en el día de reinicio**.
3. En el momento en que el reloj marca el reinicio, 5 horas de recolección de marchas múltiples se cobran simultáneamente, ¡generando instantáneamente **1.5 a 2.5 millones de puntos** y desbloqueando de 2 a 3 niveles de cofre en segundos!

### Etiqueta del Mapa Mundial: Limpieza de Casillas
Nunca dejes nodos de recursos parcialmente recolectados. Si un aliado deja 4,000 de madera en un nodo de 500,000, esa casilla permanecerá muerta hasta por 12 horas, bloqueando la aparición de un nodo nuevo de alto nivel. Siempre limpia las casillas a 0 o envía una marcha de exploración de 1 tropa para terminar los restos.

---

## 8. Campos de Entrenamiento: La división de 4 campos y el truco de promoción de T4 {#troop-promotion}

Los niveles de tropas se desbloquean según el nivel del Campo de Entrenamiento: T6 en Nivel 17, T7 en 20, T8 en 24, T9 en 27 y T10 en Nivel 30 con la investigación de Tropas de Élite completada.

La mayoría de los jugadores principiantes cometen un error catastrófico: nivelan los cuatro Campos de Entrenamiento por igual y entrenan su nivel más alto desbloqueado desde cero en cada uno. Esto quema decenas de millones de recursos y fuerza temporizadores de más de 30 horas. Los jugadores veteranos usan la **División 1 Máx + 3 Bajo**.

### La división de nivel de los 4 Campos de Entrenamiento:
* **1 Campo de Entrenamiento Principal (Nivel Máximo):** Mantenlo igualado con tu límite del Santuario. Es el único edificio necesario para desbloquear tu nivel entrenable más alto (ej. T9 en Nivel 27, T10 en Nivel 30).
* **3 Campos de Entrenamiento de Soporte (Nivel 10):** ¡Mantenlos estrictamente en el **Nivel 10**! El Nivel 10 desbloquea tropas de **Nivel 4 (T4)**. El cuarto Campo de Entrenamiento se desbloquea cerca de la parte inferior del árbol de investigación de **Desarrollo**; desbloquéalo tan pronto como sea posible.
* ¿Por qué? Mejorar los 4 campos a Nivel 27–30 consume grandes cantidades de Madera, Grano y Hierbas sin desbloquear niveles adicionales. El juego solo requiere **un** edificio maximizado para entrenar y promover al nivel superior.

### La tubería "Fábrica de T4 → Promocionar":
1. **Fase A (Producción paralela de T4):** Pon en cola soldados de Nivel 4 en los tres campos de Nivel 10 simultáneamente.
   * En un campo, un lote de T4 toma ~10.5 horas (~455 soldados).
   * En tres campos, produces **~1,365 soldados T4** en las mismas ~10.5 horas.
2. **Fase B (Promocionar en el Campo Principal):** Abre tu Campo de Entrenamiento maximizado, cambia de "Entrenar" a **"Promocionar"** y promociona tus soldados T4 almacenados a tu nivel más alto (ej. T9 o T10).
   * Promocionar un lote completo de T4 a T9 toma solo **~16.5 horas** (¡en comparación con ~33 horas para entrenar T9 desde cero!).
3. **Comparación del ciclo total:**
   * **Ruta de promoción:** 10.5h (T4) + 16.5h (promoción) = **~26 horas**.
   * **Cola directa de alto nivel:** Lote único de T9 = **~33 horas**.
   * **Beneficio neto:** Ahorra **6 a 7 horas por ciclo**, mantiene los barracones funcionando 24/7 y preserva millones de recursos.

> [!NOTE] Puntuación del Duelo de Alianzas (Viernes — Entrenamiento de Tropas)
> * Poner en cola tropas T4 en los 3 campos de soporte otorga puntos de entrenamiento completos (los puntos se otorgan **en el momento en que comienza la cola**, ¡no al recolectar!).
> * Promocionar soldados otorga puntos de evento por la diferencia de nivel entre T4 y T9/T10.
> * Cualquier acelerador gastado en colas de promoción cuenta completamente para las categorías de evento de consumo de aceleradores.

---

## 9. Investigación: El Bloqueo de Cofres del Duelo de Alianzas (Super Recompensa 1 y 2) {#duel-research-lock}

El Laboratorio de Investigación cuenta con 13 árboles distintos. La puerta de progresión inicial más crítica está oculta dentro de la rama de **Duelo de Alianzas**:

* Este árbol contiene dos hitos innegociables: **Super Recompensa 1** y **Super Recompensa 2**.
* **Sin la Super Recompensa 1, no puedes abrir los cofres de recompensa de Duelo de Nivel 4–6**, ¡incluso si ganas los puntos requeridos!
* **Sin la Super Recompensa 2, ¡los cofres de Nivel 7–9 están físicamente bloqueados!**
* Estos cofres superiores contienen el alma de la progresión de la cuenta: miles de Pergaminos de Estudio, Omni-fragmentos de Héroe UR, materiales de equipo de Nivel 11 y hasta **10,000 Diamantes**.
* **Regla F2P:** Inmediatamente después de los nodos básicos de Desarrollo (Velocidad de Construcción e Investigación), canaliza tus Pergaminos de Estudio hacia la Super Recompensa 1 y 2. Esto desbloquea el motor de recompensas que financia tu cuenta durante meses.

---

## 10. Prioridades de Equipo: Taller de Fundición Nivel 25 y Optimización de Ranuras {#gear-priorities-tips}

Las Piedras de Equipo son severamente limitadas. Distribuirlas en ranuras de equipo aleatorias paraliza el rendimiento a mitad del juego:

1. **Taller de Fundición → Nivel 25:** Lleva el Taller de Fundición al Nivel 25 tan pronto como tu Santuario lo permita. Es el principal cuello de botella para refinar Piedras de Equipo. Retrasarlo deja a tu carry con poco equipo justo cuando la dificultad aumenta.
2. **Prioridad de Ranura DPS / Carry:**
   * **Prioridad máxima:** Arma (Espada) y Guantes (aumenta ATK, Crítico y Perforación de Armadura).
   * **Segunda prioridad:** Botas (velocidad y supervivencia base).
   * **Placa de Pecho:** Déjala en el nivel base. El DEF adicional en un carry tiene casi cero impacto en la victoria.
3. **Prioridad de Ranura de Tanque:**
   * **Prioridad máxima:** Placa de Pecho y Botas (HP base y mitigación de daño).
   * **Arma (Espada):** **¡Nunca gastes piedras en el arma de un tanque!** Los tanques ganan sobreviviendo y protegiendo la retaguardia. Refinar la espada de un tanque infla el Poder visible sin añadir valor de combate real.
4. **Tienda de Honor:** Compra **Planos de Equipo (UR)** exclusivamente. Omite los Cofres de Curiosidades y fragmentos universales: los planos bloquean cada nivel de promoción de equipo naranja (Nivel 10, 20, 30, 40).

---

## 11. Especialistas en Jefes Mundiales: Ash y Celia {#boss-specialists}

Aunque los héroes morados (SSR) se eliminan de las alineaciones PvP temprano, dos personajes presentan una utilidad irremplazable para el Jefe Mundial:

* **Ash:** Su habilidad pasiva amplifica directamente el daño total del escuadrón infligido a los **Jefes Mundiales**.
* **Celia:** Aumenta las caídas de recursos adicionales y las recompensas de eliminación de los Jefes Mundiales.
* Invertir piedras de habilidad moradas sobrantes en estos dos paga dividendos de por vida en el botín de los jefes.

---

## 12. Disciplina de Diamantes: Dónde gastar vs. Qué evitar {#diamond-discipline}

Los diamantes son la moneda principal. Aunque son generosos al principio del juego, el gasto imprudente deja a los jugadores hambrientos cuando llegan eventos críticos.

| Inversiones de Alto Nivel (PRO) | Nunca gastes diamantes aquí (NOOB) |
|---|---|
| **Rueda de la Fortuna** en el Día 8 (Cynthia) y Día 36+ (Héroes UR). Siempre tira en lotes de 10 para garantías. | Reclutamientos estándar en la Taberna (probabilidades UR pésimas, red de seguridad cero). |
| **Puntos VIP** durante eventos de Reembolso de Diamantes para alcanzar VIP 8 (2do constructor permanente) y VIP 11 (+10% velocidad permanente). | Saltar temporizadores de construcción instantáneamente con diamantes crudos. |
| **Escudos de Paz de 8 horas** durante KvK y eventos de Asesinato de fin de semana. | Comprar Comida o Madera estándar directamente en la tienda de objetos. |
| **Tienda de Alianza y Mercader Misterioso** se actualiza para aceleradores con 70–80% de descuento. | Revivir tropas estándar fuera de la defensa crítica de la fortaleza. |

---

## 13. Lista de verificación de resumen: Los 12 mandamientos de la supervivencia {#ten-commandments}

1. **Las bonificaciones de velocidad se instantanean al inicio** — Activa títulos ministeriales, runas y equipo ANTES de presionar mejorar.
2. **Hospital vacío = ejército vivo** — El desbordamiento del hospital causa la muerte permanente e irreversible de tropas.
3. **Ghost Reunión para proteger tropas** — Esconde tu mejor marcha en un rally de 8 horas cuando enfrentes incursiones imposibles de ganar.
4. **Nunca abras bolsas de recursos del inventario** — Mantén las bolsas selladas hasta el momento exacto en que comienza una mejora.
5. **Torre Falcon: Acumular Máx − 1** — Mantén un espacio abierto para mantener las apariciones en segundo plano; cobra los lunes/miércoles/viernes.
6. **No conviertas a Claire SSR demasiado pronto** — Acumula fichas del Salón de Honor para saltar la caída de estadísticas de 6★ directamente a 9★/10★.
7. **Pre-cultiva nodos de recolección en la víspera del Día de Recolección** — Cronometra los regresos para las 00:05 UTC del día de reinicio para reclamar cofres instantáneos.
8. **La división de 4 campos (1 Máx + 3 Nivel 10):** Cultiva T4 en paralelo en 3 campos de soporte y promociona en tu campo principal, ahorrando 6–7 horas por ciclo.
9. **Super Recompensa 1 y 2 en el Lab — Innegociable:** Sin ellas, los niveles de cofre de Duelo 4–9 permanecen bloqueados permanentemente.
10. **Nunca refines la espada de un tanque:** Las piedras de equipo pertenecen a la Espada/Guantes del Carry y al Pecho/Botas del Tanque.
11. **Nunca gastes diamantes en tiradas de Taberna crudas** — Ahorra ~1,500 para el hito de la Rueda de la Fortuna (7 giros gratis + 3 pagados = copia de Cynthia) y empuja el resto hacia la progresión VIP.
12. **La mono-facción supera a las configuraciones híbridas** — Cinco héroes de la misma clase maximizados con Epígrafes de Cuervo dominan las composiciones mixtas.

---

## Los 5 principales arrepentimientos de Korpez al inicio del juego — No los repitas {#korpez-regrets}

Tras 7 meses de juego en la cuenta principal, cinco errores que los veteranos siguen diciendo a los nuevos jugadores que eviten:

1. **Comprar cofres de Curiosidades en la tienda de Honor en lugar de planos.** Los planos de equipo son lo único que compra el Honor que es escaso en todas partes. Las curiosidades caen pasivamente; los planos no.
2. **Alimentar a Arturo con Omnis UR.** Envejece mal. Guárdalos para **Marlena a 10★** — ella carga con todo durante los primeros 30–60 días.
3. **Ignorar los Talleres de Fundición.** Cinco de ellos en nivel 23–25 = 44K piedras de equipo/semana pasivas. Empujarlos tarde es lo que bloquea cada punto de ruptura de nivel 40 más adelante.
4. **Goteo de piedras de equipo en equipo morado (SSR).** Equipo correcto para el héroe correcto solamente: espada+guantes+botas para DPS, pecho+botas para tanques, todo lo demás en cero hasta UR.
5. **Mejorar habilidades de ataque en tanques.** El ataque de un tanque no hace nada; sus habilidades funcionan escalando DEF/HP en su lugar.

## Guía de inicio rápido: El tiempo supera al farmeo {#dtf-fast-start}

![Diecisiete consejos que aceleran el juego temprano](/img/dtf/tips/01.jpg)

Si te sientes permanentemente ocupado pero sin la seguridad de estar volviéndote más fuerte, es normal: el juego te abruma con acciones desde el primer minuto y apenas explica cuáles te hacen avanzar. El atajo probado que verás a continuación no es un plan complicado; es la lógica que hace crecer tu poder más rápido sin quemar recursos. La idea principal: **el juego no trata de farmear, trata de sincronización.** Las mismas acciones rinden varias veces más cuando se ejecutan el día correcto, en el evento correcto y con el requisito de nivel correcto.

### El Santuario marca la dirección, la construcción marca la velocidad

Todo se bloquea en el Santuario: los niveles de los edificios, las mecánicas, el crecimiento de tropas y el límite de nivel de los héroes. Así que el bucle se simplifica: revisa los requisitos del siguiente nivel del Santuario y trabaja estrictamente en ellos; si necesitas un muro, construye el muro; si necesitas la rama del Doctor, ve allí. Todo lo demás es secundario.

![Mejora del Santuario y sus requisitos para el siguiente nivel](/img/dtf/tips/02.jpg)

El ritmo de construcción decide qué tan rápido recorres ese camino. El hábito que distingue a las cuentas rápidas: **en cuanto termina una mejora, empieza la siguiente**, no en cinco minutos, inmediatamente. ¿No hay una mejora ideal disponible? Cualquier cosa útil es mejor que un espacio vacío; no hay ninguna situación en la que no construir nada sea mejor. Revisa la construcción primero en cada inicio de sesión, incluso si es de un minuto.

![Preparación de la siguiente mejora de edificio por adelantado](/img/dtf/tips/03.jpg)

### Supervivientes y aceleradores: pasivos siempre, estallidos a propósito

Dos aceleradores funcionan mejor en pareja. Los supervivientes son mejoras pasivas y gratuitas para la construcción, los recursos y la investigación; una configuración básica más el "despacho rápido" toma segundos y rinde frutos diariamente; revísalos después de cada nuevo superviviente o edificio. Los aceleradores son lo opuesto: la mayoría de los jugadores los sobrevaloran y los gastan demasiado pronto. Agota primero todo lo gratuito (misiones, eventos, arena, correo) y gasta aceleradores solo cuando estés realmente atascado esperando; concéntralos en un solo objetivo, por ejemplo, un nivel del Santuario, nunca los repartas entre tareas. Pequeño truco de optimización: divide la curación de la enfermería en lotes cortos para que tus aliados puedan tocar la Ayuda más rápido en lugar de una sola cola larga.

![Asignación de supervivientes con despacho rápido](/img/dtf/tips/04.jpg)

### Juega con el calendario, acumula eventos, ahorra en ciclos cortos

Cada día favorece acciones específicas —construye en el día de construcción, entrena héroes en el día de héroes— y seguir ese ritmo multiplica las recompensas por el mismo esfuerzo. El siguiente nivel es la acumulación: la mejora de un edificio puede cerrar simultáneamente una fase de evento, otorgar recursos adicionales y sumar puntos para la alianza. Una sola acción, múltiples pagos.

![Calendario de eventos semanales](/img/dtf/tips/05.jpg)

Eso hace que ahorrar sea racional, pero en ciclos cortos, no de semanas. Guarda aceleradores, recursos y objetos de mejora durante uno o dos días, y luego úsalos en el día rentable: varias fases de eventos se cierran a la vez y el poder da un salto. Gastar un poco todos los días no logra nada de eso.

![Consejos para el juego temprano que mantienen el progreso estable](/img/dtf/tips/06.jpg)

### Servidor nuevo, primer día intenso

En un servidor con días de antigüedad, empiezas como el perseguidor: bases mejoradas, mecánicas abiertas y alianzas establecidas. En un servidor nuevo, todos empiezan desde cero y prestar atención a las prioridades se traduce inmediatamente en rango, eventos y una alianza fuerte. Luego, aprovecha el día más barato en la vida de tu cuenta: la construcción es rápida, la investigación casi instantánea y las mejoras económicas. Haz que los temporizadores se reinicien todo el día; las sesiones cortas de recolocación rápida superan a una sola tarde larga y sin concentración, porque el tiempo inactivo al principio es el que más duele.

![Elección de un servidor nuevo para condiciones de inicio iguales](/img/dtf/tips/07.jpg)

### Alianza primero, aceleración después

En solitario, todo depende de tus propios temporizadores; en una alianza activa, los miembros tocan Ayuda y los temporizadores se reducen horas, los cofres de la alianza otorgan recursos y aceleradores, y los eventos adicionales pagan por participar. Evita los chats muertos; busca alianzas activas, idealmente de las principales una vez que se abran las clasificaciones, y presiona Ayuda para los demás tú mismo: toma segundos y fomenta la actividad de la que te beneficias.

![Miembros de la alianza acelerando la construcción con ayuda](/img/dtf/tips/08.jpg)

### Las misiones de Falcon alimentan el calendario

No es necesario reclamar las misiones de Falcon al instante; se acumulan hasta el límite y luego se cobran en masa los días de puntuación para obtener puntos de evento y recompensas de fase. Ejecuta un día, cobra el siguiente, en rotación, sin alcanzar el tope. (Combina esto con las reglas completas de acumulación de la Torre Falcon en la sección 3 anterior; es la misma mecánica vista desde el ángulo de los días de evento).

![Misiones de Falcon acumuladas para cobrarlas en el día del evento](/img/dtf/tips/09.jpg)

### Un solo escuadrón, puestos correctos, tickets tempranos

Un héroe nuevo no es motivo para invertir: una alineación de personajes a medio construir pierde en todas partes. Elige una base de cinco, invierte únicamente en ella (niveles, habilidades, equipamiento) y juzga a los recién llegados según si mejoran o no tu alineación actual. La plantilla funcional: dos tanques al frente (Arthur, Bella) aguantando el daño, tres atrás (Marlena, Claire, Celia) infligiendo daño y apoyando; y **no guardes los tickets de invocación "para más adelante"**: armar rápido a los cinco principales importa más que ahorrar, ya que todo lo posterior depende de ello.

![Un equipo principal de héroes en lugar de mejoras dispersas](/img/dtf/tips/10.jpg)

![Escuadrón construido alrededor de Arthur, Bella y la retaguardia](/img/dtf/tips/11.jpg)

### Guerreros primero: millas más baratas

El equilibrio entre ramas no es igual al principio: investigar y mejorar a los Guerreros es más barato y ofrece un ritmo estable, mientras que las ramas costosas como los Brujos cuestan más para obtener prácticamente el mismo resultado a un ritmo más lento. Toma el camino simple y eficaz para arrancar; experimenta una vez que tengas la base, los recursos y la comprensión del juego.

![Comparación de ramas de héroes](/img/dtf/tips/12.jpg)

![Comparación de costes de mejora de las ramas de héroes](/img/dtf/tips/13.jpg)

### Laboratorio: la velocidad de todo

El Laboratorio nunca parece urgente, y ese es el error. Lo que realmente acelera la cuenta: velocidad de construcción, velocidad de investigación, velocidad de entrenamiento de tropas, es decir, todo lo que afecta a los procesos de la base, además del bono de la rama de duelos de la alianza que otorga puntos extra por las mismas acciones. Elige una prioridad y cúmplela; termina los aceleradores de la base antes de fortalecer cualquier otra cosa.

![Prioridades de investigación del laboratorio: velocidad de construcción y desarrollo](/img/dtf/tips/14.jpg)

### Equipamiento, tropas, tiendas, mapa: las minucias que se acumulan

- **Equipamiento:** viste a los cinco principales con lo básico primero, eleva todo ligeramente a un nivel inicial y luego impulsa las piezas clave (ataque y salud primero, ya que se notan más rápido en JcE y JcJ). El equipo morado es un buen paso temporal (se desmantela más tarde sin problema); el dorado se vuelve importante con el tiempo, en parte porque también funciona en JcJ: caravanas, duelos, intercambios en el mapa.
- **Tropas:** nunca dejes que el entrenamiento se detenga; termina una cola y empieza otra de inmediato. Los puntos de evento se otorgan al *comenzar* la cola, por lo que una mayor capacidad en el polígono significa más puntos por lanzamiento; las mejoras del polígono y de la tecnología de tropas son multiplicadores de eventos, no un adorno.
- **Tiendas:** compra solo lo que impulse tu progreso actual, no "para más adelante", ni "por si acaso". Gastar de acuerdo al evento, calcular el valor y omitir lo brillante: así es como los recursos empiezan a ser suficientes.
- **Eventos de mapa:** asedios, trampas, actividades; una fuente constante de recursos, aceleradores y objetos que muchos pasan por alto al principio. No vivas en ellos, pero tampoco los ignores.

Mantén la línea: enfoque en el Santuario, gastos sincronizados con los eventos, sin dispersión, alianza en juego, y el progreso se estabiliza rápidamente. El inicio premia el sistema, no las prisas.

> Fuente: [Last Asylum: Plague - 17 советов, которые реально ускоряют старт](https://dtf.ru/howto/5000405-last-asylum-sovety-dlya-bystrogo-starta) por Гейм-Знаток en DTF.
