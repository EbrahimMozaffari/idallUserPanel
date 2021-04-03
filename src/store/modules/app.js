export const namespaced = true;

export const state = {
  sidebarShow: "responsive",
  sidebarMinimize: false,
  breadCrumItem:[]
};

export const mutations = {
  TOGGLE_SIDEBAR_DESKTOP(state) {
    const sidebarOpened = [true, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarOpened ? false : "responsive";
  },

  TOGGLE_SIDEBAR_MOBILE(state) {
    const sidebarClosed = [false, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarClosed ? true : "responsive";
  },
  SET(state, [variable, value]) {
    state[variable] = value;
  },
  SET_BREAD_CRUMBS(state,payload){
    state.breadCrumItem = payload;
  }
};

export const actions = {
  toggleSidebarDesktop({ commit }) {
    commit("TOGGLE_SIDEBAR_DESKTOP");
  },
  toggleSidebarMobile({ commit }) {
    commit("TOGGLE_SIDEBAR_MOBILE");
  },
  set({ commit }, payload) {
    commit("SET", [payload[0], payload[1]]);
  },
  setBreadCrumbs({ commit }, payload) {
    commit("SET_BREAD_CRUMBS",payload);
  },
};
