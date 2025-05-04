import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const UserContext = createContext()

export function useUser() {
  return useContext(UserContext)
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      fetchFavorites(user.id)
    } else {
      localStorage.removeItem('user')
      setFavorites([])
    }
  }, [user])

  const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', credentials)
      setUser(response.data)
      return true
    } catch (error) {
      console.error("Login failed", error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
  }

  const fetchFavorites = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5001/api/favorites/${userId}`)
      setFavorites(response.data)
    } catch (error) {
      console.error("Failed to fetch favorites", error)
    }
  }

  const addToFavorites = async (country) => {
    try {
      const response = await axios.post('http://localhost:5001/api/favorites/add', {
        userId: user.id,
        country,
      })
      setFavorites(response.data)
    } catch (error) {
      console.error("Failed to add to favorites", error)
    }
  }

  const removeFromFavorites = async (countryCode) => {
    try {
      const response = await axios.post('http://localhost:5001/api/favorites/remove', {
        userId: user.id,
        cca3: countryCode,
      })
      setFavorites(response.data)
    } catch (error) {
      console.error("Failed to remove from favorites", error)
    }
  }

  const isInFavorites = (countryCode) => {
    return favorites.some(country => country.cca3 === countryCode)
  }

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isInFavorites
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
