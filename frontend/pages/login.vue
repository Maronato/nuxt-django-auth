<template>
  <div class="container">
    <button class="btn btn-blue" @click="$auth.loginWith('facebook')">Login with Facebook</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// Make sure types work
import '@nuxtjs/auth-next'

export default Vue.extend({
  ...{ auth: 'guest' },
})
</script>

<style>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>