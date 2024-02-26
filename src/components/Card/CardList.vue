<script setup>
import Card from './Card.vue'

const onClickAdd = () => {
  alert('Добавить');
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="5000"
      image-url="/sneakers/sneakers-1.jpg"
      :is-favorite="false"
      :on-click-add="onClickAdd"
    />
  </div>
</template>
