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
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const ruleFormRef = ref()

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
</script>
<style module lang="scss">
.btn {
    width: 90px;
    height: 36px;
    background: linear-gradient(180deg, #bb9bf1 0%, #887bf2 100%);
    border-radius: 4px;
}
</style>
<style>
.el-form-item__content {
}
</style>