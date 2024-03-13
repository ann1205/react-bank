import "./index.css";
import { Link } from "react-router-dom";
import Heading from "../../component/heading";
import Header from "../../component/header";
import ButtonContinue from "../../component/button-continue";
import Title from "../../component/title";

export default function Component() {
  return (
    <div className="App-header">
      <Header>
        <Heading>
          <Title className={"title--bigger"}>Hello!</Title>
          <span className="description">Welcome to Bank app</span>
        </Heading>
      </Header>
      <div>
        <ButtonContinue className={"button-white"}>
          <Link className="App-link" to="/signup">
            Sign Up
          </Link>
        </ButtonContinue>
      </div>
      <div>
        <ButtonContinue>
          <Link className="App-link" to="/signin">
            Sign In
          </Link>
        </ButtonContinue>
      </div>
    </div>
  );
}
