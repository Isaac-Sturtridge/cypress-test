describe("tests for login", () => {
  it("can access the sourcedemo site", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce", { log: false });
    cy.get("#login-button").click();
    cy.location().then((location) => {
      cy.wrap(location.href).should("contain", "inventory.html");
    });
  });
  it("shows an error with invalid credentials", () => {
    cy.visit("http://saucedemo.com");
    cy.get("#user-name").type("wrong_username");
    cy.get("#password").type("wrong_password", { log: false });
    cy.get("#login-button").click();
    cy.get(".error").should("be.visible");
  });
});

describe("Advanced logins", () => {
  it("detects error on the locked_out user", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("locked_out_user");
    cy.get("#password").type("secret_sauce", { log: false });
    cy.get("#login-button").click()
    cy.get(".error").should("be.visible");
  })
  it('detects a problem user logging in', () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("problem_user");
    cy.get("#password").type("secret_sauce", { log: false });
    cy.get("#login-button").click()
    cy.get("img[src=\"/static/media/sl-404.168b1cce.jpg\"]").should("exist");
  });
});

describe('Add to cart tests and checkout', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce", { log: false });
    cy.get("#login-button").click()
    })
    it('should add an item to the cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get(".shopping_cart_badge").should("have.text", 1)
    });
    it('should go to the cart page', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get(".shopping_cart_link").click()
        cy.location().then((location) => {
            cy.wrap(location.href).should("contain", "cart.html");
          });
    });
    it('should go to the checkout', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get(".shopping_cart_link").click()
        cy.get("#checkout").click()
        cy.location().then((location) => {
            cy.wrap(location.href).should("contain", "checkout-step-one.html");
          });
    });
});
