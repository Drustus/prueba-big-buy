/// <reference types="cypress" />

describe("wallet", () => {
  beforeEach(() => {
    cy.visit("https://big-buy-wallet.onrender.com/");
  });

  it("should add to the wallet", () => {
    cy.findByText("Ingresar fondos").click();
    cy.findByLabelText("Cantidad").type("1000");
    cy.findByText("Guardar").click();
    cy.contains("2.609,70 €");
  });

  it("should remove from the wallet", () => {
    cy.findByText("Retirar fondos").click();
    cy.findByLabelText("Cantidad").type("1000");
    cy.findByText("Guardar").click();
    cy.contains("609,70 €");
  });
});
