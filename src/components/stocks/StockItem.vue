<template>
  <div class="col-6 mb-3">
    <div class="card border-success">
      <div class="card-header">
        {{ name }} <small>(Price: {{ price }})</small>
      </div>
      <div class="card-body text-success">
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input type="number" class="form-control" placeholder="Quantity" v-model="buyQty">
          </div>
          <button
            class="btn btn-primary mb-2"
            :disabled="buyQty === '' || buyQty === '0'"
            @click.prevent="buyActive"
            >Buy</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['price', 'name'],
  data() {
    return {
      buyQty: ''
    }
  },
  methods: {
    buyActive() {
      let order = {
          name: this.name,
          price: this.price,
          qty: this.buyQty
      }
      this.$store.actions.buyStock();

      // let price = this.price * +this.buyQty;
      // this.$store.commit('updateFunds', -price)
      // this.buyQty = '';
    }
  }
}

</script>
