<template>
  <div
    class="hero rounded-lg overflow-hidden mx-auto py-10 px-16 flex flex-col"
  >
    <div class="mb-7">
      <h1 class="text-2xl text-slate-50 font-kumbh-700">shoppingo provides</h1>
      <h1 class="text-2xl text-slate-50 font-kumbh-700">
        everything you need on one place
      </h1>
    </div>
    <p class="font-kumbh-400 text-slate-100 text-md w-full md:w-1/2 lg:w-1/3">
      Our high-quality products and services seamlessly remove your obstacles
      and leave you focusing on what you matter most — satisfying customers’
      needs.
    </p>
    <div class="mt-7 flex flex-col gap-4">
      <div class="text-yellow-300 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-7 h-7"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
        <h4 class="text-slate-100">high-quality products</h4>
      </div>
      <div class="text-yellow-300 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-7 h-7"
        >
          <path
            fill-rule="evenodd"
            d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
            clip-rule="evenodd"
          />
        </svg>
        <h4 class="text-slate-100">customer support</h4>
      </div>
      <div class="text-yellow-300 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
        <h4 class="text-slate-100">trustworthy partner</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Shoppingo | Home page',
  meta: [{ name: 'description', content: 'Shoppingo index page' }],
})
</script>

<style>
.hero {
  min-height: 300px;
  background-repeat: no-repeat;
  background: linear-gradient(
      to right,
      hsla(5, 77%, 33%, 0.95) 30%,
      transparent
    ),
    url('/images/e-commerce.png');
}
</style>
