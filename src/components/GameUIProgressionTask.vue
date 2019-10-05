<template>
  <div class="GameUIProgression__task">
    <div class="GameUIProgression__task__checkbox" v-bind:class="checked ? 'checked' : ''"></div>
    <h2 class="GameUIProgression__task__text">{{ text }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'GameUIProgressionTask',
    props: ['checked', 'text']
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUIProgressionTask';
</style>
