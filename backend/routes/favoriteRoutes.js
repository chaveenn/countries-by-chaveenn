const express = require('express')
const router = express.Router()
const {
  getFavorites,
  addFavorite,
  removeFavorite
} = require('../controllers/favoriteController')

router.get('/:userId', getFavorites)
router.post('/add', addFavorite)
router.post('/remove', removeFavorite)

module.exports = router