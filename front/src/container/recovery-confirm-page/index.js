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
        <Title>Recover password</Title>
        <Description className={"description-smaller"}>
          Write the code you received
        </Description>
      </Heading>
      <Input>Code</Input>
      <InputPassword>New password</InputPassword>
      <Button>
        <Link className="App-link" to="/balance">
          Restore password
        </Link>
      </Button>
    </div>
  );
}
