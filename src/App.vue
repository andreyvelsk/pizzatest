<template>
  <div id="app">

    <router-view></router-view>

  </div>
      <!-- /#app -->
</template>

<script>
  export default {

    //загрузка данных из api
    created() {
      console.log("Staff table created in App.vue")
      //запись из api to vuex
      if(this.$store.state.staff.length == 0){
        console.log("staff is empty. load staff from api App.vue")

        this.resource = this.$resource('staff')
        this.resource.get().then(response => response.json())
        .then(staff => this.$store.dispatch('assyncSetStaff', staff))
      }

    }
  }
</script>