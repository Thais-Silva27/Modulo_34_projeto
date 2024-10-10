/// <reference types="cypress" />

describe('Teste para a alteração de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    
    it('Deve localizar alterações', () => {
        cy.get('svg').first().click(); 
        
        cy.get('input[type="text"]').clear().type('Nome'); 
        cy.get('input[name="email"]').clear().type('exemplo@dominio.com');
        cy.get('input[name="tel"]').clear().type('123456789');

        cy.get('button[type="submit"]').click();

        cy.get('.contact-list').children().should('have.length.greaterThan', 2); 
    });
});

