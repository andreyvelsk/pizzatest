import Vue from 'vue'
import Vuex from 'vuex'
import staff from './staff'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		//staff
	},
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
		archive: false,
		currentRole: 'cook'
	},

	mutations: {
	    setStaffFromApi(state, payload) {
	      state.staff = payload
	      console.log("Загружены данные из db.json")
	    },
	    setArchiveM(state, payload) {
	    	state.archive = payload
	    	console.log("archive state: " + payload)
	    },
	    setCurrentRoleM(state, payload) {
	    	state.currentRole = payload
	    	console.log("current role: " + payload)
	    }
	},

    actions: {
		assyncSetStaff(context, payload) {
			context.commit('setStaffFromApi', payload)

		},
		setArchive(context,payload) {
			context.commit('setArchiveM', payload)
			
		},
		setCurrentRole(context,payload) {
			context.commit('setCurrentRoleM', payload)
			
		},
	},

	getters: {
		getRoles(state) {
			return state.roles
		},
		getStaff(state) {
			return state.staff.filter(function(item){
				return item.isArchive==state.archive && item.role==state.currentRole
			})
		},
		getTest(state) {
			return state.test.filter(function(number){
				return number.dbtitle=="cook"
			})
		},

		getArchive(state) {
			return state.archive
		},
		getCurrentRole(state) {
			return state.currentRole
		}
	}
})
