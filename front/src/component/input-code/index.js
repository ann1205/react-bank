import "./index.css";
import "../input/index.css";

export default function Component({ children, onChange }) {
  return (
    <div className="field field--password">
      <label className="field__label" htmlFor="code">
        {children}
      </label>

      <div className="field__wrapper">
        <input
          id="code"
          name="code"
          onChange={onChange}
          type="number"
          className="field__input validation"
          placeholder="Введіть код"
        />
      </div>
    </div>
  );
}
