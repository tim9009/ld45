<template>
  <div class="Game">
    <canvas id="vroom-canvas" width="1920" height="1080"></canvas>

    <GameUIHeader/>
    <transition name="fade">
      <GameUILogin v-if="!gameStarted"/>
    </transition>

    <transition name="fade">
      <GameUICommunication v-if="communicationVisible"/>
    </transition>

    <div class="GameUIContainerLeft" v-if="gameStarted">
      <GameUIProgression/>
      <GameUIResources/>
    </div>

    <GameUILog v-if="gameStarted"/>

    <transition name="fade">
      <GameUILoseScreen v-if="gameLost"/>
    </transition>

    <transition name="fade">
      <GameUIWinScreen v-if="gameWon"/>
    </transition>
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
  import GameUICommunication from './GameUICommunication.vue'
  import GameUILoseScreen from './GameUILoseScreen.vue'
  import GameUIWinScreen from './GameUIWinScreen.vue'

  // Import game
  import game from '@/game/main'

  export default {
    name: 'Game',
    components: {
      GameUILogin,
      GameUIHeader,
      GameUIProgression,
      GameUIResources,
      GameUILog,
      GameUICommunication,
      GameUILoseScreen,
      GameUIWinScreen
    },
    created() {
      window.addEventListener("resize", this.handleWindowResize)
    },
    mounted() {
      game.initEngine()
      console.log('initEngine');
    },
    destroyed() {
      window.removeEventListener("resize", this.handleWindowResize)
    },
    updated() {
      game.updateViewportSize()
    },
    methods: {
      handleWindowResize() {
        Vroom.updateSize()
      }
    },
    computed: {
      gameStarted() {
        return store.state.gameStarted
      },
      communicationVisible() {
        return store.state.communication.visible
      },
      gameLost() {
        return store.state.gameLost
      },
      gameWon() {
        return store.state.gameWon
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

  .fade-enter-active {
    transition: all 150ms ease-in-out;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-to {
    opacity: 1;
  }
</style>
