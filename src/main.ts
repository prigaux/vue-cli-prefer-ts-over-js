import Vue from 'vue'
import { f1 } from './foo'

new Vue({
  render: function (createElement) {
    return createElement('span', f1())
  },
}).$mount('#app')
