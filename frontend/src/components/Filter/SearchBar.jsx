import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useCountries } from '../../contexts/CountriesContext'

function SearchBar() {
  const { searchTerm, setSearchTerm } = useCountries()
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm)

  // Update local state when context changes
  useEffect(() => {
    setLocalSearchTerm(searchTerm)
  }, [searchTerm])

  // Update context with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchTerm(localSearchTerm)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [localSearchTerm, setSearchTerm])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(localSearchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
          <FaSearch />
        </span>
        <input
          type="text"
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 text-gray-900 dark:text-white"
          placeholder="Search for a country..."
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          aria-label="Search countries"
        />
      </div>
    </form>
  )
}

export default SearchBar