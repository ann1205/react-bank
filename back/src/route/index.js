// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    name: 'index',
    title: 'Index page',
    data: {},
  })
})

router.get('/logout', function (req, res) {
  res.render('logout', {
    name: 'logout',
    title: 'Logout page',
    data: {},
  })
})

// Підключіть файли роутів
const auth = require('./auth')
const user = require('./user')
const balance = require('./balance')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', auth)
router.use('/', user)
router.use('/', balance)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
