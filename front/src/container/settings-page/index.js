import "./index.css";
import { Link } from "react-router-dom";
import Backbutton from "../../component/back-button";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Form from "../../component/form";
import FormItem from "../../component/form-item";
import Input from "../../component/input";
import InputPassword from "../../component/input-password";
import ButtonContinue from "../../component/button-continue";
import Alert from "../../component/alert";
import Divider from "../../component/divider";

export default function Container() {
  return (
    <div className="App-header">
      <Heading className="heading__inline">
        <Backbutton />
        <Title className="title--smaller">Settings</Title>
      </Heading>
      <main className="main">
        <form className="page__section">
          <span className="subtitle">Change email</span>
          <Form>
            <FormItem name="email">
              <Input onChange="">Email</Input>
            </FormItem>
            <FormItem name="password">
              <InputPassword onChange="">Old Password</InputPassword>
            </FormItem>
          </Form>
          <ButtonContinue onClick="" className="button-white">
            <Link className="App-link--violet-text" to="/signup-confirm">
              Save Email
            </Link>
          </ButtonContinue>
          <Alert>Увага, помилка</Alert>
        </form>
        <Divider />
        <form className="page__section">
          <span className="subtitle">Change password</span>
          <Form>
            <FormItem name="old-password">
              <InputPassword onChange="">Old password</InputPassword>
            </FormItem>
            <FormItem name="new-password">
              <InputPassword onChange="">New password</InputPassword>
            </FormItem>
          </Form>
          <ButtonContinue onClick="" className="button-white">
            <Link className="App-link--violet-text" to="/signup-confirm">
              Save Password
            </Link>
          </ButtonContinue>
          <Alert>Увага, помилка</Alert>
        </form>
        <Divider />
        <ButtonContinue className="button--white-red">
          <Link className="App-link--red-text" to="/signup-confirm">
            Log out
          </Link>
        </ButtonContinue>
      </main>
    </div>
  );
}
