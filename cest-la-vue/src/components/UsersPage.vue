<template>
    <p v-for="user in users" :key="user.id">{{ user.name }}</p>
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
