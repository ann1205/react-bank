import "./index.css";
import arrowback from "./arrow-back.svg";

class BackButton {
  static back() {
    return window.history.back();
  }
}

export default function Component() {
  return (
    <div className="back-button" onClick={BackButton.back}>
      <img src={arrowback} alt="<" />
    </div>
  );
}
