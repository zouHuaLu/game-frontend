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
    <el-row justify="center" style="align-items: center;">
      <el-col :span="4">
        <Timer></Timer>
      </el-col>
      <el-col :span="16">
        <GamePlate></GamePlate>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" module>
.panel {
  padding: 75px 0;
  background: linear-gradient(180deg, #515a88 0%, #414661 21%, #262b40 100%);
  // display: flex;
  // justify-content: space-around;
  // align-items: center;
}
</style>
