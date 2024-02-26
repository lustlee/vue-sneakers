<script setup>
import Header from './components/Header/Header.vue'
import CardList from './components/Card/CardList.vue'
import Drawer from '@/components/Drawer/Drawer.vue'
</script>

<template>
<!--  <Drawer />-->
  <div
    class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header />

    <div class="p-10">
      <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

      <CardList />
    </div>

  </div>
</template>