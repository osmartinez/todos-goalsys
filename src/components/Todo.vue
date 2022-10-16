<template>
    <div v-if="todo" class="todo" @dblclick="openEditMode">
        <input v-show="!editMode" class="toggle" type="checkbox" v-model="todo.completed">
        <label v-show="!editMode" class="todo-name">{{todo.name}}</label>
        <input v-show="editMode" class="edit" type="text" @keyup.enter="closeEditModeAndSave" @blur="closeEditModeAndSave" @keyup.esc="closeEditModeAndDiscard">
        <button v-show="!editMode" class="btn-delete">x</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    todo: Object,
})
const editMode = ref(false)

async function closeEditModeAndSave(){    
    editMode.value = false
}

function closeEditModeAndDiscard(){
    editMode.value = false
}

function openEditMode(){
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