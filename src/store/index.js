import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {}, // 하나니까 객체로
    item: {},
  },
  getters: {
    fetchAsk(state) {
      return state.ask;
    },
    fetchUser(state) {
      return state.user;
    },
    fetchItem(state) {
      return state.item;
    },
  },
  mutations,
  actions,
});
