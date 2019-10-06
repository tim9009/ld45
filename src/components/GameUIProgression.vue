<template>
  <div class="GameUIProgression UIpanel">
    <h1 class="UIpanel__title">Mission plan</h1>
    <GameUIProgressionTask v-for="task in tasks" v-bind:key="task.id" v-bind:done="task.done" v-bind:text="task.text"/>
  </div>
</template>

<script>
  import store from '@/store'

  import GameUIProgressionTask from './GameUIProgressionTask.vue'

  export default {
    name: 'GameUIProgression',
    components: {
      GameUIProgressionTask
    },
    computed: {
      tasks() {
        let availableTasks = []
        for( let task in store.state.tasks ) {
          if(store.state.tasks[task].available) {
            availableTasks.push(store.state.tasks[task])
          }
        }

        return availableTasks
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUIProgression';
</style>
