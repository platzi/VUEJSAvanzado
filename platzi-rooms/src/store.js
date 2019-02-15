import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from './data.json';
import countObjectProperties from './utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...sourceData,
    user: null,
    authId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1',
    modals: {
      login: false,
    },
  },
  mutations: {
    SET_MODAL_STATE: (state, { name, value }) => {
      state.modals[name] = value;
    },
  },
  actions: {
    TOGGLE_MODAL_STATE: ({ commit }, { name, value }) => {
      commit('SET_MODAL_STATE', { name, value });
    },
  },
  getters: {
    modals: state => state.modals,
    authUser: state => state.users[state.authId],
    rooms: state => state.rooms,
    userRoomsCount: state => id => countObjectProperties(state.users[id].rooms),
  },
});
