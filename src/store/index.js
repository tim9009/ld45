import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  astronautId: null,
  gameStarted: false,
  gameWon: false,
  gameLost: false,
  resources: {
    oxygen: 100,
    electricity: 100,
  },
  tasks: [],
  communication: {
    visible: false,
    image: '',
    sound: '',
    Text: ''
  }
}

const mutations = {

}

const actions = {
  clearCommunication(context) {
    state.communication = {
      visible: false,
      image: '',
      sound: '',
      Text: ''
    }
  },
  setCommunication(context, communication) {
    if(communication.image) {
      context.state.communication.image = communication.image
    }

    if(communication.sound) {
      context.state.communication.sound = communication.sound
    }

    if(communication.text) {
      context.state.communication.text = communication.text
    }
  }
}

const getters = {
  
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})