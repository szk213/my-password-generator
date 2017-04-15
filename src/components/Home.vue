<style>
</style>

<template>
  <v-ons-page>
    <custom-toolbar title="My password generator" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Welcome home.
    </p>
  </v-ons-page>
</template>

<script>
  import Toolbar from './Toolbar.vue'

  module.exports =  {
    props: ['toggleMenu'],
    components: { customToolbar: Toolbar }
  };
</script>