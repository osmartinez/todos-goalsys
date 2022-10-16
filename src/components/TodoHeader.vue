<template>
    <div id="todo-header">
        <input class="user-input" type="text" v-model="userInput" @keyup.enter="action"
            placeholder="Type and press enter" autofocus>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['click'])
const checkAll = ref(false)
let userInput = ref("")
function action() {
    if (!userInput.value) return
    emit('click', userInput.value)
    userInput.value = ''
}

</script>

<style scoped>

</style>