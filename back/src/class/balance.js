class Balance {
  constructor(initialBalance) {
    this.balance = initialBalance
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount
      console.log(
        `Баланс поповнено на ${amount}. Поточний баланс: ${this.balance}`,
      )
    } else {
      console.log(
        'Сума для поповнення має бути більшою за 0.',
      )
    }

    return this.balance
  }

  transfer(amount, recipient) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount
      recipient.deposit(amount)
      console.log(
        `Переказано ${amount} на рахунок отримувача. Поточний баланс: ${this.balance}`,
      )
    } else if (amount > this.balance) {
      console.log(
        'Недостатньо коштів на балансі для здійснення переказу.',
      )
    } else {
      console.log(
        'Сума для переказу має бути більшою за 0.',
      )
    }

    return this.balance
  }

  getBalance() {
    return this.balance
  }
}
// static #balance = 100
// static deposit(value) {
//   if (value > 0) {
//     this.#balance += value
//     console.log(
//       `Ваш баланс поповнено на ${value}. Поточний баланс: ${
//         this.#balance
//       }`,
//     )
//     return this.#balance
//   } else {
//     console.log(
//       'Сума для поповнення має бути більшою за 0.',
//     )
//   }
// }
// static transfer(amount, recipient) {
//   if (amount > 0 && this.#balance >= amount) {
//     this.#balance -= amount
//     console.log(
//       `Переказано ${amount} на рахунок отримувача ${recipient}. Поточний баланс: ${
//         this.#balance
//       }`,
//     )
//     return this.#balance
//   } else if (amount <= 0) {
//     console.log(
//       'Сума для переказу має бути більшою за 0.',
//     )
//   } else {
//     console.log(
//       'Недостатньо коштів для здійснення переказу.',
//     )
//   }
// }
// static getBalance() {
//   return this.#balance
// }

module.exports = {
  Balance,
}
