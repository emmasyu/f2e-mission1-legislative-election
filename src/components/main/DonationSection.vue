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
        v-for="item in donations"
        :key="item.title"
        class="w-60 py-8 px-4 bg-white border border-primary rounded-[20px] shadow-[6px_8px_0_#FADCA8] hover:shadow-[6px_8px_0_#F4CA80]"
      >
        <h3 class="text-[28px] font-bold mb-4">「{{ item.title }}」</h3>
        <p class="text-xl mb-10">
          捐款新台幣{{ $filters.thousandSeparator(item.price.toString()) }}元
        </p>
        <BaseButton class="mb-4 text-white" @click="pushToDonation(item)">馬上支持 !</BaseButton>
        <span class="block"
          >已有 {{ $filters.thousandSeparator(item.peopleNum.toString()) }} 人贊助</span
        >
      </div>
    </div>
    <form @submit.prevent="pushToDonation(customDonation)" class="relative z-10">
      <p class="text-[28px] font-bold mb-4">{{ customDonation.title }}</p>
      <p class="sm:text-xl font-bold text-primary-light mb-4">目前小額贊助總金額：NT$ 655,873</p>
      <label for="price" class="relative group">
        <input
          type="number"
          class="max-w-[416px] w-full bg-transparent border-b-2 border-primary text-xl p-2 ps-16 mb-8 group-hover:border-primary-light focus:outline-none focus:bg-[#E9FEFD]"
          min="1"
          v-model.number="customDonation.price"
          @change="setCustomPrice(customDonation.price)"
        />
        <span class="absolute font-bold text-xl left-3 top-0 group-hover:text-primary-light"
          >NT$</span
        > </label
      ><br />
      <BaseButton class="text-white">馬上支持 !</BaseButton>
    </form>
    <img
      src="../../assets/images/murr-love.svg"
      alt="murr love"
      class="absolute w-full left-1/2 -translate-x-1/2 sm:w-3/4 lg:w-1/2 sm:bottom-0 sm:translate-y-1/3"
    />
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../base/BaseButton.vue'
import router from '@/router'
import { useDonationStore } from '@/stores/donation'
import { storeToRefs } from 'pinia'

const donationStore = useDonationStore()
const { donations, customDonation } = storeToRefs(donationStore)
const { setCurrentDonation, setCustomPrice } = donationStore

function pushToDonation(plan: { title: string; price: number }): void {
  setCurrentDonation(plan.title)
  router.push({ name: 'donation' })
}
</script>
