<template>
  <div id="app">

    <div class="container">

      {{selectTest}}
      <div class="filter">

        <div class="row">
          <div class="col-md-3">
            <select class="custom-select filter_role"
            >
              <option value="1"
              v-for="role of selectRoles"
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
              <button type="button" class="btn btn-success">Success</button>
            </div>
          </div>

        </div>

      </div>
      <!-- /.filter -->

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
        
            <tr
            v-for="(i, index) in selectStaff"
            >
              <th scope="row">{{index+1}}</th>
              <td>{{i.name}}</td>
              <td>{{i.role}}</td>
              <td>{{i.phone}}</td>
            </tr>
        
          </tbody>
        </table>
      </div>
      <!-- /.stafftable -->
    </div>
    <!-- /.container -->

  </div>
      <!-- /#app -->
</template>

<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  methods: {

  },
  computed: {

    selectRoles() {
      return this.$store.getters.getRoles
    },
    selectStaff() {
      return this.$store.getters.getStaff
    },
    archiveCheckbox: {
      get() {
        return this.$store.getters.getArchive
      },
      set(value) {
        this.$store.dispatch('setArchive', value)
      }
    },
    selectTest() {
      return this.$store.getters.getTest
    }
  },
  created() {

    //запись из api to vuex
    this.resource = this.$resource('staff')
    this.resource.get().then(response => response.json())
    .then(staff => this.$store.dispatch('assyncSetStaff', staff))
  }
}

</script>

<style lang="sass">

html

.filter
  padding: 50px 0 15px 0
  &_isarchive
    height: 100%
    vertical-align: center
  &_addbutton
    text-align: right

</style>