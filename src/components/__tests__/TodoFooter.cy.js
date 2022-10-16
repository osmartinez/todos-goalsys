import TodoFooter from '../TodoFooter.vue'

describe('TodoFooter', () => {
  
  it('renders properly', () => {
    cy.mount(TodoFooter)
    cy.get('.filter-group > :nth-child(1)')
    .contains('all')

    cy.get('.filter-group > :nth-child(2)')
    .contains('active')

    cy.get('.filter-group > :nth-child(3)')
    .contains('completed')

    cy.get('button')
    .contains('Clear')

    cy.get('strong')
    .contains('0')
  })

})