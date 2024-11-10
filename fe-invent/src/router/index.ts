import { createRouter, createWebHistory } from 'vue-router';

// Import komponen yang akan digunakan dalam routing
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// Definisikan route
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

// Buat instance router
const router = createRouter({
    history: createWebHistory(), // Menggunakan HTML5 history mode
    routes, // Daftar route
});

export default router;
