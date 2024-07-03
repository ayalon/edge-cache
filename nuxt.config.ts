// https://nuxt.com/docs/api/configuration/nuxt-config
import index from "./config/graphqlMiddleware";
import multiCache from "./config/multiCache";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-graphql-middleware",
    "nuxt-multi-cache",
    "@nuxt/devtools",
    "@nuxt/eslint",
  ],
  graphqlMiddleware: index,
  multiCache,
  ssr: true,

  compatibilityDate: "2024-07-03",
  experimental: {
    asyncContext: true,
  },
});
