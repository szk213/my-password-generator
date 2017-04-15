<style>
</style>

<template>
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable width="150px" collapse="" side="left"
      :open="openSide"
      @update="openSide = $event"
    >
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item v-for="page in pages" :key="page.id"
            tappable modifier="chevron"
            @click="currentPage = page; openSide = false"
          >
            <div class="center">{{ page }}</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <component :is="currentPage" :toggle-menu="() => openSide = !openSide"></component>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
  import Home from '../components/Home.vue';
  import Settings from '../components/Settings.vue'

  module.exports = {
    data() {
      return {
        currentPage: 'home',
        pages: ['home', 'settings'],
        openSide: false
      };
    },
    components: {
      home: Home,
      settings: Settings
    }
  }
</script>