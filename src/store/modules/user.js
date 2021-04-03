export const namespaced = true;

export const state = {
  userInfo: null,
};
export const getters = {
    GetUserData(state) {
        console.log('getters caled')
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
        //  await console.log(data.users[0],"action"); 
        //  return data.users[0];  
      } catch (error) {
          console.log(error);
      }
         
           },

           
 

 
};
