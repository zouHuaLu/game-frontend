<template>
        <div :class="$style.block">
            <img :class="$style.head_img" src="@/assets/imgs/head.svg" alt="head">
            <div :class="$style.head_num">{{headNum}}</div>
            <div :class="$style.person_num">1</div>
            <div :class="$style.roster">Roster</div>
        </div>
</template>
<script lang="ts" setup>
    defineProps<{headNum:number}>()

</script>
<style lang="scss" module>
    .block{
        width: 300px;
        height: 380px;
        background: #404265;
        box-shadow: 0px 10px 10px 0px rgba(31, 32, 49, 0.79);
        border-radius: 20px;
        opacity: 0.9;
        text-align: center;
        position: relative;
        margin-right: 30px;
    }
    .head_num{
        font-size: 72px;
        font-family: ErasITC-Bold, ErasITC;
        font-weight: bold;
        color: #3D2E40;
        line-height: 83px;
        -webkit-text-stroke: 1px #FFFFFF;
        text-stroke: 1px #FFFFFF;
        position: absolute;
        top: -10px;
        left: 125px;
    }

    .head_img{
        position: relative;
        right: 10px;
        bottom: 5px;
    }
    .person_num{
        font-size: 72px;
        font-family: Arial-Black, Arial;
        font-weight: 900;
        color: #FFFFFF;
        line-height: 101px;
    }
    .roster{
        width: 280px;
        text-align: center;
        border-radius: 12px;
        opacity: 0.9;
        border: 2px solid #6064A8;
        font-size: 36px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 50px;
        text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
        position: absolute;
        bottom: 11px;
        left: 8px;
    }
</style>