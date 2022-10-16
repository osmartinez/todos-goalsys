<template>
    <div v-if="todo" class="todo">
        <input class="toggle" type="checkbox" v-model="todo.completed">
        <label class="todo-name">{{todo.name}}</label>
        <input v-show="editMode" class="edit" type="text">
        <button class="btn-delete">x</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    todo: Object,
})
const editMode = ref(false)


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