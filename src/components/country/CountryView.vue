<template>
  <div class="shadow-xl p-4 flex flex-col gap-4 min-w-[600px]">
    <p class="text-lg">Country Details</p>
    <div class="flex flex-row justify-between">
      <div>Country :</div>
      <div>{{ store.country.name }}</div>
    </div>
    <div class="flex flex-row justify-between">
      <div>Capital :</div>
      <div v-if="store.country.capital">{{ store.country.capital }}</div>
      <div v-else>No Capital</div>
    </div>
    <div class="flex flex-row justify-between">
      <div>currency :</div>
      <div v-if="store.country.currency">{{ store.country.currency }}</div>
      <div v-else>No Currency</div>
    </div>
    <div class="flex flex-row justify-between">
      <div>phone :</div>
      <div v-if="store.country.phone">+ {{ store.country.phone }}</div>
      <div v-else>No Phone</div>
    </div>
    <div class="flex flex-row justify-between">
      <div>awsRegion :</div>
      <div v-if="store.country.awsRegion">{{ store.country.awsRegion }}</div>
      <div v-else>No Aws Region</div>
    </div>
    <div class="flex flex-row justify-between">
      <div>language :</div>
      <div v-if="store.country.languages && store.country.languages.length">
        {{ store.country.languages[0].name }}
      </div>
      <div v-else>No Language</div>
    </div>
    <div class="flex flex-row justify-between">
      <div>continent :</div>
      <div v-if="store.country.continent">
        {{ store.country.continent.name }}
      </div>
      <div v-else>No Continent</div>
    </div>
  </div>
</template>

<script setup>
import useCountriesStore from '../../store/store'

const store = useCountriesStore()
</script>
