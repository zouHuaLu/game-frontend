<script setup lang="ts">
import Game from './components/anchor/Game.vue'
</script>

<template>
  <div :class="$style.wrap">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" module>
.wrap {
  width: 100vw;
}
</style>
