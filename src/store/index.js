import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  gameStarted: false,
  gameWon: false,
  gameLost: false,
  resources: {
    oxygen: 100,
    water: 100,
    stamina: 100,
    health: 100
  },
  tasks: [
    {
      id: 0,
      text: 'Test title',
      available: true,
      done: false,
    },
    {
      id: 1,
      text: 'Test title 2',
      available: false,
      done: false,
    }
  ],
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