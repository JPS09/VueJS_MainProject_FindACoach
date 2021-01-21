
import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index.js';

//This is the way to have Async Components in the router since the imports below are dynamic and supported by the router
// ALL routes should be imported this way

//Good
  const CoachList = () => import('./pages/coaches/CoachList.vue')
  const CoachDetails = () => import('./pages/coaches/CoachDetails.vue');
  const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue');
  const ContactCoach = () => import('./pages/requests/ContactCoach.vue');
  const NotFound = () => import('./pages/NotFound.vue');
  const ReceivedRequests = () => import('./pages/requests/ReceivedRequests.vue');
  const UserAuth = () => import('./pages/auth/UserAuth.vue');

  //Bad
  // const componentName = defineAsynComponent(()=>import('pathToFile'))

  //Doesn't make use of the router support of dynamic imports
  // import CoachDetails from './pages/coaches/CoachDetails.vue';
  // import CoachRegistration from './pages/coaches/CoachRegistration.vue';
  // import ContactCoach from './pages/requests/ContactCoach.vue';
  // import NotFound from './pages/NotFound.vue';
  // import ReceivedRequests from './pages/requests/ReceivedRequests.vue';
  // import UserAuth from './pages/auth/UserAuth.vue';
  // import CoachList from './pages/coaches/CoachList.vue';

  const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }] //Access to coach identifier
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { needsAuth: true }
    },
    {
      path: '/requests',
      meta: { needsAuth: true },
      component: ReceivedRequests
    },
    { path: '/login', component: UserAuth, meta: { needDisconnected: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth && !store.getters.isAuthenticated) {
    //checks if user is logged in on routes that needs have auth
    next('/login'); // Redirect to 'login' if that's not the case
  } else if (to.meta.needDisconnected && store.getters.isAuthenticated) {
    // checks if user is not logged in on the login route
    next('/coaches'); // redirect to coaches if already logged
  } else {
    next(); // continues if everything is all right
  }
});

export default router;
