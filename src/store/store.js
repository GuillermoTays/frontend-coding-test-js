import { defineStore } from 'pinia'

const useCountriesStore = defineStore('alerts', () => {
  const countries = []
  const loading = true
  const country = {}

  return { countries, loading, country }
})

export default useCountriesStore
