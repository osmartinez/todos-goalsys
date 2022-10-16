import { defineStore } from 'pinia'
import todoService from '../services/todo'

export const useTodosStore = defineStore({
    id: 'todos',
    state: () => ({
        /** @type {Array<{name: string, completed: boolean}} */
        todos: [],
    }),
    getters: {
        /**
         * returns todos count
         * @param {state} state 
         * @returns {Number}
         */
        countTodos: (state) => state.todos.length,
        /**
         * returns all todos
         * @param {state} state 
         * @returns {Array<{id: number, name: string, completed: boolean}}
         */
        allTodos: (state) => state.todos,
        /**
         * returns all completed todos
         * @param {state} state 
         * @returns {Array<{id:number, name: string, completed: boolean}}
         */
        completedTodos: (state) => state.todos.filter(i => i.completed),
        /**
         * returns all non completed todos
         * @param {state} state 
         * @returns {Array<{id:numer, name: string, completed: boolean}}
         */
        activeTodos: (state) => state.todos.filter(i => !i.completed),
        /**
         * returns all non completed todos count
         * @param {state} state 
         * @returns {Number}
         */
        countNonCompletedTodos: (state) => state.todos.filter(i => !i.completed).length,
        /**
         * returns all  completed todos count
         * @param {state} state 
         * @returns {Number}
         */
        countCompletedTodos: (state) => state.todos.filter(i => i.completed).length
    },
    actions: {
        /**
         * adds a new todo
         * @param { {name: string, completed: boolean}} item 
         */
        async add(item) {
            const addedItem = await todoService.save(item)
            this.todos.push(addedItem)
        },

        /**
         * deletes a todo
         * @param {{id: number, name: string, completed: boolean}} item 
         */
        async delete(item) {
            const deletedIndex = await todoService.delete(item)
            this.todos.splice(deletedIndex, 1)
        },

        /**
         * updates an existing todo
         * @param {{id: number, name: string, completed: boolean}} item 
         */
        async update(item) {
            const updatedIndex = await todoService.update(item)
            this.todos[updatedIndex] = item
        },


        /**
         * removes all completed todos
         */
        clearCompleted() {
            this.todos.filter(i => i.completed).forEach(async item => await this.delete(item))
        },

        /**
         * changes status of all tasks
         */
        changeAllStatus(value) {
            this.todos.forEach(async i => {
                await this.update({...i, completed: value})
                i.completed = value
            })
        }
    }
})