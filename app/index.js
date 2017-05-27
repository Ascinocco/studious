import './config/bootstrap';
import router from './routes';

import SideNav from './components/partials/SideNav.vue';
Vue.component('side-nav', SideNav);

new Vue({
    el: '#studious-app',
    router
});