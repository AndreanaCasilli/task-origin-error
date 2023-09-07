describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.origin('https://google.com',()=>{
      Cypress.require('../support/commands.js')
      cy.test()

    })
  })
})