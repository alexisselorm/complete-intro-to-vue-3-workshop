<template>
  <input type="color" v-model="colorPreference" />
  <p>{{ colorPreference }}</p>
  <div class="users">
    <p class="user-card" v-for="user in users" :key="user.id">
      {{ user.name }} - {{ user.website }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let users = ref([]);
const fetchUsers = async () => {
  users.value = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
};
let colorPreference = ref("blue");

onMounted(() => {
  // console.log(fetchUsers());
  fetchUsers();
});
setTimeout(() => {
  console.log(users.value);
}, 3000);
console.log(users.value);
</script>

<style>
.user-card {
  border: 1px solid #222;
  max-width: 400px;
  padding: 10px;
  text-align: center;
}

.users {
  background-color: v-bind(colorPreference);
}
</style>
