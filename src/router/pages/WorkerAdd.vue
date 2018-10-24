<template>
  <div id="workeradd">
  	<div class="container">
  			<div class="workeredit">
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
			  						<input type="tel" v-mask="'##.##.####'" class="form-control" placeholder="01.01.1900" v-model="worker.birthday">
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
						              <button type="button" class="btn btn-success" @click="addWorker">Сохранить</button>
						            </div>
			          			</div>
							</div>
		
			  		</div>
  				</form>
  			</div>

  			{{worker}}
  			<br>
  			{{this.$store.state.staff}}
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      worker: {
		id: 999,
		name: '',
		isArchive: false,
		role: 'cook',
		phone: '',
		birthday: ''
      },
    }
  },
  methods: {
  	addWorker() {
  		this.worker.id=this.$store.state.staff.length+1
  		if(this.$store.dispatch('addWorker', this.worker)){
  			console.log("dispatch addWorker: true")
  			alert("Данные добавлены")
  		}
  		else{
  			console.log("dispatch addWorker: false")
  			alert("Ошибка при добавлении")
  		}
  		
  	}
  },
  computed: {

	  selectRoles() {
	      return this.$store.state.roles
	    }
	},

	created() {
      console.log("Worker add created")
	    
	}
	  
}
</script>

<style lang="sass">
	.workeredit
		&_archive
		&_save
			text-align: right

</style>