class Transaction {
  static #list = []

  static #count = 1

  constructor({ name, typeTransaction, sum }) {
    this.id = Transaction.#count++

    this.name = String(name)
    this.creationTime = Transaction.getFormattedTime()
    this.typeTransaction = typeTransaction
    this.sum = Number(sum)
  }

  static create(name, sum) {
    const newTransaction = new Transaction(name, sum)

    console.log(newTransaction)

    this.#list.push(newTransaction)

    console.log(this.#list)

    return newTransaction
  }

  static getFormattedTime() {
    const date = new Date() // Створення об'єкта Date з часу
    const hours = String(date.getHours()).padStart(2, '0') // Отримання годин, додавання ведучого нуля при необхідності
    const minutes = String(date.getMinutes()).padStart(
      2,
      '0',
    ) // Отримання хвилин, додавання ведучого нуля при необхідності
    return `${hours}:${minutes}` // Повернення форматованого часу
  }

  static getById(id) {
    return (
      this.#list.find((item) => item.id === Number(id)) ||
      null
    )
  }

  static getList() {
    return this.#list
  }
}

module.exports = {
  Transaction,
}
