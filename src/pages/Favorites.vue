<script setup>
import axiosApi from '@/axiosApi.js'
import { onMounted, ref } from 'vue'
import CardList from '@/components/Card/CardList.vue'

const favorites = ref([]);

onMounted(async () => {
  try {
    const { data } = await axiosApi.get(`/favorites?_relations=items`);

    favorites.value = data.map(obj => obj.item);
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
  <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>

  <div class="mt-10">
   <CardList :items="favorites" is-favorites />
  </div>
</template>