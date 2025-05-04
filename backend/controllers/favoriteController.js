let userFavorites = {}

export function getFavorites(req, res) {
  const userId = req.params.userId
  res.json(userFavorites[userId] || [])
}

export function addFavorite(req, res) {
  const { userId, country } = req.body
  if (!userFavorites[userId]) userFavorites[userId] = []
  
  const exists = userFavorites[userId].some(c => c.cca3 === country.cca3)
  if (!exists) userFavorites[userId].push(country)

  res.status(200).json(userFavorites[userId])
}

export function removeFavorite(req, res) {
  const { userId, cca3 } = req.body
  if (!userFavorites[userId]) return res.status(404).json({ message: 'Not found' })

  userFavorites[userId] = userFavorites[userId].filter(c => c.cca3 !== cca3)
  res.status(200).json(userFavorites[userId])
}