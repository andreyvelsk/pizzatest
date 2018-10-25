<template>
	<div class="filter">

        <div class="row align-items-end">
          <div class="col-md-5">
          	<label>Фильтр</label>
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
          
          <div class="col-md-5">
            <div class="custom-control custom-checkbox filter_isarchive">
              <input type="checkbox" class="custom-control-input" id="archiveCheck"
              v-model="archiveCheckbox"
              >
              <label class="custom-control-label" for="archiveCheck">В архиве</label>
            </div>
          </div>
        </div>
  </div>
      <!-- /.filter -->
</template>

<script>
	export default {
		data () {
	    return {

	    }
	  },
	  methods: {

	  },
	  computed: {

	    selectRoles() {
	      return this.$store.state.roles
	    },
	    archiveCheckbox: {
	      get() {
	        return this.$store.state.archive
	      },
	      set(value) {
	        this.$store.dispatch('setArchive', value)
	      }
	    },
	    roleSelect: {
	      get() {
	        return this.$store.state.currentRole
	      },
	      set(value){
	        this.$store.dispatch('setCurrentRole', value)
	      }
	    }
	  }
	}
</script>

<style lang="sass">

.filter
	&_isarchive
		padding-top: 10px

</style>