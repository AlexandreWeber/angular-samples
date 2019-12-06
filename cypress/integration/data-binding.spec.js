describe("dataBinding Test", () => {
  it("should change value", () => {
    cy.visit("/dataBinding");

    cy.get('[p-label="Mudar Nome"] > .po-button').click();
    cy.get('#projectName').should('contain', '[ng-reflect-model="Modernização DATASUL Alterado]"');
  });
});
