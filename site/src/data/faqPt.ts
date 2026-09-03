export interface FaqItem {
  q: string;
  a: string;
}

// Principais perguntas dos canais de FAQ/ajuda do Discord, redigidas para busca.
export const faqPt: FaqItem[] = [
  {
    q: 'Qual é o melhor time F2P em Last Asylum: Plague?',
    a: 'O esquadrão F2P canônico é Arthur, Daskal, Marlena, Harper, Claire (todos Warriors — mono-facção dá +20% HP/ATK/DEF). Arthur é grátis desde o dia 1; o top-up de $1 da Marlena é considerado o melhor custo-benefício do jogo. Daskal chega na primeira temporada da Era do Renascimento (dia 120+).',
  },
  {
    q: 'O que devo melhorar primeiro?',
    a: 'O Santuário primeiro, sempre — ele limita todos os outros edifícios e seu teto de nível de heróis. Depois Campo de Treinamento, Quartel, Laboratório de Pesquisa, Lazerete, Muralha. Mantenha a Cabana do Construtor no nível do Santuário até Santuário 15 para acelerações de construção grátis.',
  },
  {
    q: 'Quando a Marlena desbloqueia?',
    a: 'Dia 66 de graça — ou imediatamente com o top-up inicial de $1. Guarde fragmentos UR para ela chegar direto a 8★, depois empurre para 10★.',
  },
  {
    q: 'Como consigo a Cynthia como F2P?',
    a: 'A Cynthia chega pela Roda dos Desejos no dia 8. Guarde diamantes desde o dia 1 (não gaste em nada mais) — cerca de 11,500 diamantes no total, e gire sempre ×10 (giros únicos desperdiçam fichas).',
  },
  {
    q: 'Como consigo antitoxinas?',
    a: 'Oficina de Antitoxinas + produção do Estábulo, cada melhoria de edifício concluída, missões do Falcão (quase todas), Operações Encobertas e Comércio de Caravana (incluindo saquear as dos outros — até 5/dia), e caçadas de Blight/Elite Blight (10/20 de vigor). Os eventos pagam quantias grandes.',
  },
  {
    q: 'Por que minha renda de saque caiu para quase nada?',
    a: 'Você bateu no limite diário de saque: abaixo do limite 100%, a partir de 1× o limite você mantém só 15%, a partir de 1.3× só 5%. Reseta às 02:00 UTC. O limite escala com o nível do Santuário (2.5M nos níveis 10–12 até 30M no nível 30) e sobe imediatamente ao melhorar o Santuário. Um triângulo amarelo sob seu Poder mostra o status.',
  },
  {
    q: 'O que devo comprar nas lojas?',
    a: 'Lojas do Santuário/Expedição/Aliança: Essência de Corvo e Omnifragmentos de Herói UR primeiro. A loja de Honra é só para plantas de equipamento (nunca baús de epígrafes lá). Todas as lojas reabastecem na segunda-feira.',
  },
  {
    q: 'Vale a pena gastar diamantes em acelerações?',
    a: 'Apenas as acelerações de 8h da loja VIP são consideradas compras aceitáveis — e só depois dos recursos para heróis. Regra da comunidade: nunca despeje diamantes em acelerações em vez das rodas de heróis (Cynthia dia 8, Joker depois do dia 15).',
  },
  {
    q: 'Qual facção devo construir?',
    a: 'Warriors são os melhores no começo (fragmentos grátis de Arthur/Harper, Marlena por $1). Rangers pico no mid-game (contra Warriors). Warlocks são os melhores no late-game mas exigem investimento pesado de longo prazo. Mono-facção (5 heróis de um tipo) é a meta atual porque epígrafes UR potencializam uma única facção.',
  },
  {
    q: 'Como funciona a conversão da Claire SSR→UR?',
    a: 'Abre no dia 8 da Era. Ela chega a 6★ e o caminho até 10★ custa 1,600 fragmentos SSR (cada subetapa custa 2× o preço SSR). Há uma queda no bônus de time entre 6★–9★ — pule-a acumulando níveis do Salão de Honra antes de converter (Nv.60→8★, Nv.100→9★, Nv.160→10★ instantâneo).',
  },
  {
    q: 'Como resgato códigos de presente?',
    a: 'No jogo: Avatar (canto superior esquerdo) → Configurações → Código de Presente. iOS ou web: faça login na página oficial de resgate com sua conta vinculada Facebook/Google, escolha servidor e personagem, insira o código.',
  },
  {
    q: 'Quais são os maiores erros de iniciante?',
    a: 'Melhorar tudo por igual em vez de um esquadrão principal; julgar heróis antes das estrelas altas (Marlena é a clássica de amadurecimento tardio); dividir materiais de Despertar entre heróis; desperdiçar gemas em níveis VIP em vez de rodas de heróis; pular o saque diário (~27M de recursos/dia); deixar a vigor bater no teto.',
  },
];
