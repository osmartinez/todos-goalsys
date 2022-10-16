<template>
    <div id="todo-list">
        <TodoHeader @click="add"></TodoHeader>
        <RouterView />
        <TodoFooter v-show="store.countTodos"></TodoFooter>
    </div>
</template>

<script setup>
import { useTodosStore } from '../stores/todos'

import TodoHeader from './TodoHeader.vue'
import TodoFooter from './TodoFooter.vue';
const store = useTodosStore()
async function add(userInput) {
    await store.add({ name: userInput, completed: false, active: false })
}
</script>