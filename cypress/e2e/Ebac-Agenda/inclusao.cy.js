/// <reference types="cypress" />

describe('Teste para a inclusão de contatos', () => {
    it('Deve identificar quantos contatos existem na agenda', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.get('.sc-eDDNvR.cTVgex > ul').should('have.length', 1);
    });

    it('Deve localizar novas inclusões', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.get('svg').first().click(); 
        cy.get('input[name=" "]').type('Nome Sobrenome'); 
        cy.get('input[name="email"]').type('exemplo@dominio.com'); 
        cy.get('input[name="telefone"]').type('123456789'); 
        cy.get('button[type="submit"]').click(); 

        cy.get('.sc-eDDNvR.cTVgex > ul li').should('have.length.greaterThan', 1);
    });
});
