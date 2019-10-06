<template>
  <div class="GameUIResources UIpanel">
    <h1 class="UIpanel__title">Mission Status</h1>

    <div class="GameUIResources__resource">
        <h2 class="GameUIResources__resource__title">Oxygen</h2>
        <div class="GameUIResources__resource__indicator" v-bind:value="resources.oxygen"></div>
    </div>

    <div class="GameUIResources__resource">
        <h2 class="GameUIResources__resource__title">Electricity</h2>
        <div class="GameUIResources__resource__indicator" v-bind:value="resources.electricity"></div>
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
          electricity: Math.floor(store.state.resources.electricity)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUIResources';
</style>
