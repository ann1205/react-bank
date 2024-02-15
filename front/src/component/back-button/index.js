import "./index.css";
import arrowback from "./arrow-back.svg";

export default function Component({ children }) {
  return (
    <div className={`button ${className}`}>
      {children}
      <button
        disabled={isDisabled}
        onClick={handleSubmit}
        className=""
        imageSrc={arrowback}
      >
        {button}
      </button>
    </div>
  );
}
