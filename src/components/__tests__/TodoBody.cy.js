import TodoBody from '../TodoBody.vue'

const sampleTodos = [{ id: 1, name: '#todo 1', completed: true },{ id: 2, name: '#todo 2', completed: true }]

describe('TodoBody', () => {
    it('renders properly', () => {
        cy.mount(TodoBody)
    })

    it('renders all passed todos', () => {
        cy.mount(TodoBody,{props: {todos:sampleTodos}})

        cy.get('.todo')
        .should('have.length',2)
    })
})
