<template>
    <ul id="todo-body">
        <Todo v-for="todo in todos" v-bind:key="todo.id" :todo="todo"></Todo>
    </ul>
</template>

<script setup>
import Todo from './Todo.vue';
defineProps({
    todos: Array,
})
</script>
