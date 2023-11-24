<template>
  <div
    class="w-full min-h-screen bg-primary rounded-b-[50px] sm:rounded-b-[80px] md:rounded-b-[100px] lg:rounded-b-[130px] xl:rounded-b-[160px] 2xl:rounded-b-[200px]"
    id="issue"
  >
    <span
      class="font-inter text-[170px] sm:text-[250px] lg:text-[400px] font-bold text-white/20 block text-center leading-none h-[75px] sm:h-[180px] sm:text-left sm:indent-5"
      >No.{{ issueIndex + 1 }}</span
    >
    <div class="sm:flex flex-row-reverse justify-center">
      <div
        class="flex sm:flex-col sm:justify-center gap-5 sm:gap-16 overflow-x-scroll sm:overflow-y-scroll sm:px-8 py-6 sm:pt-12 sm:pb-16 md:ps-[75px] md:pe-[110px] md:-ms-[30px] mb-14 sm:h-screen lg:-mt-[180px]"
      >
        <div
          class="flex-shrink-0 bg-white w-[222.83px] sm:w-full rounded-[6.64px] sm:rounded-[20px] rotate-[8.5deg] shadow-[6px_8px_0_#FADCA8] cursor-pointer transition-all"
          v-for="(item, index) in issues"
          :key="index"
          :class="[
            { 'md:-translate-x-12 md:-translate-y-4': issueIndex == index },
            { 'md:translate-x-20': issueIndex !== 0 ? issueIndex - 1 == index : index == 2 },
            issueIndex == index ? 'opacity-100' : 'opacity-90 sm:opacity-80'
          ]"
          @click="showIssue(index)"
        >
          <img :src="item.src" :alt="item.title" />
        </div>
      </div>
      <div class="px-5 mb-[70px]">
        <p class="text-[28px] sm:text-[40px] font-bold text-secondary mb-1 sm:mb-2">
          政策 No.{{ issueIndex + 1 }}
        </p>
        <h3 class="font-bold text-secondary mb-5 sm:mb-20 sm:text-2xl">
          {{ issue(issueIndex).title }}
        </h3>
        <ul>
          <li
            v-for="(list, index) in issue(issueIndex).plans"
            :key="index"
            class="text-white mb-5 sm:mb-[60px]"
          >
            <h3 class="font-bold sm:text-2xl mb-1 sm:mb-2">
              <span>{{ `${index + 1}`.padStart(2, '0') }}</span
              ><span class="indent-2 inline-block">{{ list.title }}</span>
            </h3>
            <p>
              <template v-for="(line, index) in list.description.split('\n')" :key="index">
                {{ line }}<br />
              </template>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center gap-2 pb-10 sm:hidden">
      <div class="w-7 h-3 bg-secondary rounded-full" />
      <div class="w-3 h-3 bg-secondary-light rounded-full" />
      <div class="w-3 h-3 bg-secondary-light rounded-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import murrCute from '../../assets/images/issue/murr-cute.png'
import murrLovelyAndShopping from '../../assets/images/issue/murr-lovely-and-shopping.png'
import murrEducation from '../../assets/images/issue/murr-education.png'
import { computed, ref } from 'vue'

const issueIndex = ref(1)
const issue = computed(() => {
  return (index: number) => issues[index]
})
function showIssue(index: number) {
  issueIndex.value = index
}

const issues = [
  {
    src: murrCute,
    title: '為毛孩子謀福利！推動寵物醫療保障方案',
    plans: [
      {
        title: '設立寵物醫療基金',
        description: '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用'
      },
      {
        title: '提供醫療補助',
        description: '每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力'
      },
      {
        title: '合作動物醫院',
        description: '目前已有和超過 200 家動物醫院進行初步的合作討論'
      }
    ]
  },
  {
    src: murrLovelyAndShopping,
    title: '打造休閒天堂！推廣寵物休閒與娛樂場所',
    plans: [
      {
        title: '建立寵物公園',
        description:
          '每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。\n 根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。'
      },
      {
        title: '推廣寵物友善商家',
        description:
          '鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。\n 預計在政策實施後的首年，將有超過 500 家商家加入此計畫。'
      },
      {
        title: '舉辦寵物活動和工作坊',
        description:
          '與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，\n 包括寵物才藝比賽、飼養知識工作坊等。'
      }
    ]
  },
  {
    src: murrEducation,
    title: '推廣寵物飼養教育，讓愛更加專業！',
    plans: [
      {
        title: '建立寵物飼養教育中心',
        description:
          '每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。\n 預計在第一年內，在全國至少 5 大城市設立教育中心。'
      },
      {
        title: '推廣寵物飼養課程',
        description:
          '與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。\n 預計每年將有超過 10,000 名市民受益。'
      },
      {
        title: '製作教育資料',
        description:
          '出版寵物飼養手冊、影片和線上課程，\n 讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。'
      }
    ]
  }
]
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
</style>
