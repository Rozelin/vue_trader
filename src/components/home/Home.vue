<template>
  <div class="card">
    <div class="card-body">
      <h1>Trade or view your profile</h1>
      <p>You may Save&Load your data.</p>
      <p>Click on 'End Day' to begin new day.</p>
      <br>
      <h3>Your funds: {{funds}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        funds: this.$store.getters.userFunds
      }
    }
  }
</script>
