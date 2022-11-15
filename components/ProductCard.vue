<template>
  <div>
    <figure class="card">
      <img
        :src="product.image"
        :alt="product.title"
        class="max-h-[120px] mx-auto"
      />
      <figcaption class="mt-2">
        <p class="font-kumbh-500 truncate">{{ product.title }}</p>

        <NuxtLink :to="`/products/${product.id}`"
          ><button
            aria-label="Details"
            class="bg-primary-red w-full mt-3 px-4 py-1 rounded-md"
          >
            <span class="font-kumbh-500 text-md text-slate-100"
              >View Details</span
            >
          </button></NuxtLink
        >
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.card {
  @apply rounded-md text-center bg-white shadow-lg min-h-[170px] p-4;
}
</style>
