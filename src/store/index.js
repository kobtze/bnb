import Vue from 'vue'
import Vuex from 'vuex'

import houseStore from '@/modules/house.store.js'
import userStore from '@/modules/user.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        houseStore,
        userStore
    }
})