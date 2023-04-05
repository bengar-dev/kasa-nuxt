// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": "./",
  },
  app: {
    head: {
      title: "Kasa Rent Agency",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  components: [{ path: "~/components", pathPrefix: false }],
  css: ["~/styles/main.css"],
  pages: true,
  modules: ["@pinia/nuxt"],
});
