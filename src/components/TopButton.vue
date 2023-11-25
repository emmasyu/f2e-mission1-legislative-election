<template>
  <button
    class="fixed bottom-8 right-8 w-12 h-12 bg-primary-light hover:bg-primary z-50 rounded-full shadow-[0_0_16px_#D1D1D1] cursor-pointer"
    @click="scrollToTop"
    v-if="scrollY > 100"
  >
    <span class="material-symbols-outlined text-5xl text-white"> expand_less </span>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

function scrollToTop() {
  window.scrollTo(0, 0)
}

const scrollY = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})
</script>
