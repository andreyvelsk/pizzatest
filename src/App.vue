<template>
  <div id="app">

    <div class="container">

      <staff-filter>  </staff-filter>
      
      <staff-table> </staff-table>
      
    </div>
    <!-- /.container -->

  </div>
      <!-- /#app -->
</template>

<script>

import Staff from './StaffTable.vue'  
import Filter from './Filter.vue'
export default {
  components: {
    staffTable: Staff,
    staffFilter: Filter
  }
}

</script>

<style lang="sass">

</style>