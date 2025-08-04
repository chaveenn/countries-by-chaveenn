
# 🌍 Countries by Chaveen

A modern and responsive React application that allows users to explore countries worldwide by name, region, population, and capital. Built using React, Context API, and tested with Jest and React Testing Library.

🔗 **Live Demo**: [countries-by-chaveenn.vercel.app](https://countries-by-chaveenn.vercel.app)

---

## 🚀 Features

- 🌐 View detailed country cards with flags, capital, region, and population
- 🔍 Real-time search by country name
- 🗂️ Filter and explore by region
- 💾 Context API-based global state management
- ✅ Unit tested components for reliability
- 🖼️ Fully responsive and mobile-friendly UI

---

## 🛠️ Tech Stack

- **React** (Vite or CRA)
- **React Router**
- **Context API**
- **Jest** & **React Testing Library**
- **CSS Modules** / Tailwind *(depending on your choice)*
- **Vercel** for deployment

---



## 🧪 Testing with Jest + RTL

We use **Jest** and **React Testing Library** to test UI components in isolation:

Example test for `CountryCard`:
```js
expect(screen.getByText(/France/i)).toBeInTheDocument()
expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('flagcdn'))
```

### Run tests:
```bash
npm test
```

---

## 🧭 Getting Started

### Prerequisites
- Node.js v16+
- npm or yarn

### Installation

```bash
git clone https://github.com/chaveenn/countries-by-chaveenn.git
cd countries-by-chaveenn
npm install
```

### Start Development Server

```bash
npm start
```

### Build for Production

```bash
npm run build
```

---

## 📌 Future Enhancements

- 🌙 Add dark mode toggle
- 🌍 Add region filter dropdown
- 🌐 Add language/currency details
- 📊 Add loading indicators & error states

---

## 🙌 Acknowledgements

- [REST Countries API](https://restcountries.com/)
- [React Documentation](https://react.dev/)
- [React Testing Library Docs](https://testing-library.com/)

---

## 📫 Contact

Created with ❤️ by **Chaveen Sewni**  
🔗 [LinkedIn](https://www.linkedin.com/in/your-link)  
📧 chaveensewni@example.com *(replace with your real email)*
