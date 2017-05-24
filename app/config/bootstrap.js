import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueLocalStorage from 'vue-ls';
import axios from 'axios';

window.Vue = Vue;
Vue.use(VueRouter);
// Vue.use(VueLocalStorage);
window.axios = axios;

// Vue.ls.set('foo', 'bar');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

const fs = require('fs');