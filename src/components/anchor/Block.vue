<template>
    <div :class="$style.block">
        <img :class="$style.head_img" src="@/assets/imgs/head.svg" alt="head" />
        <div :class="$style.head_num">{{ headNum }}</div>
        <div :class="$style.person_num">1</div>
        <div :class="$style.roster" @click="openDialog">Roster</div>
    </div>
    <div class="self_dialog">
        <el-dialog v-model="dialogVisible" width="1100px">
            <template #title>
                <div :class="$style.header">
                    <img src="@/assets/imgs/winner.svg" alt="winner" />
                    <span :class="$style.title">Winner List</span>
                </div>
            </template>
            <div :class="$style.list">
                <div :class="$style.winner">
                    <img src="@/assets/imgs/WinnerCup.svg" alt="winnercup" />
                    <span>SingleMumOfTriplets</span>
                </div>
                <div :class="$style.winner">
                    <img src="@/assets/imgs/WinnerCup.svg" alt="winnercup" />
                    <span>SingleMumOfTriplets</span>
                </div>
                <div :class="$style.winner">
                    <img src="@/assets/imgs/WinnerCup.svg" alt="winnercup" />
                    <span>SingleMumOfTriplets</span>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
defineProps<{ headNum: number }>()
const dialogVisible = ref(false)
const openDialog = () => {
    dialogVisible.value = true
}
</script>
<style lang="scss" module>
.header {
    padding: 16px 0 15px 40px;
    width: 1060px;
    background: linear-gradient(360deg, #f9ebb5 0%, #f0d27e 100%);
    border-radius: 20px 20px 0px 0px;
    .title {
        font-size: 36px;
        font-family: Arial-BoldMT, Arial;
        font-weight: normal;
        color: #936d03;
        line-height: 42px;
        margin-left: 17px;
    }
}
.block {
    max-width: 300px;
    height: 380px;
    background: #404265;
    box-shadow: 0px 10px 10px 0px rgba(31, 32, 49, 0.79);
    border-radius: 20px;
    opacity: 0.9;
    text-align: center;
    position: relative;
    margin-right: 30px;
    &::after {
        content: "";
        display: block;
        height: 0;
        visibility: hidden;
        clear: both;
    }
}
.head_num {
    font-size: 72px;
    font-family: ErasITC-Bold, ErasITC;
    font-weight: bold;
    color: #3d2e40;
    line-height: 83px;
    -webkit-text-stroke: 1px #ffffff;
    text-stroke: 1px #ffffff;
    position: absolute;
    top: -10px;
    left: 125px;
}

.head_img {
    position: relative;
    right: 10px;
    top: -5px;
}
.person_num {
    font-size: 72px;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: #ffffff;
    line-height: 101px;
}
.roster {
    width: 280px;
    text-align: center;
    border-radius: 12px;
    opacity: 0.9;
    border: 2px solid #6064a8;
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 50px;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 11px;
    left: 8px;
}
.list {
    height: 500px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;
    .winner {
        width: 450px;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
            width: 36px;
            height: 36px;
        }
        span {
            line-height: 36;
            font-size: 36px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #000000;
            line-height: 50px;
        }
    }
}
</style>
<style lang="css">
.self_dialog .el-dialog {
    border-radius: 20px;
}
.self_dialog .el-dialog__header {
    padding: 0;
}
</style>