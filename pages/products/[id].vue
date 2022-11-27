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
const { baseURL } = useRuntimeConfig()

const { data } = await useFetch(`${baseURL}/${id}`, { key: id })

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found!',
    fatal: true,
  })
}
</script>
