describe('Pokedex', function() {
  it('pokemon page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click();
    cy.contains('chlorophyll')
  })
})
