<template>
    <div v-if="todo" class="todo" @dblclick="openEditMode">
        <input v-show="!editMode" class="toggle" type="checkbox" v-model="todo.completed" @change="updateModel">
        <label v-show="!editMode" class="todo-name">{{todo.name}}</label>
        <input v-show="editMode" class="edit" type="text" v-model="newItemName" @keyup.enter="closeEditModeAndSave" @blur="closeEditModeAndSave" @keyup.esc="closeEditModeAndDiscard">
        <button v-show="!editMode" @click="list.delete(item)" class="btn-delete">x</button>
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

.task:hover .btn-delete {
	display: block;
}
</style>