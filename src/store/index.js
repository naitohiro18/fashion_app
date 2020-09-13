import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //dataの保存場所
    user: null
  },
  mutations: {
    //stateの情報をいじる
    addUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    // addUser(){
    //mutationsと連携
    // increment(context, payload){
    //context.commit('increment', payload);
    addUser(context, user) {
      context.commit("addUser", user);
    }
  },
  modules: {},
  getters: {}
});
