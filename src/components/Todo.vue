<template>
    <div v-if="todo" class="todo">
        <label class="todo-name">{{todo.name}}</label>
    </div>
</template>

<script setup>
const props = defineProps({
    todo: Object,
})
</script>