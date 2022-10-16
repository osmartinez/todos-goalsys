<template>
    <div id="todo-list">
        <TodoHeader @click="add"></TodoHeader>
        <RouterView />
        <TodoFooter></TodoFooter>
    </div>
</template>

<script setup>
import TodoHeader from './TodoHeader.vue'
import TodoFooter from './TodoFooter.vue';
const list = useListStore()
function add(userInput) {
    
}
</script>