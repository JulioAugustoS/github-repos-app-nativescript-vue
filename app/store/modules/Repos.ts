import request from "@/utils/request";

export default {
  namespaced: true,
  state: {
    repos: []
  },
  actions: {
    async loadRepos({ commit }, user) {
      const { data } = await request.get(`/users/${user}/starred`);
      commit("loadRepos", data);
    }
  },
  mutations: {
    loadRepos(state, repos) {
      state.repos = repos;
    }
  },
  getters: {
    getRepos: state => state.repos
  }
};
