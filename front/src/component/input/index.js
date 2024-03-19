import "./index.css";

export default function Component({ children, onChange }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor="email">
        {children}
      </label>
      <input
        id="email"
        name="email"
        onChange={onChange}
        autoComplete="username"
        placeholder="Enter e-mail"
        type="email"
        className="field__input validation"
      />
    </div>
  );
}
