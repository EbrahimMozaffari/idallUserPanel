export const namespaced = true;

export const state = {
  activeLogins: null,
};
export const getters = {
  GetActiveLogins(state) {
    return state.activeLogins;
  },
};
export const mutations = {
  SET_ACTIVELOGINS(state, payload) {
    state.activeLogins = payload;
  },
};

export const actions = {
  async fetchActiveLogins({ commit }) {
    try {
      const { data } = await axios.get("https://userpanelmock.idall.pro/users");

      commit("SET_ACTIVELOGINS", data.users[0]);
      // await console.log(data.users[0],"action");
      //  return data.users[0];
    } catch (error) {
      console.log(error);
    }
  },
};
