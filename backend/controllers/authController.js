const users = require('../data/users.json')

exports.login = (req, res) => {
  const { username, password } = req.body
  const user = users.find(u => u.username === username && u.password === password)

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  res.json({ id: user.id, username: user.username, name: user.name })
}
