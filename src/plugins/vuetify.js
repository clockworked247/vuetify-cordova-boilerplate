import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import fr from 'vuetify/es5/locale/fr'

Vue.use(Vuetify, {
  customProperties: true,
  iconfont: 'fa',
  lang: {
    locales: {
      fr
    },
    current: 'fr'
  }
})
