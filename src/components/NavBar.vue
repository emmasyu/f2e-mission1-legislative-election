<template>
  <div class="fixed left-0 right-0 z-50">
    <nav class="relative w-100 px-8 mt-5 mx-5 text-primary font-bold">
      <div
        class="max-w-[280px] sm:max-w-[1120px] flex justify-between mx-auto py-5 pt-9 sm:max-md:pt-7"
      >
        <h1 class="font-gaegu font-normal text-[40px]">
          <a href="#" class="p-4 hover:text-primary-light" @click="closeMenu">Miao</a>
        </h1>
        <button class="pt-2 sm:hidden" @click="toggleMenu">
          <span class="material-symbols-outlined text-[40px]">{{ currentMenuIcon }}</span>
        </button>
        <ul
          class="flex items-center gap-4 sm:gap-1 lg:gap-6 max-sm:flex-col max-sm:w-full max-sm:left-0 max-sm:absolute top-32"
          :class="{ 'max-sm:hidden': currentMenuIcon === 'menu' }"
        >
          <li
            v-for="item in navItem"
            :key="item.tag"
            class="max-sm:bg-white max-sm:hover:bg-secondary cursor-pointer max-sm:w-full text-center rounded-full max-sm:shadow-[3px_3px_0_#F4CA80]"
            @click="closeMenu"
          >
            <a
              :href="item.tag"
              class="px-2 py-5 hover:text-primary-light hover:decoration-primary-light hover:underline hover:underline-offset-4 max-sm:block"
              >{{ item.name }}</a
            >
          </li>
          <li class="flex sm:max-md:hidden max-sm:gap-4 max-sm:mt-4 max-sm:pb-4">
            <a
              href="#"
              class="hover:fill-secondary-light max-sm:drop-shadow-[3px_3px_0_#F4CA80]"
              v-for="(icon, i) in [IconFacebook, IconInstagram, IconYoutube]"
              :key="i"
              @click="closeMenu"
              ><component :is="icon" color="fill-primary group-hover:fill-primary-light" class="fill-white max-sm:hover:fill-secondary"
            /></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

const currentMenuIcon = ref('menu')
function toggleMenu() {
  currentMenuIcon.value = currentMenuIcon.value === 'menu' ? 'close' : 'menu'
}
function closeMenu() {
  currentMenuIcon.value = 'menu'
}
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
