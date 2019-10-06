<template>
  <div class="GameUIStartScreen">
      <div v-if="!loginDone" class="GameUIStartScreen__login UIpanel">
        <img class="GameUIStartScreen__logo" src="../assets/logo.png">
        <form v-on:submit="start">
          <label>Username</label>
          <input type="text">

          <label>Password</label>
          <input type="password">
          <input type="submit" class="GameUIStartButton button" v-on:click="start" value="Connect to offworld mission">
        </form>
      </div>

      <div v-if="!loginDone" class="GameUIStartScreen__postit">
        Username: totallysafe<br/>
        Password: abc123
      </div>

      <transition name="load" v-on:after-enter="afterLoad">
        <div v-if="loginDone" class="GameUIStartScreen__loading">
          <h1 class="GameUIStartScreen__loading__title">Connecting...</h1>
          <div class="GameUIStartScreen__loading__indicator"></div>
        </div>
      </transition>
  </div>
</template>

<script>
  import store from '@/store'

  // Import game
  import game from '@/game/main'

  export default {
    name: 'GameUILogin',
    data() {
      return {
        loginDone: false
      }
    },
    methods: {
      start(e) {
        e.preventDefault()
        this.loginDone = true
      },
      afterLoad() {
        game.startGame()
      }
    }
  }
</script>

<style lang="scss">
  .load-enter-active {
    transition: all 2s ease-out;
    .GameUIStartScreen__loading__indicator:after {
      transition: width 2s ease-out;
    }
  }

  .load-enter {
    .GameUIStartScreen__loading__indicator:after {
      width: 0;
    }
  }

  .load-enter-to {
    .GameUIStartScreen__loading__indicator:after {
      width: 100%;
    }
  }
</style>
