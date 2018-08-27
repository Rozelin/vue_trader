<template>
  <div id="app">
    <app-navigation></app-navigation>
    <br>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue';

  export default {
    components: {
      'app-navigation': Navigation
    },
    created() {
      this.$store.dispatch('fetchData');
    }
  }
</script>

<style scoped>
  .fade-enter { opacity: 0;  }
  .fade-enter-active { transition: opacity .5s;  }
  .fade-leave-active { transition: opacity .5s;    opacity: 0; }
</style>
