<template>
    <div v-if="todo" class="todo" @dblclick="openEditMode">
        <input v-show="!editMode" class="toggle" type="checkbox" v-model="todo.completed" @change="updateModel">
        <label v-show="!editMode" class="todo-name">{{todo.name}}</label>
        <input v-show="editMode" class="edit" type="text" v-model="newItemName" @keyup.enter="closeEditModeAndSave" @blur="closeEditModeAndSave" @keyup.esc="closeEditModeAndDiscard">
        <button v-show="!editMode" @click="store.delete(todo)" class="btn-delete">x</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodosStore } from '../stores/todos'

const props = defineProps({
    todo: Object,
})
const store = useTodosStore()
const editMode = ref(false)
const newItemName = ref("")

async function updateModel(){
    await store.update(props.todo)
}

async function closeEditModeAndSave(){    
    if(!editMode.value) return
    if(newItemName.value === ""){
        store.delete(props.todo)
    }
    else{
        props.todo.name = newItemName.value
        await updateModel()
    }
    editMode.value = false
}

function closeEditModeAndDiscard(){
    if(!editMode.value) return
    editMode.value = false
}

function openEditMode(){
    newItemName.value = props.todo.name
    editMode.value = true
}
</script>

<style scoped>
.edit {
    display: inline-block;
    width: 100%;
    font-size: 20px;
}
.todo {
    border-bottom: 1px solid #ccc;
    position: relative;
    font-size: 24px;
    border-radius: 10px;
}

.todo:last-child {
    border-bottom: none;
}

.toggle {
    text-align: center;
    width: 40px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    opacity: 0;
}


.toggle+label {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==");
    background-repeat: no-repeat;
    background-position: 15px center;
}

.toggle:checked+label {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem00LjM5MyA3LjVsLTUuNjQzIDUuNzg0LTIuNjQ0LTIuNTA2LTEuODU2IDEuODU4IDQuNSA0LjM2NCA3LjUtNy42NDMtMS44NTctMS44NTd6Ii8+PC9zdmc+");
}

.todo-name {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}

.btn-delete{
    cursor:pointer;
	display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	color: white;
    background:red;

}

.btn-delete:hover {
	background: darkred;
}

.todo:hover .btn-delete {
	display: block;
}
</style>