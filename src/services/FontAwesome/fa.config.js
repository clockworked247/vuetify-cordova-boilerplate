// Font Awesome Configuration
import Vue from 'vue'

import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  faCoffee
} from '@fortawesome/free-solid-svg-icons'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faCoffee)
