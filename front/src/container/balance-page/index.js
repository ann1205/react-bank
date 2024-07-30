import "./index.css";
import { Link } from "react-router-dom";
import { List } from "../../script/list";
import { TRANSACTION_TYPE } from "../../script/transaction";

import Heading from "../../component/heading";
import Title from "../../component/title";
import notificationIcon from "./notification-icon.svg";
import settingsIcon from "./settings-icon.svg";
import dollarIcon from "./dolar-icon.svg";
import reciveIcon from "./recive-icon.svg";
import sendIcon from "./send-icon.svg";
import strypeIcon from "../../component/button-payment-system/strype.svg";
import TransactionList from "../transaction-list";
import Balance from "../balance";

// class TransactionList extends List {
//   constructor() {
//     super();

//     this.element = document.querySelector("#transaction-list");
//     if (!this.element) throw new Error("Element is null");

//     this.loadData();
//   }

//   loadData = async () => {
//     this.updateStatus(this.STATE.LOADING);

//     try {
//       const res = await fetch("/transaction-list-data", {
//         method: "GET",
//       });

//       const data = await res.json();

//       if (res.ok) {
//         this.updateStatus(this.STATE.SUCCESS, this.convertData(data));
//       } else {
//         this.updateStatus(this.STATE.ERROR, data);
//       }
//     } catch (error) {
//       console.log(error);
//       this.updateStatus(this.STATE.ERROR, {
//         message: error.message,
//       });
//     }
//   };

//   convertData = (data) => {
//     return {
//       ...data,
//       list: data.list.map((item) => ({
//         ...item,
//         type: TRANSACTION_TYPE[item.typeTransaction],
//       })),
//     };
//   };

//   updateView = () => {
//     this.element.innerHTML = "";

//     console.log(this.status, this.data);

//     switch (this.status) {
//       case this.STATE.LOADING:
//         this.element.innerHTML = `
//         <div className="transaction">
//           <img src={strypeIcon} />
//           <div className="transaction__info">
//             <span className="transaction__title skeleton"></span>
//             <div className="transaction__sub-block">
//               <span className="transaction__sub-value skeleton"></span>
//               <span className="transaction__sub-value skeleton"></span>
//             </div>
//           </div>
//           <span className="transaction__sum skeleton"></span>
//           </div>
//         `;
//         break;

//       case this.STATE.SUCCESS:
//         this.data.list.forEach((item) => {
//           this.element.innerHTML += `
//             <Link className="transaction transaction-click" to="/transaction-item?id=${item.id}">
//               <img src={strypeIcon} />
//               <div className="transaction__info">
//                 <span className="transaction__title">${item.name}</span>
//                 <div className="transaction__sub-block">
//                   <span className="transaction__sub-value">${item.time}</span>
//                   <span className="transaction__sub-value">${item.sum}</span>
//                 </div>
//               </div>
//               <span>+$112.00</span>
//             </Link>
//           `;
//         });
//         break;

//       case this.STATE.ERROR:
//         this.element.innerHTML = `
//         <span className="alert alert--error">${this.data.message}</span>
//         `;
//         break;
//     }
//   };
// }

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
          <span className="balance_count">
            <Balance />
          </span>
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
              <Link className="" to="/send">
                <img src={sendIcon} alt="send-button" />
              </Link>
            </div>
            <span className="send-button_title">Send</span>
          </div>
        </div>
      </div>
      <div className="transaction-list" id="transaction-list">
        <div className="card">
          <Link className="App-link">
            <div className="transaction-item">
              <img src={strypeIcon} />
              <div className="transaction__info">
                <span className="transaction__title">Strype</span>
                <div className="transaction__sub-block">
                  <span className="transaction__sub-value">12:25</span>
                  <span className="transaction__sub-value">Announcement</span>
                </div>
              </div>
              <span>+$112.00</span>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link className="App-link">
            <div className="transaction-item transaction-item--click">
              <img src={strypeIcon} />
              <div className="transaction__info">
                <span className="transaction__title">Strype</span>
                <div className="transaction__sub-block">
                  <span className="transaction__sub-value">12:25</span>
                  <span className="transaction__sub-value">Announcement</span>
                </div>
              </div>
              <span>+$112.00</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
