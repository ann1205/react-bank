import { Link } from "react-router-dom";
import "./index.css";
import Backbutton from "../../component/back-button";
import Button from "../../component/button";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Description from "../../component/description";
import Input from "../../component/input";
import InputPassword from "../../component/input-password";

export default function Component() {
  return (
    <div className="App-header">
      <Backbutton />
      <Heading>
        <Title>Sign Up</Title>
        <Description className={"description-smaller"}>
          Choose a registration method
        </Description>
      </Heading>
      <Input>Email</Input>
      <InputPassword>Password</InputPassword>
      <span className="alert alert--info">
        Already have an account?
        <Link to="/signin">Sign In</Link>
      </span>
      <Button>
        <Link className="App-link" to="/signup-confirm">
          Continue
        </Link>
      </Button>
      <span className="alert alert--warning">
        <span className="icon--small icon--warning"></span>A user with the same
        name is already exist
      </span>
    </div>
  );
}
