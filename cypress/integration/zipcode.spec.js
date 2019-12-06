describe("ZipCode Test", () => {
  it("should find 89218-100 Zipcode", () => {
    cy.visit("/zipCode");

    cy.get('.po-input').type('89218100');
    cy.get('.po-lg-6 > po-button > .po-button').click();

    cy.get(':nth-child(1) > .po-table-column-cell > span').contains('89218-100');
  });

  it("should find 89209-520 Zipcode", () => {
    cy.visit("/zipCode");

    cy.get('.po-input').type('89209520');
    cy.get('.po-lg-6 > po-button > .po-button').click();

    cy.get(':nth-child(1) > .po-table-column-cell > span').contains('89209-520');
  });
});
