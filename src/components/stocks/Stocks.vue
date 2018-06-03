<template>
  <div class="row">
    <app-stock-item
      v-for="(stock, index) in stocks"
      :key="index"
      :price="stock.price"
      :name="stock.name"
    ></app-stock-item>
  </div>
</template>

<script>
  import StockItem from './StockItem.vue';

  export default {
    data() {
      return {
        //stocks: this.$store.getters.stocks
      };
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    },
    components: {
      'app-stock-item': StockItem
    }
  }
</script>
