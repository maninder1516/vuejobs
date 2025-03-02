<script setup>
import { ref, onMounted } from 'vue';

const name = ref('Maninder');
const status = ref(true);
const tasks = ref(['Task1', 'Task2', 'Task3', 'Task4', 'Task5']);
const link =  ref('https://www.google.com');
const newTask = ref('');

const changeStatus = () => {
  status.value = !status.value;
};

const addTask = () => {
  if(newTask.value.trim !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async()=> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task) => task.title);    
  } catch(error) {
    console.log('Error fetching the tasks');
  }
});

 
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is active</p>
  <h3>Tasks </h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task"> 
      <span>{{ task }} </span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <!-- <a v-bind:href="link">Google</a> -->
  <a :href="link">Google</a>
  <!-- <button v-on:click="changeStatus">Change Status</button> -->
  <button @click="changeStatus">Change Status</button>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
  /* h1 {
    color: blue;
  } */
</style>
