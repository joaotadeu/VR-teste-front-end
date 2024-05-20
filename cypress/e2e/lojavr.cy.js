/// <reference types="cypress" />

describe('Pagina inicial loja VR', () => {

    it('deve carregar a página inicial, navegar para a loja e interagir com os elementos', () => {
        
        // Ignorar exceções
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log('Erro capturado:', err);
            return false;
        });
  
        // Visitar a pagina inicial
        cy.visit('https://www.vr.com.br');
  
        // Interagir com consentimento de cookies
        cy.aceitarConsentimentoCookiesVR();
  
        // Verificar se o titulo da pagina esta correto
        cy.title().should('eq', 'VR - Refeição, Transporte, Controle de Ponto e Soluções Financeiras');
  
        // Navegar para a loja
        cy.navegarParaLojaVR();
  
    });
    
    
    it('deve carregar a página inicial, navegar para a loja e interagir com os elementos', () => {

        // Ignorar exceções não capturadas do aplicativo
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log('Erro capturado:', err);
            return false;
        });

        // Visitar a pagina inicial
        cy.visit('https://loja.vr.com.br/');
        
        // Aceitar cookies
        cy.aceitarCookies();

        // Fechar modal
        cy.fecharModal();

        // Selecionar modalidade avulsa
        cy.selecionarModalidadeAvulso();

        // Gerar quantidade e valor aleatorios
        const quantidadeAleatoria = Math.floor(Math.random() * 10) + 1;
        const valorAleatorio = (Math.random() * 9 + 1).toFixed(2);

        // Adicionar produto ao carrinho
        cy.adicionarProdutoAoCarrinho(quantidadeAleatoria, valorAleatorio);

        // Validar se o icone de sucesso esta visível
        cy.get('.product-in-cart-view__content i.fa-check-circle')
            .should('be.visible');

        // Verificar se o texto "Produto adicionado!" esta presente
        cy.get('.product-in-cart-view__content p')
            .should('be.visible')
            .and('contain', 'Produto adicionado!');

        // Ir para o carrinho
        cy.get('#btn-meu-carrinho > .fa-light')
            .should('be.visible')
            .click();

        // Validar a quantidade no carrinho
        cy.validarAdicaoAoCarrinho(quantidadeAleatoria);

    });
});