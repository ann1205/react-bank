import "./index.css";

export default function Component({
  children,
  className,
  style = {},
  onClick,
}) {
  return (
    <button
      onClick={`${onClick}`}
      style={style}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
}
