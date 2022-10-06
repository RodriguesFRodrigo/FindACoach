import { createRouter, createWebHistory }  from 'vue-router';

// Coaches Components
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';

// Requests Components
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';

// Not Found Component
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    // Browsing history
    history: createWebHistory(),

    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        { 
            path: '/coaches/:id', 
            component: CoachDetail,
            children: [
                // /coaches/:id/contact
                { path: '/contact', component: ContactCoach },
            ]
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestsReceived },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;