<template>
    <div :class="$style.wrap">
        <div :class="$style.text">
            {{ showText.running }}
        </div>
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
    .wrap{
        height: 130px;
        background: linear-gradient(180deg, #EBE8F1 0%, #938AA1 0%, #50475D 100%);
        box-shadow: 0px 2px 8px 0px rgba(17, 19, 32, 0.5);
        border: 1px solid;
        border-image: linear-gradient(180deg, rgba(226, 224, 231, 1), rgba(102, 93, 115, 1), rgba(231, 228, 237, 1)) 1 1;
    }
    .text{
        text-align: center;
        font-size: 90px;
        font-family: ErasITC-Bold, ErasITC;
        font-weight: bold;
        color: #3D2E40;
        line-height: 105px;
        text-shadow: 0px 4px 5px rgba(51, 47, 76, 0.61);
        -webkit-text-stroke: 2px #FFFFFF;
        text-stroke: 2px #FFFFFF;
        background: linear-gradient(180deg, #DA9726 0%, #FFE1B3 24%, #DC9430 43%, #643A00 63%, #FFC166 78%, #744601 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
</style>