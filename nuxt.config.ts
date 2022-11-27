// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Shoppingo',
      link: [
        { rel: 'icon', href: '/truck.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700&display=swap',
        },
      ],
      meta: [{ name: 'description', content: 'Shoppingo web store.' }],
    },
  },
  runtimeConfig: {
    // expose to server routes
    apiKey: process.env.API_KEY,
    serverURL: 'https://fakestoreapi.com/products',

    // expose to frontend
    public: {
      baseURL: 'https://fakestoreapi.com/products',
    },
  },
})
