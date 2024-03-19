import "./index.css";
import Backbutton from "../../component/back-button";
import Title from "../../component/title";
import Heading from "../../component/heading";
import NotificationItem from "../../container/notification-item";

export default function Container() {
  return (
    <div className="App-header page__grey">
      <Heading className="heading__inline">
        <Backbutton />
        <Title className="title--smaller">Notifications</Title>
      </Heading>
      <NotificationItem />
    </div>
  );
}
