/// <reference types="Cypress" />

/* eslint-env mocha */
describe('Metaweather API', () => {
   it.only('returns JSON', () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tmw = ''+ tomorrow.getFullYear() + '/' + (1 + tomorrow.getMonth()) + '/' + tomorrow.getUTCDate() + '/'
    cy.request('location/30720/' + tmw)
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('return status 200', () => {
    cy.request('location/30720/year/month/day/')
      .its('status')
      .should('eq', 200)
  })

})
