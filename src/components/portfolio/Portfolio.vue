<template>
  <div class="row">
    <h3 v-if="emptyPortfolio">You haven't bought anything yet</h3>
    <app-portfolio-item
        v-for="(item, index) in userStocks"
        :name="item.name"
        :price="item.price"
        :qty="item.qty"
        :key="index"

    ></app-portfolio-item>
  </div>
</template>

<script>
  import PortfolioItem from './PortfolioItem.vue';

  export default {
    data() {
      return {
        userStocks: this.$store.getters.userStocks
      }
    },
    computed: {
      emptyPortfolio() {
        return !this.$store.getters.userStocks.length;
      }
    },
    components: {
      'app-portfolio-item': PortfolioItem
    }
  }
</script>
