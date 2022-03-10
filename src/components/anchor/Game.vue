<script setup lang="ts">
import { ref } from 'vue'
import Header from './Header.vue'
import Timer from './Timer.vue'
import GamePlate from './GamePlate.vue'
// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <Header></Header>
  <div :class="$style.panel">
    <Timer></Timer>
    <GamePlate></GamePlate>
  </div>
</template>

<style lang="scss" module>
  .panel{
    padding: 75px 100px;
    background: linear-gradient(180deg, #515A88 0%, #414661 21%, #262B40 100%);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
