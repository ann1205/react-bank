import "./index.css";

export default function Component({ children, className }) {
  return <div className={`description ${className}`}>{children}</div>;
}
