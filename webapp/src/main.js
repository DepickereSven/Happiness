import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import Default from './layouts/Default'
import Empty from './layouts/Empty'
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

Vue.component('default-layout', Default);
Vue.component('empty-layout', Empty);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
