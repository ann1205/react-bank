class Balance {
  static #balance = 0

  constructor({ value }) {
    this.value = Number(value)
  }

  static getBalance() {
    return this.#balance
  }

  static deposit(amount) {
    if (amount > 0) {
      this.#balance += amount
      console.log(
        `Ваш баланс поповнено на ${amount}. Поточний баланс: ${
          this.#balance
        }`,
      )
    } else {
      console.log(
        'Сума для поповнення має бути більшою за 0.',
      )
    }
  }

  static transfer(amount, recipient) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount
      console.log(
        `Переказано ${amount} на рахунок отримувача ${recipient}. Поточний баланс: ${
          this.#balance
        }`,
      )
    } else if (amount <= 0) {
      console.log(
        'Сума для переказу має бути більшою за 0.',
      )
    } else {
      console.log(
        'Недостатньо коштів для здійснення переказу.',
      )
    }
  }
}

module.exports = {
  Balance,
}
