<template>
  <div class="Game">
    <GameUIHeader/>

    <div class="GameUIContainerLeft">
      <GameUIProgression/>
      <GameUIResources/>
    </div>
    <GameUILog/>
  </div>
</template>

<script>
  import GameUIHeader from './GameUIHeader.vue'
  import GameUIProgression from './GameUIProgression.vue'
  import GameUIResources from './GameUIResources.vue'
  import GameUILog from './GameUILog.vue'

  export default {
    name: 'Game',
    components: {
      GameUIHeader,
      GameUIProgression,
      GameUIResources,
      GameUILog
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/Game';
</style>
