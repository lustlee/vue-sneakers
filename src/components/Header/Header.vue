<script setup>
defineProps({
  totalPrice: Number,
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">

    <router-link to="/">
      <div class="flex items-center gap-4">
        <a href="#" class="inline-block">
          <img src="/logo.png" alt="Logo" class="w-10">
        </a>
        <div>
          <h2 class="text-xl font-bold uppercase">Vue Snickers</h2>
          <p class="text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <li @click="() => emit('openDrawer')" class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="Cart">
        <b>{{ totalPrice }} сом.</b>
      </li>

      <router-link to="/favorites">
        <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
          <img src="/heart.svg" alt="Bookmarks">
          <span>Закладки</span>
        </li>
      </router-link>

      <router-link to="/profile">
        <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
          <img src="/profile.svg" alt="Profile">
          <span>Профиль</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>