<template>
	<div>
		<slide></slide>
    <!-- 搜索框 -->
    <div class="search-container">
      <el-input placeholder="请输入产品关键词" v-model="searchInput" class="search-input">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <!-- 平台能力 -->
    <div class="platform-container">
      <h2 class="section-title">平台能力</h2>
      <p class="platform-desc">我们的平台提供全方位的技术支持和服务保障</p>
      <div class="platform-image">
        <img
          src="https://picsum.photos/1200/400?random=5"
          alt="平台能力展示"
          style="width: 100%; border-radius: 8px"
        />
      </div>
    </div>

    <!-- 页脚 -->
    <el-footer>
      <div class="footer-container">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="8">
            <div class="footer-section">
              <h4>联系我们</h4>
              <p><i class="el-icon-phone"></i> 400-123-4567</p>
              <p><i class="el-icon-message"></i> service@company.com</p>
              <p><i class="el-icon-location"></i> 北京市朝阳区某某路88号</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="8">
            <div class="footer-section">
              <h4>关注我们</h4>
              <img src="https://picsum.photos/120/120" alt="微信公众号" class="qrcode" />
              <p>扫描二维码关注公众号</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="8">
            <div class="footer-section">
              <h4>友情链接</h4>
              <el-link :underline="false">合作伙伴1</el-link>
              <el-link :underline="false">合作伙伴2</el-link>
              <el-link :underline="false">合作伙伴3</el-link>
            </div>
          </el-col>
        </el-row>
        <div class="copyright">
          <div class="copyright-content">
            <span>© 2025 企业名称 版权所有</span>
            <span class="divider">|</span>
            <span>京ICP备12345678号-1</span>
            <span class="divider">|</span>
            <span>京公网安备11010502012345号</span>
            <span class="divider">|</span>
            <span>增值电信业务经营许可证：京B2-20251234</span>
          </div>
        </div>
      </div>
    </el-footer>
	</div>
</template>
<script>
import slide from 'components/slide'
export default{
	components: {
		slide
	}
}
</script>
<style scoped>
.search-container {
  padding: 40px;
  max-width: 1200px;
  margin: 2px auto;
  background-color: #f5f5f5;
}

.search-input {
  width: 100%;
}

.search-input >>> .el-input__inner {
  height: 50px;
  font-size: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.search-input >>> .el-input-group__append {
  background-color: #409eff;
}

.search-input >>> .el-input-group__append .el-button {
  color: white;
  font-size: 18px;
  padding: 0 20px;
}

.platform-container {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.platform-desc {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.platform-image {
  margin: 0 auto;
  max-width: 1200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.platform-image:hover {
  transform: scale(1.01);
}

@media (max-width: 768px) {
  .platform-container {
    padding: 20px;
  }

  .platform-desc {
    font-size: 16px;
  }
}

.el-footer {
  background-color: #2c3e50;
  color: white;
  padding: 40px 20px;
  height: auto !important;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  margin-bottom: 20px;
  text-align: center;
}

.footer-section h4 {
  margin-bottom: 15px;
  font-size: 18px;
}

.footer-section p {
  margin: 8px 0;
  color: #ddd;
}

.qrcode {
  width: 120px;
  height: 120px;
  margin: 10px auto;
  display: block;
}

.el-link {
  display: block;
  margin: 8px 0;
  color: #ddd !important;
}

.el-link:hover {
  color: #409eff !important;
}

.copyright {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #aaa;
  font-size: 14px;
}

.copyright-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.divider {
  color: rgba(255, 255, 255, 0.3);
  padding: 0 5px;
}

@media (max-width: 768px) {
  .copyright-content {
    flex-direction: column;
    gap: 5px;
  }

  .divider {
    display: none;
  }
}

@media (max-width: 768px) {
  .footer-section {
    margin-bottom: 30px;
  }

  .qrcode {
    width: 100px;
    height: 100px;
  }
}
</style>