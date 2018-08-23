// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "@/assets/css/wap.less";

Vue.config.productionTip = false

// Vue.directive('title', {
//   inserted: function (el, binding) {
//     document.title = el.dataset.title
// 		document.getElementById('headtitle').innerText = document.title
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
