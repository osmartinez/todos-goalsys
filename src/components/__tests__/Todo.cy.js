import Todo from '../Todo.vue'

const completedTodo = { id: 1, name: '#todo 1', completed: true} 
const notCompletedTodo = { id: 1, name: '#todo 1', completed: false} 

describe('Todo', () => {
    it('renders properly', () => {
        cy.mount(Todo)
    })

    it('shows todo name', () => {
        cy.mount(Todo,{ props:  {todo: completedTodo}})
        cy.get('.todo-name')
        .contains('#todo 1')
      })

      it('has checkbox unchecked because todo is not completed', ()=>{
        cy.mount(Todo,{ props: { todo: notCompletedTodo } })
        cy.get('.toggle')
        .should('be.not.checked')
      })

      it('has checkbox checked because todo is completed', ()=>{
        cy.mount(Todo,{ props: { todo: completedTodo } })
        cy.get('.toggle')
        .should('be.checked')
      })

      it('has button hidden by default', ()=>{
        cy.mount(Todo,{ props: { todo: completedTodo } })
        cy.get('.btn-delete')
        .should('be.not.visible')
      })
    
    
})
