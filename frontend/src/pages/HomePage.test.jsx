import { render, screen } from '@testing-library/react'
import { CountriesProvider } from '../contexts/CountriesContext'
import HomePage from './HomePage'

test('renders search and filters', () => {
  render(
    <CountriesProvider>
      <HomePage />
    </CountriesProvider>
  )

  expect(screen.getByText(/Explore the World/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
})
