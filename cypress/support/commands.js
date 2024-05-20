//aceitar cookies
Cypress.Commands.add('aceitarCookies', () => {
    cy.get('[data-testid="terms-consent"]')
        .should('be.visible').click();
});

//fechar modal
Cypress.Commands.add('fecharModal', () => {
    cy.get('.close-button')
        .should('be.visible').click();
});

//selecionar modalidade avulsa
Cypress.Commands.add('selecionarModalidadeAvulso', () => {
    cy.get('#btn-selecionar-modalidade-avulso')
        .should('be.visible').click();
});

//adicionar produto ao carrinho
Cypress.Commands.add('adicionarProdutoAoCarrinho', (quantidade, valor) => {
    cy.get('#produto-auto-quantidade')
        .should('be.visible')
        .clear()
        .type(quantidade.toString());

    cy.get('#produto-auto-valor')
        .should('be.visible')
        .clear()
        .type(valor);

    cy.get('#btn-adicionar-carrinho-auto')
        .should('be.visible')
        .click();
});

//adição do produto ao carrinho
Cypress.Commands.add('validarAdicaoAoCarrinho', (quantidadeEsperada) => {
    cy.get('.product-information__amount span').last().invoke('text').then((quantidadeNoCarrinho) => {
        const quantidadeFinal = parseInt(quantidadeNoCarrinho.trim());
        expect(quantidadeFinal).to.eq(quantidadeEsperada);
        cy.log('Quantidade validada com sucesso: ' + quantidadeFinal);
    });
});

Cypress.Commands.add('aceitarConsentimentoCookiesVR', () => {
    cy.get('body').then(($body) => {
        if ($body.find('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').length > 0) {
            cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click();
        }
    });
});

// clicar no botão "Compre online" e navegar para a loja
Cypress.Commands.add('navegarParaLojaVR', () => {
    cy.get('#buttonCompreOnline').should('be.visible').click();
    cy.log('Navegando para a loja VR');
});
