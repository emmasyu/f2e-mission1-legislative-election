<template>
  <footer class="bg-primary py-12 sm:py-[60px] text-white">
    <div class="flex max-sm:flex-col lg:justify-center gap-4 sm:gap-20 flex-wrap px-5 sm:px-20">
      <div>
        <h3>快速連結</h3>
        <ul class="-mb-2">
          <li v-for="link in links" :key="link.name" class="mb-2">
            <a :href="link.tag" class="hover:underline hover:underline-offset-4">{{ link.name }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>聯絡資訊</h3>
        <p>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</p>
        <p>
          電話：<a href="tel:(02)888-5678" class="hover:underline hover:underline-offset-4"
            >(02) 888-5678</a
          >
        </p>
        <p>
          電子郵件地址：<a
            href="mailto:meowoffice@linmeow.tw"
            class="hover:underline hover:underline-offset-4"
            >meowoffice@linmeow.tw</a
          >
        </p>
      </div>
      <div class="flex flex-col justify-between -mb-2 max-xl:gap-4">
        <h3>關注喵喵最新動態</h3>
        <div class="flex gap-5">
          <a
            href="#"
            v-for="(icon, i) in [IconFacebook, IconInstagram, IconYoutube]"
            :key="i"
            class="hover:opacity-75"
          >
            <component :is="icon" color="white" bgColor="#FFDC91" />
          </a>
        </div>
        <p class="max-sm:text-xs">版權聲明：© 2023 喵立翰 Miao Li-Han 版權所有。</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconYoutube from './icons/IconYoutube.vue'

const links = [
  { name: '首頁', tag: '#' },
  { name: '最新活動', tag: '#news' },
  { name: '政策議題', tag: '#issue' },
  { name: '小額捐款', tag: '#donation' }
]
</script>

<style scoped>
h3 {
  font-weight: 700;
  color: #ffdc9e;
}

h3,
p,
li {
  margin-bottom: 8px;
}
</style>
