<template>
  <Teleport to="body">
    <template v-if="state">
      <div
        class="fixed flex justify-center items-center top-0 left-0 w-full h-full z-50 bg-[#062523]/40"
      >
        <div
          class="fixed font-bold text-center bg-primary rounded-[60px] w-[calc(100%-40px)] sm:max-w-[600px] pt-20 pb-16"
        >
          <p class="text-xl sm:text-[28px] text-white mb-2.5"><slot name="header" /></p>
          <p class="text-secondary sm:text-xl mb-10"><slot /></p>
          <BaseButton class="bg-white text-primary" @click="finishDonation"
            ><slot name="button"
          /></BaseButton>
        </div>
      </div>
    </template>
  </Teleport>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import { useModalStateStore } from '@/stores/modalState'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()

const modalStateStore = useModalStateStore()
const { state } = storeToRefs(modalStateStore)
const { hideModal } = modalStateStore

function finishDonation() {
  hideModal()
  router.push({ name: 'home' })
}
</script>
