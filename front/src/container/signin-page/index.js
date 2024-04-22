import { Link } from "react-router-dom";
import "./index.css";
import Backbutton from "../../component/back-button";
import ButtonContinue from "../../component/button-continue";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Description from "../../component/description";
import Input from "../../component/input";
import InputPassword from "../../component/input-password";
import Form from "../../component/form";
import FormItem from "../../component/form-item";
import { MyForm, REG_EXP_EMAIL } from "../../script/form";
import { saveSession } from "../../script/session";

class SigninForm extends MyForm {
  FIELD_NAME = {
    EMAIL: "email",
    PASSWORD: "password",
  };
  FIELD_ERROR = {
    IS_EMPTY: "Введіть значення в поле",
    IS_BIG: "Дуже довге значення, приберіть зайве",
    EMAIL: "Введіть коректне значення e-mail адреси",
  };

  validate = (name, value) => {
    if (String(value).length < 1) {
      return this.FIELD_ERROR.IS_EMPTY;
    }

    if (String(value).length > 20) {
      return this.FIELD_ERROR.IS_BIG;
    }

    if (name === this.FIELD_NAME.EMAIL) {
      if (!REG_EXP_EMAIL.test(String(value))) {
        return this.FIELD_ERROR.EMAIL;
      }
    }
  };

  submit = async () => {
    if (this.disabled === true) {
      this.validateAll();
    } else {
      console.log(this.value);

      this.setAlert("progress", "Завантаження");

      try {
        const res = await fetch("http://localhost:4000/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: this.convertData(),
        });

        const data = await res.json();

        if (res.ok) {
          this.setAlert("success", data.message);
          saveSession(data.session);
          window.location.assign("/balance");
        } else {
          this.setAlert("error", data.message);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        this.setAlert("error", error.message);
      }
    }
  };

  convertData = () => {
    return JSON.stringify({
      [this.FIELD_NAME.EMAIL]: this.value[this.FIELD_NAME.EMAIL],
      [this.FIELD_NAME.PASSWORD]: this.value[this.FIELD_NAME.PASSWORD],
    });
  };
}

export default function Component() {
  const signinForm = new SigninForm();

  const handleChangeEmail = (e) => signinForm.change("email", e.target.value);

  const handleChangePassword = (e) =>
    signinForm.change("password", e.target.value);

  const handleSubmit = (data) => signinForm.submit(data);

  return (
    <div className="App-header">
      <Backbutton />
      <form className="page__section">
        <Heading>
          <Title>Sign In</Title>
          <Description className={"description-smaller"}>
            Select login method
          </Description>
        </Heading>
        <Form>
          <FormItem>
            <Input onChange={handleChangeEmail}>Email</Input>
          </FormItem>
          <FormItem>
            <InputPassword onChange={handleChangePassword}>
              Password
            </InputPassword>
          </FormItem>
        </Form>
        <span className="link__prefix">
          Forgot your password?
          <Link to="/recovery">Restore</Link>
        </span>
        <ButtonContinue onClick={handleSubmit}>
          <Link className="App-link" to="/balance">
            Continue
          </Link>
        </ButtonContinue>
      </form>
    </div>
  );
}
