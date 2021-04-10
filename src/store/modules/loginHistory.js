export const namespaced = true;

export const state = {
  loginHistory: null,
};
export const getters = {
  GetLoginHistory(state) {
    return state.loginHistory;
  },
};
export const mutations = {
  SET_LOGINHISTORY(state, payload) {
    state.loginHistory = payload;
  },
};

export const actions = {
  async fetchLoginHistory({ commit }) {
    try {
      const { data } = await axios.get("https://userpanelmock.idall.pro/users");

      commit("SET_LOGINHISTORY", data.users[0]);
    } catch (error) {
      console.log(error);
    }
  },
};
