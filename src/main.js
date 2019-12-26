import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
