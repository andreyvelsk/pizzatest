<template>
	<div class="filter">

        <div class="row">
          <div class="col-md-3">
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
          
          <div class="col-md-3">
            <div class="custom-control custom-checkbox filter_isarchive">
              <input type="checkbox" class="custom-control-input" id="archiveCheck"
              v-model="archiveCheckbox"
              >
              <label class="custom-control-label" for="archiveCheck">В архиве</label>
            </div>
          </div>

          <div class="col-md-3"></div>

          <div class="col-md-3">
            <div class="filter_addbutton">
            <router-link
              tag="button"
              :to="'addworker'"
              class="btn btn-success">Добавить
            </router-link>
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
  padding: 50px 0 15px 0
  &_isarchive

  &_addbutton
    text-align: right

</style>