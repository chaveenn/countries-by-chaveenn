describe('Countries Explorer App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173') 
  })

  it('loads the home page', () => {
    cy.contains('Explore the World').should('be.visible')
  })

  it('displays country cards', () => {
    cy.get('.grid > div').should('have.length.greaterThan', 0)
  })

  it('filters countries by region', () => {
    cy.get('select').first().select('Asia')
    cy.get('.grid > div').should('have.length.greaterThan', 0)
  })

  it('searches for a country', () => {
    cy.get('input[type="search"]').type('France')
    cy.contains('France').should('be.visible')
  })

  it('opens country detail page', () => {
    cy.contains('France').click()
    cy.contains('Official Name').should('exist')
  })
})
