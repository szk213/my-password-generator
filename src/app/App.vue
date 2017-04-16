<style>
</style>

<template>
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable width="200px" collapse="" side="left"
      :open="openSide"
      @update="openSide = $event"
    >
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item v-for="page in pages" :key="page.id"
            tappable modifier="chevron"
            @click="currentPage = page.name; openSide = false"
          >
            <div class="center">{{ page.title }}</div>
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
  import PasswordList from '../components/PasswordList.vue';
  import Settings from '../components/Settings.vue'

  module.exports = {
    data() {
      return {
        currentPage: 'passwordList',
        pages: [
          {
            'name': 'passwordList',
            'title': 'Password List'
          },
          {
            'name': 'settings',
            'title': 'Settings'
          }
        ],
        openSide: false
      };
    },
    components: {
      passwordList: PasswordList,
      settings: Settings
    }
  }
</script>