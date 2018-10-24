<template>
	<div class="sort">
		<div class="row align-items-end">
			<div class="col-md-5">
				<label>Сортировка</label>
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

      		<div class="col-md-1"></div>

			<div class="col-md-3">
				<div class="sort_addbutton">
					<router-link
					  tag="button"
					  :to="'addworker'"
					  class="btn btn-success">Добавить
					</router-link>
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
	        return this.$store.state.ascSort
	      },
	      set(value) {
	        this.$store.dispatch('setAscSort', value)
	      }
	    },
	    sortSelect: {
	    	get() {
	        return this.$store.state.sortByName
	      },
	      set(value) {
	        this.$store.dispatch('setCurrentSort', value)
	      }
	    },
	    selectSort() {
	      return this.$store.state.sort
	    }
	  }
	}
</script>

<style lang="sass">
	.sort
		&_asc
			padding-top: 10px
		&_addbutton
			padding-top: 10px
			button
				width: 100%
</style>