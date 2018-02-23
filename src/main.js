import Vue from 'vue'
import App from './App.vue'

module.exports.createApp = function() {
	return new Vue({
		el: '#app',
		template: '<App/>',
		components: {
			App,
		}

	})
}