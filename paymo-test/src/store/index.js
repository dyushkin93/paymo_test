import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      fullName: 'guest',
    },
  },
  getters: {
    FULL_NAME: (state) => state.user.fullName,
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload;
    },
  },
  actions: {
    SET_USER: async (context, payload) => {
      try {
        const res = await fetch(payload.URL, payload.config);
        const data = await res.json();
        context.commit('SET_USER', data);
        router.push('/');
      } catch (error) {
        router.push('/error');
      }
    },
  },
});

export default store;
