import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";

// Containers
const TheContainer = () => import("@/containers/TheContainer");



// Views - Pages
const Page404 = () => import("@/views/pages/Page404");
const Page500 = () => import("@/views/pages/Page500");
// const Login = () => import("@/views/pages/Login");
// const Register = () => import("@/views/pages/Register");


//panel Route
const PersonInfo = () => import("@/views/panel/PersonInfo");
const VerifyNationalCode = () => import("@/views/panel/VerifyNationalCode");

const Documents = () => import("@/views/panel/Documents");
const ActiveLogins = () => import("@/views/panel/ActiveLogins");
const LoginHistory = () => import("@/views/panel/LoginHistory");

const Home = () => import("@/views/panel/Home");

Vue.use(Router);

const router = new Router({
  mode: "hash", 
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});
router.beforeEach((to, from, next) => {
  console.log("before");
  store.dispatch("app/setOverlay", true);
  next();
});

router.afterEach((to, from) => {
  setTimeout(() => {
    store.dispatch("app/setOverlay", false);
  }, 3000);
});
export default router;

function configRoutes() {
  return [

    {
      path: "/",
      redirect: "/home",
      name: "Home",
      component: TheContainer,
      children: [
        {
          path: "home",
          name: "Home",
          component: Home,
        },
        {
          path: "personInfo",
          name: "PersonInfo",
          component: PersonInfo,
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
        //   path: "login",
        //   name: "Login",
        //   component: Login,
        // },
        // {
        //   path: "register",
        //   name: "Register",
        //   component: Register,
        // },
      ],
    },
  ];
}
