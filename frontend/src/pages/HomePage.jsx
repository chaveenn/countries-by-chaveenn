import { useEffect } from 'react'
import SearchBar from '../components/Filter/SearchBar'
import FilterDropdown from '../components/Filter/FilterDropdown'
import CountryList from '../components/Countries/CountryList'
import { useCountries } from '../contexts/CountriesContext'

function HomePage() {
  const { filteredCountries, loading, error, setSearchTerm, setSelectedRegion } = useCountries()

  useEffect(() => {
    return () => {
      setSearchTerm('')
      setSelectedRegion('')
    }
  }, [setSearchTerm, setSelectedRegion])

  return (
    <div>
      <div className="mb-12 mx-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Let's explore the World</h1>
        
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <SearchBar />
        <FilterDropdown type="region" />
        <FilterDropdown type="language" />
      </div>
    

      
      <CountryList countries={filteredCountries} loading={loading} error={error} />
    </div>
  )
}

export default HomePage
