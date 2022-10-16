<template>
    <div v-if="todo" class="todo">
        <input class="toggle" type="checkbox" v-model="todo.completed">
        <label class="todo-name">{{todo.name}}</label>
    </div>
</template>

<script setup>
const props = defineProps({
    todo: Object,
})
</script>