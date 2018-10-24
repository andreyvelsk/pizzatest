<template>
  <div id="worker">
  	<div class="container">
  			<div class="workeredit" v-if="!isError">
  				<form>
			  		<div class="form-group">
		
							<label for="name">ФИО</label>
			  			<input id="phone" class="form-control" placeholder="Иванов Иван" v-model="worker.name">
		
			  				<div class="row">
			  					<div class="col-md-6">
			  						<label for="phone">Телефон</label>
			  						<input id="phone" type="tel" v-mask="'+7 (###) ###-####'" class="form-control" placeholder="+7 (123) 456-7890" v-model="worker.phone">
			  					</div>
			  					
			  					<div class="col-md-6">
			  						<label for="birthday">Дата рождения</label>
			  						<input type="tel" v-mask="'##.##.####'" class="form-control" placeholder="01.01.1900" v-bind:value="worker.birthday">
			  					</div>
			  				</div>
		
							<div class="row align-items-end">
								<div class="col-md-6">
									<label>Должность</label>
									<select class="custom-select filter_role"
									v-model="worker.role"
									>
										<option 
										v-for="role of selectRoles"
										v-bind:value="role.dbtitle"
										:key="role.dbtitle"
										>{{role.title}}
										</option>
									</select>
								</div>
								<div class="col-md-3 col-6 workeredit_archive">
			            <div class="custom-control custom-checkbox">
			              <input type="checkbox" class="custom-control-input" id="archiveCheck"
			              v-model="worker.isArchive"
			              >
			              <label class="custom-control-label" for="archiveCheck">В архиве</label>
			            </div>
		          	</div>

		          	<div class="col-md-3 col-6 workeredit_save">
			            <div class="filter_addbutton">
			              <button type="button" class="btn btn-success" @click="createWorker">Сохранить</button>
			            </div>
          			</div>
							</div>
		
			  		</div>
  				</form>
  				{{worker}}
  				{{id}}
  			</div>

  			<div v-if="isError"><h1>Произошла ошибка</h1></div>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$router.currentRoute.params['id'],
      placeholder: '+7 (123) 456-7890',
      worker: {},
      isError: false
    }
  },
  methods: {
  	createWorker() {
  		console.log("createWorker")

  		//this.resource.save({}, this.worker)

  		this.$store.state.staff.push(this.worker)
  	}
  },
  computed: {

	  selectRoles() {
	      return this.$store.getters.getRoles
	    },
	  getWorkerById() {
	  	let result = this.$store.getters.getWorker(this.id)
	  	if (result.length > 0)
	  		return result
	  	else {
	  		console.log("no worker id")
	  		this.isError=true
	  		return "no worker"
	  	}
	  }
	},

	created() {
      console.log("Worker edit created")
	    //запись из api to vuex
	    if(this.$store.state.staff.length == 0){
	    	console.log("staff is empty. load staff from api")

		    this.resource = this.$resource('staff')
		    this.resource.get().then(response => response.json())
		    .then(staff => this.$store.dispatch('assyncSetStaff', staff)
		    	.then(this.worker=this.getWorkerById[0]))
	  	}
	  	else{
	  		this.worker=this.getWorkerById[0]
	  	}
	    
	},
	mounted() {

	}
	  
}
</script>

<style lang="sass">
	.workeredit
		&_archive
		&_save
			text-align: right

</style>