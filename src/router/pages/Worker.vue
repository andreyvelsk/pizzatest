<template>
  <div id="worker">
  	<div class="container">
  		<div class="pagetitle">
  			<h1>Изменить сотрудника</h1>
  		</div>
  			<div class="workeredit" v-if="!isError">
  				<form>
			  		<div class="form-group">
		
							<label for="name">Имя *</label>
			  			<input id="name" class="form-control" placeholder="Иванов Иван"
			  			v-model="$v.worker.name.$model"
			  			:class="{'is-invalid': $v.worker.name.$error}"
			  			>
			  			<div class="invalid-feedback" v-if="!$v.worker.name.required">Поле является обязательным</div>
		
		  				<div class="row">
		  					<div class="col-md-6">

		  						<label for="phone">Телефон *</label>
		  						<input id="phone" type="tel" v-mask="'+7 (###) ###-####'" class="form-control" 
		  						placeholder="+7 (123) 456-7890" 
		  						v-model="worker.phone"
		  						@blur="$v.worker.phone.$touch"
					  			:class="{'is-invalid': $v.worker.phone.$error}"
					  			>

		  						<div class="invalid-feedback" v-if="!$v.worker.phone.minLength">Неккоректный номер телефона</div>
		  						<div class="invalid-feedback" v-if="!$v.worker.phone.required">Поле является обязательным</div>
		  					</div>
		  					
		  					<div class="col-md-6">

		  						<label for="birthday">Дата рождения *</label>
		  						<input type="tel" v-mask="'##.##.####'" class="form-control" 
		  						placeholder="01.01.1900" 
		  						v-model="worker.birthday"
		  						@blur="$v.worker.birthday.$touch"
					  			:class="{'is-invalid': $v.worker.birthday.$error}"
		  						>

		  						<div class="invalid-feedback" v-if="!$v.worker.birthday.minLength">Неккоректная дата</div>
		  						<div class="invalid-feedback" v-if="!$v.worker.birthday.required">Поле является обязательным</div>
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
			              <button type="button" class="btn btn-success" 
			              @click="updateWorker"
			              :disabled="$v.$invalid"
			              >
			              Сохранить
			            	</button>
			            </div>
          			</div>

							</div>
		
			  		</div>
  				</form>

  				* - Обязательные поля
  			</div>

  			<div v-if="isError"><h1>Произошла ошибка</h1></div>
  	</div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      id: this.$router.currentRoute.params['id'],
      worker: {},
      isError: false
    }
  },
  validations: {
  	worker: {
  		name: {
  			required
  		},
  		phone: {
  			required,
  			minLength: minLength(17)
  		},
  		birthday: {
  			required,
  			minLength: minLength(10)
  		}
  	}
  },
  methods: {
  	updateWorker() {
  		
  		if(this.$store.dispatch('updateStaff', this.worker)){
  			console.log("dispatch updateStaff: true")
  			alert("Данные обновлены")
  		}
  		else{
  			console.log("dispatch updateStaff: false")
  			alert("Ошибка при обновлении")
  		}
  	}
  },
  computed: {

	  selectRoles() {
	      return this.$store.state.roles
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

	mounted() {
      console.log("Worker edit created")

	    function cloneObject(obj) {
			  var clone = {};
			  Object.keys(obj).forEach(function(key) {
			    clone[key] = obj[key];
			  });
			  return clone;
			}

	    if(this.$store.state.staff.length == 0){
	    	console.log("staff is empty. load staff from api")
	    	console.log(this.$store.state.staff)

		    this.resource = this.$resource('staff')
		    this.resource.get().then(response => response.json())
		    .then(staff => this.$store.dispatch('assyncSetStaff', staff)
		    	.then(this.worker=cloneObject(this.getWorkerById[0])))	//копируем обьект с id из state.staff в worker
	  	}
	  	else{
	  		this.worker=cloneObject(this.getWorkerById[0])
	  	}
	    
	}
	  
}
</script>

<style lang="sass">
	.workeredit
		&_save
			padding-top: 10px
			text-align: right
		.row
			padding-top: 10px

</style>