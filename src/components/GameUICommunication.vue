<template>
  <div class="GameUICommunication UIpanel">
    <h1 class="UIpanel__title">Communication from mission commander</h1>
    <div class="grid grid--marginsXY">
      <div class="GameUICommunication__media col-small-6">
        <img v-bind:src="communication.image">

        <audio ref="audio" v-if="communication.sound" controls>
          <source v-bind:src="communication.sound">
          Your browser does not support the audio element.
        </audio>
      </div>

      <div class="GameUICommunication__text col-small-6">
        <p>{{ communication.text }}</p>
      </div>
    </div>
    <a href="#" class="button" v-on:click="closeCommunication">Close communication</a>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'GameUICommunication',
    methods: {
      closeCommunication(e) {
        e.preventDefault()
        store.dispatch('clearCommunication')
      }
    },
    mounted() {
      this.$refs.audio.play()
      console.log('Communication compontent updated!')
    },
    computed: {
      communication() {
        return store.state.communication
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUICommunication';
</style>
