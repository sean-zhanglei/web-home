<template>
  <div class="about-container">
    <el-container>
      <el-header>
        <h1>关于我们</h1>
      </el-header>

      <el-main>
        <el-card class="about-card">
          <div slot="header">
            <span>公司简介</span>
          </div>
          <div class="about-content">
            <p>我们是一家专注于技术创新的企业，致力于为客户提供优质的产品和服务。</p>
            <p>成立于2010年，经过多年发展，已成为行业领先的技术解决方案提供商。</p>
          </div>
        </el-card>

        <el-card class="about-card">
          <div slot="header">
            <span>联系我们</span>
          </div>
          <div class="about-content">
            <p><i class="el-icon-phone"></i> 电话: 400-123-4567</p>
            <p><i class="el-icon-message"></i> 邮箱: contact@company.com</p>
            <p><i class="el-icon-location"></i> 地址: 北京市海淀区科技园</p>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-container {
  min-height: 100vh;
}

.el-header {
  background-color: #21282F;
  color: white;
  text-align: center;
}

.el-header h1 {
  padding-top: 10px;
}

.about-card {
  margin-bottom: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.about-content p {
  margin: 10px 0;
  line-height: 1.8;
}

.el-icon-phone,
.el-icon-message,
.el-icon-location {
  margin-right: 10px;
  color: #409eff;
}
</style>
