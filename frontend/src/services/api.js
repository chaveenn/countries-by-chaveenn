import axios from 'axios'

const API_BASE_URL = 'https://restcountries.com/v3.1'

// Create an axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000
})

// Get all countries with essential fields
export const fetchAllCountries = async () => {
  const response = await api.get('/all?fields=name,capital,population,region,flags,cca3,languages')
  return response.data
}

// Get a specific country by code (alpha3Code)
export const fetchCountryByCode = async (code) => {
  const response = await api.get(`/alpha/${code}`)
  return response.data[0]
}

// Get countries by region
export const fetchCountriesByRegion = async (region) => {
  const response = await api.get(`/region/${region}?fields=name,capital,population,region,flags,cca3,languages`)
  return response.data
}

// Search countries by name
export const searchCountriesByName = async (name) => {
  try {
    const response = await api.get(`/name/${name}?fields=name,capital,population,region,flags,cca3,languages`)
    return response.data
  } catch (error) {
    // If the country is not found, return an empty array
    if (error.response && error.response.status === 404) {
      return []
    }
    throw error
  }
}

// Get country borders (neighboring countries)
export const fetchCountryBorders = async (countryCodes) => {
  if (!countryCodes || countryCodes.length === 0) return []
  
  const codes = countryCodes.join(',')
  const response = await api.get(`/alpha?codes=${codes}&fields=name,cca3,flags`)
  return response.data
}