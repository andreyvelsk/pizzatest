import Vue from 'vue'
import Router from 'vue-router'

import Main from './pages/Main'
import Worker from './pages/Worker'
import WorkerAdd from './pages/WorkerAdd'

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
		},

		{
			path: '/addworker',
			component: WorkerAdd
		}
	],
	mode: 'history'
})