<template>
    <div :class="$style.header"></div>
    <el-tabs
        class="self_tabs"
        :class="$style.tabs"
        v-model="activeName"
        type="card"
        @tab-click="handleClick"
    >
        <el-tab-pane label="中控操作台" name="workstation">
            <WorkStationVue></WorkStationVue>
        </el-tab-pane>
        <el-tab-pane label="用户列表" name="users">用户列表</el-tab-pane>
    </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import WorkStationVue from './WorkStation.vue';
const activeName = ref('workstation')

const handleClick = (tab: string, event: Event) => {
    console.log(tab, event)
}
</script>
<style lang="scss" module>
.header {
    width: 100vw;
    height: 84px;
    background: #272b40;
}
.tabs {
    position: relative;
    top: -40px;
    left: 40px;
}
</style>
<style>
.self_tabs .el-tabs__nav {
    background: #ffffff;
    border-radius: 0px 4px 0px 0px;
    border: 1px solid #dcdfe6;
}
.self_tabs .el-tabs__nav .el-tabs__item {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #303133;
}
.self_tabs .el-tabs__nav .el-tabs__item.is-active {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #887bf2;
}
</style>