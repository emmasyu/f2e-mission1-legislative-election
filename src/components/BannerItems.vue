<template>
  <p class="absolute text-primary font-bold p-4 rounded-full">
    {{ msg }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
