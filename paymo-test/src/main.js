import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import App from './App.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
