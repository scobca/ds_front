import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {fi} from "vuetify/locale";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home/first',
        name: 'FHome',
        component: () => import('@/views/HomeView.vue'),
        meta: {
            graph: true
        }
    },
    {
        path: '/home/second',
        name: 'SHome',
        component: () => import('@/views/HomeView.vue'),
        meta: {
            graph: true
        }
    },
    {
        path: '/home/third',
        name: 'THome',
        component: () => import('@/views/HomeView.vue'),
        meta: {
            graph: false
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from) => {
    //checking a location on a non-existent 'home' route
    if (to.path == '/')
       router.push({name: 'FHome'})
           .then(r => {})
})

export default router
