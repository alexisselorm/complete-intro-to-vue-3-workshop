<template>
  <p class="user-card" v-for="user in users" :key="user.id">
    {{ user.name }} - {{ user.website }}
  </p>
</template>

<script>
export default {
  data: () => ({
    users: [],
  }),
  methods: {
    async fetchUsers() {
      this.users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
    },
  },
  created() {
    this.fetchUsers();
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
