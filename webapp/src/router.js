import Vue from 'vue'
import Router from 'vue-router'
import Store from "./store"

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/vote'
        },
        {
            path: '/vote',
            name: 'vote',
            component: () => import('./views/Vote.vue'),
        },
        {
            path: '/stats',
            name: 'stats',
            component: () => import('./views/Stats.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue'),
            meta: {
                layout: "empty",
            },
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

router.beforeEach((to, from, next) => {
    const isLoggedIn = JSON.parse(localStorage.getItem('UH'));
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (isLoggedIn !== null) {
        if (requiresAuth && !isLoggedIn.user) {
            next('/');
        } else {
            next();
        }
    } else {
        if (requiresAuth) {
            next('/');
        } else {
            next();
        }
    }
});

export default router
