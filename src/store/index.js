import Vue from 'vue'
import Vuex from 'vuex'
import staff from './staff'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
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
		sort: [
			{title: 'Имя', value: true},
			{title: 'Дата рождения', value: false},
		],
		archive: false,
		currentRole: 'cook',
		sortByName: true,
		ascSort: true
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
	    },
	    setAscSortM(state, payload) {
	    	state.ascSort = payload
	    	console.log("asc sort: "+state.ascSort)
	    },
	    setCurrentSortM(state, payload) {
	    	state.sortByName = payload
	    	console.log("sortByName: " + payload)
	    },

	    updateStaffM(state, payload) {

		    let item = state.staff.findIndex(x => x.id === payload.id) //индекс обьекта в staff 
		    Object.keys(payload).forEach(function(key) {			//копируем по свойствам
			    state.staff[item][key] = payload[key];
			})
	    },
	    addWorkerM(state, payload) {
	    	console.log("addWorker")
	    	console.log(payload)
	    	var tmp = {}
	    	Object.keys(payload).forEach(function(key) {			//копируем по свойствам
			    tmp[key] = payload[key];
			})

	    	state.staff.push(tmp)
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
		setAscSort (context, payload) {
			context.commit('setAscSortM', payload)
		},
		setCurrentSort(context, payload) {
			context.commit('setCurrentSortM', payload)
		},
		updateStaff(context, payload) {
			context.commit('updateStaffM', payload)
		},
		addWorker(context, payload) {
			context.commit('addWorkerM', payload)
		}
	},

	getters: {

		getStaff(state) {

			function compareName(a,b) {
			  if (a.name < b.name)
			    return -1;
			  if (a.name > b.name)
			    return 1;
			  return 0;
			}

			function toDate(dateStr) {
			  const [day, month, year] = dateStr.split(".")
			  return new Date(year, month - 1, day)
			}

			function compareDate(a,b) {
				let d1 = toDate(a.birthday)
				let d2 = toDate(b.birthday)

				if (d1 > d2) return 1
  			if (d1 < d2) return -1
  			return 0
			}

			let result = state.staff.filter(function(item){
				return item.isArchive==state.archive && item.role==state.currentRole
			})

			if(state.sortByName)
				result.sort(compareName)
			else
				result.sort(compareDate)

			if(!state.ascSort)
				result.reverse()

			return result
		},

		getWorker(state) {
	      return keyword => state.staff.filter(item =>{
	        return item.id == keyword
	      });
    	}


	}
})
