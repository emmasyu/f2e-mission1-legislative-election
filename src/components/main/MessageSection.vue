<template>
  <div
    class="relative z-10 w-full min-h-screen text-center pt-36 sm:pt-40 pb-20 px-5 lg:flex flex-col justify-center items-center"
    id="message"
  >
    <h3 class="text-xl sm:text-[40px] font-bold text-primary mb-3 sm:mb-8">
      您的聲音，我們的行動！
    </h3>
    <p class="mb-3 sm:mb-10 sm:text-xl">
      親愛的鄉親，<br class="lg:hidden" />每一位市民的意見都是我們社區前進的原動力。<br
        class="lg:hidden"
      />無論大小事，我都誠摯希望聽到您的建議。<br />分享您的想法，一同為我們的未來打造更美好！
    </p>
    <form @submit.prevent="showModal" class="text-primary text-start">
      <div class="lg:flex flex-wrap justify-center lg:gap-20 mb-10">
        <div class="sm:basis-[336px]">
          <BaseInput id="name" type="text" placeholder="請輸入您的姓名" :required="true"
            >您的姓名</BaseInput
          >
          <BaseInput id="email" type="email" placeholder="請輸入您的Email" :required="true"
            >您的Email</BaseInput
          >
          <BaseInput id="telephone" type="tel" placeholder="請輸入您的電話" :required="true"
            >您的手機</BaseInput
          >
        </div>
        <div class="basis-[336px]">
          <label for="message"
            >您的建言
            <textarea
              id="message"
              class="w-full px-2.5 py-2.5 mb-10 mt-3 text-xs border border-[#C9F1EF] rounded-[4px] hover:border-primary focus:outline-none focus:border-primary focus:bg-[#E9FEFD] placeholder:text-primary"
              placeholder="我想和喵喵說...."
              rows="14"
              :required="true"
            />
          </label>
        </div>
      </div>
      <div class="text-center">
        <BaseButton class="w-full lg:max-w-[400px] mb-2 text-white">送出</BaseButton>
      </div>
    </form>
    <p class="text-primary">為了喵喵站出來！</p>
    <BaseModal>
      <template v-slot:header>感謝您的發聲</template>
      <template v-slot>您的建議正朝向喵喵飛奔中 !</template>
      <template v-slot:button>好的！</template>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../base/BaseButton.vue'
import BaseInput from '../base/BaseInput.vue'
import BaseModal from '../base/BaseModal.vue'
import { useModalStateStore } from '@/stores/modalState'

const modalStateStore = useModalStateStore()
const { showModal } = modalStateStore
</script>
