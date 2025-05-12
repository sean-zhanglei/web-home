<template>
  <div class="login-form-container">
    <div class="form-header">
      <h3>{{ isLogin ? '账号登录' : '账号注册' }}</h3>
      <el-button type="text" @click="toggleMode" class="toggle-btn">
        {{ isLogin ? '注册账号' : '已有账号？登录' }}
      </el-button>
    </div>

    <el-form
      :model="currentForm"
      :rules="currentRules"
      ref="authForm"
      @submit.native.prevent="handleSubmit"
    >
      <el-form-item prop="username">
        <el-input
          v-model="currentForm.username"
          prefix-icon="el-icon-user"
          :placeholder="isLogin ? '请输入用户名' : '4-16位字母数字组合'"
        >
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="currentForm.password"
          prefix-icon="el-icon-lock"
          :placeholder="isLogin ? '请输入密码' : '6-20位密码'"
          show-password
        >
        </el-input>
      </el-form-item>

      <el-form-item v-if="!isLogin" prop="confirmPassword">
        <el-input
          v-model="registerForm.confirmPassword"
          prefix-icon="el-icon-lock"
          placeholder="请再次输入密码"
          show-password
        >
        </el-input>
      </el-form-item>

      <el-form-item v-if="!isLogin" prop="email">
        <el-input
          v-model="registerForm.email"
          prefix-icon="el-icon-message"
          placeholder="请输入邮箱"
        >
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit" class="submit-btn">
          {{ isLogin ? '登录' : '注册' }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    isLogin: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      registerRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 16, message: '长度在4到16个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在6到20个字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: this.validatePassword, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  computed: {
    currentForm() {
      return this.isLogin ? this.loginForm : this.registerForm
    },
    currentRules() {
      return this.isLogin ? this.loginRules : this.registerRules
    }
  },
  methods: {
    toggleMode() {
      this.$emit('toggle')
      this.$nextTick(() => {
        this.$refs.authForm.clearValidate()
      })
    },
    validatePassword(rule, value, callback) {
      if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    },
    handleSubmit() {
      this.$refs.authForm.validate(valid => {
        if (valid) {
          this.$emit('success')
        }
      })
    }
  }
}
</script>

<style scoped>
.login-form-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.form-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  text-align: center;
}

.form-header h3 {
  font-size: 22px;
  color: #333;
  font-weight: 600;
  margin: 0 0 10px 0;
}

.toggle-btn {
  color: #409eff;
  font-weight: 500;
  padding: 5px 0;
}

.submit-btn {
  width: 100%;
  height: 44px;
  font-size: 16px;
}

.el-form-item {
  margin-bottom: 22px;
}

/* 移动端样式 */
@media (max-width: 768px) {
  .login-form-container {
    padding: 15px;
    box-shadow: none;
    border-radius: 0;
    overflow: hidden;
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    box-sizing: border-box;
  }

  .form-header {
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    text-align: center;
  }

  .form-header h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .toggle-btn {
    align-self: center;
    margin-bottom: 5px;
  }

  .el-input__inner {
    height: 40px;
    font-size: 14px;
  }

  .el-form-item {
    margin-bottom: 15px;
  }

  .submit-btn {
    height: 40px;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
