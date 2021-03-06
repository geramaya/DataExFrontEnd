import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueLogger from 'vuejs-logger'

const options = {
  isEnabled: true,
  logLevel : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : false,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});