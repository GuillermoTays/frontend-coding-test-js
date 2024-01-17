import { createApp, provide, h } from 'vue'
import './styles/main.css'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'
import initializeRouter from './router'
import 'vue3-easy-data-table/dist/style.css'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://countries.trevorblades.com',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

const pinia = createPinia()

app.use(pinia)
app.use(Notifications)

initializeRouter(app)
app.component('EasyDataTable', Vue3EasyDataTable)

app.mount('#app')
