// @ts-ignore
import { defineMultiCacheOptions } from "nuxt-multi-cache/dist/runtime/serverOptions";
import { getHeaders, type H3Event } from "h3";
import lruCacheDriver from "unstorage/drivers/lru-cache";

const multiCacheServerOptions = defineMultiCacheOptions({
  api: {},
  data: {
    storage: {
      driver: lruCacheDriver({
        max: 10000,
      }),
    },
  },
  route: {
    storage: {
      driver: lruCacheDriver({
        max: 10000,
      }),
    },
    buildCacheKey: (event: H3Event) => {
      const path = (event.path || "")
        .replaceAll("/", "__")
        .replaceAll("?", "__")
        .replaceAll("&", "__");

      const headers = getHeaders(event);
      return path;
    },
  },
});

export default multiCacheServerOptions;
