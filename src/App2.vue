<script>
export default {
  data() {
    return {
      name : 'Maninder',
      status: true,
      tasks: ['Task1', 'Task2', 'Task3', 'Task4', 'Task5'],
      link: 'https://www.google.com',
    }
  },
  methods: {
    changeStatus() {
      this.status = !this.status;
    }
  }
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is active</p>
  <ul>
    <li v-for="task in tasks" :key="task"> {{ task }} </li>
  </ul>
  <!-- <a v-bind:href="link">Google</a> -->
  <a :href="link">Google</a>
  <!-- <button v-on:click="changeStatus">Change Status</button> -->
  <button @click="changeStatus">Change Status</button>
</template>

<style scoped>
  /* h1 {
    color: blue;
  } */
</style>
