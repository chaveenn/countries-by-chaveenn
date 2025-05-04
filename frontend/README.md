# WorldExplorer - React Countries Explorer

A modern React application for exploring countries around the world using the REST Countries API.

## Features

- **Country Browsing**: View a list of all countries with essential information (name, population, region, capital, flag)
- **Search Functionality**: Search for countries by name with dynamic results
- **Filtering Options**: Filter countries by region or language
- **Detailed Country View**: Click on a country to see comprehensive details including currencies, languages, and bordering countries
- **Favorites System**: Save your favorite countries (requires login)
- **Dark/Light Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop

## Technologies Used

- React (with functional components)
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests
- Context API for state management
- Vitest & Testing Library for tests

## Available API Endpoints Used

The application uses the following endpoints from the REST Countries API:

1. `GET /all` - Retrieves all countries
2. `GET /name/{name}` - Searches countries by name
3. `GET /region/{region}` - Filters countries by region
4. `GET /alpha/{code}` - Gets a specific country by country code

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/countries-explorer.git
   cd countries-explorer
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```
npm run build
```

## Running Tests

```
npm run test
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Auth/            # Authentication components
│   ├── Countries/       # Country-related components
│   ├── Filter/          # Search and filter components
│   └── Layout/          # Layout components
├── contexts/            # React Context providers
├── pages/               # Page components
├── services/            # API and service functions
├── tests/               # Test files
├── App.jsx              # Main App component
└── main.jsx             # Application entry point
```

## User Authentication

For demonstration purposes, the application uses a simulated authentication system:
- Any username and password combination will work
- User data is stored in localStorage
- Favorites are persisted between sessions

## Challenges and Solutions

### API Rate Limiting

**Challenge**: The REST Countries API has rate limiting that could affect the user experience.

**Solution**: Implemented debouncing for search input and added proper error handling with user-friendly messages.

### Performance Optimization

**Challenge**: Loading all country data could slow down the application, especially on mobile devices.

**Solution**: Added a loading state with skeleton screens, pagination, and optimized state management.

## Future Improvements

- Add a more sophisticated authentication system
- Implement additional filtering options (population, area)
- Add a map view for countries
- Create a compare feature to compare statistics between countries
- Add internationalization support