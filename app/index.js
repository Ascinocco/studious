import './config/bootstrap';
import router from './routes';

import SideNav from './components/partials/SideNav.vue';
Vue.component('side-nav', SideNav);

import { StudiousClass } from './Models/StudiousClass';

let studClass = new StudiousClass();

new Vue({
    el: '#studious-app',
    router
});