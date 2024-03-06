import "./index.css";

export default function Component({
  children,
  style = {},
  className,
  onClick,
}) {
  return (
    <button onClick={onClick} style={style} className={`button ${className}`}>
      {children}
    </button>
  );
}
