import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { UserProvider } from '../../contexts/UserContext'
import CountryCard from './CountryCard'

const mockCountry = {
  name: { common: 'France' },
  flags: { png: 'https://flagcdn.com/fr.png' },
  region: 'Europe',
  population: 67000000,
  capital: ['Paris'],
  cca3: 'FRA'
}

test('renders CountryCard with correct content', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <CountryCard country={mockCountry} />
      </UserProvider>
    </MemoryRouter>
  )

  expect(screen.getByText(/France/i)).toBeInTheDocument()
  expect(screen.getByText(/Europe/i)).toBeInTheDocument()
  expect(screen.getByText(/Paris/i)).toBeInTheDocument()
  expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('flagcdn'))
})
