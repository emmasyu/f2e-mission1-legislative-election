<template>
  <NavBar />
  <RouterView />
  <FooterLayout />
  <TopButton />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterLayout from './components/FooterLayout.vue'
import TopButton from './components/TopButton.vue'
</script>
