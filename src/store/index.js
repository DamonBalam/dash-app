import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true
  },
  mutations: {
    SET_DRAWER(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {},
  modules: {}
});
