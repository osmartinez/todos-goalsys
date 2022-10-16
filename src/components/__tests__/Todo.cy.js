import Todo from '../Todo.vue'

const completedTodo = { id: 1, name: '#todo 1', completed: true} 

describe('Todo', () => {
    it('renders properly', () => {
        cy.mount(Todo)
    })

    it('shows todo name', () => {
        cy.mount(Todo,{ props:  {todo: completedTodo}})
        cy.get('.todo-name')
        .contains('#todo 1')
      })
    
})
