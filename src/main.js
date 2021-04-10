import "core-js/stable";
import Vue from "vue";
import App from "./App";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import {iconsSet as icons} from "./assets/icons/icons.js";

import vuetify from "./plugins/vuetify";
import VueCompositionAPI from "@vue/composition-api";
import axios from "./plugins/axios";

import store from "./store/index";
import babelPolyfill from "babel-polyfill";
import moment from "moment-jalaali";

import mainOidc from "./plugins/auth";

void (async function () {

    Vue.config.performance = true;
    Vue.use(CoreuiVue);
    Vue.use(VueCompositionAPI);
    window.axios = axios;
    window.moment = moment;
    Vue.prototype.$log = console.log.bind(console);

// Oidc Event
    mainOidc.$on('accessTokenExpiring', function () {
        // eslint-disable-next-line no-console
        console.log('access token expiring');
    });

    mainOidc.$on('accessTokenExpired', function () {
        // eslint-disable-next-line no-console
        console.log('access token expired');
    });

    mainOidc.$on('silentRenewError', function (err) {
        // eslint-disable-next-line no-console
        console.error('silent renew error', err);
    });

    mainOidc.$on('userLoaded', function (user) {
        // eslint-disable-next-line no-console
        console.log('user loaded', user);
    });

    mainOidc.$on('userUnloaded', function () {
        // eslint-disable-next-line no-console
        console.log('user unloaded');
    });

    mainOidc.$on('userSignedOut', function () {
        // eslint-disable-next-line no-console
        console.log('user signed out');
    });

    mainOidc.$on('userSessionChanged', function () {
        // eslint-disable-next-line no-console
        console.log('user session changed');
    });


    mainOidc.startup().then(ok => {
        if (ok) {
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

        }
    });
})()
