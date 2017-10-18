import Vue from 'vue';
import VueRouter from 'vue-router';
import VueLayout from '$layout'; // See webpack config alias for layout

import LayoutModule from '$layout/layout.module';
import UserModule from './user/user.module';

import '$layout/layout.scss';

Vue.use(VueRouter);
Vue.use(VueLayout);

new Vue({el: '#app',
  router:new VueRouter({
    routes: [].concat(UserModule.routes)
  }),
  template: '<layoutMain />',
  components: LayoutModule.components
});