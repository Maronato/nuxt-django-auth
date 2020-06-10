<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">nuxt-django-auth</h1>
      <h2 class="subtitle">
        <template v-if="$auth.loggedIn">Logged in as {{ $auth.user.username }}</template>
        <template v-else>Nuxt + Django + Auth</template>
      </h2>
      <div class="links">
        <nuxt-link to="/secret" class="button--grey">Secret page</nuxt-link>
        <nuxt-link v-if="!$auth.loggedIn" to="/login" class="button--green">Login</nuxt-link>
        <button v-else class="button--red" @click="$auth.logout()">Logout</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo,
  },
  ...{ auth: false },
})
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
