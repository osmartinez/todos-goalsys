<template>
    <div id="todo-footer">
      <span><strong>{{store.countNonCompletedTodos}}</strong>{{store.countNonCompletedTodos===1?'item':'items'}} left</span>
  
      <div class="filter-group">
        <RouterLink class="filter" v-for="route in routes" v-bind:key="route.name" :to="route">{{route.text}}</RouterLink>
      </div>
  
      <button :disabled="store.countCompletedTodos === 0">Clear completed</button>
    </div>
  </template>
  
  <script setup>
  import {useTodosStore} from '../stores/todos'
  const routes = [{ name: 'allTodos', text: 'all' }, { name: 'activeTodos', text: 'active' }, { name: 'completedTodos', text: 'completed' }]
  const store = useTodosStore()
  </script>