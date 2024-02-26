<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import axiosApi from '@/axiosApi.js'

import Header from './components/Header/Header.vue'
import CardList from './components/Card/CardList.vue'
import Drawer from '@/components/Drawer/Drawer.vue'

const items = ref([])

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axiosApi.get(`/favorites`)

    items.value = items.value.map(item => {
      const favorite = favorites.find(favorite => favorite.parentId === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }

    })
  } catch (err) {
    console.error(err)
  }
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id
      }

      item.isFavorite = true

      const { data } = await axiosApi.post(`/favorites`, obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axiosApi.delete(`/favorites/${ item.favoriteId }`)
      item.favoriteId = null
    }
  } catch (err) {
    console.error(err)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${ filters.searchQuery }*`
    }

    const { data } = await axiosApi.get(`/items`, {
      params
    })

    items.value = data.map(obj => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))

  } catch (err) {
    console.error(err)
  }
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
})

watch(filters, fetchItems)
</script>

<template>
  <!--  <Drawer />-->
  <div
    class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header />

    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

        <div class="flex gap-4">
          <select
            @change="onChangeSelect"
            class="py-2 px-3 border rounded-md outline-none"
          >
            <option value="name">По названию</option>
            <option value="price">По цене (дешевые)</option>
            <option value="-price">По цене (дорогие)</option>
          </select>

          <div class="relative">
            <img
              src="/search.svg"
              alt="Search Input"
              class="absolute left-4 top-3"
            >
            <input
              class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
              placeholder="Поиск..."
              type="text"
              @input="onChangeSearchInput"
            >
          </div>
        </div>

      </div>

      <div class="mt-10">
        <CardList :items="items" @addToFavorite="addToFavorite" />
      </div>
    </div>
  </div>
</template>