<template>
  <div>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="yourname" class="col-sm-2 control-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="yourname" placeholder="input your name">
        </div>
      </div>
      <div class="form-group">
        <label for="yourpassword" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="yourpassword" placeholder="input your password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox"> Remember me
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10 text-center">
          <button type="submit" class="btn btn-default" @click.prevent="go">Sign in</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      pass: ''
    }
  },
  methods: {
    go () {
      window.location.href = '/index.html#/one'
    }
  }
}
</script>
<style land="scss">

</style>
