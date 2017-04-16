<style>
</style>

<template id="toolbar">
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="action">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{ title }}</div>
    <slot></slot>
  </v-ons-toolbar>
</template>

<script>
  module.exports = {
    props: ['title', 'action']
  };
</script>