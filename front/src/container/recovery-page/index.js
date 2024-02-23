import { Link } from "react-router-dom";
import "./index.css";
import Backbutton from "../../component/back-button";
import Button from "../../component/button";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Description from "../../component/description";
import Input from "../../component/input";

export default function Component() {
  return (
    <div className="App-header">
      <Backbutton />
      <Heading>
        <Title>Recover password</Title>
        <Description className={"description-smaller"}>
          Choose a recovery method
        </Description>
      </Heading>
      <Input>Email</Input>
      <Button>
        <Link className="App-link" to="/recovery-confirm">
          Send code
        </Link>
      </Button>
    </div>
  );
}
