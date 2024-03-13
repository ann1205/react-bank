import "./index.css";
import { Link } from "react-router-dom";
import Heading from "../../component/heading";
import Header from "../../component/header";
import ButtonContinue from "../../component/button-continue";
import Title from "../../component/title";

export default function Component() {
  return (
    <div className="App-header">
      <button>Setting</button>
      <title>Main vallet</title>
      <button>notification</button>
      контейнер Balance
      <button>Receive</button>
      <button>Send</button>
      <div className="list">
        <card></card>
      </div>
    </div>
  );
}
