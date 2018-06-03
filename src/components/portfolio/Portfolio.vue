<template>
  <div class="row">
    <app-portfolio-item
        v-for="(item, index) in funds"
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
        funds: this.$store.state.userActives
      }
    },
    components: {
      'app-portfolio-item': PortfolioItem
    }
  }
</script>
