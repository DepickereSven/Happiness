import Vue from 'vue'
import Router from 'vue-router'
import Store from "./store"

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/vote',
        name: 'vote',
        component: () => import('./views/Vote.vue'),
      },
      {
        path: '/stats',
        name: 'stats',
        component: () => import('./views/Stats.vue'),
      },
      {
        path: '/404',
        name: '404',
        component: () => import('./views/404.vue'),
        meta: {
          layout: "empty"
        },
      },
      {
        path: '*',
        redirect: '/404'
      }
    ]
});

export default router
