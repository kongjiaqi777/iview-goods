<!--<template>
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
</script>-->

<style>
html,body {
    width: 100%;
    height: 100%;
    background-color: #1c2438;
}
.login {
    width: 100%;
    height: 100%;
    background-color: #1c2438;
    position: relative;
}
.login .from-wrap{
    position: fixed;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -150px;
    width: 400px;
    height: 240px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 30px;
}
.login h2 {
    text-align: center;
    margin-bottom: 20px;
}
.login FormItem {
    margin-bottom: 15px;
}
.login .form-footer {
    text-align: right;
}
.ivu-form-item-required .ivu-form-item-label:before {
    display: none;
}
</style>
<template>
    <div class="login">
        <div class="from-wrap">
            <h2>登录</h2>
            <Form ref="loginData" :model="loginData" :rules="ruleValidate" :label-width="80">
                <FormItem label="Account" prop="phone">
                    <Input type="text" v-model="loginData.phone" placeholder="请输入账号"></Input>
                </FormItem>
                <FormItem label="Password" prop="password">
                    <Input type="password" v-model="loginData.password" placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem class="form-footer">
                    <Button type="primary" @click="handleSubmit">Submit</Button>
                    <Button type="ghost" @click="handleReset" style="margin-left: 8px">Reset</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      loginData: {
        phone:'',
        password:''
      },
      ruleValidate: {
        phone: [
            { required: true, message: '账号不能为空', trigger: 'blur' },
            { min: 3, max: 16, message: '账号长度3-16个字符', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string', min: 6, max: 16, message: '密码长度6-16个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs['loginData'].validate((valid) => {
        if (valid) {
            login(this.loginData).then(res => {
                if(res.data.info) {
                    
                }
                this.$router.push({ path: '/' });
            })
            this.$Message.success('提交成功!')
        } else {
            this.$Message.error('表单验证失败!')
        }
      })
    },
    handleReset () {
        this.$refs['loginData'].resetFields();
    }
  }
}
</script>