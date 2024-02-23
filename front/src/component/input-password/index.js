import "./index.css";
import "../input/index.css";

export default function Component({ children }) {
  return (
    <div class="field field--password">
      <label for="password" class="field__label">
        {children}
      </label>

      <div class="field__wrapper">
        <input
          oninput="{{action}}(this.name, this.value)"
          type="password"
          class="field__input validation"
          name="password"
          value="{{value}}"
        />
        <span onclick="fieldPassword.toggle(this)" class="field__icon"></span>
      </div>
    </div>
  );
}
