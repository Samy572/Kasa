import PageNotFoundVue from '@/view/PageNotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../view/Home.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../view/About.vue'),
		},
		{
			path: '/location/:id',
			name: 'location',
			component: () => import('../view/Location.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			name: '404',
			component: () => import('../view/PageNotFound.vue'),
		},
	],
});

export default router;
