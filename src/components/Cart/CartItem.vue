<script setup>
const emit = defineEmits(['onClickRemove'])

defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
})
</script>

<template>
  <div class="flex items-center border border-slate-100 p-4 rounded-xl gap-4">
    <img class="w-16 h-16" :src="imageUrl" :alt="title">

    <div class="flex flex-col flex-1">
      <p>{{title }}</p>

      <div class="flex justify-between mt-5">
        <b class="flex-1">{{ price }} сом</b>
        <img
          @click="emit('onClickRemove')"
          class="opacity-30 hover:opacity-100 cursor-pointer transition"
          src="/close.svg"
          alt="Close"
        >
      </div>
    </div>
  </div>
</template>