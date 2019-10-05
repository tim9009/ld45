<template>
  <div class="GameUIProgression UIpanel">
    <h1 class="UIpanel__title">Mission plan (revised)</h1>
    <div class="GameUIProgression__task">
      <div class="GameUIProgression__task__checkbox"></div>
      <h2 class="GameUIProgression__task__text">Gather fire sticks.</h2>
    </div>

    <div class="GameUIProgression__task">
      <div class="GameUIProgression__task__checkbox checked"></div>
      <h2 class="GameUIProgression__task__text">Survive and don't die and such, you know?</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameUIProgression'
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUIProgression';
</style>
