import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		roles: [
			{title: 'Повар', dbtitle: 'cook'},
			{title: 'Официант', dbtitle: 'waiter'},
			{title: 'Водитель', dbtitle: 'driver'}
		],
		staff: [],
		test: [
			{title: 'Повар', dbtitle: 'cook'},
			{title: 'Официант', dbtitle: 'waiter'},
			{title: 'Водитель', dbtitle: 'driver'}
		],
		archive: false

	},

	mutations: {
	    setStaffFromApi(state, payload) {
	      state.staff = payload
	    },
	    setArchiveM(state, payload) {
	    	state.archive = payload
	    }
	},

    actions: {
		assyncSetStaff(context, payload) {
			context.commit('setStaffFromApi', payload)
		},
		setArchive(context,payload) {
			context.commit('setArchiveM', payload)
			console.log(payload)
		}
	},

	getters: {
		getRoles(state) {
			return state.roles
		},
		getStaff(state) {
			return state.staff.filter(function(item){
				return item.isArchive==state.archive
			})
		},
		getTest(state) {
			return state.test.filter(function(number){
				return number.dbtitle=="cook"
			})
		},

		getArchive(state) {
			return state.archive
		}
	}
})