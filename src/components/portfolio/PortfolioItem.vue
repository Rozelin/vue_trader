<template>
  <div class="col-4 col-md-6 col-sm-12 mb-3">
    <div class="card">
      <div class="card-header">
        {{name}} 
        <small>(Old price: {{price | currency}} | New price: {{stockPrice | currency }} | Quantity: {{qty}})</small> 
        <span v-if="priceChanged" :class="priceTendencyDown ? 'red' : 'green' ">
          {{ priceTendencyDown ? '&#10136;' : '&#10138;'}}
        </span>
      </div>
      <div class="card-body">
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input type="number" 
                    min="1" 
                    :max="qty" 
                    class="form-control" 
                    placeholder="Quantity" 
                    v-model="sellQty">
          </div>
          <button type="submit" 
                  class="btn btn-primary mb-2"
                  :disabled="sellQty === '' || sellQty === '0' || sellQty > qty"
                  @click.prevent="sellActive">Sell</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .red,
  .green {
    line-height: .5;
    font-size: 24px;
    vertical-align: middle;
  }
  .red {
    color: red;
  }
  .green {
    color: lawngreen;
  }
</style>

<script>
  export default {
    props: ['name', 'qty', 'price'],
    data() {
      return {
        sellQty: 0
      }
    },
    computed: {
      stockPrice() {
        return this.$store.getters.stockPrice(this.name);
      },
      priceTendencyDown() {
        return this.price > this.stockPrice;
      },
      priceChanged() {
        return this.price != this.stockPrice;
      }
    },
    methods: {
      sellActive() {
        let order = {
          name: this.name,
          price: this.stockPrice,
          qty: this.sellQty
        }
        this.$store.dispatch('sellStock', order);
        this.sellQty = 0
      }
    }
  }
</script>
