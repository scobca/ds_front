import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home/first',
        name: 'FHome',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/home/second',
        name: 'SHome',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/home/third',
        name: 'THome',
        component: () => import('@/views/HomeView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
