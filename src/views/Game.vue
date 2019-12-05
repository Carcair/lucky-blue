<template>
  <div>
    <game-left />
    <game-mid />
    <game-right />
  </div>
</template>

<script>
import GameLeft from './../components/layout/GameLeft.vue';
import GameMid from './../components/layout/GameMid.vue'
import GameRight from './../components/layout/GameRight.vue';

export default {
  name: 'Game',
  components: {
    GameLeft,
    GameRight,
    GameMid
  }
}
</script>

<style scoped>

</style>