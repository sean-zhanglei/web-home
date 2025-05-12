<template>
  <div class="login-page">
    <div class="login-wrapper">
      <login-form
        :isLogin="isLoginFlag"
        @success="handleLoginSuccess"
        @toggle="handleToggleMode"
        ref="loginForm"
      >
      </login-form>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  props: {
    isLogin: {
      type: Boolean,
      default: undefined
    },
    from: {
      type: String,
      default: 'h5'
    }
  },
  data() {
    return {
      routeLogin: this.$route.query.isLogin === 'true'
    }
  },
  mounted() {},
  computed: {
    isLoginFlag() {
      return this.isLogin !== undefined ? this.isLogin : this.routeLogin
    }
  },
  components: {
    LoginForm
  },
  methods: {
    handleLoginSuccess() {
      if (this.isLoginFlag) {
        this.$message.success('登录成功')
      } else {
        this.$message.success('注册成功，请登录')
      }
      if (this.from === 'h5') {
        this.$router.push('/')
      } else {
        this.$emit('success')
      }
    },
    handleToggleMode() {
      this.$set(this, 'routeLogin', !this.routeLogin)
      if (this.$listeners.toggle) {
        this.$emit('toggle')
      }
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  background-color: white;
  overflow: hidden;
}
/* 移动端样式 */
@media (max-width: 768px) {
  .login-wrapper {
    width: 100%;
    max-width: 400px;
    padding: 20px;
  }

  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: white;
    overflow: hidden;
  }
}

html,
body {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>
