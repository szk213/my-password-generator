import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import 'onsenui';
import App from './App.vue';

Vue.use(VueOnsen);

const app = new Vue(App).$mount('#app');
