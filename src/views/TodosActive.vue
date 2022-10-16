<template>
    <div>
      <TodoBody :todos="store.activeTodos"></TodoBody>
    </div>
  </template>
  <script setup>
  import { useTodosStore } from '../stores/todos'
  import TodoBody from '../components/TodoBody.vue';
  const store = useTodosStore()
  </script>
  
  