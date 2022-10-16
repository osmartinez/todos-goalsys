import Todo from '../Todo.vue'

const completedTodo = { id: 1, name: '#todo 1', completed: true }
const notCompletedTodo = { id: 1, name: '#todo 1', completed: false }

describe('Todo', () => {
    it('renders properly', () => {
        cy.mount(Todo)
    })

    it('shows todo name', () => {
        cy.mount(Todo, { props: { todo: completedTodo } })
        cy.get('.todo-name')
            .contains('#todo 1')
    })

    it('has checkbox unchecked because todo is not completed', () => {
        cy.mount(Todo, { props: { todo: notCompletedTodo } })
        cy.get('.toggle')
            .should('be.not.checked')
    })

    it('has checkbox checked because todo is completed', () => {
        cy.mount(Todo, { props: { todo: completedTodo } })
        cy.get('.toggle')
            .should('be.checked')
    })

    it('has button hidden by default', () => {
        cy.mount(Todo, { props: { todo: completedTodo } })
        cy.get('.btn-delete')
            .should('be.not.visible')
    })

    /**
 * This cannot be tested with current cypress api because of css:hover cannot be triggered via js
 */
    //   it('has button visible if mouse is over', ()=>{
    //     cy.mount(Task,{ props: { item: completedTask } })
    //     cy.get('.title')
    //     .trigger('mouseover')

    //     cy.get('.btn-delete')
    //     .should('be.visible')
    //   })



    it('hides editable input by default', () => {
        cy.mount(Todo, { props: { todo: completedTodo } })
        cy.get('.edit')
            .should('be.not.visible')
    })

    it('shows editable input when double click is done',()=>{
        cy.mount(Todo,{ props: { todo: completedTodo } })
        cy.get('.todo')
        .dblclick()
    
        cy.get('.edit')
        .should('be.visible')
        
      })

      it('hides editable when enter or esc is pressed',()=>{
        cy.mount(Todo,{ props: { todo: completedTodo } })
        cy.get('.todo')
        .dblclick()
    
        cy.get('.edit')
        .should('be.visible')
        .type('{enter}')
        .should('not.be.visible')
    
        cy.get('.todo')
        .dblclick()
    
        cy.get('.edit')
        .should('be.visible')
        .type('{esc}')
        .should('not.be.visible')
      })
})
