describe('tests for login', () => {
    it('can access the sourcedemo site', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce", {log: false})
        cy.get("#login-button").click()
        cy.location().then((location) => {
            cy.wrap(location.href).should(
                "contain",
                "inventory.html"
            )
        })
    })
    it('shows an error with invalid credentials', () => {
        cy.visit("http://saucedemo.com")
        cy.get("#user-name").type("wrong_username")
        cy.get("#password").type("wrong_password", {log: false})
        cy.get("#login-button").click()
        cy.get(".error").should("be.visible")
    });
});