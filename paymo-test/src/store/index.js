import Vue from 'vue';
import Vuex from 'vuex';

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
  mutations: {},
  actions: {},
});

export default store;

// "fullName": “My Full Name”,
//     "nickname": “my.nick-name”,
//     "password": “my_strong_p@ssword”,
//     "repeatPassword": "my_strong_p@ssword",
//     "phone": “998998887766”,
//     “gender”: “MALE”,
//     “country”: “RUSSIA”,
//     “city”: “MOSCOW”
