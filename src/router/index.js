import Vue from 'vue'
import Router from 'vue-router'

import Main from './pages/Main'
import Worker from './pages/Worker'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Main
		},

		{
			path: '/worker:id',
			component: Worker
		}
	],
	mode: 'history'
})