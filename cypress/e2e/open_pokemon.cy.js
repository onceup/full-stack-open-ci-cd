describe('Pokedex', function() {
  it('pokemon page can be opened', function() {
    cy.visit('http://localhost:5100')
    cy.contains('ivysaur').click();
    cy.contains('chlorophyll')
  })
})
