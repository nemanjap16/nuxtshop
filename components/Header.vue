<template>
  <div class="shadow-md bg-white">
    <header class="container py-5 flex items-center justify-between">
      <NuxtLink to="/">
        <div class="flex items-end gap-3 text-primary-red">
          <h1 class="font-black text-2xl">shoppingo</h1>
          <Truck />
        </div>
      </NuxtLink>
      <nav class="font-kumbh-700">
        <ul role="list" class="flex items-center gap-5 font-bold capitalize">
          <li class="hover:text-primary-red">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="hover:text-primary-red">
            <NuxtLink to="/products/">Products</NuxtLink>
          </li>
          <li class="hover:text-primary-red">
            <NuxtLink to="/women">Women</NuxtLink>
          </li>
          <li class="hover:text-primary-red">
            <NuxtLink to="/men">Men</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
