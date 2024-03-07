import "./index.css";

export default function Component({ children }) {
  return <span className="alert alert--disabled">{children}</span>;
}
