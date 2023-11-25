<template>
  <div
    class="relative w-full min-h-screen text-center pt-[140px] sm:pt-[150px] pb-[72px] px-12 text-primary sm:overflow-hidden"
    id="donation"
  >
    <h3 class="text-xl sm:text-[40px] font-bold mb-3 sm:mb-5 leading-normal">
      您的小筆捐款，<br class="sm:hidden" />是每隻毛孩未來的大大動力！
    </h3>
    <p class="font-bold text-primary-light sm:text-[28px] mb-10 sm:mb-[60px]">
      目前贊助總金額：NT$ 987,655,873
    </p>
    <div class="relative z-10 flex justify-center flex-wrap gap-10 mb-10 sm:mb-[120px]">
      <div
        v-for="item in donationPlans"
        :key="item.title"
        class="w-60 py-8 px-4 bg-white border border-primary rounded-[20px] shadow-[6px_8px_0_#FADCA8]"
      >
        <h3 class="text-[28px] font-bold mb-4">「{{ item.title }}」</h3>
        <p class="text-xl mb-10">捐款新台幣{{ thousandSeparator(item.price.toString()) }}元</p>
        <BaseButton class="mb-4">馬上支持 !</BaseButton>
        <span class="block">已有 {{ thousandSeparator(item.peopleNum.toString()) }} 人贊助</span>
      </div>
    </div>
    <div class="relative z-10">
      <p class="text-[28px] font-bold mb-4">「 自訂贊助金額 」</p>
      <p class="sm:text-xl font-bold text-primary-light mb-4">目前小額贊助總金額：NT$ 655,873</p>
      <label for="price" class="relative">
        <input
          type="text"
          class="max-w-[416px] w-full bg-transparent border-b-2 border-primary text-xl p-2 ps-16 mb-8"
        />
        <span class="absolute font-bold text-xl left-3 top-0">NT$</span> </label
      ><br />
      <BaseButton>馬上支持 !</BaseButton>
    </div>
    <img
      src="../../assets/images/murr-love.svg"
      alt="murr love"
      class="absolute w-full left-1/2 -translate-x-1/2 sm:w-3/4 lg:w-1/2 sm:bottom-0 sm:translate-y-1/3"
    />
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../base/BaseButton.vue';

const donationPlans = [
  {
    title: '喵星人之友',
    price: 600,
    peopleNum: 9957
  },
  {
    title: '喵星大使',
    price: 6000,
    peopleNum: 2000
  },
  {
    title: '喵星傳奇',
    price: 60000,
    peopleNum: 999
  }
]

function thousandSeparator(num: string) {
  const n = parseInt(num, 10)
  return `${n
    .toFixed(0)
    .replace(/./g, (c, i, a) =>
      i && c !== '.' && (a.length - i) % 3 === 0 ? `, ${c}`.replace(/\s/g, '') : c
    )}`
}
</script>
