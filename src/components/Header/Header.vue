<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <div class="flex items-center gap-4">
      <a href="#" class="inline-block">
        <img src="/logo.png" alt="Logo" class="w-10">
      </a>
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Snickers</h2>
        <p class="text-slate-400">Магазин лучших кроссовок</p>
      </div>
    </div>

    <ul class="flex items-center gap-10">
      <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="Cart">
        <b>1205 руб.</b>
      </li>
      <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
        <img src="/heart.svg" alt="Bookmarks">
        <span>Закладки</span>
      </li>
      <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
        <img src="/profile.svg" alt="Profile">
        <span>Профиль</span>
      </li>
    </ul>

  </header>
</template>