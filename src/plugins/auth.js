import Vue from "vue";
import { createOidcAuth, SignInType, LogLevel } from "vue-oidc-client";

const loco = window.location;
//const appRootUrl = 'https://my.accounts.idall.pro';
 const appRootUrl = `${loco.protocol}//${loco.host}${process.env.BASE_URL}`;

var mainOidc = createOidcAuth("main", SignInType.Window, appRootUrl, {
  authority: 'https://accounts.idall.pro',
  client_id: 'idall-user-panel',
  response_type: 'code',
  scope: 'openid profile phone',
  post_logout_redirect_uri: `${appRootUrl}logout`,
  //redirect_uri:"https://my.accounts.idall.pro/auth/signinwin/main",
  loadUserInfo: true,
});
Vue.prototype.$oidc = mainOidc;
export default mainOidc;

