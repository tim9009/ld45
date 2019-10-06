import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  gameStarted: false,
  resources: {
  	oxygen: 100,
  	water: 100,
  	stamina: 100,
  	health: 100
  }
}

const mutations = {

}

const actions = {
  
}

const getters = {
  
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})