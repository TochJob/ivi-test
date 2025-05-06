<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'

const props = defineProps<{
  modelValue: string | number
  label?: string
  type?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
  (e: 'input', event: Event): void
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <div class="w-full">
    <input
      v-model="inputValue"
      :type="type || 'text'"
      :placeholder="placeholder"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @input="$emit('input', $event)"
      class="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-white h-14 placeholder-black placeholder:text-xl"
    />
  </div>
</template>
