import axios from "axios";
import router from "@/router";
import store from "../store/index";
import mainAuth from '../plugins/auth';

axios.interceptors.request.use((config)=>{
  console.log('axios request');
  config.headers['Authorization'] = `Bearer ${mainAuth.accessToken}`;
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
store.dispatch("app/setOverlay",false);
      if (error.response.status === 404) {
        router.push({ name: "Page404" });
      } else if (error.response.status === 403) {
        router.push({ name: "Page404" });
      }
     
    return Promise.reject(error);
  },
);

export default axios;
