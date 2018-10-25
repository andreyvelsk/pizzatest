<template>
  <div id="workeradd">
  	<div class="container">
  		<div class="pagetitle">
  			<h1>Добавить сотрудника</h1>
  		</div>
  			<div class="workeradd">
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
		  						<input type="tel" v-mask="'##.##.####'" class="form-control" placeholder="01.01.1900"
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

		          	<div class="col-md-3 col-6 workeradd_save">
			              <button type="button" class="btn btn-success" 
			              @click="addWorker"
			              :disabled="$v.$invalid"
			              >Сохранить</button>
          			</div>
							</div>
		
			  		</div>
  				</form>
					
					* - Обязательные поля
  			</div>
  	</div>
  </div>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
    	name: '',
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
	.workeradd
		&_save
			text-align: right
			padding-top: 10px
		.row
			padding-top: 10px

</style>