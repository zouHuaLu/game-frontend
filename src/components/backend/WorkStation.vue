<template>
    <el-form
        ref="ruleFormRef"
        label-position="right"
        label-width="150px"
        :model="formLabelAlign"
        style="max-width: 550px"
        :rules="rules"
    >
        <el-form-item label="下注时长:" prop="time">
            <el-input v-model="formLabelAlign.time" placeholder="请输入下注时长"></el-input>
            <span>（单位:秒）</span>
        </el-form-item>
        <el-form-item label="选择参与的礼物:" prop="gift">
            <el-select v-model="formLabelAlign.gift" placeholder="选择礼物">
                <el-option label="火箭" value="火箭"></el-option>
                <el-option label="游艇" value="游艇"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button :class="$style.btn" @click="startGame(ruleFormRef)">开始</el-button>
            <el-button :class="$style.btn" @click="endGame(ruleFormRef)">结束</el-button>
        </el-form-item>
    </el-form>
    <div>
        <div :class="$style.title">选择中奖号码 参与人数</div>
        <div :class="$style.block_wrap">
            <template v-for="item in 8">
                <div
                    :class="[$style.block, item === activeBlock ? $style.active : '']"
                    @click="chooseNum(item)"
                >
                    <div :class="$style.price_num">{{ item }}</div>
                    <div :class="$style.people_num">1000</div>
                </div>
            </template>
        </div>
        <el-button :class="$style.show_result" @click="showResult()">展示结果</el-button>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const ruleFormRef = ref()
const activeBlock = ref(0)

const formLabelAlign = reactive({
    time: '',
    gift: '',
})

const rules = reactive({
    time: [{ required: true, message: '时长不能为空', trigger: 'blur' }],
    gift: [{ required: true, message: '礼物不能为空', trigger: 'change' }]
})

const startGame = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('提交成功', formLabelAlign)
        } else {
            console.log('提交失败')
            return false
        }
    })
}

const endGame = (formEl) => {
    console.log(formEl)
}

const showResult = () => {

}

const chooseNum = (e) => {
    activeBlock.value = e
}
</script>
<style module lang="scss">
.btn {
    width: 90px;
    height: 36px;
    background: linear-gradient(180deg, #bb9bf1 0%, #887bf2 100%);
    border-radius: 4px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 14px;
}
.title {
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 22px;
}
.block_wrap {
    margin-top: 36px;
    display: flex;
    flex-direction: row;
}
.block {
    width: 80px;
    height: 76px;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #d8dce6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
}
.price_num {
    font-size: 24px;
    font-family: Arial-BoldMT, Arial;
    font-weight: normal;
    color: #000000;
    line-height: 28px;
}
.people_num {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
}
.show_result {
    margin-top: 36px;
    width: 90px;
    height: 36px;
    background: linear-gradient(180deg, #bb9bf1 0%, #887bf2 100%);
    border-radius: 4px;

    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 14px;
}
.active {
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #887bf2;
}
</style>