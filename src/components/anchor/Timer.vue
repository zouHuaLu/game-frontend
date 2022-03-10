<template>
    <div :class="$style.panel">
        <div :class="$style.time">
            <div :class="$style.min">
                <div :class="$style.unit">MIN</div>
                <div :class="$style.minute">{{min}}
                </div>
            </div>
            <span :class="$style.sign">:</span>
            <div :class="$style.sec">
                <div :class="$style.unit">SEC</div>
                <div :class="$style.second">{{sec}}</div>
            </div>
        </div>
        <div :class="$style.tip">
            <div :class="$style.text">X1 <span :class="$style.and">and</span></div>
            <div :class="$style.text">Send Number</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    let min = ref('01')
    let sec = ref('39')
</script>
<style module lang="scss">
    .sign{
    font-size: 100px;
    font-family: Impact;
    color: #FFFFFF;
    line-height: 122px;
    }
    .panel{
        width: 30%;
        display: flex;
        flex-direction: column;
        .time{
            display: flex;
            justify-content: space-around;
            align-items: end;
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
            margin-top: 60px;
            background: linear-gradient(180deg, #4E4759 0%, #A9A2B6 10%, #7A7288 89%, #544C63 100%);
            border-radius: 20px;
            border: 3px solid;
            border-image: linear-gradient(180deg, rgba(64, 71, 98, 1), rgba(166, 158, 179, 1)) 3 3;
            text-align: center;
            .text{
                font-size: 39px;
                font-family: Arial-Black, Arial;
                font-weight: 900;
                color: #FFFFFF;
                line-height: 55px;
                text-shadow: 0px 2px 2px #3F4265;
            }
            .and{
                font-size: 39px;
                font-family: Arial-Black, Arial;
                font-weight: 900;
                color: #FFE28C;
                line-height: 55px;
                text-shadow: 0px 2px 2px #3F4265;
            }
        }
    }
</style>