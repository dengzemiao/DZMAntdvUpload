import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入 antd
// $ npm i --save ant-design-vue
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
