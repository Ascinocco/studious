import VueRouter from 'vue-router';

import Login from './components/Login.vue';
import Register from './components/Register.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register }
];

export default new VueRouter({
    routes
});