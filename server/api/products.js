export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = useQuery(event)
  // handle post requests
  // const { age } = await useBody(event)
  const { serverURL } = useRuntimeConfig()

  const { data } = await $fetch(serverURL)
  return data
})
