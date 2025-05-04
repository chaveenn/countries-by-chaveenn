import CountryCard from './CountryCard'
import CountryCardSkeleton from './CountryCardSkeleton'

function CountryList({ countries, loading, error }) {
  // If loading, show skeleton cards
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <CountryCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  // If error, show error message
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-error-500 text-lg mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="btn btn-primary"
        >
          Try Again
        </button>
      </div>
    )
  }

  // If no countries found, show message
  if (countries.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">No countries found</h2>
        <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
      </div>
    )
  }

  // Otherwise, show the countries
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  )
}

export default CountryList
