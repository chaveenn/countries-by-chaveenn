const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const favoriteRoutes = require('./routes/favoriteRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/favorites', favoriteRoutes)

const PORT = 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))