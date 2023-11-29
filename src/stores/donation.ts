import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDonationStore = defineStore('donation', () => {
  const donations = ref([
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
  ])
  const customDonation = ref({
    title: '自訂贊助金額',
    price: 0
  })

  const currentDonation = ref()

  function setCurrentDonation(plan: string) {
    currentDonation.value =
      donations.value.find((item) => item.title === plan) || customDonation.value
  }

  function setCustomPrice(input: number) {
    customDonation.value.price = input
  }

  return {
    donations,
    currentDonation,
    customDonation,
    setCurrentDonation,
    setCustomPrice
  }
})
