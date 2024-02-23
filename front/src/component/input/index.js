import "./index.css";

export default function Component({ children }) {
  return (
    <div className={`field`}>
      <label for="email" className="field__label">
        {children}
      </label>
      <input
        oninput="{{action}}(this.name, this.value)"
        type="email"
        className="field__input validation"
        name="email"
      />
    </div>
  );
}
