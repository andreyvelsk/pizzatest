<template>
	<div class="stafftable">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Должность</th>
              <th scope="col">Телефон</th>
            </tr>
          </thead>
          <tbody>
        
            <router-link
            tag="tr"
            v-for="(i, index) in selectStaff"
            :to="'worker'+i.id"
            :key="i.id"
            >
              <th scope="row">{{index+1}}</th>
              <td>{{i.name}}</td>
              <td>{{i.role}}</td>
              <td>{{i.birthday}}</td>
            </router-link>
        
          </tbody>
        </table>
  </div>
      <!-- /.stafftable -->
</template>

<script>
	export default {
		computed: {
			selectStaff() {
      return this.$store.getters.getStaff
      }
   	},
	  created() {
      console.log("Staff table created")
	    //запись из api to vuex
	    if(this.$store.state.staff.length == 0){
        console.log("staff is empty. load staff from api")

        this.resource = this.$resource('staff')
        this.resource.get().then(response => response.json())
        .then(staff => this.$store.dispatch('assyncSetStaff', staff))
      }

	  }
	}
</script>

<style lang="sass">
    .stafftable
      overflow-y: hidden
      padding-top: 20px
</style>