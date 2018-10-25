<template>

    <div class="container">
      <div class="pagetitle">
        <h1>Главная</h1>
      </div>

      <staff-filter>  </staff-filter>
      <hr>
      <staff-sort> </staff-sort>
      
      <staff-table> </staff-table>
      
    </div>
    <!-- /.container -->
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
.pagetitle
  padding: 20px 0  
</style>