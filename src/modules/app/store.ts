import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const cartList = ref<number[]>(Array(10))

  const cartLength = computed(() => cartList.value.length)

  return {
    cartList,

    cartLength,
  }
})
