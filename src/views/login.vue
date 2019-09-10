<template>
    <div class="login">
        <i-form ref="loginForm" :model="loginForm" :rules="loginRules" :label-width="80">
            <Form-item prop="username" label="">
                <i-input type="text" v-model="loginForm.phone" placeholder="请输入手机号">
                </i-input>
            </Form-item>

            <Form-item>
                <i-input type="password" v-model="loginForm.password" placeholder="请输入密码"></i-input>
            </Form-item>

            <Form-item>
                <i-button type="primary" long @click="clickLogin">登录</i-button>
            </Form-item>
        </i-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loginForm: {
                phone: '',
                password: ''
            }
        }
    },
    methods: {
        clickLogin () {
            this.$store.dispatch('LoginByPhone', this.loginForm).then(() => {
                this.$router.push({ path: '/' }); //登录成功之后重定向到首页
            }).catch(err => {
                this.$message.error(err); //登录失败提示错误
            });
        }
    }
}
</script>