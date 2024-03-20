import "./index.css";
import { Link } from "react-router-dom";
import Heading from "../../component/heading";
import Title from "../../component/title";
import notificationIcon from "./notification-icon.svg";
import settingsIcon from "./settings-icon.svg";

export default function Component() {
  return (
    <div className="App-header">
      <div className="balance_page-header">
        <Heading className="heading__inline">
          <div className="settings-button">
            <img src={settingsIcon} alt="settings_button" />
          </div>
          <Title className="title--smaller">Main wallet</Title>
          <div className="notification-button">
            <img src={notificationIcon} alt="notification_button" />
          </div>
        </Heading>
        контейнер Balance
        <button>Receive</button>
        <button>Send</button>
      </div>
      <div className="list">
        <card></card>
      </div>
    </div>
  );
}
