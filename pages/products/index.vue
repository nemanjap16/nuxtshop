<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    <div v-for="product in data" class="">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped></style>
