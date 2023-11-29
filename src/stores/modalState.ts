import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStateStore = defineStore('modal-state', () => {
  const state = ref(false)

  function showModal() {
    state.value = true
  }

  function hideModal() {
    state.value = false
  }

  return {
    state,
    showModal,
    hideModal
  }
})
