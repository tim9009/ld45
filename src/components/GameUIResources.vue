<template>
  <div class="GameUIResources UIpanel">
    <h1 class="UIpanel__title">Resources</h1>

    <div class="GameUIResources__resource">
        <h2 class="GameUIResources__resource__title">Oxygen</h2>
        <div class="GameUIResources__resource__indicator" value="100"></div>
    </div>

    <div class="GameUIResources__resource">
        <h2 class="GameUIResources__resource__title">Water</h2>
        <div class="GameUIResources__resource__indicator" value="50"></div>
    </div>

    <div class="GameUIResources__resource">
        <h2 class="GameUIResources__resource__title">Stamina</h2>
        <div class="GameUIResources__resource__indicator" value="20"></div>
    </div>

    <div class="GameUIResources__resource">
        <h2 class="GameUIResources__resource__title">Health</h2>
        <div class="GameUIResources__resource__indicator" value="100"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameUIResources'
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUIResources';
</style>
