import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedInUser: null
  },
  mutations: {
    logIn: function(state, user) {
      state.loggedInUser = user;
    }
  }
});

Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
