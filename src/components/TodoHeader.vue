<template>
    <div id="todo-header">
        <input class="toggle" type="checkbox" v-model="checkAll" @change="checkAllChanged">
        <input class="user-input" type="text" v-model="userInput" @keyup.enter="action"
            placeholder="Type and press enter" autofocus>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodosStore } from '../stores/todos'

const store = useTodosStore()
const emit = defineEmits(['click'])
const checkAll = ref(false)
let userInput = ref("")
function action() {
    if (!userInput.value) return
    emit('click', userInput.value)
    userInput.value = ''
}
async function checkAllChanged() {
    await store.changeAllStatus(checkAll.value)
}

store.$onAction(({ name }) => {
    if (name === 'clearCompleted') {
        checkAll.value = false
    }
}, true)
</script>

<style scoped>

</style>