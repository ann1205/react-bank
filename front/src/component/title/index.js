import "./index.css";

export default function Component({ children, className }) {
  return <div className={`title ${className}`}>{children}</div>;
}
