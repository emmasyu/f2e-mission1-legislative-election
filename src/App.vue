<template>
  <NavBar />
  <RouterView />
  <FooterLayout />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterLayout from './components/FooterLayout.vue'
</script>
