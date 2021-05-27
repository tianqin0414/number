import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/icon/local.css';
import './assets/scss/global.scss';
import './utils/rem';
import axios from 'axios';

Vue.config.productionTip = false

import {Icon,Tabbar,TabbarItem} from  'vant'

Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);

new Vue({
    router,
  store,
  render: h => h(App)
}).$mount('#app')
