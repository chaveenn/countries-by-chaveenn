import { FaGithub, FaGlobe } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="https://cdn-icons-png.flaticon.com/512/9746/9746676.png" style={{ width: '40px', height: '40px' }} alt="WorldExplorer Logo" className="text-primary-700 dark:text-accent-500" />
            <span className="text-gray-700 dark:text-gray-300">
              WorldExplorer &copy; {currentYear}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Data by <a href="https://restcountries.com" className="text-primary-700 dark:text-accent-500 hover:underline" target="_blank" rel="noopener">REST Countries API</a>
            </span>
            
            <a 
              href="https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-chaveenn.git" 
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-accent-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer