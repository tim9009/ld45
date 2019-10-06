<template>
  <div class="GameUILoseScreen">
    <div>
      <h1>MISSION TERMINATED</h1>
      <p>Vital signs lost and connection broken</p>
      <p>Please report to your supervisor immediately</p>
      <a href="#" class="button" v-on:click="disconnect">Disconnect</a>
    </div>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'GameUILoseScreen',
    methods: {
      disconnect(e) {
        e.preventDefault()
        location.reload()
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUILoseScreen';
</style>
