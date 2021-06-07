import Vue from "nativescript-vue";
import Vuex from "vuex";
import request from "@/utils/request";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    repos: []
  },
  actions: {
    async loadUsers({ commit }, user) {
      const { data } = await request.get(`/users/${user}`);

      commit("loadUsers", data);
    },
    async loadRepos({ commit }, user) {
      const { data } = await request.get(`/users/${user}/starred`);
      commit("loadRepos", data);
    }
  },
  mutations: {
    loadUsers(state, user) {
      const users = state.users;
      users.push(user);
      state.users = users;
    },
    loadRepos(state, repos) {
      state.repos = repos;
    }
  },
  getters: {
    getUsers: state => state.users,
    getRepos: state => state.repos
  }
});
