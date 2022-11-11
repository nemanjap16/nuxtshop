<template>
  <div>
    <figure class="card">
      <img
        :src="product.image"
        :alt="product.title"
        class="max-h-[120px] mx-auto"
      />
      <figcaption class="mt-2">
        <p class="font-bold truncate">{{ product.title }}</p>
        <button
          class="font-bold text-slate-100 mt-5 bg-green-600 px-5 py-2 rounded-md w-full"
        >
          <NuxtLink :to="`/products/${product.id}`"
            ><span class="text-sm">View Details</span></NuxtLink
          >
        </button>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
console.log(product)
</script>

<style scoped>
.card {
  @apply rounded-md text-center bg-white shadow-lg min-h-[170px] p-4;
}
</style>
