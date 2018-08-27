import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource  from 'vue-resource'
import App from './App.vue'
import store from './store/store'
import routes from './routes'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-trader-11.firebaseio.com/';

Vue.filter('currency', (value) => {
  return value.toLocaleString('en-GB', { style: 'currency', currency: 'EUR'});
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
