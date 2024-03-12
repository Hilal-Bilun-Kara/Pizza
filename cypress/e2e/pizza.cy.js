describe('Order Page', () => {
  describe('Error Message', () => {
  it('passes', () => {
    //Arrange
    cy.visit('http://localhost:5173/order')
    //Act
    cy.get('[data-cy="isim-input"]').type("bil");
    //assert
    cy.contains('Adınızı giriniz..');
  })
})
})