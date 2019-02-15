import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import cordovaLoader from './plugins/cordovaLoader'

Vue.config.productionTip = false

cordovaLoader(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})
