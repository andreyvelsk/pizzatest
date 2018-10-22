import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		roles: [
			{title: 'Повар'},
			{title: 'Официант'},
			{title: 'Водитель'}
		],
		staff: null

	},

	mutations: {
	    setStaff(state, payload) {
	      state.staff = payload;
	    }
	},

    actions: {
		assyncSetStaff(context, payload) {
				context.commit('setStaff', payload)
		}
	},

	getters: {
		getRoles(state) {
			return state.roles
		},
		getStaff(state) {
			return state.staff
		}
	}
})
