import './config/bootstrap';
import router from './routes';

import TabNav from './components/partials/TabNav.vue';
Vue.component('tab-nav', TabNav);

// import { StudiousClass } from './Models/StudiousClass';

// let myclass = StudiousClass.find();

// for (let i = 0; i < myclass.length; i++) {
//     alert(myclass[i].name);
// }

new Vue({
    el: '#studious-app',
    router
});