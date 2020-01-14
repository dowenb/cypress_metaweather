/// <reference types="Cypress" />

/* eslint-env mocha */
describe('Metaweather API', () => {
    it('Getting weather for each City should return a valid response', () =>{
        cy.fixture('cities_and_days').then((cities_and_days) => {})
            .its('weatherFor').each(($item, $index, $allItems) => {
                cy.log("Getting weather for " + $item.Day + " in " + $item.City)
                cy.request($item.url)
                .its('headers')
                .its('content-type')
                .should('include', 'application/json')
            })
    })
})
