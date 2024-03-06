import { Link } from "react-router-dom";
import "./index.css";
import Backbutton from "../../component/back-button";
import ButtonContinue from "../../component/button-continue";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Description from "../../component/description";
import Input from "../../component/input";

export default function Component() {
  return (
    <div className="App-header">
      <Backbutton />
      <Heading>
        <Title>Confirm account</Title>
        <Description className={"description-smaller"}>
          Write the code you received
        </Description>
      </Heading>
      <Input>Code</Input>

      <ButtonContinue>
        <Link className="App-link" to="/balance">
          Confirm
        </Link>
      </ButtonContinue>
    </div>
  );
}
