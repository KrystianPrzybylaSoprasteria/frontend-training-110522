/// <reference types="cypress" />

describe('Components', () => {
    it('should be exactly 13', () => {
        cy.visit('/');
        cy.get('[data-test-id="components"]')
            .find('.component')
            .should('have.length', 13);
    })

    it('should display Day component', () => {
        cy.visit('/');
        cy.get('[data-test-id="components"]')
            .contains('h2', 'Day')
            .should('be.visible');
    })
})