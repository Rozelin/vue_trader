<template>
  <div class="card">
    <div class="card-body">
      <h1>Trade or view your profile</h1>
      <p>You may Save&Load your data.</p>
      <p>Click on 'End Day' to begin new day.</p>
      <br>
      <h3>Your funds: {{ funds | currency}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      funds () {
        return this.$store.getters.getUserFunds;
      }
    }
  }
</script>



