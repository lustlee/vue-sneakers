<script setup>
import { inject } from 'vue'

defineProps({
  title: String,
  description: String,
  imageUrl: String,
})

const { closeDrawer } = inject('cart')
</script>

<template>
  <div class="flex flex-col items-center text-center w-72 mx-auto">
    <img height="80" width="80" :src="imageUrl" alt="Info Image">
    <h2 class="mt-4 text-2xl font-medium">{{ title }}</h2>
    <p class="text-gray-400 mt-2">{{ description }}</p>

    <div class="flex items-center gap-5 mb-8">
      <button
        class="mt-4 bg-lime-500 w-full rounded-xl py-4 px-8 text-white disabled:bg-slate-300 hover:bg-lime-600 transition active:bg-lime-700 cursor-pointer"
        @click="closeDrawer"
      >
        Вернуться к корзине
      </button>
    </div>
  </div>
</template>