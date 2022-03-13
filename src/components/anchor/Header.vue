<template>
    <div :class="$style.wrap">
        <div :class="$style.text">{{ showText.running }}</div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

let showText = reactive({
    running: 'Chip In',
    end: 'Congratulations'
})
</script>

<style module>
.wrap {
    height: 130px;
    background: linear-gradient(180deg, #ebe8f1 0%, #938aa1 0%, #50475d 100%);
    box-shadow: 0px 2px 8px 0px rgba(17, 19, 32, 0.5);
    border: 1px solid;
    border-image: linear-gradient(
            180deg,
            rgba(226, 224, 231, 1),
            rgba(102, 93, 115, 1),
            rgba(231, 228, 237, 1)
        )
        1 1;
}
.text {
    text-align: center;
    font-size: 90px;
    font-family: ErasITC-Bold, ErasITC;
    font-weight: bold;
    color: #3d2e40;
    line-height: 130px;
    text-shadow: 0px 4px 5px rgba(51, 47, 76, 0.61);
    -webkit-text-stroke: 2px #ffffff;
    text-stroke: 2px #ffffff;
    background: linear-gradient(
        180deg,
        #da9726 0%,
        #ffe1b3 24%,
        #dc9430 43%,
        #643a00 63%,
        #ffc166 78%,
        #744601 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>