export const namespaced = true;

export const state = {
  nationalCode: null,
};
export const getters = {
    GetUserNationalCode(state) {
        console.log('getters caled')
        return state.userInfo;
      },
};
export const mutations = {
  SET_NATIONALCODE(state, payload) {
    state.nationalCode = payload;
  },
};

export const actions = {
  async fetchNationalCode({ commit }) {
      try {
          const {data} = await axios.get("https://userpanelmock.idall.pro/users");
          
         commit("SET_NATIONALCODE", data.users[0]);
        //  await console.log(data.users[0],"action"); 
        //  return data.users[0];  
      } catch (error) {
          console.log(error);
      }
         
           },

           
 

 
};
