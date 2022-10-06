import { createRouter, createWebHistory }  from 'vue-router';

const router = createRouter({
    // Browsing history
    history: createWebHistory(),

    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: null },
        { 
            path: '/coaches/:id', 
            component: null,
            children: [
                // /coaches/:id/contact
                { path: '/contact', component: null },
            ]
        },
        { path: '/register', component: null },
        { path: '/requests', component: null },
        { path: '/:notFound(.*)', component: null },
    ],
});

export default router;