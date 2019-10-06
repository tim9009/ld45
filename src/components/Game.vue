<template>
  <div class="Game">
    <canvas id="vroom-canvas" width="1920" height="1080"></canvas>

    <GameUIHeader/>

    <transition name="fade">
      <GameUILogin v-if="!gameStarted"/>
    </transition>

    <div class="GameUIContainerLeft" v-if="gameStarted">
      <GameUIProgression/>
      <GameUIResources/>
    </div>

    <GameUILog v-if="gameStarted"/>
  </div>
</template>

<script>
  import store from '@/store'

  import { Vroom } from '../game/vroom/vroom'

  import GameUILogin from './GameUILogin.vue'
  import GameUIHeader from './GameUIHeader.vue'
  import GameUIProgression from './GameUIProgression.vue'
  import GameUIResources from './GameUIResources.vue'
  import GameUILog from './GameUILog.vue'

  // Import game
  import game from '@/game/main'

  export default {
    name: 'Game',
    components: {
      GameUILogin,
      GameUIHeader,
      GameUIProgression,
      GameUIResources,
      GameUILog
    },
    created() {
      window.addEventListener("resize", this.handleWindowResize)
    },
    mounted() {
      game.initEngine()
    },
    destroyed() {
      window.removeEventListener("resize", this.handleWindowResize)
    },
    updated() {
      game.updateViewportSize()
      console.log('trigg')
    },
    methods: {
      handleWindowResize() {
        Vroom.updateSize()
      }
    },
    computed: {
      gameStarted() {
        return store.state.gameStarted
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/Game';
  .fade-leave-active {
    transition: all 150ms ease-in-out;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>
