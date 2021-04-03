import axios from "axios";
import router from "@/router";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      router.push({ name: "Page404" });
    } else if (error.response.status === 403) {
      router.push({ name: "Page404" });
    }
    return Promise.reject(error);
  }
);

export default axios;
