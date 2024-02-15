import { ReactNode } from "react";
import "./index.css";

type ButtonProps = {
  children?: ReactNode,
};

export default function Button({ children }: ButtonProps, className) {
  return <button className="button {className}">{children}</button>;
}
