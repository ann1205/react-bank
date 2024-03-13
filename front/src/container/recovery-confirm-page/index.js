import { Link } from "react-router-dom";
import "./index.css";
import Backbutton from "../../component/back-button";
import ButtonContinue from "../../component/button-continue";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Description from "../../component/description";
import Form from "../../component/form";
import FormItem from "../../component/form-item";
import InputPassword from "../../component/input-password";
import InputCode from "../../component/input-code";
import Alert from "../../component/alert";
import { MyForm, REG_EXP_PASSWORD } from "../../script/form";
import { saveSession } from "../../script/session";

class RecoveryConfirmForm extends MyForm {
  FIELD_NAME = {
    CODE: "code",
    PASSWORD: "password",
  };
  FIELD_ERROR = {
    IS_EMPTY: "Введіть значення в поле",
    IS_BIG: "Дуже довге значення, приберіть зайве",
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

    if (name === this.FIELD_NAME.PASSWORD) {
      if (!REG_EXP_PASSWORD.test(String(value))) {
        return this.FIELD_ERROR.PASSWORD;
      }
    }
  };

  submit = async () => {
    if (this.disabled === true) {
      this.validateAll();
    } else {
      console.log(this.value);

      this.setAlert("progress", "Завантаження...");

      try {
        const res = await fetch("http://localhost:4000/recovery-confirm", {
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
        this.setAlert("error", error.message);
      }
    }
  };

  convertData = () => {
    return JSON.stringify({
      [this.FIELD_NAME.CODE]: Number(this.value[this.FIELD_NAME.CODE]),
      [this.FIELD_NAME.PASSWORD]: this.value[this.FIELD_NAME.PASSWORD],
    });
  };
}

export default function Component() {
  const recoveryConfirmForm = new RecoveryConfirmForm();

  const handleChangeCode = (e) =>
    recoveryConfirmForm.change("code", e.target.value);

  const handleChangePassword = (e) =>
    recoveryConfirmForm.change("password", e.target.value);

  const handleSubmit = (data) => recoveryConfirmForm.submit(data);
  return (
    <div className="App-header">
      <form className="page__section">
        <Backbutton />
        <Heading>
          <Title>Recover password</Title>
          <Description className={"description-smaller"}>
            Write the code you received
          </Description>
        </Heading>
        <Form>
          <FormItem name="code">
            <InputCode onChange={handleChangeCode}>Code</InputCode>
          </FormItem>
          <FormItem name="password">
            <InputPassword onChange={handleChangePassword}>
              New password
            </InputPassword>
          </FormItem>
        </Form>
        <ButtonContinue onClick={handleSubmit}>
          <Link className="App-link" to="/balance">
            Restore password
          </Link>
        </ButtonContinue>
        <Alert>Увага, помилка</Alert>
      </form>
    </div>
  );
}
