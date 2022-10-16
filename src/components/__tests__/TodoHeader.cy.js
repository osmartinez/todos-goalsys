import TodoHeader from '../TodoHeader.vue'

describe('TodoHeader', () => {
    it('renders properly', () => {
        cy.mount(TodoHeader)
    })

    it('allows user typing and clears text when user presses {enter}',()=>{
        cy.mount(TodoHeader)
        cy.get('.user-input')
          .type('#task 1')
          .should('have.value', '#task 1')
          .type('{enter}')
          .should('have.value','')
      })
})