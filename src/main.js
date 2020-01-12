// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './styles/index.scss'

import LazyLoad from 'vanilla-lazyload'

Vue.prototype.$lazyLoadVm = new LazyLoad({
  elements_selector: '.lazy'
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
