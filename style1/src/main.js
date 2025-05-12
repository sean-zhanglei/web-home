import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

// 按需引入特定组件
import {
  Header,
  Footer,
  Button,
  Input,
  Form,
  FormItem,
  Menu,
  MenuItem,
  Carousel,
  CarouselItem,
  Card,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Link,
  Main,
  Container,
  Message,
  Table,
  TableColumn
} from 'element-ui'

Vue.use(Header)
Vue.use(Footer)
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Card)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Link)
Vue.use(Main)
Vue.use(Container)
Vue.prototype.$message = Message
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
