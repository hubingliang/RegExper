import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questionData: []
  },
  getters: {
    setQuestion: state => {
      return state.questionData
    }
  },
  mutations: {
    getQuestion(state, payload) {
      state.questionData = payload
    }
  },
  actions: {

  },
});
