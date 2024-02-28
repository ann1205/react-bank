import "./index.css";
import "../input/index.css";
import { useState } from "react";

export default function Component({ children, onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.lenght === 0) return null;

    if (onSubmit) {
      onSubmit(value);
    } else {
      throw new Error("onSubmit props is undefined");
    }
    setValue("");
  };

  const isDisabled = value.length === 0;

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

  window.fieldPassword = FieldPassword;

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
        />
        <span onSubmit="fieldPassword.toggle(this)" class="field__icon"></span>
      </div>
    </div>
  );
}
