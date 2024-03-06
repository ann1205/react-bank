import { Link } from "react-router-dom";
import "./index.css";
import Backbutton from "../../component/back-button";
import ButtonContinue from "../../component/button-continue";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Description from "../../component/description";
import Input from "../../component/input";
import InputPassword from "../../component/input-password";

export default function Component() {
  // const auth = useContext(AuthContext);
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   if (auth) auth.login(true);
  //   navigate("/BalancePage");
  // };

  return (
    <div className="App-header">
      {/* <div onClick={handleClick} className=""> */}
      <Backbutton />
      <Heading>
        <Title>Sign In</Title>
        <Description className={"description-smaller"}>
          Select login method
        </Description>
      </Heading>
      <Input>Email</Input>
      <InputPassword>Password</InputPassword>
      <span className="alert alert--info">
        Forgot your password?
        <Link to="/recovery">Restore</Link>
      </span>
      <ButtonContinue>
        <Link className="App-link" to="/signup-confirm">
          Continue
        </Link>
      </ButtonContinue>
      {/* </div> */}
    </div>
  );
}
