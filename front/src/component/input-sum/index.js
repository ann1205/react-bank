import "./index.css";
import "../input/index.css";

export default function Component({ children, onChange, className }) {
  return (
    <div className="field field--password">
      <label className={className} htmlFor="sum">
        {children}
      </label>

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
