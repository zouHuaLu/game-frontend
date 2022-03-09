<template>
    <div :class="$style.panel">
        <div :class="$style.time">
            <div :class="$style.min">
                <div :class="$style.unit">MIN</div>
                <div :class="$style.minute">{{min}}</div>
            </div>
            <div :class="$style.sec">
                <div :class="$style.unit">SEC</div>
                <div :class="$style.second">{{sec}}</div>
            </div>
        </div>
        <div :class="$style.tip">
            <span>Send Number</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    let min = ref('01')
    let sec = ref('39')
</script>
<style module lang="scss">
    .panel{
        width: 500px;
        display: flex;
        flex-direction: column;
        .time{
            display: flex;
            justify-content: space-around;
            .min{
                .minute{
                    font-size: 100px;
                    font-family: Impact;
                    color: #FFFFFF;
                    line-height: 122px;
                }

            }
            .sec{
                .second{
                    font-size: 100px;
                    font-family: Impact;
                    color: #FFFFFF;
                    line-height: 122px;
                }

            }
            .unit{
                font-size: 40px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #FFFFFF;
                line-height: 56px;
            }

        }
        .tip{

        }
    }
</style>