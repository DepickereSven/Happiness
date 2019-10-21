import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        voted: null,
        login: null
    },
    plugins: [createPersistedState({
        paths: ["voted"]
    })],
    mutations: {
        updateVoted(state, newDate) {
            state.voted = newDate;
        },
        updateLogin(state, newLogin) {
            state.login = newLogin
        }
    },
    actions: {},
    modules: {}
})
