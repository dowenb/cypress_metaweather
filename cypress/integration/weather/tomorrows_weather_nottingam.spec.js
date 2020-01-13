/// <reference types="Cypress" />

/* eslint-env mocha */
describe('Metaweather API', () => {
   xit('returns JSON', () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tmw = ''+ tomorrow.getFullYear() + '/' + (1 + tomorrow.getMonth()) + '/' + tomorrow.getUTCDate() + '/'
    cy.request('30720/' + tmw)
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

})
