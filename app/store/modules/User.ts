import request from "@/utils/request";

export default {
  namespaced: true,
  state: {
    users: []
  },
  actions: {
    async loadUsers({ commit }, user) {
      const { data } = await request.get(`/users/${user}`);

      commit("loadUsers", data);
    }
  },
  mutations: {
    loadUsers(state, user) {
      const users = state.users;
      users.push(user);
      state.users = users;
    }
  },
  getters: {
    getUsers: state => state.users
  }
};
