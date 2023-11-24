<template>
  <div class="w-full min-h-screen" id="news">
    <img src="../../assets/images/cat-ear.svg" alt="background" class="-mb-0.5" />
    <div
      class="relative pt-16 sm:pt-24 px-5 sm:ps-12 bg-primary rounded-t-[50px] sm:rounded-t-[80px] md:rounded-t-[100px] lg:rounded-t-[130px] xl:rounded-t-[160px] 2xl:rounded-t-[200px]"
    >
      <img
        src="../../assets/images/vote-gate.svg"
        alt="vote gate"
        class="absolute top-5 left-1/2 -translate-x-1/2 max-w-[65%] h-[15px]"
      />
      <h3 class="text-center text-white font-bold text-xl sm:text-[40px] mb-[60px]">
        掌握喵喵最新活動！
      </h3>
      <div class="relative sm:pt-8 pb-[60px]">
        <div
          class="mb-[60px] sm:flex sm:max-md:relative"
          v-for="(item, index) in activities"
          :key="item.name"
        >
          <div class="sm:w-[50%] sm:flex justify-end pe-[60px]">
            <div
              class="sm:absolute sm:top-16 w-[200px] sm:w-fit sm:max-w-[600px] max-sm:h-40 rounded sm:rounded-[40px] overflow-hidden shadow-[-4px_-4px_0_#FADCA8] sm:shadow-[-16px_-16px_0_#FADCA8] mb-3"
              :class="{ 'sm:hidden': newsIndex !== index }"
            >
              <img :src="item.imagePath" :alt="item.name" class="w-full h-full object-cover" />
            </div>
          </div>
          <div
            class="sm:w-[50%] sm:ps-10 relative sm:before:absolute before:w-full before:h-full before:-ms-10 before:border-l-2 before:top-14 sm:pe-5 sm:cursor-pointer"
            @click="showNews(index)"
          >
            <p
              class="font-bold text-[28px] text-secondary mb-3 relative sm:before:absolute sm:before:bg-[url('@/assets/images/cat-paw.svg')] sm:before:w-[45px] sm:before:h-[52px] sm:before:left-[-60px]"
              :class="{ 'sm:text-[40px]': newsIndex == index }"
            >
              {{ item.date }}
            </p>
            <h3
              class="font-bold text-secondary mb-1"
              :class="newsIndex == index ? 'sm:text-2xl' : 'sm:text-xl'"
            >
              {{ item.title }}
            </h3>
            <p class="text-white">
              <template v-for="(line, index) in item.description.split('\n')" :key="index">
                {{ line }}<br />
              </template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import platformSrc from '@/assets/images/news/platform.jpeg'
import streetSrc from '@/assets/images/news/street.jpeg'
import catwalkSrc from '@/assets/images/news/catwalk.jpeg'
import { ref } from 'vue'

const newsIndex = ref(0)
function showNews(index: number) {
  newsIndex.value = index
}

const activities = [
  {
    date: '12/26',
    name: '台北寵物論壇',
    imagePath: platformSrc,
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    description:
      '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，\n 決定要全力宣傳「貓咪至上」的理念！\n 我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。'
  },
  {
    date: '12/24',
    name: '掃街活動',
    imagePath: streetSrc,
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    description:
      '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！\n 這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。'
  },
  {
    date: '12/20',
    name: '收容所模特兒大比拼！',
    imagePath: catwalkSrc,
    title: '收容所模特兒大比拼！',
    description:
      '今天的收容所不再是一片寂靜。\n 為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！'
  }
]
</script>
