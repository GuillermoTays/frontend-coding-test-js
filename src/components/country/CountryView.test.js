import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import CountryView from './CountryView.vue'
import useCountriesStore from '../../store/store'

const wrapper = mount(CountryView, {
  global: {
    plugins: [createTestingPinia()],
  },
})

const store = useCountriesStore()
store.country = {
  name: 'France',
  capital: 'Paris',
  currency: 'EUR',
  phone: '33',
  awsRegion: 'eu-west-3',
  languages: [{ name: 'French' }],
  continent: { name: 'Europe' },
}

describe('CountryView.vue', () => {
  it('renders country details correctly', () => {
    expect(wrapper.text()).toContain('Country Details')
    expect(wrapper.text()).toContain('France')
    expect(wrapper.text()).toContain('Paris')
    expect(wrapper.text()).toContain('EUR')
    expect(wrapper.text()).toContain('+ 33')
    expect(wrapper.text()).toContain('eu-west-3')
    expect(wrapper.text()).toContain('French')
    expect(wrapper.text()).toContain('Europe')
  })
})
