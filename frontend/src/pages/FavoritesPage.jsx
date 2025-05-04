import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import CountryList from '../components/Countries/CountryList'
import { useUser } from '../contexts/UserContext'

function FavoritesPage() {
  const { user, favorites, isAuthenticated } = useUser()

  if (!isAuthenticated) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Please log in</h2>
        <Link to="/login" className="btn btn-primary">Go to Login</Link>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaHeart className="text-red-500 text-2xl" />
          <h1 className="text-4xl font-bold">Your Favorite Countries</h1>
        </div>
        <p className="text-gray-600">Here are your saved countries.</p>
      </div>

      {favorites.length > 0 ? (
        <CountryList countries={favorites} loading={false} error={null} />
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">No favorites yet</h2>
          <Link to="/" className="btn btn-primary">Explore Countries</Link>
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
