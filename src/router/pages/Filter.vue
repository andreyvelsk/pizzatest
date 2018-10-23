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
              <button type="button" class="btn btn-success">Добавить</button>
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
	      return this.$store.getters.getRoles
	    },
	    archiveCheckbox: {
	      get() {
	        return this.$store.getters.getArchive
	      },
	      set(value) {
	        this.$store.dispatch('setArchive', value)
	      }
	    },
	    roleSelect: {
	      get() {
	        return this.$store.getters.getCurrentRole
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