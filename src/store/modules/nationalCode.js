export const namespaced = true;

export const state = {
  nationalCode: null,
};
export const getters = {
  GetUserNationalCode(state) {
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
      const { data } = await axios.get("https://userpanelmock.idall.pro/users");

      commit("SET_NATIONALCODE", data.users[0]);
    } catch (error) {
      console.log(error);
    }
  },
};
