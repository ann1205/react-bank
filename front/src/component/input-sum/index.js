import "./index.css";
import "../input/index.css";

export default function Component({ children, onChange }) {
  return (
    <div className="field field--sum">
      <label htmlFor="sum">{children}</label>
      <div className="field__wrapper">
        <input
          id="sum"
          name="sum"
          onChange={onChange}
          type="number"
          className="field__input validation"
          placeholder="Enter sum"
        />
      </div>
    </div>
  );
}
