import "./index.css";

export default function Component({ children, className, style = {} }) {
  return (
    <button style={style} className={`button ${className}`}>
      {children}
    </button>
  );
}
