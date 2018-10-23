export default {
	state: {
		staff: []
	},
	mutations: {
		setStaffFromApi(state, payload) {
	      state.staff = payload
	      console.log("Загружены данные из db.json")
	    }
	  },
  actions: {
  	assyncSetStaff(context, payload) {
		context.commit('setStaffFromApi', payload)

		}
  },
  getters: {
  	getStaff(state) {
			return state.staff.filter(function(item){
				return item.isArchive==state.archive && item.role==state.currentRole
			})
		}
  }
}