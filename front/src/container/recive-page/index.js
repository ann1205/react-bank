import "./index.css";
import { Link } from "react-router-dom";
import Backbutton from "../../component/back-button";
import ButtonPaymentSystem from "../../component/button-payment-system";
import Title from "../../component/title";
import Heading from "../../component/heading";
import InputSum from "../../component/input-sum";
import Divider from "../../component/divider";
import Form from "../../component/form";
import FormItem from "../../component/form-item";
import Alert from "../../component/alert";
import { MyForm } from "../../script/form";
import { saveSession } from "../../script/session";
import strype from "../../component/button-payment-system/strype.svg";
import coinbase from "../../component/button-payment-system/coinbase.svg";
import strypeSystem from "../../component/button-payment-system/strype-system.svg";
import coinbaseSystem from "../../component/button-payment-system/coinbase-system.svg";
import { useState } from "react";

class ReciveForm extends MyForm {
  FIELD_NAME = {
    SUM: "sum",
  };
  FIELD_ERROR = {
    IS_EMPTY: "Введіть значення в поле",
    NOT_A_ZERO: "Сума повинна бути більша 0",
  };

  validate = (value) => {
    if (String(value).length < 1) {
      return this.FIELD_ERROR.IS_EMPTY;
    }

    if (Number(value) === 0) {
      return this.FIELD_ERROR.NOT_A_ZERO;
    }
  };

  submit = async () => {
    if (this.disabled === true) {
      this.validateAll();
    } else {
      console.log(this.value);

      try {
        const res = await fetch(
          "http://localhost:4000/transaction-recive-create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: this.convertData(),
          }
        );

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
    const sumValue = this.value[this.FIELD_NAME.SUM];
    const sumNumber = Number(sumValue);

    // Перевірка чи значення поля суми є числом
    if (isNaN(sumNumber)) {
      throw new Error("Поле суми повинно містити числове значення");
    }

    return JSON.stringify({
      [this.FIELD_NAME.SUM]: sumNumber,
    });

    // return JSON.stringify({
    //   [this.FIELD_NAME.SUM]: Number(this.value[this.FIELD_NAME.SUM]),
    // });
  };
}

export default function Container() {
  const reciveForm = new ReciveForm();

  // const [sum, setSum] = useState("");

  // const handleChangeSum = (e) => setSum(e.target.value);

  const handleSubmit = (data) => reciveForm.submit(data);

  const [transferAmount, setTransferAmount] = useState(0);

  const handleTransferAmountChange = (event) => {
    setTransferAmount(event.target.value);
  };

  // const handleTransfer = () => {
  //   Balance.transfer(transferAmount);
  // };

  return (
    <div className="App-header page__grey">
      <Heading className="heading__inline">
        <Backbutton />
        <Title className="title--smaller">Recive</Title>
      </Heading>
      <form className="page__section">
        <Form>
          <FormItem>
            <InputSum
              className="subtitle"
              // name="sum"
              value={transferAmount}
              onChange={handleTransferAmountChange}
            >
              Recive amount
            </InputSum>
          </FormItem>
        </Form>
        <Divider />
        <span className="subtitle">Payment system</span>
        <ButtonPaymentSystem
          name="strype"
          onClick={handleSubmit}
          paymentlogo={strype}
          paymentsystem={strypeSystem}
        >
          <Link className="App-link--black-text" to="/balance">
            Strype
          </Link>
        </ButtonPaymentSystem>
        <ButtonPaymentSystem
          name="coinbase"
          onClick={handleSubmit}
          paymentlogo={coinbase}
          paymentsystem={coinbaseSystem}
        >
          <Link className="App-link--black-text" to="/balance">
            Coinbase
          </Link>
        </ButtonPaymentSystem>
        <Alert>Увага, помилка</Alert>
      </form>
    </div>
  );
}
