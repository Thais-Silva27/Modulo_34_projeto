/// <reference types="cypress" />

describe('Teste para a alteração de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    
    it('Deve localizar alterações', () => {
        cy.get('svg').first().click(); 
        
        cy.get('input[type="text"]').clear().type('gian Souza'); 
        cy.get('input[type="email"]').clear().type('exemplo@dominio.com');
        cy.get('input[type="tel"]').clear().type('15999999999');

        cy.get('button[type="submit"]').click();

       });
});

