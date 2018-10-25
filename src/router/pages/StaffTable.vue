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
            class="stafftable_row"
            v-for="(i, index) in selectStaff"
            :to="'worker'+i.id"
            :key="i.id"
            >
              <th scope="row">{{index+1}}</th>
              <td>{{i.name}}</td>
              <td>{{getRole(i.role)}}
              </td>
              <td>{{i.phone}}</td>

            </router-link>
        
          </tbody>
        </table>

  </div>
      <!-- /.stafftable -->
</template>


<script>
	export default {
    methods: {
      getRole(dbrole) {
        return this.$store.state.roles.filter(item =>{
          return item.dbtitle == dbrole
        })[0].title
      }
    },
		computed: {
			selectStaff() {
        return this.$store.getters.getStaff
      }
   	}
	}
</script>

<style lang="sass">
    .stafftable
      overflow-y: hidden
      padding-top: 20px
      &_row
        &:hover
          cursor: pointer
          background-color: #eee
          transition: all 0.2s

</style>