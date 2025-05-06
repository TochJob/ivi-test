<script setup lang="ts">
import { ref } from 'vue'
import { AppButton, AppInput } from '../app'

const inputValue = ref('')
</script>
<template>
  <div class="flex flex-col gap-8">
    <h4 class="text-white font-medium md:text-3xl text-xl w-3/4 mx-auto md:w-full text-center">
      Drop your email to receive complimentary printables for your teens
    </h4>
    <form class="flex md:flex-row flex-col gap-6 justify-center md:w-2/3 md:mx-auto">
      <AppInput v-model="inputValue" placeholder="Enter your E-mail" />
      <AppButton class="w-full md:w-fit">Get for free</AppButton>
    </form>
    <p class="font-medium text-white text-center md:text-base text-xs w-3/4 mx-auto md:w-full">
      By giving us your e-mail, you agree to our
      <a href="#" class="text-sucess hover:text-sucess/80 duration-300">privacy policy</a>
    </p>
  </div>
</template>
