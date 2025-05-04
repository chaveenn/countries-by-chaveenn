describe('UI Tests - Layout & Components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('displays page header', () => {
    cy.contains('Explore the World').should('be.visible')
  })

  it('renders country cards grid', () => {
    cy.get('.grid').children().should('have.length.greaterThan', 0)
  })

  it('shows country detail layout properly', () => {
    cy.get('input[type="search"]').type('India')
    cy.contains('India').click()
    cy.contains('Capital').should('exist')
    cy.get('img').should('be.visible')
  })
})
