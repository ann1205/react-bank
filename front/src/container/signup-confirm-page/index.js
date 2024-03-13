import { Link } from "react-router-dom";
import "./index.css";
import Backbutton from "../../component/back-button";
import ButtonContinue from "../../component/button-continue";
import Title from "../../component/title";
import Heading from "../../component/heading";
import Description from "../../component/description";
import InputCode from "../../component/input-code";
import Form from "../../component/form";
import FormItem from "../../component/form-item";
import Alert from "../../component/alert";
import { MyForm } from "../../script/form";
import { getTokenSession, saveSession } from "../../script/session";

class SignupConfirmForm extends MyForm {
  FIELD_NAME = {
    CODE: "code",
  };
  FIELD_ERROR = {
    IS_EMPTY: "Введіть значення в поле",
    IS_BIG: "Дуже довге значення, приберіть зайве",
  };

  validate = (name, value) => {
    if (String(value).length < 1) {
      return this.FIELD_ERROR.IS_EMPTY;
    }

    if (String(value).length > 20) {
      return this.FIELD_ERROR.IS_BIG;
    }
  };

  submit = async () => {
    if (this.disabled === true) {
      this.validateAll();
    } else {
      console.log(this.value);

      this.setAlert("progress", "Завантаження");

      try {
        const res = await fetch("http://localhost:4000/signup-confirm", {
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
      token: getTokenSession(),
    });
  };
}

// document.addEventListener("DOMContentLoaded", () => {
//   try {
//     if (window.session) {
//       if (window.session.user.isConfirm) {
//         window.location.assign("/balance");
//       }
//     } else {
//       window.location.assign("/");
//     }
//   } catch (e) {}
// });

export default function Component() {
  const signupConfirmForm = new SignupConfirmForm();

  const handleChangeCode = signupConfirmForm.change();

  const handleSubmit = signupConfirmForm.submit();

  return (
    <div className="App-header">
      <form className="page__section">
        <Backbutton />
        <Heading>
          <Title>Confirm account</Title>
          <Description className={"description-smaller"}>
            Write the code you received
          </Description>
        </Heading>
        <Form>
          <FormItem name="code">
            <InputCode onChange={handleChangeCode}>Code</InputCode>
          </FormItem>
        </Form>
        <ButtonContinue onClick={handleSubmit} className="button--disabled">
          <Link className="App-link" to="/balance">
            Confirm
          </Link>
        </ButtonContinue>
        <Alert>Увага, помилка</Alert>
      </form>
    </div>
  );
}
