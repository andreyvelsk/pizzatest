import Vue from 'vue'
import Router from 'vue-router'

import Worker from '@/pages/Worker'

Vue.use(Router)

export default {
	routes: [
		{
			path: '/worker/:id',
			component: Worker
		}
	],
	mode: 'history'
}