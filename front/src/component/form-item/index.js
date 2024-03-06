import "./index.css";

export default function Component({ children, name }) {
  return (
    <div className="form__item">
      {children}
      <span name={name} className="form__error">
        Помилка
      </span>
    </div>
  );
}
