<template>
  <div class="shadow-md bg-white">
    <header class="container">
      <nav class="flex items-center justify-between">
        <NuxtLink to="/">
          <h1 class="font-bold text-2xl uppercase">web-shop</h1>
        </NuxtLink>
        <ul
          role="list"
          class="flex items-center gap-5 py-5 font-bold capitalize"
        >
          <li class="hover:text-red-300">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="hover:text-red-300">
            <NuxtLink to="/products/">Products</NuxtLink>
          </li>
          <li class="hover:text-red-300">
            <NuxtLink to="/women">Women</NuxtLink>
          </li>
          <li class="hover:text-red-300">
            <NuxtLink to="/men">Men</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
