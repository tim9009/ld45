<template>
  <div class="GameUIResources UIpanel">
    <h1 class="UIpanel__title">Resources</h1>

    <div class="GameUIResources__resource">
        <h2 class="GameUIResources__resource__title">Oxygen</h2>
        <div class="GameUIResources__resource__indicator" v-bind:value="resources.oxygen"></div>
    </div>

    <div class="GameUIResources__resource">
        <h2 class="GameUIResources__resource__title">Water</h2>
        <div class="GameUIResources__resource__indicator" v-bind:value="resources.water"></div>
    </div>

    <div class="GameUIResources__resource">
        <h2 class="GameUIResources__resource__title">Stamina</h2>
        <div class="GameUIResources__resource__indicator" v-bind:value="resources.stamina"></div>
    </div>

    <div class="GameUIResources__resource">
        <h2 class="GameUIResources__resource__title">Health</h2>
        <div class="GameUIResources__resource__indicator" v-bind:value="resources.health"></div>
    </div>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'GameUIResources',
    computed: {
      resources() {
        return {
          oxygen: Math.floor(store.state.resources.oxygen),
          water: Math.floor(store.state.resources.water),
          stamina: Math.floor(store.state.resources.stamina),
          health: Math.floor(store.state.resources.health)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUIResources';
</style>
