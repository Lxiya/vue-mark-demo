//import dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

//import components
import Layout from './components/Layout'
import IndexPage from './pages/index'

Vue.use(VueRouter)
let router = new VueRouter({
	mode: 'history',
	routes: [{
		path: '/',
		component: IndexPage
	}]
})

new Vue({
	el: '#app',
	router,
	template: '<Layout/>',
	components: {
		Layout
	}
})
