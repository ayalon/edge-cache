// @ts-ignore
import { defineMultiCacheOptions } from "nuxt-multi-cache/dist/runtime/serverOptions";
import { getHeaders, type H3Event } from "h3";
import lruCacheDriver from "unstorage/drivers/lru-cache";
import cloudflareKVBindingDriver from "unstorage/drivers/cloudflare-kv-binding";

const multiCacheServerOptions = defineMultiCacheOptions({
  api: {},
  data: {
    storage: {
      // driver: lruCacheDriver({
      //   max: 10000,
      // }),
      driver: cloudflareKVBindingDriver({ binding: "edge_cache" }),
    },
  },
  route: {
    storage: {
      // driver: lruCacheDriver({
      //   max: 10000,
      // }),
      driver: cloudflareKVBindingDriver({ binding: "edge_cache" }),
    },
    buildCacheKey: (event: H3Event) => {
      const path = (event.path || "")
        .replaceAll("/", "__")
        .replaceAll("?", "__")
        .replaceAll("&", "__");
      return path;
    },
  },
});

export default multiCacheServerOptions;
