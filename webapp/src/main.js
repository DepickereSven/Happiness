import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import Default from './layouts/Default'
import Empty from './layouts/Empty'

Vue.component('default-layout', Default);
Vue.component('empty-layout', Empty);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
