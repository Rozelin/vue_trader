<template>
  <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
    <div class="card border-success">
      <div class="card-header">
        {{ name }} <small>(Price: {{ price | currency }} | Quantity available: {{ qty }})</small>
      </div>
      <div class="card-body text-success">
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input type="number" min="1" class="form-control" :class="{error: insufficiantFunds}" placeholder="Quantity" v-model="buyQty">
          </div>
          <button
            class="btn btn-primary mb-2"
            :disabled="buyQty >= qty || buyQty <= 0"
            @click.prevent="buyActive"
            >{{ insufficiantFunds ? 'Insufficient Quantity' : 'Buy' }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .error {
    border: 1px solid red;
  }
</style>

<script>
export default {
  props: ['price', 'name', 'qty'],
  data() {
    return {
      buyQty: 0
    }
  },
  computed: {
    insufficiantFunds() {
      return this.buyQty > this.qty;
    }
  },
  methods: {
    buyActive() {
      let order = {
        name: this.name,
        price: this.price,
        qty: this.buyQty
      }
      this.$store.dispatch('buyStock', order);
      this.buyQty = 0;
    }
  }
}

</script>
