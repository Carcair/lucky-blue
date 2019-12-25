import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VAnimateCss from 'v-animate-css';
import VueHtmlToPaper from 'vue-html-to-paper';

Vue.use(VAnimateCss);

/*
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
}
Vue.use(VueHtmlToPaper, options);
*/


Vue.use(VueHtmlToPaper);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
