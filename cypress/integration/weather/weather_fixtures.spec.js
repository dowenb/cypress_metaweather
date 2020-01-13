/// <reference types="Cypress" />

/* eslint-env mocha */
describe('Metaweather API', () => {
    it('a thing', () =>{
        cy.fixture('cities').then((cities) =>{
            cy.fixture('days').then((days) =>{
                cy.log(cities)
                cy.log(cities.Nottingham)
                cy.log(days.Tomorrow)

                cy.request(cities.Nottingham + days.Tomorrow)
                .its('headers')
                .its('content-type')
                .should('include', 'application/json')
            })
        })
    })

})
