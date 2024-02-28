import "./index.css";
import arrowback from "./arrow-back.svg";

export default function Component() {
  class BackButton {
    static back() {
      return window.history.back();
    }
  }

  window.backButton = BackButton;

  return (
    <div className={"back-button"} onСlick={() => "backButton.back();"}>
      <img src={arrowback} alt="<" />
    </div>
  );
}
