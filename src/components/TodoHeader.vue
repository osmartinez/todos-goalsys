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
const checkAll = ref(false)
let userInput = ref("")
async function action() {
    if (!userInput.value) return
    await store.add({ name: userInput.value, completed: false})
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

.btn-checkall{
    background: inherit;
}
#todo-header{
    display: flex;
}
.user-input {
    display: inline-block;
    width: 100%;
    font-size: 20px;
}
.toggle{
    text-align: center;
    width: 40px;
    height: 40px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    -webkit-appearance: none;
    appearance: none;
}
.toggle {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==");
    background-repeat: no-repeat;
    background-position: 15px center;
}

.toggle:checked {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem00LjM5MyA3LjVsLTUuNjQzIDUuNzg0LTIuNjQ0LTIuNTA2LTEuODU2IDEuODU4IDQuNSA0LjM2NCA3LjUtNy42NDMtMS44NTctMS44NTd6Ii8+PC9zdmc+");
}
</style>