import './assets/scss/main.scss'
window.Vue = require('vue')
window.axios = require('axios')

// eslint-disable-next-line no-undef
Vue.component('mainApp', require('./app.vue').default)

// eslint-disable-next-line no-undef
export const bus = new Vue();
// eslint-disable-next-line no-undef
const app = new Vue({
  el: '#app'
})
