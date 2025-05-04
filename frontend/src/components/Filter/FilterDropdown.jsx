import { useState, useRef, useEffect } from 'react'
import { FaChevronDown, FaGlobeAmericas } from 'react-icons/fa'
import { useCountries } from '../../contexts/CountriesContext'

function FilterDropdown({ type = 'region' }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { regions, languages, selectedRegion, setSelectedRegion, filterByLanguage } = useCountries()
  
  // Get the appropriate options based on type
  const options = type === 'region' ? regions : languages
  
  // Get the current selected value
  const selectedValue = type === 'region' ? selectedRegion : ''

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (value) => {
    if (type === 'region') {
      setSelectedRegion(value === selectedRegion ? '' : value)
    } else {
      filterByLanguage(value === selectedValue ? '' : value)
    }
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 w-full md:w-56 px-4 py-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        
        <span className="flex-grow">
          {selectedValue || `Filter by ${type.charAt(0).toUpperCase() + type.slice(1)}`}
        </span>
        <FaChevronDown />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 rounded-lg shadow-lg max-h-60 overflow-auto">
          <ul className="py-1" role="listbox">
            {/* Option to clear filter */}
            <li 
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              onClick={() => handleSelect('')}
              role="option"
              aria-selected={selectedValue === ''}
            >
              All {type === 'region' ? 'Regions' : 'Languages'}
            </li>
            
            {/* Filter options */}
            {options.map((option) => (
              <li
                key={option}
                className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer ${
                  option === selectedValue ? 'bg-primary-50 dark:bg-primary-900' : ''
                }`}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={option === selectedValue}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FilterDropdown