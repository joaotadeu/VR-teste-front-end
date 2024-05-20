Teste Prático
Obrigado por participar do nosso processo seletivo da VR Benefícios.

Nossa stack tecnológica aqui é Cypress para teste de frontend e Cucumber + Ruby + HTTParty para teste de backend.
Regras:
• O exercício deve ser entregue em um repositório público do GitHub
• Lembre-se de incluir comentários nos seus arquivos. Eles são importantes para entendermos seu modo de
pensar.
• O exercício deve ser entregue em até́ uma semana a partir do recebimento

Frontend
Criar um teste automatizado que valide que um produto pode ser adicionado, com sucesso, ao carrinho em nossa
loja virtual;
- Acessar a home do portal web (www.vr.com.br);
- Clicar no botão "Compre online" para navegar até a loja;
- Selecionar a opção "Cartões VR";
- Adicionar uma quantidade aleatória de cartões do produto "Auto";
- Digitar um valor de crédito aleatório para o produto "Auto";
- Clicar no botão "Adicionar ao carrinho";
- Validar que produto foi adicionado ao carrinho com sucesso;

Documentação para Clonar e Preparar o Ambiente de Testes com Cypress
Objetivo: Esta documentação orienta você na configuração de um ambiente para executar testes automatizados em um projeto usando Cypress. O processo inclui clonar o repositório, instalar dependências e executar testes.

Pré-Requisitos
Git: Ferramenta de controle de versão para clonar o repositório.
Node.js: Ambiente de execução para JavaScript necessário para rodar o Cypress e outras dependências do projeto.
Yarn: Gerenciador de pacotes usado para instalar e gerenciar dependências do projeto.

- Clonar o Repositório
  git clone <URL-do-repositório>
  cd <nome-do-repositório>

- Instalar Dependências
yarn install

- Instalar Cypress:
yarn add cypress --dev

- Executar
yarn cypress open --modo interativo
yarn cypress run --modo headless
