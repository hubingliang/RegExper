import Vue from 'vue';
import Router from 'vue-router';
import Challenge from './views/Challenge.vue';
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
      path: '/challenge',
      name: 'challenge',
      component: Challenge,
    },
  ],
});
