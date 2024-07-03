<template>
  <div v-if="countries">
    <Hero title="List of countries (Route Cache)" />
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
  <div v-if="initData.continents">
    <div class="section">
      <div class="container">
        <h2 class="title is-2">Continents</h2>
        <div class="columns is-multiline">
          <div
            v-for="continent in initData.continents"
            :key="continent.code"
            class="column is-4"
          >
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h3>{{ continent.name }}</h3>
                  <p>{{ continent.code }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const initData = await useInitData();

// useRouteCache((helper) => {
//   helper.setMaxAge(3600).setCacheable().addTags(["cache:page"]);
// });

const { data: countries } = await useAsyncGraphqlQuery("countryList", null, {
  transform: (v) => v.data.countries,
});
</script>
