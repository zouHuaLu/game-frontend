<template>
    <div>
        <el-form :inline="true" :model="formInlineData" class="demo-form-inline">
            <el-form-item>
                <el-date-picker
                    v-model="formInlineData.timeValue"
                    type="datetime"
                    placeholder="Enter time"
                ></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-input v-model="formInlineData.nickName" placeholder="输入中奖用户昵称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :class="$style.btn" @click="onSearch()">搜索</el-button>
            </el-form-item>
        </el-form>

        <div :class="$style.table">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="场次时间" width="180" />
                <el-table-column prop="num" label="获胜号码" width="180" />
                <el-table-column prop="priceNum" label="中奖用户数" />
                <el-table-column prop="priceName" label="中奖名单" />
                <el-table-column label="Operations">
                    <template #default="scope">
                        <el-button
                            :class="$style.action_btn"
                            type="text"
                            @click="checkName(scope.$index, scope.row)"
                        >查看名单</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const formInlineData = reactive({
    timeValue: '',
    nickName: ''
})

const timeValue = ref('')

const tableData = [
    {
        date: '2016-05-03',
        num: 5,
        priceNum: 'No. 189, Grove St, Los Angeles',
        priceName: '1'
    },
    {
        date: '2016-05-02',
        num: 5,
        priceNum: 'No. 189, Grove St, Los Angeles',
        priceName: '2'
    },
    {
        date: '2016-05-04',
        num: 5,
        priceNum: 'No. 189, Grove St, Los Angeles',
        priceName: '2'
    },
    {
        date: '2016-05-01',
        num: 5,
        priceNum: 'No. 189, Grove St, Los Angeles',
        priceName: '2'
    },
]

const onSearch = () => {

}

const checkName = (e, row) => {
    console.log(e, row)

}
</script>

<style lang="scss" module>
.btn {
    width: 68px;
    height: 36px;
    background: linear-gradient(180deg, #bb9bf1 0%, #887bf2 100%);
    border-radius: 4px;

    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 14px;
}
.table {
    margin-top: 37px;
}
.action_btn {
    width: 56px;
    height: 14px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #887bf2;
    line-height: 14px;
}
</style>