<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
        <a class="nav-link" href="#">End Day</a>
      </li>
      <li class="nav-item dropdown" :class="{show: isOpen}">
        <a class="nav-link dropdown-toggle" @click="isOpen = !isOpen">
          Save & Load
        </a>
        <div class="dropdown-menu" :class="{show: isOpen}">
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </li>
      <li class="nav-item">
        <span class="nav-link">Funds: {{ funds }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        funds: this.$store.getters.userFunds
      }
    },
    watch: {}
  }
</script>
