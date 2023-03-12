import { defineStore } from "pinia";

export const usersStore = defineStore("usersStore", {
  state: () => ({
    userList: [],
  }),
  getters: {},

  actions: {
    async fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());

      console.log(response);
      this.userList = response;
    },
  },
});
