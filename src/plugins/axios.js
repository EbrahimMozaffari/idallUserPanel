import axios from "axios";
import router from "@/router";
import store from "../store/index"

axios.interceptors.request.use((config)=>{
  console.log('axios request');
  store.dispatch("app/setOverlay",true);
  return config;
});

axios.interceptors.response.use(
  (response) => {
    store.dispatch("app/setOverlay",false);
    return response;
  },
  (error) => {
console.log(error,"error")
    if (error.response.status === 404) {
      router.push({ name: "Page404" });
    } else if (error.response.status === 403) {
      router.push({ name: "Page404" });
    }
    return Promise.reject(error);
  },
  ()=>{
  store.dispatch("app/setOverlay",false);
  }
);

export default axios;
