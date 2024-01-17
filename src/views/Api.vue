<template>
  <p v-show="store.loading" class="text-lg">Loading..</p>
  <div
    v-show="!store.loading"
    class="max-w-7xl mx-auto my-20 flex flex-col gap-[20px] items-center"
  >
    <p class="text-lg">Please select a row to see details.</p>
    <EasyDataTable
      v-bind:headers="headers"
      show-index
      v-bind:rows-per-page="rowsPerPage"
      class="w-[600px]"
      v-on:click-row="showRow"
    ></EasyDataTable>

    <CountryView />
  </div>
</template>

<script setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { notify } from '@kyvg/vue3-notification'
import useCountriesStore from '../store/store'
import CountryView from '../components/country/CountryView.vue'

const store = useCountriesStore()

const QUERY_COMPANY_INFO = gql`
  query ListCountries {
    countries(filter: {}) {
      name
      native
      capital
      emoji
      currency
      phone
      continent {
        code
        name
      }
      currencies
      awsRegion
      languages {
        code
        name
      }
    }
  }
`

useQuery(QUERY_COMPANY_INFO).onResult((res) => {
  if (!res.loading && store.loading) {
    if (!res.error) {
      notify({
        title: 'Success',
        type: 'success',
        text: 'Data Loaded!',
      })
      store.countries = res.data.countries
      store.loading = false
    } else {
      notify({
        title: 'Error',
        type: 'error',
        text: 'Fail to Load!',
      })
    }
  }
})

const headers = [
  { text: 'NAME', value: 'name', sortable: true },
  { text: 'CAPITAL', value: 'capital' },
  { text: 'PHONE', value: 'phone', sortable: true },
]

const rowsPerPage = 10

const showRow = (item) => {
  store.country = item
}
</script>
