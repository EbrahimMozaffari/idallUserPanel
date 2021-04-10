import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";

import mainAuth from '../plugins/auth';

// Containers
const TheContainer = () => import("@/containers/TheContainer");



// Views - Pages
const Page404 = () => import("@/views/pages/Page404");
const Page500 = () => import("@/views/pages/Page500");
 const Login = () => import("@/views/login/Login");
// const Register = () => import("@/views/pages/Register");


//panel Route
const PersonInfo = () => import("@/views/panel/PersonInfo");
const VerifyNationalCode = () => import("@/views/panel/VerifyNationalCode");

const Documents = () => import("@/views/panel/Documents");
const ActiveLogins = () => import("@/views/panel/ActiveLogins");
const LoginHistory = () => import("@/views/panel/LoginHistory");

const Dashboard = () => import("@/views/panel/Dashboard");

Vue.use(Router);

const router = new Router({
  mode: "history", 
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});
router.beforeResolve((to, from, next) => {
  // if(!mainAuth.isAuthenticated && to.name !== 'Login'){
  //   next({ name: 'Login' });
  //   //console.log(to);
  //   console.log("is Not Login");
  // }else if(mainAuth.isAuthenticated && to.name === 'Login'){
  //   next({ name: 'Home' });
  // }

  console.log("before resolve");
  store.dispatch("app/setOverlay", true);
  next();
});

router.afterEach((to, from) => {
  console.log("afterEach ");
  setTimeout(() => {
    store.dispatch("app/setOverlay", false);
  }, 3000);
});


mainAuth.useRouter(router);


export default router;

function configRoutes() {
  return [
    {
      path: "/",
      name: "Home",
     // component: Login,
      beforeEnter: (to, from, next) => {
        if(mainAuth.isAuthenticated){
          return next({name:'Panel'})
        }else{
          return next({name:'Login'})
        }
       
      }
     
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if(mainAuth.isAuthenticated){
          return next({name:'Panel'})
        }
        return next();
      }
     
    },
    {
      path: "/panel",
      redirect: "/panel/dashboard",
      name: "Panel",
      component: TheContainer,
      meta: {
        authName: mainAuth.authName
    },
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard,

        },
        {
          path: "personInfo",
          name: "PersonInfo",
          component: PersonInfo,
        //   meta: {
        //     authName: mainAuth.authName
        // },
        },
        {
          path: "verifyNationalCode",
          name: "VerifyNationalCode",
          component: VerifyNationalCode,
        },
        {
          path: "documents",
          name: "Documents",
          component: Documents,
        },
        {
          path: "activeLogins",
          name: "ActiveLogins",
          component: ActiveLogins,
        },
        {
          path: "loginHistory",
          name: "LoginHistory",
          component: LoginHistory,
        },
       
      ],
    },
    {
      path: "/pages",
      redirect: "/pages/404",
      name: "Pages",
      component: {
        render(c) {
          return c("router-view");
        },
      },
      children: [
        {
          path: "404",
          name: "Page404",
          component: Page404,
        },
        {
          path: "500",
          name: "Page500",
          component: Page500,
        },
       
        // {
        //   path: "register",
        //   name: "Register",
        //   component: Register,
        // },
      ],
    },
  ];
}
