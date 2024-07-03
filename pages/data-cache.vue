<template>
  <div v-if="countries">
    <Hero title="List of countries (Data Cache)" />
    <div class="section">
      <div class="container">
        <table class="table is-striped is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="country in countries" :key="country.code">
              <td>
                {{ country.code }}
              </td>
              <td>
                {{ country.name }}
              </td>
              <td>
                {{ country.capital }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
console.log("Start Data Cache");

const nuxtRoute = useRoute();

const { data: countries } = await useAsyncData(nuxtRoute.path, async () => {
  const { value, addToCache } = await useDataCache("countries");

  if (value) {
    console.log("value found");
    return value;
  }

  const countries = await useGraphqlQuery("countryList", null).then((v) => {
    return v.data.countries;
  });

  addToCache(countries, ["countries"]);
  return countries;
});

console.log("End Data Cache");
</script>
