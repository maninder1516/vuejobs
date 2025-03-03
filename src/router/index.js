import {createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: JobsView
    },
    {
        path: '/jobs/:id',
        name: 'job',
        component: JobView,
    },

    
      

    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFoundView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
