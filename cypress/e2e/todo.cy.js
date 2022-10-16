// https://docs.cypress.io/api/introduction/api.html

function addTask(name) {
  cy.get('.user-input')
    .type('#task 1')
    .type('{enter}')
}

describe('Some e2e tests', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'todos')
  })

  it('selects All nav item as active', () => {
    cy.visit('/')
    cy.get('.router-link-active')
      .contains('all')
  })

  it('selects Active nav item as active', () => {
    cy.visit('/active')
    cy.get('.router-link-active')
      .contains('active')
  })

  it('adds a task when user types and user presses enter', () => {
    cy.visit('/')

    addTask('#todo 1')
    addTask('#todo 2')

    // there are 2 tasks
    cy.get('.todo-name')
      .should('have.length', 2)
  })

  it('does not add a todo when input is empty and user presses enter', () => {
    cy.visit('/')
    cy.get('.user-input')
      .type('#todo 1')
      .type('{enter}')

    cy.get('.todo-name')
      .should('have.length', 0)
  })

  it('hides footer when there are no todos', () => {
    cy.visit('/')
    cy.get('#todo-footer')
      .should('not.be.visible')
  })


  it('shows footer when there are todos', () => {
    cy.visit('/')
    addTask('#todo 1')

    cy.get('#todo-footer')
      .should('not.be.visible')
  })

  it('disables Clear completed button when there are no completed todos', () => {
    cy.visit('/')
    addTask('#todo 1')

    cy.get('#todo-footer > button')
      .should('be.disabled')
  })

  it('enables Clear completed button when there are completed todos', () => {
    cy.visit('/')
    addTask('#todo 1')

    cy.get('.todo > .toggle')
      .click()

    cy.get('#todo-footer > button')
      .should('be.enabled')
  })

})
