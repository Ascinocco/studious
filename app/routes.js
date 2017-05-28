import VueRouter from 'vue-router';

import Classes from './components/Classes.vue';
import Homework from './components/Homework.vue';
import Settings from './components/Settings.vue';

const routes = [
    { path: '/', component: Classes },
    { path: '/homework', component: Homework },
    { path: '/settings', component: Settings }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'active'
});