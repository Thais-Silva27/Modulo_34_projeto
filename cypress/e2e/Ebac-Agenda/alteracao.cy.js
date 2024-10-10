/// <reference types="cypress" />

describe('Teste para a alteração de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve identificar quantos contatos existem na agenda', () => {
        cy.get('.sc-eDDNvR.cTVgex > ul').children().should('have.length', 2);
    });

    it('Deve localizar alterações', () => {
        cy.get('svg').first().click(); 
        
        cy.get('input[name="name"]').clear().type('Nome Sobrenome'); 
        cy.get('input[name="email"]').clear().type('exemplo@dominio.com');
        cy.get('input[name="telefone"]').clear().type('123456789');

        cy.get('button[type="submit"]').click();

               cy.get('.sc-beqWaB.eQdhbg > div').should('have.length.greaterThan', 2); 
    });
});
