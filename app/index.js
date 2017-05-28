import './config/bootstrap';
import router from './routes';

import SideNav from './components/partials/SideNav.vue';
Vue.component('side-nav', SideNav);

import { StudiousClass } from './Models/StudiousClass';

let studClass = new StudiousClass({
    name: 'Intro to C++',
    professor: 'Tim Thompson',
    location: 'B215'
});

studClass.update({
    professor: 'John Smyth'
});

let result = StudiousClass.find({ location: 'B215' });

alert(result.professor);

// let result = StudiousClass.find({ location: 'B215' });
// alert(result.professor);

// result.update({
//     professor: 'John Smyth'
// })

// result = StudiousClass.find({ location: 'B215' });

// alert(result.professor);

new Vue({
    el: '#studious-app',
    router
});