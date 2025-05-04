describe('Functional Tests - User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should search and open a country', () => {
    cy.get('input[type="search"]').type('France')
    cy.contains('France').click()
    cy.contains('Official Name').should('exist')
  })

  it('should filter countries by region', () => {
    cy.get('select').first().select('Europe')
    cy.get('.grid > div').should('have.length.greaterThan', 0)
  })

  it('should allow adding/removing from favorites if logged in', () => {
    cy.visit('/login')
    cy.get('input#username').type('user')
    cy.get('input#password').type('user123')
    cy.contains('Sign In').click()

    cy.get('input[type="search"]').type('Germany')
    cy.contains('Germany').click()
    cy.contains('Add to Favorites').click()
    cy.contains('Remove from Favorites').should('exist')
  })
})
