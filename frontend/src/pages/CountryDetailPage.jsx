import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CountryDetail from '../components/Countries/CountryDetail'
import { useCountries } from '../contexts/CountriesContext'

function CountryDetailPage() {
  const { countryCode } = useParams()
  const { getCountryByCode } = useCountries()
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const loadCountry = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getCountryByCode(countryCode)
        if (!data) {
          setError('Country not found')
          return
        }
        setCountry(data)
      } catch (err) {
        console.error(err)
        setError('Failed to load country details')
      } finally {
        setLoading(false)
      }
    }

    loadCountry()
  }, [countryCode, getCountryByCode])

  if (loading) {
    return <div className="text-center p-8">Loading...</div>
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-red-500 mb-4">{error}</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary">Back to Home</button>
      </div>
    )
  }

  return country ? <CountryDetail country={country} /> : null
}

export default CountryDetailPage
