export interface FaqItem {
  q: string;
  a: string;
}

// Preguntas principales de los canales de FAQ/ayuda del Discord, redactadas para búsqueda.
export const faqEs: FaqItem[] = [
  {
    q: '¿Cuál es el mejor equipo F2P en Last Asylum: Plague?',
    a: 'El escuadrón F2P canónico es Arthur, Daskal, Marlena, Harper, Claire (todos Warriors — la monofacción da +20% HP/ATK/DEF). Arthur es gratis desde el día 1; el top-up de Marlena por $1 se considera la mejor oferta de valor del juego. Daskal llega en la primera temporada de la Era del Renacimiento (día 120+).',
  },
  {
    q: '¿Qué debo mejorar primero?',
    a: 'El Santuario primero, siempre — limita todos los demás edificios y tu tope de nivel de héroes. Luego Campo de Entrenamiento, Cuartel, Laboratorio de Investigación, Lazareto, Muralla. Mantén la Cabaña del Constructor al nivel del Santuario hasta Santuario 15 para aceleraciones de construcción gratis.',
  },
  {
    q: '¿Cuándo se desbloquea Marlena?',
    a: 'El día 66 gratis — o de inmediato con el top-up inicial de $1. Guarda fragmentos UR para que llegue directamente a 8★, y luego empuja a 10★.',
  },
  {
    q: '¿Cómo consigo a Cynthia siendo F2P?',
    a: 'Cynthia llega con la Rueda de los Deseos del día 8. Guarda diamantes desde el día 1 (no gastes en nada más) — unos 11,500 diamantes en total, y tira siempre ×10 (las tiradas individuales desperdician fichas).',
  },
  {
    q: '¿Cómo consigo antitoxinas?',
    a: 'Taller de Antitoxinas + producción del Establo, cada mejora de edificio completada, las misiones Halcón (casi todas), Operaciones Encubiertas y Comercio de Caravana (incluido saquear las de otros — hasta 5/día), y cacerías de Blight/Elite Blight (10/20 de aguante). Los eventos pagan cantidades grandes.',
  },
  {
    q: '¿Por qué mi ingreso de saqueo cayó casi a cero?',
    a: 'Llegaste al límite diario de saqueo: por debajo del límite 100%, desde 1× el límite conservas solo el 15%, desde 1.3× solo el 5%. Se restablece a las 02:00 UTC. El límite escala con el nivel del Santuario (2.5M en niveles 10–12 hasta 30M en nivel 30) y sube de inmediato al mejorar el Santuario. Un triángulo amarillo bajo tu Poder muestra el estado.',
  },
  {
    q: '¿Qué debo comprar en las tiendas?',
    a: 'Tiendas del Santuario/Expedición/Alianza: Esencia de Cuervo y Omnifragmentos de Héroe UR primero. La tienda de Honor es solo para planos de equipo (nunca compres allí cofres de epígrafes). Todas las tiendas se reabastecen los lunes.',
  },
  {
    q: '¿Vale la pena gastar diamantes en aceleraciones?',
    a: 'Solo las aceleraciones de 8h de la tienda VIP se consideran compras aceptables — y solo después de los recursos para héroes. Regla de la comunidad: nunca gastes diamantes en aceleraciones por encima de las ruedas de héroes (Cynthia día 8, Joker después del día 15).',
  },
  {
    q: '¿Qué facción debo construir?',
    a: 'Warriors es lo mejor al principio (fragmentos gratis de Arthur/Harper, Marlena por $1). Rangers alcanzan su pico a mitad del juego (contrarrestan a Warriors). Warlocks son lo mejor al final del juego pero requieren una inversión pesada a largo plazo. La monofacción (5 héroes de un tipo) es la meta actual porque los epígrafes UR potencian una sola facción.',
  },
  {
    q: '¿Cómo funciona la conversión de Claire SSR→UR?',
    a: 'Se abre el día 8 de la Era. Llega a 6★ y el camino a 10★ cuesta 1,600 fragmentos SSR (cada subfase cuesta 2× el precio SSR). Hay una caída del bono de equipo entre 6★–9★ — sáltala acumulando niveles del Salón de Honor antes de convertir (Nv.60→8★, Nv.100→9★, Nv.160→10★ instantáneo).',
  },
  {
    q: '¿Cómo canjeo códigos de regalo?',
    a: 'En el juego: Avatar (arriba a la izquierda) → Configuración → Código de Regalo. iOS o web: inicia sesión en la página oficial de canje con tu cuenta vinculada de Facebook/Google, elige servidor y personaje, e introduce el código.',
  },
  {
    q: '¿Cuáles son los mayores errores de principiante?',
    a: 'Mejorar todo por igual en vez de un escuadrón principal; juzgar héroes antes de las estrellas altas (Marlena es la clásica de maduración tardía); repartir materiales de Despertar entre héroes; gastar gemas en niveles VIP en vez de ruedas de héroes; saltarse el saqueo diario (~27M de recursos/día); dejar que el aguante llegue al tope.',
  },
];
