<template>
  <div class="GameUIWinScreen">
    <div>
      <h1>MISSION SUCCESSFUL</h1>
      <p>Sustainable foothold established</p>
      <p>Please report to your supervisor for a assignment</p>
      <a href="#" class="button" v-on:click="disconnect">Disconnect</a>
    </div>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'GameUIWinScreen',
    methods: {
      disconnect(e) {
        e.preventDefault()
        location.reload()
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUIWinScreen';
</style>
