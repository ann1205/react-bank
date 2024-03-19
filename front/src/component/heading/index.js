import "./index.css";

export default function Heading({ children, className }) {
  return <div className={`heading ${className}`}>{children}</div>;
}
