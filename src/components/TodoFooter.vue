<template>
    <div id="todo-footer">
      <span><strong>0</strong> items left</span>
  
      <div class="filter-group">
        <RouterLink class="filter" v-for="route in routes" v-bind:key="route.name" :to="route">{{route.text}}</RouterLink>
      </div>
  
      <button>Clear completed</button>
    </div>
  </template>
  
  <script setup>
  const routes = [{ name: 'allTodos', text: 'all' }, { name: 'activeTodos', text: 'active' }, { name: 'completedTodos', text: 'completed' }]
  </script>