// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const { Balance } = require('../class/balance')

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/balance', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  return res.render('balance', {
    // вказуємо назву контейнера
    name: 'balance',
    // вказуємо назву сторінки
    title: 'Balance page',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/recive', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  return res.render('recive', {
    // вказуємо назву контейнера
    name: 'recive',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'Recive page',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/user-list-data', function (req, res) {
  const list = User.getList()

  console.log(list)

  if (list.length === 0) {
    return res.status(400).json({
      message: 'Список користувачів порожній',
    })
  }

  return res.status(200).json({
    list: list.map(({ id, email }) => ({
      id,
      email,
    })),
  })
})

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/user-item', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  return res.render('user-item', {
    // вказуємо назву контейнера
    name: 'user-item',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'User item page',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/user-item-data', function (req, res) {
  const { id } = req.query

  if (!id) {
    return res.status(400).json({
      message: 'Потрібно передати ID користувача',
    })
  }

  const user = User.getById(Number(id))

  if (!user) {
    return res.status(400).json({
      message: 'Користувач з таким ID не існує',
    })
  }

  return res.status(200).json({
    user: {
      id: user.id,
      email: user.email,
      isConfirm: user.isConfirm,
    },
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
