<template>
  <div id="app">

    <div class="container">

      <div class="filter">

        <div class="row">
          <div class="col-md-3">
            <select class="custom-select filter_role">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          
          <div class="col-md-3">
            <div class="custom-control custom-checkbox filter_isarchive">
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">В архиве</label>
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
            v-for="i in 3"
            >
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
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
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">

.filter
  &_addbutton
    text-align: right

</style>