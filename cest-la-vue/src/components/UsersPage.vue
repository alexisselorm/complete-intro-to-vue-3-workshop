<template>
  <p class="user-card" v-for="user in users" :key="user.id">
    {{ user.name }} - {{ user.website }}
  </p>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    let users = ref([]);
    const fetchUsers = async () => {
      users.value = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
    };

    onMounted(() => {
      // console.log(fetchUsers());
      fetchUsers();
    });
    setTimeout(() => {
      console.log(users.value);
    }, 3000);
    console.log(users.value);

    return { users };
  },
};
</script>

<style>
.user-card {
  border: 1px solid #222;
  max-width: 400px;
  padding: 10px;
  text-align: center;
}
</style>
