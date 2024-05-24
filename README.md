

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
