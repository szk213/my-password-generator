<style>
</style>

<template>
  <v-ons-page>
    <custom-toolbar title="Settings" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Change the settings.
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