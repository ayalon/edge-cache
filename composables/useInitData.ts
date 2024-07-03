import type { ContinentsFragment } from "#graphql-operations";

export interface InitData {
  continents: ContinentsFragment[];
}

export default async function (): Promise<Ref<InitData>> {
  const data = useState<InitData>("initData");

  // Let's try to fetch the data from the cache first.
  const event = useRequestEvent();
  const { value, addToCache } = await useDataCache<InitData>("initData", event);
  if (value) {
    data.value = value;
    return data;
  }

  // If the data is not in the cache, we fetch it from the payload / useState().
  if (data.value) {
    return data;
  }

  // Fetch the data from the server.
  data.value = await useGraphqlQuery({
    name: "initData",
  }).then((v) => {
    const initData = {
      continents: v.data.continents || [],
    };

    addToCache(initData, ["init_data"]);

    return initData;
  });

  return data;
}
