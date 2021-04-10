export const namespaced = true;

export const state = {
  userInfo: null,
};
export const getters = {
    GetUserData(state) {
        return state.userInfo;
      },
};
export const mutations = {
  SET_USERS(state, payload) {
    state.userInfo = payload;
  },
};

export const actions = {
  async fetchUser({ commit }) {
      try {
          const {data} = await axios.get("https://userpanelmock.idall.pro/users");
          
         commit("SET_USERS", data.users[0]);

      } catch (error) {
          console.log(error);
      }
         
           },

           
 

 
};
