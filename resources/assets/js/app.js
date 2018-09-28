require('./bootstrap')

window.Vue = require('vue');

import store from './store/index'

Vue.component('comment', require('./components/Comment'));
Vue.component('comments', require('./components/Comments'))
Vue.component('new-comment', require('./components/NewComment'))

const app = new Vue({
  el: '#app',
  store
});
