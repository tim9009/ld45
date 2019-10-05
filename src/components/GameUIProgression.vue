<template>
  <div class="GameUIProgression UIpanel">
    <h1 class="UIpanel__title">Mission plan (revised)</h1>
    <GameUIProgressionTask v-for="task in tasks" v-bind:key="task.id" v-bind:checked="task.checked" v-bind:text="task.text"/>
  </div>
</template>

<script>
  import GameUIProgressionTask from './GameUIProgressionTask.vue'
  export default {
    name: 'GameUIProgression',
    components: {
      GameUIProgressionTask
    },
    data() {
      return {
        tasks: [{
          id: 0,
          checked: false,
          text: 'This is a text'
        }]
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUIProgression';
</style>
