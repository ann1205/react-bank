import "./index.css";

import { useState, useEffect } from "react";

export default function Container() {
  const [balance, setBalance] = useState(100); // Стан для зберігання балансу

  // При завантаженні компонента виконати запит на сервер для отримання поточного балансу
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await fetch("http://localhost:4000/balance-amount"); // Адреса, на якій знаходиться ресурс, що надає інформацію про баланс
        const data = await res.json();
        setBalance(data.balance); // Встановлення отриманого балансу у стан компонента
        console.log("Balance:", data.balance);
      } catch (error) {
        console.error("Помилка при отриманні балансу:", error);
      }
    };

    return fetchBalance();
  }, []);

  return (
    <div>
      <span>{balance}</span> {/* Відображення поточного балансу */}
    </div>
  );
}
