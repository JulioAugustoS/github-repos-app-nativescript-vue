import Vue from "nativescript-vue";
import Vuex from "vuex";
import modules from "./modules";
import rootStore from "./root";

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  ...rootStore
});
