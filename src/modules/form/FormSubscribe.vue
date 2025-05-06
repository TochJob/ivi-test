<script setup lang="ts">
import { ref } from 'vue'
import { AppButton, AppInput } from '../app'

const inputValue = ref('')
</script>
<template>
  <div class="flex flex-col gap-8">
    <h4 class="text-white font-medium text-3xl text-center">
      Drop your email to receive complimentary printables for your teens
    </h4>
    <form class="flex gap-6 justify-center w-2/3 mx-auto">
      <AppInput v-model="inputValue" placeholder="Enter your E-mail" />
      <AppButton>Get for free</AppButton>
    </form>
    <p class="font-medium text-white text-center">
      By giving us your e-mail, you agree to our
      <a href="#" class="text-sucess hover:text-sucess/80 duration-300">privacy policy</a>
    </p>
  </div>
</template>
