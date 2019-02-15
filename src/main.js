import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import cordovaLoader from './plugins/cordovaLoader'
import store from './store'

Vue.config.productionTip = false

cordovaLoader(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
