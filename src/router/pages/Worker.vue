<template>
  <div id="worker">
  	<div class="container">
  			<form>
	  			<div class="form-group">

					<label for="name">ФИО</label>
	  				<input id="phone" class="form-control" placeholder="Иванов Иван">

	  				<div class="row">
	  					<div class="col-md-6">
	  						<label for="phone">Телефон</label>
	  						<input id="phone" type="tel" v-mask="'+7 (###) ###-####'" class="form-control" placeholder="+7 (123) 456-7890" v-model="tel">
	  					</div>
	  					
	  					<div class="col-md-6">
	  						<label for="birthday">Дата рождения</label>
	  						<input type="tel" v-mask="'##.##.####'" class="form-control" placeholder="01.01.1900">
	  					</div>
	  				</div>

					<div class="row">
						<div class="col-md-6">
							<label>Должность</label>
							<select class="custom-select filter_role"
							v-model="roleSelect"
							>
							<option 
							v-for="role of selectRoles"
							v-bind:value="role.dbtitle"
							:key="role.dbtitle"
							>{{role.title}}</option>
							</select>
						</div>
					</div>

	  			</div>
  			</form>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$router.currentRoute.params['id'],
      tel: '',
      birthday: '',
      placeholder: '+7 (123) 456-7890'
    }
  }
}
</script>