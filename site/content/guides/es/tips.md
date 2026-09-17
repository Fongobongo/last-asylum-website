---
title: "🧠 Consejos Pro, Mecánicas Ocultas y Secretos"
description: "La enciclopedia completa de mecánicas ocultas en Last Asylum: Plague — instantánea de bonificaciones de construcción, tácticas de defensa con 'Ghost Reunión', mecánica de desbordamiento del hospital, trampas de conversión de Claire, pre-cultivo de casillas y secretos de la economía de diamantes."
lang: es
updated: "2026-09-04"
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

## 11. Especialistas en Jefes Mundiales: Ash y Cecilia {#boss-specialists}

Aunque los héroes morados (SSR) se eliminan de las alineaciones PvP temprano, dos personajes presentan una utilidad irremplazable para el Jefe Mundial:

* **Ash:** Su habilidad pasiva amplifica directamente el daño total del escuadrón infligido a los **Jefes Mundiales**.
* **Cecilia:** Aumenta las caídas de recursos adicionales y las recompensas de eliminación de los Jefes Mundiales.
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