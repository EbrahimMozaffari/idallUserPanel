import "core-js/stable";
import Vue from "vue";
import App from "./App";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";

import vuetify from "./plugins/vuetify";
import VueCompositionAPI from "@vue/composition-api";
import axios from "./plugins/axios";

import store from "./store/index";
import babelPolyfill from "babel-polyfill";
import moment from "moment-jalaali";

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.use(VueCompositionAPI);
window.axios = axios;
window.moment = moment;
// Vue.use(VueAxios, axios)
Vue.prototype.$log = console.log.bind(console);

new Vue({
  el: "#app",
  router,
  store,
  icons,
  template: "<App/>",
  vuetify,
  components: {
    App,
  },
});
