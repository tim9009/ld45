<template>
  <div class="Game">
    <canvas id="vroom-canvas"></canvas>

    <GameUIHeader/>

    <transition name="load">
      <div class="GameUIStartScreen" v-if="!gameStarted">
        <div class="GameUIStartScreen__login UIpanel">
          <img class="GameUIStartScreen__logo" src="../assets/logo.png">

          <label>Username</label>
          <input type="text">

          <label>Password</label>
          <input type="password">
          <a class="GameUIStartButton button" v-on:click="start">Connect to mission control</a>
        </div>
        <div class="GameUIStartScreen__postit">
          Username: totallysafe<br/>
          Password: abc123
        </div>

        <div class="GameUIStartScreen__loading">
          <h1 class="GameUIStartScreen__loading__title">Connecting...</h1>
          <div class="GameUIStartScreen__loading__indicator"></div>
        </div>
      </div>
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

  import GameUIHeader from './GameUIHeader.vue'
  import GameUIProgression from './GameUIProgression.vue'
  import GameUIResources from './GameUIResources.vue'
  import GameUILog from './GameUILog.vue'

  // Import game and engine files
  import game from '@/game/main'

  export default {
    name: 'Game',
    components: {
      GameUIHeader,
      GameUIProgression,
      GameUIResources,
      GameUILog
    },
    methods: {
      start(e) {
        e.preventDefault()
        game.initEngine()
        game.startGame()
        console.log('Game started!')
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

  .load-leave-active {
    .GameUIStartScreen__loading__indicator:after {
      transition: all 2s ease-in;
    }
  }

  .load-leave {
    .GameUIStartScreen__login,
    .GameUIStartScreen__postit  {
      display: none;
    }

    .GameUIStartScreen__loading {
      display: block;

      &__idicator:after {
        width: 0;
      }
    }
  }

  .load-leave-to {
    .GameUIStartScreen__loading__indicator:after {
      width: 100%;
    }
  }
</style>
