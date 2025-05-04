import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaMoon, FaSun, FaGlobe, FaHeart, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useTheme } from '../../contexts/ThemeContext'
import { useUser } from '../../contexts/UserContext'

function Header() {
  const { darkMode, toggleDarkMode } = useTheme()
  const { isAuthenticated, logout } = useUser()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className={`sticky top-0 z-10 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md dark:bg-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://cdn-icons-png.flaticon.com/512/9746/9746676.png" alt="Logo" style={{ width: '40px', height: '40px' }} className="text-primary-700 dark:text-accent-500 text-2xl" />
          <Link to="/" className="text-xl font-bold text-primary-900 dark:text-white">
            WorldExplorer
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {isAuthenticated && (
            <Link 
              to="/favorites" 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-700 dark:text-gray-200 dark:hover:text-accent-500 transition-colors"
            >
              <FaHeart />
              <span>Favorites</span>
            </Link>
          )}
          
          {isAuthenticated ? (
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-700 dark:text-gray-200 dark:hover:text-accent-500 transition-colors"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          ) : (
            <Link 
              to="/login" 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-700 dark:text-gray-200 dark:hover:text-accent-500 transition-colors"
            >
              <FaSignInAlt />
              <span>Login</span>
            </Link>
          )}
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header