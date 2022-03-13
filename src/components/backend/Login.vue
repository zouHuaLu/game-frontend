<template>
    <div :class="$style.card">
        <div :class="$style.demoruleForm">
            <div :class="$style.title">密码登录</div>
            <el-form ref="ruleFormRef" :class="$style.input_wrap" :model="ruleForm" :rules="rules">
                <el-form-item prop="username">
                    <el-input
                        v-model="ruleForm.username"
                        :class="$style.input"
                        type="text"
                        placeholder="请输入用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input
                        v-model="ruleForm.pass"
                        :class="$style.input"
                        show-password
                        type="password"
                        placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button :class="$style.btn" @click="submitForm(ruleFormRef)">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const ruleFormRef = ref()

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('密码不能为空'))
    } else {
        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('用户名不能为空'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    pass: '',
    username: '',
})

const rules = reactive({
    username: [{ validator: validatePass2, trigger: 'blur' }],
    pass: [{ validator: validatePass, trigger: 'blur' }],
})

const submitForm = (formEl) => {
    console.log(ruleForm)
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

</script>
<style module lang="scss">
.card {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #515a88 0%, #414661 21%, #262b40 100%);
    display: flex;
    justify-content: center;
    align-items: center;
}
.demoruleForm {
    width: 440px;
    background: #ffffff;
    box-shadow: 0px 10px 10px 0px #083654;
    border-radius: 10px;
    text-align: center;
    padding: 60px 40px 73px 40px;
}
.title {
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 22px;
    margin-bottom: 40px;
}
.input {
    width: 360px;
}
.btn {
    width: 360px;
    height: 45px;
    background: linear-gradient(180deg, #bb9bf1 0%, #887bf2 100%);
    border-radius: 2px;
}
.input_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>