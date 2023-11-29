<template>
  <div class="flex flex-wrap gap-2">
    <template v-for="item in list" :key="item.id">
      <input
        type="radio"
        :id="item.id"
        :name="name"
        :value="item.value"
        :checked="item.checked"
        class="appearance-none cursor-pointer w-[90px] h-[60px] relative before:content-[''] before:w-full before:h-full before:absolute checked:before:border-2 checked:before:border-primary checked:before:rounded-md"
        :class="item.img"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps({
  list: Array,
  name: String
})
</script>
