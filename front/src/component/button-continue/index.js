import Button from "../button";
import "./index.css";

export default function Component(className) {
  return <Button className={`button-continue ${className}`}>Continue</Button>;
}
