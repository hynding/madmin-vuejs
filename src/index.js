import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import LayoutModule from './layout/layout.module';
import UserModule from './user/user.module';

Vue.use(VueRouter);
Vue.use(VueMaterial);

new Vue({el: '#app',
  router:new VueRouter({
    routes: [].concat(UserModule.routes)
  }),
  template: '<layoutMain />',
  components: LayoutModule.components
});