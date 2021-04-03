import Vue from "vue";
import Vuex from "vuex";
import * as app from "./modules/app";
import * as user from "./modules/user";
import * as nationalCode from "./modules/nationalCode";

import * as activeLogins from "./modules/activeLogins";
import * as loginHistory from "./modules/loginHistory";
import * as documents from "./modules/documents";
Vue.use(Vuex);



export default new Vuex.Store({
  modules: {
    app,
    user,
    nationalCode,
    activeLogins,
    loginHistory,
    documents,
  },
});
