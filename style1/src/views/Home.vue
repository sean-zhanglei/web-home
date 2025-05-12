<template>
  <div class="home">
    <el-container>
      <!-- 头部导航 -->
      <el-header>
        <div class="header-brand">
          <img src="/assets/logo.png" alt="Logo" class="header-logo" />
          <h1 class="header-title">XX官网</h1>
        </div>

        <div class="pc-menu-container">
          <el-menu mode="horizontal" router class="pc-menu">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
          </el-menu>
          <div class="auth-buttons">
            <el-button @click="handleLoginClick(true)" type="text">登录</el-button>
            <el-button type="primary" @click="handleLoginClick(false)">注册</el-button>
          </div>
        </div>

        <div class="mobile-menu">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-menu" style="font-size: 24px; color: white"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="$router.push('/')">首页</el-dropdown-item>
              <el-dropdown-item @click.native="$router.push('/about')">关于我们</el-dropdown-item>
              <el-dropdown-item divided>
                <el-button
                  type="text"
                  @click.native="handleLoginClick(true)"
                  style="width: 100%; text-align: left; padding-left: 0"
                >
                  登录
                </el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button
                  type="text"
                  @click.native="handleLoginClick(false)"
                  style="width: 100%; text-align: left; padding-left: 0"
                >
                  注册
                </el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <!-- 主要内容 -->
      <el-main>
        <!-- 跑马灯 -->
        <el-carousel
          height="400px"
          :interval="3000"
          :autoplay="true"
          trigger="hover"
          arrow="always"
          indicator-position="outside"
          @change="handleCarouselChange"
        >
          <el-carousel-item v-for="item in 4" :key="item">
            <div
              class="carousel-item"
              :style="{ backgroundImage: `url(https://picsum.photos/1200/400?random=${item})` }"
              :class="`slide-${item}`"
            >
              <h3 class="slide-title">
                <span class="title-text">欢迎标语 {{ item }}</span>
              </h3>
            </div>
          </el-carousel-item>
        </el-carousel>

        <!-- 搜索框 -->
        <div class="search-container">
          <el-input placeholder="请输入产品关键词" v-model="searchInput" class="search-input">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        
        <!-- 搜索结果 -->
        <div class="search-result-container">
          <el-table
            ref="table"
            :data="filteredProducts"
            stripe
            style="width: 100%"
            :row-key="row => row.id"
            :default-sort="{ prop: 'name', order: 'ascending' }"
            border
            highlight-current-row
            empty-text="暂无数据"
            :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
            @selection-change="handleSelectionChange"
            :row-class-name="tableRowClassName"
          >
            <el-table-column
              prop="name"
              label="产品名称"
              width="180"
              sortable>
            </el-table-column>
            <el-table-column
              prop="description"
              label="产品描述"
              width="180"
              sortable>
            </el-table-column>
            <el-table-column
              label="操作"
              width="120"
              fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleViewDetail(scope.row)" plain>
                  查看
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- 产品展示 -->
        <div class="product-container">
          <h2 class="section-title">热门产品</h2>
          <el-row :gutter="20">
            <el-col v-for="product in products" :key="product.id" :xs="24" :sm="12" :md="8" :lg="6">
              <el-card class="product-card" shadow="hover">
                <div slot="header">
                  <span>{{ product.name }}</span>
                </div>
                <div class="product-content">
                  <p>{{ product.description }}</p>
                  <el-button type="primary" size="small">查看详情</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <!-- 功能介绍 -->
        <div class="feature-container">
          <h2 class="section-title">核心功能</h2>
          <el-row :gutter="20">
            <el-col v-for="feature in features" :key="feature.id" :xs="24" :sm="12" :md="8" :lg="6">
              <el-card class="feature-card" shadow="hover">
                <div slot="header">
                  <i :class="feature.icon" style="margin-right: 8px"></i>
                  <span>{{ feature.title }}</span>
                </div>
                <div class="feature-content">
                  <p>{{ feature.description }}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
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
      </el-main>

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
    </el-container>
    <el-dialog
      :title="loginTitle"
      :visible.sync="showLoginDialog"
      width="60%"
      center
      destroy-on-close
      v-if="showLoginDialog"
      ref="loginDialog"
    >
      <Login
        :key="'login-' + isLogin"
        :isLogin="isLogin"
        :from="from"
        @toggle="handleToggleMode"
        @success="showLoginDialog = false"
      >
      </Login>
    </el-dialog>
  </div>
</template>

<script>
import Login from '@/views/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  },
  data() {
    return {
      isLogin: true,
      from: 'pc',
      searchInput: '',
      showLoginDialog: false,
      titleOffset: 0,
      features: [
        {
          id: 1,
          title: '高效稳定',
          description: '采用先进架构设计，确保系统高效稳定运行',
          icon: 'el-icon-success'
        },
        {
          id: 2,
          title: '安全可靠',
          description: '多重安全防护机制，保障数据安全',
          icon: 'el-icon-lock'
        },
        {
          id: 3,
          title: '简单易用',
          description: '直观的操作界面，快速上手使用',
          icon: 'el-icon-user'
        },
        {
          id: 4,
          title: '多端支持',
          description: '支持PC、移动端等多种设备访问',
          icon: 'el-icon-mobile'
        }
      ],
      tableColumns: [
        {
          prop: 'name',
          label: '产品名称', 
          width: '180',
          sortable: true
        },
        {
          prop: 'description',
          label: '产品描述',
          sortable: true  
        },
        {
          prop: 'operation',
          label: '操作',
          width: '120',
          fixed: 'right'
        }
      ],
      products: [
        {
          id: 1,
          name: '企业级解决方案',
          description: '为企业提供全面的数字化转型解决方案'
        },
        {
          id: 2,
          name: '数据分析平台',
          description: '强大的数据分析工具，助力企业决策'
        },
        {
          id: 3,
          name: '智能客服系统',
          description: '基于AI的智能客服解决方案'
        },
        {
          id: 4,
          name: '云存储服务',
          description: '安全可靠的云端存储解决方案'
        },
        {
          id: 5,
          name: '移动办公套件',
          description: '随时随地高效办公的移动解决方案'
        },
        {
          id: 6,
          name: '安全防护系统',
          description: '全方位保护企业信息安全'
        },
        {
          id: 7,
          name: '自动化运维平台',
          description: '提升IT运维效率的自动化工具'
        },
        {
          id: 8,
          name: '营销自动化',
          description: '智能化的营销活动管理平台'
        },
        {
          id: 9,
          name: '客户关系管理',
          description: '全面管理客户关系的专业系统'
        },
        {
          id: 10,
          name: '供应链管理',
          description: '优化企业供应链管理的解决方案'
        },
        {
          id: 11,
          name: '人力资源系统',
          description: '高效管理企业人力资源的平台'
        },
        {
          id: 12,
          name: '财务管理系统',
          description: '专业的企业财务管理工具'
        }
      ]
    }
  },
  computed: {
    loginTitle() {
      return this.isLogin ? '用户登录' : '用户注册'
    },
    filteredProducts() {
      // 创建完全非响应式的纯数据拷贝
      const productsCopy = []
      for (const product of this.products) {
        productsCopy.push({
          id: product.id,
          name: product.name,
          description: product.description
        })
      }
      Object.freeze(productsCopy) // 冻结数组防止修改
      productsCopy.forEach(p => Object.freeze(p)) // 冻结每个对象

      if (!productsCopy || !Array.isArray(productsCopy)) {
        console.error('Products data is invalid:', productsCopy)
        return []
      }

      const result = !this.searchInput
        ? productsCopy.slice(0, 10)
        : productsCopy.filter(product => {
            const query = this.searchInput.toLowerCase()
            const name = product.name.toLowerCase()
            const desc = product.description.toLowerCase()
            return name.includes(query) || desc.includes(query)
          })
      console.log('Filtered products:', result)
      this.$nextTick(() => {
        console.log('Table data updated:', this.$refs.table.data)
      })
      return result
    },
  },
  methods: {
    handleToggleMode() {
      this.$set(this, 'isLogin', !this.isLogin)
    },
    handleViewDetail(product) {
      this.$message.info(`查看产品: ${product.name}`)
    },
    handleLoginClick(isLogin) {
      if (window.innerWidth > 768) {
        this.isLogin = isLogin
        this.showLoginDialog = true
        // 强制重新渲染Login组件
        this.$nextTick(() => {
          if (this.$refs.loginDialog) {
            this.$refs.loginDialog.$forceUpdate()
          }
        })
      } else {
        this.$router.push('/login' + '?isLogin=' + isLogin)
      }
    },
    handleCarouselChange(currentIndex) {
      // 随机生成标题偏移量，创造动态效果
      this.titleOffset = Math.random() * 20 - 10
    },
    handleSelectionChange(val) {
      console.log('Selected rows:', val)
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'even-row'
      }
      return 'odd-row'
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.el-header {
  background-color: #2c3e50;
  color: white;
  height: 60px;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-logo {
  height: 40px;
  border-radius: 8px;
  object-fit: contain;
}

.header-title {
  color: white;
  font-size: 24px;
  margin: 0;
  font-weight: 500;
  min-width: 100px;
}

.el-menu {
  background-color: transparent;
  border-bottom: none;
}

.el-menu--horizontal {
  height: 60px;
}

.el-menu-item {
  color: white !important;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  margin: 0 10px;
  padding: 0 15px !important;
}

.el-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-bottom: 2px solid #409eff !important;
}

.el-menu-item.is-active {
  color: #409eff !important;
  border-bottom: 2px solid #409eff !important;
}

.el-main {
  padding: 0;
}

.carousel-item {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-size: cover;
  background-position: center;
  perspective: 1000px;
}

.el-carousel__item {
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 1s;
  transform-style: preserve-3d;
}

.el-carousel__item.is-animating {
  transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.carousel-item:hover {
  transform: scale(1.02);
}

.slide-title {
  transition: all 0.6s ease-out;
  text-align: center;
  transform: translateY(v-bind(titleOffset + 'px'));
}

.title-text {
  display: inline-block;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transform: rotateY(20deg);
  transition: all 0.5s ease;
  font-size: 36px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel-item:hover .title-text {
  transform: rotateY(0deg) scale(1.1);
}

/* 指示器样式 */
.el-carousel__indicator {
  padding: 12px 4px;
}

.el-carousel__button {
  width: 20px;
  height: 6px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
}

.el-carousel__indicator.is-active .el-carousel__button {
  width: 30px;
  background-color: #409eff;
}

/* 箭头样式 */
.el-carousel__arrow {
  width: 50px;
  height: 50px;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.8);
  transition: all 0.3s;
}

.el-carousel__arrow:hover {
  background-color: rgba(0, 0, 0, 0.6);
  transform: scale(1.1);
}

.search-container {
  padding: 40px;
  max-width: 1200px;
  margin: 20px auto;
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

.search-result-container {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 20px;
}

.search-result-container >>> .el-table {
  margin-top: 20px;
  font-size: 14px;
  width: 100% !important;
}

.search-result-container >>> .el-table th {
  background-color: #f5f7fa;
  font-weight: bold;
  padding: 12px 0;
}

.search-result-container >>> .el-table td {
  padding: 12px 0;
}

.search-result-container >>> .el-table .cell {
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-result-container >>> .el-table--border {
  border: 1px solid #ebeef5;
  border-right: 0;
  border-bottom: 0;
}

.search-result-container >>> .el-table--border th {
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}

.search-result-container >>> .el-table--border td {
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}

.search-result-container >>> .el-table__body-wrapper {
  overflow-x: auto;
}

.search-result-container >>> .el-table__fixed,
.search-result-container >>> .el-table__fixed-right {
  height: 100% !important;
}

.search-result-container >>> .el-table .even-row {
  background-color: #fafafa;
}
.search-result-container >>> .el-table .odd-row {
  background-color: #ffffff;
}

.product-container {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.feature-container {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
}

.feature-card {
  margin-bottom: 20px;
  height: 100%;
  border-radius: 8px;
}

.feature-card >>> .el-card__header {
  background-color: #f0f7ff;
  border-bottom: 1px solid #e6e6e6;
}

.feature-card i {
  color: #409eff;
  font-size: 20px;
}

.feature-content {
  min-height: 100px;
  padding: 10px;
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

.product-card {
  margin-bottom: 20px;
  height: 100%;
}

.product-content {
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

/* 菜单列样式 */
.menu-col {
  display: flex;
  justify-content: flex-end;
}

/* PC端菜单容器 */
.pc-menu-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  width: 100%;
  color: #ffffff;
}

@media (max-width: 768px) {
  .pc-menu-container {
    display: none !important;
  }
}

.right-menu-group {
  display: flex;
  align-items: center;
}

.auth-buttons {
  display: flex;
  gap: 10px;
  margin-left: 20px;
}

@media (max-width: 768px) {
  .auth-buttons {
    display: none !important;
  }
}

.pc-menu {
  margin-right: 20px;
}

/* 移动端菜单样式 */
.mobile-menu {
  display: none;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

/* 移动端菜单样式 */
.mobile-menu {
  display: none; /* 默认隐藏 */
  justify-content: flex-end;
  align-items: center;
}

@media (max-width: 768px) {
  .mobile-menu {
    display: flex; /* 只在移动端显示 */
  }

  .pc-menu {
    display: none !important; /* 确保移动端不显示PC菜单 */
  }
}

.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 60px;
}

@media (max-width: 768px) {
  .logo {
    font-size: 18px;
  }

  .search-input {
    width: 90%;
  }

  .product-container {
    padding: 20px;
  }
}
</style>
