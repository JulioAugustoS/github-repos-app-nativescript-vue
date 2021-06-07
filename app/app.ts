import Vue from "nativescript-vue";
import store from "./store";
import Users from "./containers/Users.vue";

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__;

Vue.prototype.$store = store;

new Vue({
  render: h => h("frame", [h(Users)]),
  store
}).$start();
