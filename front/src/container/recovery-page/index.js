import { Link } from "react-router-dom";
import "./index.css";
import Backbutton from "../../component/back-button";
import ButtonContinue from "../../component/button-continue";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Description from "../../component/description";
import Form from "../../component/form";
import FormItem from "../../component/form-item";
import Input from "../../component/input";
import Alert from "../../component/alert";
import { MyForm, REG_EXP_EMAIL } from "../../script/form";
import { saveSession } from "../../script/session";

class RecoveryForm extends MyForm {
  FIELD_NAME = {
    EMAIL: "email",
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

      this.setAlert("progress", "Завантаження...");

      try {
        const res = await fetch("http://localhost:4000/recovery", {
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
          window.location.assign("/recovery-confirm");
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
      [this.FIELD_NAME.EMAIL]: this.value[this.FIELD_NAME.EMAIL],
    });
  };
}

export default function Component() {
  const recoveryForm = new RecoveryForm();

  const handleChangeEmail = (e) => recoveryForm.change("email", e.target.value);

  const handleSubmit = (data) => recoveryForm.submit(data);

  return (
    <div className="App-header">
      <form className="page__section">
        <Backbutton />
        <Heading>
          <Title>Recover password</Title>
          <Description className={"description-smaller"}>
            Choose a recovery method
          </Description>
        </Heading>
        <Form>
          <FormItem name="email">
            <Input onChange={handleChangeEmail}>Email</Input>
          </FormItem>
        </Form>
        <ButtonContinue onClick={handleSubmit}>
          <Link className="App-link" to="/recovery-confirm">
            Send code
          </Link>
        </ButtonContinue>
        <Alert>Увага, помилка</Alert>
      </form>
    </div>
  );
}
