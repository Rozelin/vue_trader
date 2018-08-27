<template>
  <div class="container-fluid bg-primary">
    <nav class="container navbar navbar-expand-lg navbar-dark">
      <router-link to="/"
                tag="a"
                class="navbar-brand"
                exact>Stock Trade
          </router-link>
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio"
                  tag="li"
                  class="nav-item"
                  active-class="active"
                  exact> <a class="nav-link">Portfolio</a>
            </router-link>
        <router-link to="/stocks"
                  tag="li"
                  class="nav-item"
                  active-class="active"
                  exact> <a class="nav-link">Stocks</a>
            </router-link>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown" :class="{show: isOpen}">
          <a class="nav-link dropdown-toggle" @click="isOpen = !isOpen">
            Save & Load
          </a>
          <div class="dropdown-menu" :class="{show: isOpen}">
            <a class="dropdown-item" href="#" @click.prevent="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click.prevent="loadData">Load Data</a>
          </div>
        </li>
        <li class="nav-item">
          <span class="nav-link">Funds: {{ funds | currency }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return {
        isOpen: false
      }
    },
    computed: {
      funds () {
        return this.$store.getters.getUserFunds;
      }
    },
    methods: {
      ...mapActions(['randomizeStocks', 'fetchData']),
      endDay() {
        this.randomizeStocks();
      },

      ...mapGetters(['userStocks','stocks','getUserFunds']),

      saveData() {
        const data = {
          funds: this.getUserFunds(),
          stocks: this.stocks(),
          userStocks: this.userStocks() 
        };
        this.$http.put('data.json', data);
        this.isOpen = false;
      },

      loadData() {
        this.fetchData();
        this.isOpen = false;
      }
    },
    watch: {}
  }
</script>
