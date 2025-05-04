import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { fetchAllCountries, fetchCountryByCode, fetchCountriesByRegion, searchCountriesByName } from '../services/api'

const CountriesContext = createContext()

export function useCountries() {
  return useContext(CountriesContext)
}

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  // Get all available regions from countries
  const regions = [...new Set(countries.map(country => country.region).filter(Boolean))].sort()
  
  // Get all available languages from countries
  const languages = [...new Set(
    countries.flatMap(country => 
      country.languages ? Object.values(country.languages) : []
    )
  )].sort()

  // Load all countries on initial render
  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoading(true)
        const data = await fetchAllCountries()
        setCountries(data)
        setFilteredCountries(data)
      } catch (err) {
        setError('Failed to fetch countries. Please try again later.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadCountries()
  }, [])

  // Apply filters when search term or region changes
  useEffect(() => {
    const applyFilters = async () => {
      try {
        setLoading(true)
        let result = []

        if (searchTerm && selectedRegion) {
          // If both search and region filters are active
          const searchResults = await searchCountriesByName(searchTerm)
          result = searchResults.filter(country => country.region === selectedRegion)
        } else if (searchTerm) {
          // If only search is active
          result = await searchCountriesByName(searchTerm)
        } else if (selectedRegion) {
          // If only region filter is active
          result = await fetchCountriesByRegion(selectedRegion)
        } else {
          // No filters active
          result = countries
        }

        setFilteredCountries(result)
      } catch (err) {
        setError('Failed to apply filters. Please try again.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    // Debounce search to avoid too many API calls
    const timeoutId = setTimeout(() => {
      applyFilters()
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchTerm, selectedRegion, countries])

  // Get a country by code (for detail page)
  const getCountryByCode = useCallback(async (code) => {
    try {
      setLoading(true)
      return await fetchCountryByCode(code)
    } catch (err) {
      setError(`Failed to fetch country with code ${code}`)
      console.error(err)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  // Filter by language
  const filterByLanguage = useCallback((language) => {
    if (!language) {
      setFilteredCountries(countries)
      return
    }
    
    const filtered = countries.filter(country => {
      if (!country.languages) return false
      return Object.values(country.languages).some(
        lang => lang.toLowerCase() === language.toLowerCase()
      )
    })
    
    setFilteredCountries(filtered)
  }, [countries])

  const value = {
    countries,
    filteredCountries,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedRegion,
    setSelectedRegion,
    regions,
    languages,
    getCountryByCode,
    filterByLanguage
  }

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  )
}