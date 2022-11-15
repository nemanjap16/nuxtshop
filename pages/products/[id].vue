<template>
  <div>
    <ProductDetails :product="data" />
  </div>
</template>

<script setup>
const { id } = useRoute().params
const { data } = await useFetch(`https://fakestoreapi.com/products/${id}`, {
  key: id,
})
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found!',
    fatal: true,
  })
}
</script>
