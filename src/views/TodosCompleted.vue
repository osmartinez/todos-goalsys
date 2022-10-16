<template>
    <div>
      <TodoBody :todos="store.completedTodos"></TodoBody>
    </div>
  </template>
  <script setup>
  import { useTodosStore } from '../stores/todos'
  import TodoBody from '../components/TodoBody.vue';
  const store = useTodosStore()
  </script>
  
  