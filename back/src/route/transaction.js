// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const { Transaction } = require('../class/transaction')

// ================================================================

Transaction.create({
  name: 'Stripe',
  time: '12:25',
  typeTransaction: 'receipt',
  sum: 112,
})

// router.get Створює нам один ентпоїнт
router.post(
  '/transaction-recive-create',
  function (req, res) {
    try {
      const { name, sum, transactionId, typeTransaction } =
        req.body

      if (!sum) {
        return res.status(400).json({
          message: 'Потрібно ввести суму переказу',
        })
      }

      let transactionRecive = null

      console.log(transactionId, 'transactionId')

      if (transactionId) {
        transactionRecive = Transaction.getById(
          Number(transactionRecive),
        )
        console.log('transactionRecive', transactionRecive)

        if (!transactionRecive) {
          return res.status(400).json({
            message: 'Транзакція з таким ID не існує',
          })
        }
      }

      const newTransactionRecive = Transaction.create(
        name,
        time,
        typeTransaction,
        sum,
      )

      return res.status(200).json({
        transactionRecive: {
          id: newTransactionRecive.id,
          name: newTransactionRecive.name,
          typeTransaction: 'receipt',
          sum: newTransactionRecive.sum,
          time: newTransactionRecive.time,
        },
      })
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      })
    }
  },
)

router.post(
  '/transaction-send-create',
  function (req, res) {
    try {
      const { email, sum, transactionId, typeTransaction } =
        req.body

      if (!email || !sum) {
        return res.status(400).json({
          message:
            'Потрібно передати всі дані для проведення транзакції',
        })
      }

      let transactionSend = null

      console.log(transactionId, 'transactionId')

      if (transactionId) {
        transactionSend = Transaction.getById(
          Number(transactionId),
        )
        console.log('transactionSend', transactionSend)

        if (!transactionSend) {
          return res.status(400).json({
            message: 'Транзакції з таким ID не існує',
          })
        }
      }

      const newTransactionSend = Transaction.create(
        email,
        time,
        sum,
        typeTransaction,
      )

      return res.status(200).json({
        transactionSend: {
          id: newTransactionSend.id,
          email: newTransactionSend.email,
          sum: newTransactionSend.sum,
          typeTransaction: 'send',
          time: newTransactionSend.time,
        },
      })
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      })
    }
  },
)

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/transaction-list', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  return res.render('transaction-list', {
    // вказуємо назву контейнера
    name: 'transaction-list',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'Transaction list page',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/transaction-list-data', function (req, res) {
  try {
    const list = Transaction.getList()

    console.log(list)

    if (list.length === 0) {
      return res.status(400).json({
        message: 'Список транзакцій порожній',
      })
    }

    return res.status(200).json({
      list: list.map(
        ({ id, time, typeTransaction, sum }) => ({
          id,
          time,
          typeTransaction,
          sum,
        }),
      ),
    })
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    })
  }
})

// Підключаємо роутер до бек-енду
module.exports = router
