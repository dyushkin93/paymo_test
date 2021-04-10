import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import ErrorModal from './components/ErrorModal.vue';

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
    {
      path: '/error',
      name: 'Register',
      component: ErrorModal,
    },
  ],
});

export default router;
