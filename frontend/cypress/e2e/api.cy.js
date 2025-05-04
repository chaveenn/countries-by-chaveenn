describe('API Tests - REST Countries', () => {
  it('GET /all should return countries list', () => {
    cy.request('https://restcountries.com/v3.1/all').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body[0]).to.have.property('name')
    })
  })

  it('GET /name/france should return France data', () => {
    cy.request('https://restcountries.com/v3.1/name/france').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body[0].name.common).to.eq('France')
    })
  })
})
