/// <reference types="Cypress" />

context("Test Metaweather", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });

  it("Get weather for Nottingham on the 11th of January 2020", () => {
    cy.request(
      "location/30720/2020/1/11/"
    ).should(response => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
    });
  });
});
