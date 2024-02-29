// testing how cypress works

describe('Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/')
    });
});