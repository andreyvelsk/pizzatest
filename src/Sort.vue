<template>
	<div class="sort">
		<div class="row">
			<div class="col-md-3">
				<select class="custom-select sort_by"
            v-model="sortSelect"
            >
              <option 
              v-for="sort of selectSort"
              v-bind:value="sort.value"
              :key="sort.title"
              >{{sort.title}}</option>
            </select>
			</div>

			<div class="col-md-3">
            <div class="custom-control custom-checkbox sort_asc">
              <input type="checkbox" class="custom-control-input" id="ascCheck"
              v-model="ascCheckbox"
              >
              <label class="custom-control-label" for="ascCheck">По возрастанию</label>
            </div>
      </div>
		</div>
		
	</div>
</template>

<script>
		export default {

	  computed: {

	    ascCheckbox: {
	      get() {
	        return this.$store.getters.getAscSort
	      },
	      set(value) {
	        this.$store.dispatch('setAscSort', value)
	      }
	    },
	    sortSelect: {
	    	get() {
	        return this.$store.getters.getCurrentSort
	      },
	      set(value) {
	        this.$store.dispatch('setCurrentSort', value)
	      }
	    },
	    selectSort() {
	      return this.$store.getters.getSorts
	    }
	  }
	}
</script>

<style>
	
</style>