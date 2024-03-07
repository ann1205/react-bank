import "./index.css";
import { Link } from "react-router-dom";
import Backbutton from "../../component/back-button";
import ButtonContinue from "../../component/button-continue";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Description from "../../component/description";
import Input from "../../component/input";
import InputPassword from "../../component/input-password";
import Form from "../../component/form";
import FormItem from "../../component/form-item";
import Alert from "../../component/alert";
import { MyForm, REG_EXP_EMAIL, REG_EXP_PASSWORD } from "../../script/form";

class SignupForm extends MyForm {
  FIELD_NAME = {
    EMAIL: "email",
    PASSWORD: "password",
  };
  FIELD_ERROR = {
    IS_EMPTY: "Введіть значення в поле",
    IS_BIG: "Дуже довге значення, приберіть зайве",
    EMAIL: "Введіть коректне значення e-mail адреси",
    PASSWORD:
      "Пароль повинен складатися з не менше ніж 8 символів, включаючи хоча б одну цифру, малу та велику літеру",
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

    if (name === this.FIELD_NAME.PASSWORD) {
      if (!REG_EXP_PASSWORD.test(String(value))) {
        return this.FIELD_ERROR.PASSWORD;
      }
    }
  };

  // submit = () => {
  //   if (this.disabled === true) {
  //     this.validateAll();
  //   } else {
  //     console.log(this.value);

  //     this.setAlert("progress", "Завантаження");
  //   }
  // };

  submit = async () => {
    if (this.disabled === true) {
      this.validateAll();
    } else {
      console.log(this.value);

      this.setAlert("progress", "Завантаження");

      try {
        const res = await fetch("http://localhost:4000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: this.convertData(),
        });

        const data = await res.json();

        if (res.ok) {
          this.setAlert("success", data.message);
          // saveSession(data.session);
          // location.assign("/");
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

export default function Container() {
  const signupForm = new SignupForm();

  const handleChangeEmail = (e) => signupForm.change("email", e.target.value);

  const handleChangePassword = (e) =>
    signupForm.change("password", e.target.value);

  const handleSubmit = (data) => signupForm.submit(data);

  return (
    <div className="App-header">
      <Backbutton />
      <form className="page__section">
        <Heading>
          <Title>Sign Up</Title>
          <Description className={"description-smaller"}>
            Choose a registration method
          </Description>
        </Heading>
        <Form>
          <FormItem name="email">
            <Input onChange={handleChangeEmail}>Email</Input>
          </FormItem>
          <FormItem name="password">
            <InputPassword onChange={handleChangePassword}>
              Password
            </InputPassword>
          </FormItem>
        </Form>
        <ButtonContinue onClick={handleSubmit} className="button--disabled">
          {/* <Link className="App-link" to="/signup-confirm"> */}
          Continue
          {/* </Link> */}
        </ButtonContinue>
        <Alert>Увага, помилка</Alert>
      </form>
    </div>
  );
}
