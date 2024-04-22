import "./index.css";

import { useState, useEffect } from "react";

export default function Container() {
  const [balance, setBalance] = useState(0); // Стан для зберігання балансу

  // При завантаженні компонента виконати запит на сервер для отримання поточного балансу
  // useEffect(() => {
  //   fetchBalance();
  // }, []);

  useEffect(() => {
    setBalance(0); // Перевірте, чи значення балансу встановлюється правильно
  }, []);

  // console.log("Balance:", balance); // Виведіть значення балансу у консоль

  // Функція для отримання поточного балансу з сервера
  // const fetchBalance = async () => {
  //   try {
  //     const res = await fetch("http://localhost:4000/balance"); // Адреса, на якій знаходиться ресурс, що надає інформацію про баланс
  //     const data = await res.json();
  //     setBalance(data.balance); // Встановлення отриманого балансу у стан компонента
  //     console.log(data.balance);
  //   } catch (error) {
  //     console.error("Помилка при отриманні балансу:", error);
  //   }
  // };

  return (
    <div>
      <span>{balance}</span> {/* Відображення поточного балансу */}
    </div>
  );
}
