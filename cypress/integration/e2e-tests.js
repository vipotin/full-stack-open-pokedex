describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000')
    cy.get('div').contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.get('.pokemon-name').contains('ivysaur')
    cy.get('.pokemon-ability-name').contains('chlorophyll')
  })

  it('next link displays the next pokemon', function() {
    cy.visit('http://localhost:5000')
    cy.get('div').contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.get('.links > a').contains('Next').click()
    cy.get('.pokemon-name').contains('venusaur')
  })

  it('previous link displays the previous pokemon', function() {
    cy.visit('http://localhost:5000')
    cy.get('div').contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.get('.links > a').contains('Previous').click()
    cy.get('.pokemon-name').contains('bulbasaur')
  })
})