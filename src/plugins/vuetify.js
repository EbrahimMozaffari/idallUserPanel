import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import fa from 'vuetify/es5/locale/fa'

Vue.use(Vuetify);

export default new Vuetify({
    rtl:true,
    lang: {
        locales: {fa},
        current: 'fa'
    }
});
