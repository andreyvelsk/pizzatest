<template>
  <div id="app">

    <div class="container">

      <staff-filter>  </staff-filter>
      <staff-sort> </staff-sort>
      
      <staff-table> </staff-table>
      
    </div>
    <!-- /.container -->

  </div>
      <!-- /#app -->
</template>

<script>

import Staff from './StaffTable.vue'  
import Filter from './Filter.vue'
import Sort from './Sort.vue'
export default {
  components: {
    staffTable: Staff,
    staffFilter: Filter,
    staffSort: Sort
  }
}

</script>

<style lang="sass">

</style>