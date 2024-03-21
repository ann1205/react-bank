import "./index.css";
import { Link } from "react-router-dom";
import Heading from "../../component/heading";
import Title from "../../component/title";
import notificationIcon from "./notification-icon.svg";
import settingsIcon from "./settings-icon.svg";
import dollarIcon from "./dolar-icon.svg";
import reciveIcon from "./recive-icon.svg";
import sendIcon from "./send-icon.svg";
import strypeIcon from "../../component/button-payment-system/strype.svg";

export default function Component() {
  return (
    <div className="App-header">
      <div className="balance_page-header">
        <Heading className="heading__inline--flex">
          <div className="settings-button">
            <Link className="App-link" to="/settings">
              <img src={settingsIcon} alt="settings_button" />
            </Link>
          </div>
          <Title className="title--balance">Main wallet</Title>
          <div className="notification-button">
            <Link className="App-link" to="/notifications">
              <img src={notificationIcon} alt="notification_button" />
            </Link>
          </div>
        </Heading>
        <div className="balance_info">
          <img src={dollarIcon} alt="$" />
          <span className="balance_count">100.20</span>
        </div>
        <div className="balance_operation">
          <div className="balance_recive">
            <div className="recive-button">
              <Link className="" to="/recive">
                <img src={reciveIcon} alt="recive-button" />
              </Link>
            </div>
            <span className="recive-button_title">Receive</span>
          </div>
          <div className="balance_send">
            <div className="send-button">
              <img src={sendIcon} alt="send-button" />
            </div>
            <span className="send-button_title">Send</span>
          </div>
        </div>
      </div>
      <div className="transaction-list">
        <card>
          <div className="transaction-item">
            <img src={strypeIcon} />
            <div className="transaction__info">
              <span className="transaction__name">Strype</span>
              <div className="transaction__sub-block">
                <span className="transaction__sub-value">12:25</span>
                <span className="transaction__sub-value">Announcement</span>
              </div>
            </div>
            <span>+$112.00</span>
          </div>
        </card>
      </div>
    </div>
  );
}
