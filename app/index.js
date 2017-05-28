import './config/bootstrap';
import router from './routes';

import TabNav from './components/partials/TabNav.vue';
Vue.component('tab-nav', TabNav);

new Vue({
    el: '#studious-app',
    router
});