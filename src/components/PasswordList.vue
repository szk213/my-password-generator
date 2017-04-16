<style>
</style>

<template>
  <v-ons-page>
    <custom-toolbar title="My password generator" :action="toggleMenu">
      <div class="right">
        <v-ons-toolbar-button>
          <v-ons-icon icon="ion-plus-round, material:md-plus"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </custom-toolbar>
        <v-ons-list>
          <v-ons-list-header>Default</v-ons-list-header>
          <v-ons-list-item v-for="password in passwordList" :key="password.id"
            modifier="longdivider"
            @click="console.log('test')"
          >
            <div class="left">
              {{ password.name || password.url }}
            </div>
            <div class="right">
              <v-ons-button style="margin: 6px 0">Edit</v-ons-button>
            </div>
          </v-ons-list-item>
        </v-ons-list>

  </v-ons-page>
</template>

<script>
  import Toolbar from './Toolbar.vue'

  module.exports =  {
    props: ['toggleMenu'],
    components: { customToolbar: Toolbar },
    data() {
      return {
        'passwordList': [{
          'name': 'Google',
          'url': '',
          'size': ''
        },
        {
          'name': 'Yahoo',
          'url': 'aaa',
          'size': ''
        },
        {
         'name': 'Twitter',
         'url': 'bbb',
         'size': ''
        }]
      };
    }
  };
</script>