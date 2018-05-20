import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Start from './views/Start.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ],
});
