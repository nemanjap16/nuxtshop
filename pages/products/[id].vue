<template>
  <div>
    <h1>{{ id }}</h1>
    <p>{{ data.title }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params
const { data } = await useFetch(`https://fakestoreapi.com/products/${id}`, { key: id })
</script>