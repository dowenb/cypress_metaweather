/// <reference types="Cypress" />

/* eslint-env mocha */
describe('Metaweather API', () => {
    it('Tomorrows Weather in Nottingham should return JSON response', () =>{
        cy.fixture('cities').then((cities) =>{
            cy.fixture('days').then((days) =>{
                cy.request(cities.Nottingham + days.Tomorrow)
                .its('headers')
                .its('content-type')
                .should('include', 'application/json')
            })
        })
    })

    it('Interview day in Hull should return 200 OK', () =>{
        cy.fixture('cities').then((cities) =>{
            cy.fixture('days').then((days) =>{
                cy.request(cities.Hull + days.Interview)
                .its('status')
                .should('eq', 200)
            })
        })
    })

    it('Yesterdays Weather in Sheffield should return more then one result', () =>{
        cy.fixture('cities').then((cities) =>{
            cy.fixture('days').then((days) =>{
                cy.request(cities.Sheffield + days.Yesterday)
                .its('body')
                .its('length')
                .should('gt', '1')
            })
        })
    })

})
