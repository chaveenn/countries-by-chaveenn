import { Link } from 'react-router-dom'
import { FaGlobe, FaCompass } from 'react-icons/fa'

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
      <div className="text-9xl font-bold text-primary-200 dark:text-primary-800 mb-6 flex items-center">
        <span>4</span>
        <FaGlobe className="mx-4 text-primary-700 dark:text-accent-500 animate-spin-slow" />
        <span>4</span>
      </div>
      
      <h1 className="text-4xl font-bold mb-4 text-primary-900 dark:text-white">
        Page Not Found
      </h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
      >
        <FaCompass />
        <span>Back to Homepage</span>
      </Link>
    </div>
  )
}

export default NotFoundPage