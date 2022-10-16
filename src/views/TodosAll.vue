
<template>
    <div>
      <TodoBody :items="store.allTodos"></TodoBody>
    </div>
  </template>
  <script setup>
  import { useTodosStore } from '../stores/todos'
import TodoBody from '../components/TodoBody.vue';
  const store = useTodosStore()
  </script>
  
  