<template>
  <div>
    <Head>
      <Title>Shoppingo | {{ data.title }}</Title>
      <Meta name="description" :content="data.description" />
    </Head>
    <ProductDetails :product="data" />
  </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products'

const { data } = await useFetch(`${uri}/${id}`, { key: id })

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found!',
    fatal: true,
  })
}
</script>
