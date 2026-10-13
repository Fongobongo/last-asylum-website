---
title: "🧠 Dicas Pro, Mecânicas Ocultas e Segredos"
description: "A enciclopédia completa de mecânicas ocultas em Last Asylum: Plague — snapshot de bônus de construção, táticas de defesa Ghost Mobilizar, mecânicas de transbordo hospitalar, armadilhas na conversão da Claire, pré-coleta de recursos e segredos da economia de diamantes."
lang: pt
updated: "2026-10-12"
videoTopic: tips
---

A maioria dos jogos de estratégia mobile parece enganosamente simples à primeira vista: melhorar edifícios, subir o nível de heróis e tocar em botões com pontos vermelhos. No entanto, sob a superfície de **Last Asylum: Plague** reside um motor matemático sofisticado com dezenas de regras não escritas que o jogo nunca explica.

Sobreviventes que entendem essas mecânicas progridem **2 a 3 vezes mais rápido**, nunca perdem seu exército em ataques surpresa durante a madrugada e derrotam consistentemente oponentes com 30–50% a mais de Poder. Abaixo está o compêndio curado de regras não óbvias, nuances ocultas e táticas testadas em batalha usadas pelos veteranos das principais alianças.

---

## 1. Snapshot de Bônus de Construção e Matemática de Temporizadores {#snapshotting}

Um dos erros mais caros cometidos por novos comandantes é não entender como os bônus de velocidade são calculados.

> [!IMPORTANT]
> **A Regra do Snapshot:**
> Todos os bônus de velocidade (equipamentos, títulos, runas, tecnologia da aliança) são calculados **ESTRITAMENTE NO MOMENTO EXATO DE PRESSIONAR O BOTÃO DE MELHORIA (INÍCIO)**. Quaisquer bônus ativados após o início do cronômetro **NÃO REDUZIRÃO** a duração restante de um projeto em andamento!

### Aplicação Prática:
* Se você iniciar uma melhoria de 30 dias no Santuário e, 5 minutos depois, equipar equipamentos de construção ou solicitar o título de "Ministro de Obras" (+10%), o cronômetro permanece inalterado! O jogo não recalcula cronômetros ativos retroativamente.
* **O Truque do Jogador Pro:** Equipe seus equipamentos de construção, solicite o título temporário de "Ministro de Obras" (+10%), ative uma runa de construção (+5%), inicie a melhoria massiva de 30 dias do Santuário — e **remova imediatamente o equipamento e renuncie ao título**! O bônus foi permanentemente bloqueado (snapshot) durante todos os 30 dias.

### A Matemática por trás dos Cronômetros:
A duração real é determinada por:
$$T = \frac{T_{base}}{1 + \sum \text{SpeedBuffs}}$$

Devido ao divisor, cada bônus de velocidade de +10% subsequente gera um pouco menos de horas absolutas economizadas do que o anterior (retorno decrescente em horas). No entanto, em cronômetros de fim de jogo (Santuário 25–30, onde a duração base chega a 40–80 dias), até mesmo uma runa de 5% economiza **vários dias inteiros de acelerações**!

---

## 2. Transbordo Hospitalar e a Técnica de Defesa "Ghost Mobilizar" {#ghost-rally}

Seu Hospital não é apenas uma cabana de cura — é o firewall mais crítico para evitar a destruição permanente da conta.

### A Regra Oculta de Transbordo (Morte Permanente)
Quando sua cidade é atacada, as tropas sobreviventes derrotadas tornam-se feridas e ocupam os leitos do hospital.
* Enquanto houver espaço disponível no hospital, as tropas ficam **Feridas** e podem ser curadas rapidamente por recursos baratos.
* **Uma vez que a capacidade do Hospital atinge 100%:** CADA soldado ferido subsequente **MORRE PERMANENTEMENTE**. Se um "baleia" inimigo atacar sua cidade 3 a 4 vezes consecutivamente enquanto você dorme, centenas de milhares de tropas de alto nível (T8/T9) são eliminadas para sempre. Reconstruir esse exército leva meses.

### O Segredo do "Ghost Mobilizar" (Mobilizar Falso)
O que fazer se uma força de ataque inimiga se teletransportar para sua colmeia durante o KvK ou Eventos de Eliminação, mas você não tiver um Escudo de Paz (ou seus diamantes acabaram)?

> [!TIP]
> **Como proteger seu exército sem um escudo:**
> 1. Abra o mapa-múndi e localize uma fortaleza abandonada distante, um covil de zumbis de alto nível ou um acampamento inativo.
> 2. Toque em **Mobilizar** e selecione a duração máxima do cronômetro: **8 Horas**.
> 3. Designe todo o seu esquadrão de combate principal com seus heróis mais fortes para este rally.

**Por que isso funciona:** Tropas designadas para um rally ativo dentro de sua cidade ou marchando em direção a um alvo de rally possuem **100% de imunidade absoluta a ataques recebidos**. Mesmo que o inimigo ataque as muralhas da sua cidade e incendeie sua cidade, suas tropas em rally não sofrem dano algum! Assim que a ameaça passar, cancele o rally com um único clique e suas tropas de elite retornarão ao quartel sãs e salvas.

---

## 3. Segredos da Torre Falcon e Escavações da Aliança {#falcon-tower}

As missões da Torre Falcon e seus mapas do tesouro associados estão entre as principais fontes diárias de diamantes, fragmentos de heróis, acelerações e presentes da aliança. No entanto, jogadores casuais os coletam aleatoriamente e desperdiçam até metade de suas recompensas potenciais.

### As Três Regras de Ouro do Acúmulo de Missões Falcon:

1. **Não limpe os "Pontos Vermelhos"**:
   Complete as missões, mas **NÃO toque no botão "Coletar"**. Missões concluídas com pontos vermelhos nunca expiram e não têm prazo — elas podem ficar tranquilamente no seu painel indefinidamente. Mantenha as recompensas não coletadas até que o dia do evento alvo do servidor comece (Segunda-feira — Fase 1 Duelo da Aliança; Quarta-feira — Dia da Ciência; Sexta-feira — Treinamento de Tropas).

2. **Acumule até "Máximo − 1"**:
   Mantenha seu painel de missões quase cheio — mantenha exatamente $N - 1$ missões concluídas (por exemplo, **24 de 25 possíveis** na capacidade máxima, ou 7 de 8 nos níveis iniciais). Deixar um espaço aberto é estritamente necessário para que o cronômetro de geração de missões em segundo plano continue funcionando.

3. **Monitore o limite do seu painel (Nunca congele o cronômetro)**:
   Se o seu painel atingir a capacidade máxima (por exemplo, 25 de 25), **o cronômetro de surgimento de missões CONGELA IMEDIATAMENTE**. Até que você limpe pelo menos um espaço, zero novas missões serão geradas e suas missões diárias gratuitas serão permanentemente perdidas. Colete regularmente as missões concluídas quando necessário para que pelo menos um espaço permaneça aberto para novas missões surgirem.

> [!TIP]
> **Coleta com um toque no Nível 8:** Alcançar a **Torre Falcon Nv. 8** desbloqueia o recurso "Coletar Tudo". Nos dias de coleta alvo (Seg, Qua, Sex), um único toque envia instantaneamente todo o seu estoque de 24 missões, desbloqueando todos os baús de recompensa do evento segundos após o reset do servidor!

---

### Escavações da Aliança {#excavations}

Completar missões da Torre Falcon concede **Mapas do Tesouro**, que geram locais de escavação no mapa-múndi. Esta é uma atividade cooperativa da aliança com dois tipos distintos de recompensa: a recompensa base de escavação e um bônus de velocidade após a conclusão.

#### 1. Recompensa Base de Escavação (Para todos os membros da aliança)
* **Todos que tocam no local de escavação recebem a recompensa:** Você só precisa que seu esquadrão chegue e entre no local da escavação por um único momento — a participação é registrada imediatamente.
* **A Regra de Ouro: NÃO acampe/fique parado no local da escavação!**
  A duração da escavação diminui rapidamente com cada esquadrão escavando ativamente no bloco. Se os membros da aliança acamparem no local, a escavação termina em segundos e os aliados que marcham de cidades distantes **não chegarão a tempo**.
  > [!IMPORTANT]
  > **Etiqueta da Aliança:** Toque na escavação por uma fração de segundo para registrar sua participação e, em seguida, **chame seu esquadrão de volta imediatamente**, permitindo que o cronômetro permaneça aberto tempo suficiente para que todos os colegas de equipe cheguem ao local na velocidade normal de marcha.

#### 2. Bônus de Velocidade Extra (Ícone de "Mão" para 10 jogadores)
* **O ícone de "Mão" aparece APÓS o término da escavação:**
  No momento exato em que a escavação termina, um **ícone de "Mão"** aparece acima do local. Para obter esse bônus extra, toque rapidamente no **ícone da Mão** ou no **próprio local da escavação**.
* **Limite estrito de 10 jogadores por ordem de chegada:**
  Esta é uma recompensa de reação de clique rápido: apenas os **primeiros 10 membros da aliança** que tocarem recebem o prêmio bônus.
* **Um jogador sortudo recebe uma recompensa dupla ($2\times$):**
  Exatamente **um jogador aleatório** entre esses 10 clicadores sortudos recebe uma **Recompensa Dupla ($2\times$)**!

---

## 4. Armadilha de Recursos na Mochila e Limites de Proteção do Armazém {#warehouse-secrets}

### Recursos Seguros vs. Expostos
O Armazém da sua cidade protege apenas uma quantidade estritamente limitada de cada recurso (por exemplo, 3.000.000 de Comida, Madeira e Ervas no nível 20).
* Quaisquer recursos mostrados na sua barra superior acima do limite de proteção do Armazém estão **EXPOSTOS**.
* No momento em que um batedor inimigo avista milhões em recursos expostos, sua cidade se torna um alvo principal e os atacantes esvaziarão suas reservas.

> [!CAUTION]
> **A Regra de Ouro da Gestão de Recursos:**
> Nunca, sob nenhuma circunstância, **abra sacos ou baús de recursos do seu inventário com antecedência**!

* Recursos armazenados dentro das mochilas do seu inventário são **completamente invisíveis aos relatórios de batedores inimigos** e 100% imunes a saques.
* Apenas abra a quantidade exata de sacos necessária para iniciar um edifício específico ou projeto de pesquisa imediatamente antes de tocar em melhorar. Sua cidade deve sempre parecer "quebrada" para os batedores inimigos.

---

## 5. Posicionamento Tático e Mecânicas Ocultas de "Mudança de Linha" {#row-shift}

O combate em Last Asylum ocorre em uma formação de duas linhas: Linha de Frente (2 heróis) e Linha de Trás (3 heróis). No entanto, o alvo do ataque automático e o dano em área seguem regras geométricas estritas.

```
FORMAÇÃO INIMIGA:
[ Frente Inimiga 1 ]   [ Frente Inimiga 2 ]
[ Trás Inimigo 1 ]    [ Trás Inimigo 2 ]    [ Trás Inimigo 3 ]
        ▲                   ▲
        │                   │ (Foco de Ataque Automático Direto)
        ▼                   ▼
[ Seu Tanque 1 ]     [ Seu Tanque 2 ]
[ Seu Dano 1 ]       [ Seu Suporte ]       [ Seu Dano 2 ]
SUA FORMAÇÃO:
```

### Alvo Direto e Vazamentos Diagonais
* Os ataques automáticos corpo a corpo priorizam a unidade da linha de frente inimiga que está diretamente oposta.
* Se o seu tanque do flanco esquerdo (por exemplo, Arthur) cair antes do seu tanque do flanco direito (por exemplo, Daskal), o flanco esquerdo inimigo **NÃO muda para o tanque da direita**! Em vez disso, seus ataques vazam diretamente para o seu dano da linha de trás que está atrás de Arthur!
* **Regra tática:** Coloque seu tanque de durabilidade principal diretamente oposto ao dano de maior explosão do esquadrão inimigo.

### Sinergia Mono-Facção e Epígrafes Raven
Implantar 5 heróis da mesma classe (por exemplo, 5 Guerreiros) concede um bônus de esquadrão base de **+20% de ATK, HP e DEF**.
No entanto, a verdadeira mudança de jogo surge no final do jogo: **Epígrafes Raven UR** fornecem multiplicadores de estatísticas percentuais massivos que se aplicam EXCLUSIVAMENTE a uma facção específica.
* Em um esquadrão mono de 5 Guerreiros, cada epígrafe aprimorada fortalece 100% dos seus heróis.
* Em um esquadrão misto (2 Guerreiros, 2 Rangers, 1 Bruxo), o valor da sua epígrafe cai em **mais de 60%**, porque apenas uma fração dos seus heróis se beneficia dos bônus.

---

## 6. A Armadilha da Conversão da Claire (SSR ➔ UR) {#claire-conversion}

No Dia 8 da temporada "Era do Renascimento", os comandantes desbloqueiam a habilidade de converter a Claire SSR em uma heroína UR lendária. Milhares de jogadores tocam no botão imediatamente — apenas para descobrir que o dano total do seu esquadrão **diminuiu** misteriosamente!

### Por que a queda de dano acontece:
* Uma Claire SSR totalmente maximizada fornece um bônus passivo confiável para toda a equipe de **+16% de dano**.
* Após a conversão inicial para uma UR 6★, esse passivo de toda a equipe cai para **+10%**. Suas estatísticas base pessoais aumentam ligeiramente, mas o dano explosivo geral do seu esquadrão cai visivelmente.

### Como pular a queda:
Não converta a Claire no instante em que ela estiver disponível!
1. Acumule fichas e fragmentos do Salão de Honra com antecedência (mire no Nível 100 ou Nível 160 no Salão).
2. No dia da conversão, injete seus recursos salvos de uma só vez para impulsioná-la instantaneamente além de 6★ diretamente para **9★ ou 10★**.
3. Em 10★ UR, Claire entrega um pico de poder que define o jogo: **multiplicador de dano pessoal x2.20** e desbloqueia *Tenacidade Avançada* (+20% ATK/DEF/HP e -10% de redução de recarga para todo o esquadrão).

---

## 7. Pré-coleta de Recursos para o Dia de Coleta e Duelo da Aliança {#pre-farming}

O Dia de Coleta (Fase 1 do Duelo da Aliança na segunda-feira, ou Dia 1 / Dia 7 do Curandeiro Supremo) é uma excelente oportunidade para uma vantagem inicial rápida. Alianças veteranas rotineiramente selam a vitória nos primeiros 5 minutos após a meia-noite.

> [!TIP]
> **O Segredo do Cálculo de Pontuação:**
> O jogo concede pontos de Coleta **NÃO enquanto minera o bloco, mas NO SEGUNDO EXATO EM QUE A MARCHA RETORNA à sua cidade**!

### Protocolo de Pré-coleta Passo a Passo:
1. Na véspera do Dia de Coleta (por exemplo, domingo à noite, aproximadamente 4 a 5 horas antes do reset diário às 02:00 UTC), envie todas as marchas de coleta para os nós de recursos de Nível 6 ou 7 mais ricos (preferencialmente Ouro ou Ervas).
2. Cronometre as marchas para que a coleta seja concluída e as tropas retornem ao seu portão às **02:02–02:05 UTC (00:02–00:05 hora do servidor) no dia do reset**.
3. No momento em que o relógio marca o reset, 5 horas de coleta de múltiplas marchas são contabilizadas simultaneamente — rendendo instantaneamente **1,5 a 2,5 milhões de pontos** e desbloqueando 2 a 3 níveis de baús em segundos!

### Etiqueta do Mapa-Múndi: Limpeza de Blocos
Nunca deixe nós de recursos parcialmente coletados para trás. Se um aliado deixar 4.000 de madeira em um nó de 500.000, esse bloco ficará morto por até 12 horas, bloqueando o surgimento de um novo nó de alto nível. Sempre limpe os blocos até 0 ou envie uma marcha de batedor de 1 tropa para terminar o que sobrou.

---

## 8. Campos de Treinamento: A Divisão de 4 Campos e o Truque de Promoção T4 {#troop-promotion}

Os níveis das tropas são desbloqueados pelo nível do Campo de Treinamento: T6 no Nv. 17, T7 no 20, T8 no 24, T9 no 27 e T10 no Nv. 30 com a pesquisa de Tropas de Elite concluída.

A maioria dos jogadores iniciantes comete um erro catastrófico: eles nivelam todos os quatro Campos de Treinamento igualmente e treinam seu nível mais alto desbloqueado do zero em cada um. Isso queima dezenas de milhões de recursos e força cronômetros de mais de 30 horas. Jogadores veteranos usam a **Divisão 1 Máx + 3 Baixos**.

### A Divisão de Nível dos 4 Campos de Treinamento:
* **1 Campo de Treinamento Principal (Nível Máximo):** Mantenha este correspondendo ao seu limite do Santuário. É o único edifício necessário para desbloquear seu nível treinável mais alto (por exemplo, T9 no Nv. 27, T10 no Nv. 30).
* **3 Campos de Treinamento de Suporte (Nível 10):** Mantenha-os estritamente no **Nível 10**! O nível 10 desbloqueia tropas de **Nível 4 (T4)**. O 4º Campo de Treinamento é desbloqueado perto da parte inferior da árvore de pesquisa de **Desenvolvimento** — desbloqueie-o o mais rápido possível.
* Por quê? Atualizar todos os 4 campos para Nv. 27–30 consome vastas quantidades de Madeira, Grãos e Ervas por zero desbloqueios de nível adicionais. O jogo requer apenas **um** edifício maximizado para treinar e promover para o nível superior.

### O Pipeline "Fábrica T4 → Promover":
1. **Fase A (Produção T4 Paralela):** Coloque soldados de Nível 4 na fila em todos os três campos de nível 10 simultaneamente.
   * Em um campo, um lote de T4 leva ~10,5 horas (~455 soldados).
   * Em três campos, você produz **~1.365 soldados T4** nas mesmas ~10,5 horas.
2. **Fase B (Promover no Campo Principal):** Abra seu Campo de Treinamento maximizado, mude de "Treinar" para **"Promover"** e promova seus soldados T4 estocados para o seu nível mais alto (por exemplo, T9 ou T10).
   * Promover um lote completo de T4 para T9 leva apenas **~16,5 horas** (em comparação com ~33 horas para treinar T9 do zero!).
3. **Comparação do Ciclo Total:**
   * **Rota de Promoção:** 10,5h (T4) + 16,5h (promover) = **~26 horas**.
   * **Fila de Nível Alto Direta:** Lote único de T9 = **~33 horas**.
   * **Benefício Líquido:** Economiza **6 a 7 horas por ciclo**, mantém os quartéis funcionando 24/7 e preserva milhões de recursos.

> [!NOTE] Pontuação do Duelo da Aliança (Sexta-feira — Treinamento de Tropas)
> * Colocar tropas T4 na fila nos 3 campos de suporte concede pontos de treinamento completos (os pontos são concedidos **no momento em que a fila começa**, não na coleta!).
> * Promover soldados concede pontos de evento pela diferença de nível entre T4 e T9/T10.
> * Quaisquer acelerações gastas em filas de promoção contam totalmente para as categorias de evento de consumo de aceleração.

---

## 9. Pesquisa: O Bloqueio de Baús do Duelo da Aliança (Super Recompensa 1 e 2) {#duel-research-lock}

O Laboratório de Pesquisa possui 13 árvores distintas. O portão de progressão inicial mais crítico está escondido dentro do ramo do **Duelo da Aliança**:

* Esta árvore contém dois marcos inegociáveis: **Super Recompensa 1** e **Super Recompensa 2**.
* **Sem a Super Recompensa 1, você não pode abrir os baús de recompensa de Duelo de Nível 4–6**, mesmo que ganhe os pontos necessários!
* **Sem a Super Recompensa 2, os baús de Nível 7–9 estão fisicamente bloqueados!**
* Esses baús superiores contêm a força vital da progressão da conta: milhares de Pergaminhos de Estudo, Fragmentos Omni de Herói UR, materiais de equipamento de nível 11 e até **10.000 Diamantes**.
* **Regra F2P:** Imediatamente após os nós básicos de Desenvolvimento (Velocidade de Construção e Pesquisa), canalize seus Pergaminhos de Estudo para a Super Recompensa 1 e 2. Isso desbloqueia o motor de recompensa que financia sua conta por meses.

---

## 10. Prioridades de Equipamento: Oficina de Fundição Nv. 25 e Otimização de Slots {#gear-priorities-tips}

As Pedras de Equipamento são severamente limitadas. Espalhá-las por slots de equipamento aleatórios prejudica o desempenho no meio do jogo:

1. **Oficina de Fundição → Nível 25:** Empurre a Oficina de Fundição para o Nível 25 assim que seu Santuário permitir. É o principal gargalo para refinar Pedras de Equipamento. Atrasá-la deixa seu dano principal mal equipado exatamente quando a dificuldade aumenta.
2. **Prioridade de Slot de DPS / Dano:**
   * **Prioridade Máxima:** Arma (Espada) e Luvas (aumenta ATK, Crítico e Perfuração de Armadura).
   * **Segunda Prioridade:** Botas (velocidade e sobrevivência básica).
   * **Peitoral:** Deixe no nível base. DEF extra em um dano tem quase zero impacto na vitória.
3. **Prioridade de Slot de Tanque:**
   * **Prioridade Máxima:** Peitoral e Botas (HP bruto e mitigação de dano).
   * **Arma (Espada):** **Nunca gaste pedras na arma de um tanque!** Tanques vencem sobrevivendo e protegendo a linha de trás. Refinar a espada de um tanque infla o Poder visível sem adicionar valor real de combate.
4. **Loja de Honra:** Compre **Plantas de Equipamento (UR)** exclusivamente. Pule Baús de Curiosidades e fragmentos universais — as plantas bloqueiam cada nível de promoção de equipamento laranja (Nv. 10, 20, 30, 40).

---

## 11. Especialistas em Chefes Mundiais: Ash e Celia {#boss-specialists}

Embora os heróis roxos (SSR) sejam eliminados das formações de PvP cedo, dois personagens apresentam utilidade insubstituível contra Chefes Mundiais:

* **Ash:** Sua habilidade passiva amplifica diretamente o dano total do esquadrão causado aos **Chefes Mundiais**.
* **Celia:** Aumenta as quedas de recursos bônus e recompensas de eliminação dos Chefes Mundiais.
* Investir pedras de habilidade roxas sobressalentes nesses dois paga dividendos vitalícios em espólios de chefes.

---

## 12. Disciplina de Diamantes: Onde Gastar vs O que Evitar {#diamond-discipline}

Diamantes são a moeda principal. Embora generosos no início do jogo, gastos imprudentes deixam os jogadores famintos quando eventos críticos chegam.

| Investimentos de Alto Nível (PRO) | Nunca Gaste Diamantes Aqui (NOOB) |
|---|---|
| **Roda da Fortuna** no Dia 8 (Cynthia) e Dia 36+ (Heróis UR). Sempre gire em lotes de 10x para garantias. | Recrutamentos padrão da Taverna (chances sombrias de UR, rede de segurança zero). |
| **Pontos VIP** durante eventos de Reembolso de Diamantes para chegar ao VIP 8 (2º construtor permanente) e VIP 11 (+10% de velocidade permanente). | Pular cronômetros de construção instantaneamente com diamantes brutos. |
| **Escudos de Paz de 8 Horas** durante KvK e Eventos de Eliminação de fim de semana. | Comprar Comida ou Madeira padrão diretamente da loja de itens. |
| **Loja da Aliança e Mercador Misterioso** atualizações para acelerações com 70–80% de desconto. | Reviver tropas padrão fora da defesa crítica de fortaleza. |

---

## 13. Lista de Verificação de Resumo: Os 12 Mandamentos da Sobrevivência {#ten-commandments}

1. **Bônus de velocidade são snapshot no início** — Ative títulos ministeriais, runas e equipamentos ANTES de pressionar melhorar.
2. **Hospital vazio = exército vivo** — O transbordo hospitalar causa morte permanente e irreversível de tropas.
3. **Ghost Mobilizar para proteger tropas** — Esconda sua melhor marcha em um rally de 8 horas ao enfrentar ataques invencíveis.
4. **Nunca abra sacos de recursos do inventário** — Mantenha os sacos selados até o momento exato em que uma melhoria começa.
5. **Torre Falcon: Acumule até Máximo − 1** — Mantenha um espaço aberto para manter os surgimentos em segundo plano; colete na Seg/Qua/Sex.
6. **Não converta a Claire SSR muito cedo** — Acumule fichas do Salão de Honra para pular a queda de estatísticas de 6★ direto para 9★/10★.
7. **Pré-coleta de nós na véspera do Dia de Coleta** — Cronometre os retornos para 00:05 UTC no dia do reset (por exemplo, domingo à noite para segunda-feira) para reivindicar baús instantâneos.
8. **A Divisão de 4 Campos (1 Máx + 3 Nv.10):** Produza T4 em paralelo em 3 campos de suporte e promova no seu campo principal, economizando 6–7 horas por ciclo.
9. **Super Recompensa 1 e 2 no Lab — Inegociável:** Sem elas, os níveis 4–9 dos baús de Duelo permanecem permanentemente bloqueados.
10. **Nunca refine a espada de um tanque:** Pedras de equipamento pertencem à Espada/Luvas de Dano e Peitoral/Botas de Tanque.
11. **Nunca gaste diamantes em puxadas de Taverna brutas** — Economize ~1.500 para o marco da Roda da Fortuna (7 giros grátis + 3 pagos = cópia da Cynthia) e coloque o resto na progressão VIP.
12. **Mono-facção vence formações híbridas** — Cinco heróis da mesma classe maximizados com Epígrafes Raven dominam composições mistas.

---

## Os 5 Maiores Arrependimentos de Korpez no Início do Jogo — Não os repita {#korpez-regrets}

De 7 meses de jogo na conta principal, cinco erros que os veteranos continuam dizendo aos novos jogadores para evitar:

1. **Comprar baús de Curiosidades na loja de Honra em vez de plantas.** Plantas de equipamento são a única coisa que a Honra compra que é escassa em todos os outros lugares. Curiosidades caem passivamente; plantas não.
2. **Alimentar Omnis UR para Arthur.** Ele envelhece mal. Guarde-os para **Marlena até 10★** — ela carrega todos os primeiros 30–60 dias.
3. **Ignorar as Oficinas de Fundição.** Cinco delas no nível 23–25 = 44K de pedras de equipamento/semana passivamente. Empurrá-las tarde é o que bloqueia cada ponto de interrupção do nível 40 mais tarde.
4. **Espalhar pedras de equipamento em equipamentos roxos (SSR).** Equipamento certo para o herói certo apenas: espada+luvas+botas para DPS, peitoral+botas para tanques, todo o resto em zero até UR.
5. **Melhorar habilidades de ataque em tanques.** O ataque de um tanque não faz nada; suas habilidades funcionam com DEF/HP de escala em vez disso.

## Guia de Início Rápido: O Timing Supera o Grinding {#dtf-fast-start}

![Dezessete dicas que aceleram o início do jogo](/img/dtf/tips/01.jpg)

Se você se sente permanentemente ocupado, mas sem certeza de que está ficando mais forte, isso é normal: o jogo te soterra em ações desde o primeiro minuto, mal explicando quais delas te fazem avançar. O atalho testado abaixo não é um esquema complicado — é a lógica que aumenta o poder mais rápido sem queimar recursos. A principal percepção: **o jogo não é sobre farmar, é sobre timing.** As mesmas ações causam um impacto várias vezes maior quando atingem o dia certo, o evento certo, o requisito de nível certo.

### O Santuário define a direção, a construção define a velocidade

Tudo gera gargalos no Santuário — níveis de construção, mecânicas, crescimento de tropas, o limite de nível dos heróis. Então o loop se simplifica: abra os requisitos do próximo nível do Santuário e trabalhe estritamente neles; precisa de uma muralha, construa a muralha; precisa da rota do Doutor, vá até lá. Todo o resto é secundário.

![Melhoria do Santuário e seus requisitos para o próximo nível](/img/dtf/tips/02.jpg)

O ritmo de construção decide quão rápido você percorre esse caminho. O hábito que diferencia contas rápidas: **no momento em que uma melhoria termina, a outra começa** — não daqui a cinco minutos, imediatamente. Nenhuma melhoria ideal disponível? Qualquer coisa útil é melhor do que um espaço vazio — não há situação em que não construir nada seja melhor. Verifique a construção primeiro a cada login, mesmo que dure um minuto.

![Preparando a próxima melhoria de edifício com antecedência](/img/dtf/tips/03.jpg)

### Sobreviventes e aceleradores: passivos sempre, rajadas com propósito

Dois aceleradores funcionam melhor como um par. Os sobreviventes são bônus permanentes gratuitos para construção, recursos e pesquisa — uma configuração básica mais "envio rápido" leva segundos e rende frutos diariamente; reveja após cada novo sobrevivente ou edifício. Os aceleradores são o oposto: a maioria dos jogadores os superestima e os gasta cedo demais. Esgote tudo o que for gratuito primeiro (missões, eventos, arena, correio) e gaste aceleradores apenas quando estiver realmente preso esperando — acumulados em um único objetivo, por exemplo, um nível do Santuário, nunca pingados entre tarefas. Pequeno truque de otimização: divida a cura da enfermaria em lotes curtos para que os aliados possam tocar em Ajuda mais rapidamente em vez de uma fila longa.

![Atribuindo sobreviventes com envio rápido](/img/dtf/tips/04.jpg)

### Jogue com o calendário, acumule os eventos, armazene em ciclos curtos

Cada dia favorece ações específicas — construa no dia de construção, treine heróis no dia de heróis — e seguir o ritmo multiplica as recompensas pelo mesmo esforço. O próximo nível é o acúmulo: uma melhoria de edifício pode simultaneamente concluir uma etapa de evento, conceder recursos bônus e pontuar para a aliança. Uma ação, vários pagamentos.

![Calendário de eventos semanais](/img/dtf/tips/05.jpg)

Isso torna o armazenamento racional — mas em ciclos curtos, não em semanas. Guarde aceleradores, recursos e itens de melhoria por um dia ou dois, e então gaste-os no dia lucrativo: várias etapas de eventos são concluídas de uma vez, o poder dá um salto. Gastar um pouco diariamente não alcança nada disso.

![Dicas de início de jogo que mantêm o progresso estável](/img/dtf/tips/06.jpg)

### Servidor novo, primeiro dia denso

Em um servidor com dias de existência, você começa como o perseguidor — bases evoluídas, mecânicas abertas, alianças estabelecidas. Em um servidor novo, todos começam do zero e a atenção às prioridades se converte imediatamente em rank, eventos e uma aliança forte. Em seguida, explore o dia mais barato da vida da sua conta: a construção é rápida, a pesquisa quase instantânea, as melhorias baratas. Mantenha os cronômetros reiniciando o dia todo — sessões curtas de reagendamento imediato superam uma longa noite sem foco, porque o tempo ocioso inicial é o que mais prejudica.

![Escolha de servidor novo para condições de início iguais](/img/dtf/tips/07.jpg)

### Aliança primeiro, aceleração segundo

Sozinho, tudo depende dos seus próprios cronômetros; em uma aliança ativa, os membros tocam em Ajuda e os cronômetros encolhem em horas, os baús da aliança fornecem recursos e aceleradores aos poucos, e eventos extras pagam pela participação. Evite chats mortos — busque alianças ativas, idealmente as principais assim que os rankings forem abertos — e toque em Ajuda para os outros você mesmo: leva segundos e impulsiona a atividade da qual você se beneficia.

![Membros da aliança acelerando a construção com ajuda](/img/dtf/tips/08.jpg)

### Missões do Falcon alimentam o calendário

As missões do Falcon não precisam ser resgatadas instantaneamente — elas se acumulam até o limite e depois são entregues em massa nos dias de pontuação para obter pontos de evento e recompensas de etapa. Execute um dia, resgate no outro, em rotação, sem atingir o limite. (Combine isso com as regras completas de acúmulo da Torre Falcon na seção §3 acima — é a mesma mecânica sob o ângulo do dia do evento.)

![Missões do Falcon acumuladas para entrega no dia do evento](/img/dtf/tips/09.jpg)

### Um esquadrão, posições corretas, bilhetes iniciais

Um novo herói não é motivo para investir: um grupo de puxadas semi-construídas perde em todos os lugares. Escolha uma base de cinco, financie apenas ela (níveis, habilidades, equipamentos) e julgue os novatos com base em se eles melhoram a escalação atual. O modelo funcional: dois tanques na frente (Arthur, Bella) segurando o dano, três atrás (Marlena, Claire, Celia) causando dano e apoiando — e **não guarde bilhetes de invocação "para depois"**: montar a base de cinco rapidamente importa mais do que economizar, já que tudo a jusante depende disso.

![Uma equipe principal de heróis em vez de melhorias dispersas](/img/dtf/tips/10.jpg)

![Esquadrão construído em torno de Arthur, Bella e a linha de trás](/img/dtf/tips/11.jpg)

### Guerreiros primeiro — quilômetros mais baratos

O equilíbrio dos ramos não é igual no início: o ramo de Guerreiros pesquisa e melhora de forma mais barata e entrega um ritmo estável, enquanto ramos caros como Bruxos custam mais para obter essencialmente o mesmo resultado a um ritmo mais lento. Siga o caminho simples e eficaz para embalar, experimente assim que a base, os recursos e a compreensão existirem.

![Comparando os ramos de heróis](/img/dtf/tips/12.jpg)

![Comparando os custos de melhoria dos ramos de heróis](/img/dtf/tips/13.jpg)

### Laboratório: velocidade de tudo

O Laboratório nunca parece urgente — e esse é o erro. O que realmente acelera a conta: velocidade de construção, velocidade de pesquisa, velocidade de treinamento de tropas, ou seja, tudo o que afeta os processos da base, além do bônus do ramo de duelo de aliança que paga pontos extras pelas mesmas ações. Escolha a prioridade e siga em frente; termine os aceleradores da base antes de fortalecer qualquer outra coisa.

![Prioridades de pesquisa do laboratório: velocidade de construção e desenvolvimento](/img/dtf/tips/14.jpg)

### Equipamentos, tropas, lojas, mapa: as trivialidades cumulativas

- **Equipamentos:** vista os cinco principais com o básico primeiro, eleve tudo levemente para um nível inicial, depois impulsione peças-chave — ataque e vida primeiro, pois aparecem mais rápido em PvE e PvP. O equipamento roxo é um bom passo temporário (desmontado mais tarde sem desastre); o dourado torna-se importante com o tempo, em parte porque também funciona no PvP — caravanas, duelos, trocas no mapa.
- **Tropas:** nunca deixe o treinamento parar — fila terminada, nova fila instantaneamente. Os pontos de evento caem no *início* da fila, então uma capacidade de quartel maior significa mais pontos por lançamento; melhorias no quartel e na tecnologia de tropas são multiplicadores de eventos, não enfeites.
- **Lojas:** compre apenas o que impulsiona o progresso atual — nada de "para depois", nada de "pode ajudar". Gastar com foco no evento, contar o valor, ignorar o que brilha: é aí que os recursos começam a ser suficientes.
- **Eventos de mapa:** cercos, armadilhas, atividades — uma fonte constante de recursos, aceleradores e itens que muitos ignoram no início. Não viva neles, mas também não os ignore.

Mantenha a linha — foco no Santuário, gastos cronometrados com eventos, sem dispersão, aliança em jogo — e o progresso se estabiliza rapidamente. O início premia o sistema, não a pressa.

> Fonte: [Last Asylum: Plague - 17 советов, которые реально ускоряют старт](https://dtf.ru/howto/5000405-last-asylum-sovety-dlya-bystrogo-starta) por Гейм-Знаток no DTF.
