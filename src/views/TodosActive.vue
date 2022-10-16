<template>
    <div>
      <TodoList :todos="store.activeTodos"></TodoList>
    </div>
  </template>
  <script setup>
  import { useTodosStore } from '../stores/todos'
  import TodoList from '../components/TodoList.vue';
  const store = useTodosStore()
  </script>
  
  