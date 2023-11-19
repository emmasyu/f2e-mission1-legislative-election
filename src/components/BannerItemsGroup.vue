<template>
  <div class="fixed z-10 w-full h-screen">
    <div
      class="relative max-w-[360px] sm:max-w-[600px] lg:max-w-[960px] xl:max-w-[1220px] 2xl:max-w-[1460px] h-full mx-auto overflow-hidden"
    >
      <template v-for="(item, i) in itemList" :key="i">
        <BannerItems
          :msg="items[item.category].text"
          :class="[items[item.category].bgColor, item.classList]"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import BannerItems from './BannerItems.vue'

const items: { [key: string]: { [key: string]: string } } = {
  education: {
    text: '推廣寵物飼養教育，讓愛更加專業',
    bgColor: 'bg-[#ECD0FC]'
  },
  entertainment: {
    text: '打造休閒天堂！推廣寵物休閒與娛樂場所',
    bgColor: 'bg-[#89FCC8]'
  },
  welfare: {
    text: '為毛孩子謀福利！推動寵物醫療保障方案',
    bgColor: 'bg-[#F5FE68]'
  }
}

const itemList: { category: string; classList: string[] }[] = [
  {
    category: 'education',
    classList: [
      'bottom-1',
      'rotate-2',
      'max-sm:bottom-40',
      'max-sm:translate-x-20',
      'max-sm:-rotate-[10deg]'
    ]
  },
  {
    category: 'entertainment',
    classList: [
      'bottom-20',
      'translate-x-1/2',
      '-rotate-[10deg]',
      'max-sm:bottom-20',
      'max-sm:translate-x-4',
      'max-sm:rotate-[5deg]'
    ]
  },
  {
    category: 'welfare',
    classList: [
      'bottom-[45px]',
      'translate-x-[90%]',
      '-rotate-[20deg]',
      'max-sm:bottom-2',
      'max-sm:translate-x-10',
      'max-sm:-rotate-2'
    ]
  },
  {
    category: 'welfare',
    classList: ['bottom-4', 'translate-x-[170%]', 'rotate-[7deg]', 'max-lg:hidden']
  },
  {
    category: 'entertainment',
    classList: ['bottom-[98px]', 'translate-x-[200%]', '-rotate-[10deg]', 'max-lg:hidden']
  },
  {
    category: 'education',
    classList: ['bottom-6', 'translate-x-[305%]', 'rotate-[15deg]', 'max-xl:hidden']
  },
  {
    category: 'education',
    classList: ['bottom-[72px]', 'translate-x-[347%]', 'rotate-[5deg]', 'max-xl:hidden']
  },
  {
    category: 'welfare',
    classList: ['bottom-2', 'translate-x-[355%]', '-rotate-2', 'max-2xl:hidden']
  }
]
</script>
