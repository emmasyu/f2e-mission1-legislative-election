<template>
  <div class="w-full min-h-screen px-5 sm:px-8 pt-32 lg:pt-48 pb-24 sm:pb-36">
    <h4
      class="text-xl sm:text-2xl lg:text-[40px] sm:text-center font-bold text-primary px-3 mb-8 sm:mb-14"
    >
      您的支持<br class="sm:hidden" />將讓喵喵能夠推動更多政策與福利 !
    </h4>
    <form
      @submit.prevent="showModal"
      class="sm:max-w-7xl lg:flex mx-auto bg-white rounded-[60px] shadow-[6px_8px_0_#FADCA8] py-14 sm:py-5 px-5 sm:px-10"
    >
      <div class="flex-1 sm:p-12">
        <p
          class="text-xl sm:text-[28px] leading-normal font-bold text-primary pb-4 mb-5 border-b border-primary"
        >
          進行付款
        </p>
        <p class="sm:text-xl sm:font-bold mb-4">付款方式</p>

        <div class="mb-5 sm:mb-8">
          <PayRadio name="pay" :list="PayList" />
        </div>
        <div class="grid grid-cols-2 gap-[18px] mb-3">
          <BaseInput
            class="sm:text-xl col-span-2"
            placeholder="XXXX XXXX XXXX XXXX"
            inputClass="py-3 px-4 text-[16px] mt-4 mb-1.5"
            :required="true"
            minlength="16"
            maxlength="16"
            pattern="[0-9]*"
            >信用卡/金融卡卡號</BaseInput
          >
          <BaseInput
            class="sm:text-xl"
            placeholder="MM/YY"
            inputClass="py-3 px-4 text-[16px] mt-4"
            :required="true"
            >卡片到期日</BaseInput
          >
          <BaseInput
            class="sm:text-xl"
            placeholder="XXX"
            inputClass="py-3 px-4 text-[16px] mt-4"
            :required="true"
            >驗證碼</BaseInput
          >
        </div>
      </div>
      <div class="flex-1 sm:p-12">
        <p
          class="text-xl sm:text-[28px] leading-normal font-bold text-primary pb-4 mb-5 sm:mb-10 border-b border-primary"
        >
          贊助方案
        </p>
        <div class="flex justify-between pb-[168px] mb-6 border-b border-primary">
          <p class="text-xl sm:text-2xl font-bold">「 {{ currentDonation.title }} 」</p>
          <p class="text-xl">
            NTD {{ $filters.thousandSeparator(currentDonation.price.toString()) }}
          </p>
        </div>
        <div class="flex justify-between mb-10">
          <p class="text-xl font-bold">Total</p>
          <p class="text-2xl sm:text-[40px] font-bold text-primary">
            NT${{ $filters.thousandSeparator(currentDonation.price.toString()) }}
          </p>
        </div>
        <div class="text-center sm:px-9">
          <BaseButton class="sm:w-full text-white">確認付款</BaseButton>
        </div>
      </div>
    </form>
    <BaseModal>
      <template v-slot:header>感謝您的支持</template>
      <template v-slot>您已收到好運喵喵的祝福！</template>
      <template v-slot:button>收下祝福</template>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import PayRadio from '@/components/base/PayRadio.vue'
import BaseModal from '@/components/base/BaseModal.vue'
import { useDonationStore } from '@/stores/donation'
import { useModalStateStore } from '@/stores/modalState'
import { storeToRefs } from 'pinia'

const donationStore = useDonationStore()
const { currentDonation } = storeToRefs(donationStore)

const modalStateStore = useModalStateStore()
const { showModal } = modalStateStore

const PayList = [
  {
    id: 'mastercard',
    value: 'mastercard',
    img: `before:bg-[url('../assets/images/pay/mastercard.png')]`,
    checked: true
  },
  {
    id: 'union-pay',
    value: 'union-pay',
    img: `before:bg-[url('../assets/images/pay/unionpay.png')]`,
    checked: false
  },
  {
    id: 'visa',
    value: 'visa',
    img: `before:bg-[url('../assets/images/pay/visa.png')]`,
    checked: false
  },
  {
    id: 'google-pay',
    value: 'google-pay',
    img: `before:bg-[url('../assets/images/pay/googlepay.png')]`,
    checked: false
  },
  {
    id: 'apple-pay',
    value: 'apple-pay',
    img: `before:bg-[url('../assets/images/pay/applepay.png')]`,
    checked: false
  }
]
</script>
