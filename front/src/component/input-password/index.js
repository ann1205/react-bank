import "./index.css";
import "../input/index.css";

class FieldPassword {
  static toggle = (target) => {
    target.toggleAttribute("show");

    const input = target.previousElementSibling;

    const type = input.getAttribute("type");

    if (type === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  };
}

export default function Component({ children, onChange }) {
  const passwordToggle = (e) => FieldPassword.toggle(e.target);

  return (
    <div className="field field--password">
      <label className="field__label" htmlFor="password">
        {children}
      </label>

      <div className="field__wrapper">
        <input
          id="password"
          name="password"
          onChange={onChange}
          autoComplete="current-password"
          type="password"
          className="field__input validation"
          placeholder="Введіть пароль"
        />
        <span onClick={passwordToggle} className="field__icon"></span>
      </div>
    </div>
  );
}
