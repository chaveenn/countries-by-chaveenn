import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useUser } from '../../contexts/UserContext'

function CountryCard({ country }) {
  const { isAuthenticated, isInFavorites, addToFavorites, removeFromFavorites } = useUser()
  
  const formatPopulation = (population) => {
    return new Intl.NumberFormat().format(population)
  }

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (isInFavorites(country.cca3)) {
      removeFromFavorites(country.cca3)
    } else {
      addToFavorites(country)
    }
  }

  // Check if the country has valid flag data
  const flagUrl = country.flags?.png || country.flags?.svg
  
  return (
    <div className="card group animate-fade-in">
      <Link to={`/country/${country.cca3}`} className="block h-full">
        {/* Card header with flag */}
        <div className="relative h-40 overflow-hidden">
          {flagUrl ? (
            <img 
              src={flagUrl} 
              alt={country.flags?.alt || `Flag of ${country.name.common}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">No flag available</span>
            </div>
          )}
          
          {/* Favorite button */}
          {isAuthenticated && (
            <button 
              onClick={handleFavoriteClick}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-primary-700 dark:text-accent-500 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label={isInFavorites(country.cca3) ? "Remove from favorites" : "Add to favorites"}
            >
              {isInFavorites(country.cca3) ? <FaHeart /> : <FaRegHeart />}
            </button>
          )}
        </div>
        
        {/* Card content */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-primary-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-accent-500 transition-colors">
            {country.name.common}
          </h2>
          
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p><span className="font-semibold">Population:</span> {formatPopulation(country.population)}</p>
            <p><span className="font-semibold">Region:</span> {country.region || 'N/A'}</p>
            <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard