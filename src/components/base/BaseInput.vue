<template>
  <label :for="id"
    ><slot />
    <input
      :id="id"
      :type="type"
      class="w-full px-2.5 py-2.5 mb-7 mt-3 text-xs border border-[#C9F1EF] rounded-[4px] hover:border-primary focus:outline-none focus:border-primary focus:bg-[#E9FEFD] placeholder:text-primary"
      :placeholder="placeholder"
    />
  </label>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  type: String,
  placeholder: String
})
</script>
