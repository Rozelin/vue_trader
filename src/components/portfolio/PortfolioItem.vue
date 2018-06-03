<template>
  <div class="col-6 mb-3">
    <div class="card">
      <div class="card-header">
        {{name}} <small>(Price: {{price}} | Quantity: {{qty}})</small>
      </div>
      <div class="card-body">
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input type="text" class="form-control" placeholder="Quantity">
          </div>
          <button type="submit" class="btn btn-primary mb-2">Sell</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['name', 'qty', 'price'],
    data() {
      return {
      }
    }
  }
</script>
