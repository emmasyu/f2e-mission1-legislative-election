<template>
  <div class="fixed left-0 right-0 z-50">
    <nav class="w-100 px-8 mt-5 mx-5 text-primary font-bold">
      <div
        class="max-w-[280px] sm:max-w-[1120px] flex justify-between mx-auto py-5 pt-9 sm:max-md:pt-7"
      >
        <h1 class="font-gaegu font-normal text-[40px]">
          <a href="#" class="p-4 hover:text-primary-light">Miao</a>
        </h1>
        <button class="pt-2 md:hidden">
          <span class="material-symbols-outlined text-[40px]">menu</span>
        </button>
        <ul class="flex items-center gap-1 lg:gap-6 max-md:hidden">
          <li v-for="item in navItem" :key="item.tag">
            <a
              :href="item.tag"
              class="px-2 py-5 hover:text-primary-light hover:decoration-primary-light hover:underline hover:underline-offset-4"
              >{{ item.name }}</a
            >
          </li>
          <li class="flex">
            <a
              href="#"
              class="hover:opacity-50"
              v-for="(icon, i) in [IconFacebook, IconInstagram, IconYoutube]"
              :key="i"
              ><component :is="icon" color="#00A199" bgColor="white"
            /></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconYoutube from './icons/IconYoutube.vue'

const navItem: { tag: string; name: string }[] = [
  { tag: '#proposition', name: '候選人主張' },
  { tag: '#news', name: '最新活動' },
  { tag: '#issue', name: '政策議題' },
  { tag: '#donation', name: '小額捐款' },
  { tag: '#message', name: '服務信箱' }
]
</script>

<style scoped>
nav {
  background: url('../assets/images/nav-background-phone.png') center no-repeat;
  @media (min-width: 640px) {
    background: url('../assets/images/nav-background-desktop.png') center no-repeat;
    background-size: contain;
  }
}
</style>
