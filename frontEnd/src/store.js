import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
      isLoading: false,
      token:'950cbc501ad7bca05bf2f80b4025e65b',
      role:'member'
    },
    mutations: {
        updateLoadingStatus(state, isLoading) {
            state.isLoading = isLoading;
        }
    }
})
export default store;