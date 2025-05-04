import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa'
import { fetchCountryBorders } from '../../services/api'
import { useUser } from '../../contexts/UserContext'

function CountryDetail({ country }) {
  const [borderCountries, setBorderCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const { isAuthenticated, isInFavorites, addToFavorites, removeFromFavorites } = useUser()

  useEffect(() => {
    const loadBorderCountries = async () => {
      if (!country.borders || country.borders.length === 0) return
      
      try {
        setLoading(true)
        const data = await fetchCountryBorders(country.borders)
        setBorderCountries(data)
      } catch (error) {
        console.error('Failed to fetch border countries:', error)
      } finally {
        setLoading(false)
      }
    }

    loadBorderCountries()
  }, [country.borders])

  const handleFavoriteClick = () => {
    if (isInFavorites(country.cca3)) {
      removeFromFavorites(country.cca3)
    } else {
      addToFavorites(country)
    }
  }

  // Format population with commas
  const formatPopulation = (population) => {
    return new Intl.NumberFormat().format(population)
  }

  // Format languages as comma-separated list
  const formatLanguages = (languages) => {
    if (!languages) return 'N/A'
    return Object.values(languages).join(', ')
  }

  // Format currencies as comma-separated list
  const formatCurrencies = (currencies) => {
    if (!currencies) return 'N/A'
    return Object.values(currencies)
      .map(currency => `${currency.name} (${currency.symbol})`)
      .join(', ')
  }

  return (
    <div className="animate-fade-in">
      {/* Back button */}
      <div className="mb-8 flex justify-between items-center">
        <Link to="/" className="btn btn-secondary inline-flex items-center space-x-2">
          <FaArrowLeft />
          <span>Back</span>
        </Link>
        
        {isAuthenticated && (
          <button 
            onClick={handleFavoriteClick}
            className="btn inline-flex items-center space-x-2"
            aria-label={isInFavorites(country.cca3) ? "Remove from favorites" : "Add to favorites"}
          >
            {isInFavorites(country.cca3) ? (
              <>
                <FaHeart className="text-error-500" />
                <span>Remove from Favorites</span>
              </>
            ) : (
              <>
                <FaRegHeart />
                <span>Add to Favorites</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Country content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Flag */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={country.flags?.svg || country.flags?.png} 
            alt={country.flags?.alt || `Flag of ${country.name.common}`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Country details */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-primary-900 dark:text-white">
            {country.name.common}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-3">
              <p><span className="font-semibold">Official Name:</span> {country.name.official}</p>
              <p><span className="font-semibold">Population:</span> {formatPopulation(country.population)}</p>
              <p><span className="font-semibold">Region:</span> {country.region}</p>
              <p><span className="font-semibold">Sub Region:</span> {country.subregion || 'N/A'}</p>
              <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
            </div>

            <div className="space-y-3">
              <p><span className="font-semibold">Top Level Domain:</span> {country.tld?.[0] || 'N/A'}</p>
              <p><span className="font-semibold">Currencies:</span> {formatCurrencies(country.currencies)}</p>
              <p><span className="font-semibold">Languages:</span> {formatLanguages(country.languages)}</p>
              <p><span className="font-semibold">Area:</span> {formatPopulation(country.area)} km²</p>
              <p><span className="font-semibold">UN Member:</span> {country.unMember ? 'Yes' : 'No'}</p>
            </div>
          </div>

          {/* Border countries */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Border Countries:</h3>
            {loading ? (
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-10 w-24 skeleton rounded"></div>
                ))}
              </div>
            ) : borderCountries.length > 0 ? (
              <div className="flex gap-2 flex-wrap">
                {borderCountries.map(border => (
                  <Link 
                    key={border.cca3}
                    to={`/country/${border.cca3}`}
                    className="px-4 py-2 bg-white dark:bg-gray-700 shadow-sm rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    {border.name.common}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No bordering countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail