import "./index.css";
import { Link } from "react-router-dom";
import Backbutton from "../../component/back-button";
import ButtonContinue from "../../component/button-continue";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Input from "../../component/input";
import InputSum from "../../component/input-sum";
import Form from "../../component/form";
import FormItem from "../../component/form-item";
import Alert from "../../component/alert";
import { MyForm, REG_EXP_EMAIL } from "../../script/form";
import { saveSession } from "../../script/session";

class SendForm extends MyForm {
  FIELD_NAME = {
    EMAIL: "email",
    SUM: "sum",
  };
  FIELD_ERROR = {
    IS_EMPTY: "Введіть значення в поле",
    NOT_A_ZERO: "Сума повинна бути більша 0",
    EMAIL: "Введіть коректне значення e-mail адреси",
  };

  validate = (name, value) => {
    if (String(value).length < 1) {
      return this.FIELD_ERROR.IS_EMPTY;
    }

    if (Number(value) === 0) {
      return this.FIELD_ERROR.NOT_A_ZERO;
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

      try {
        const res = await fetch("http://localhost:4000/send", {
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
      [this.FIELD_NAME.EMAIL]: this.value[this.FIELD_NAME.EMAIL],
      [this.FIELD_NAME.SUM]: Number(this.value[this.FIELD_NAME.SUM]),
    });
  };
}

export default function Container() {
  const sendForm = new SendForm();

  const handleChangeEmail = (e) => sendForm.change("email", e.target.value);

  const handleChangeSum = (e) => sendForm.change("remittance", e.target.value);

  const handleSubmit = (data) => sendForm.submit(data);

  return (
    <div className="App-header page__grey">
      <Heading className="heading__inline">
        <Backbutton />
        <Title className="title--smaller">Send</Title>
      </Heading>
      <form className="page__section">
        <Form>
          <FormItem name="email">
            <Input onChange={handleChangeEmail}>Email</Input>
          </FormItem>
          <FormItem name="sum">
            <InputSum className="field__label" onChange={handleChangeSum}>
              Sum
            </InputSum>
          </FormItem>
        </Form>
        <ButtonContinue onClick={handleSubmit}>
          {/* <Link className="App-link" to="/signup-confirm"> */}
          Send
          {/* </Link> */}
        </ButtonContinue>

        <Alert>Увага, помилка</Alert>
      </form>
    </div>
  );
}
