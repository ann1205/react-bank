import "./index.css";
import { List } from "../../script/list";

import TransactionCreate from "../transaction-create";

class TransactionList extends List {
  constructor() {
    super();

    this.element = document.querySelector("#transaction-list");
    if (!this.element) throw new Error("Element is null");

    this.loadData();
  }

  loadData = async () => {
    this.updateStatus(this.STATE.LOADING);

    try {
      const res = await fetch("http://localhost:4000/transaction-list-data", {
        method: "GET",
      });

      const data = await res.json();

      if (res.ok) {
        this.updateStatus(this.STATE.SUCCESS, this.convertData(data));
      } else {
        this.updateStatus(this.STATE.ERROR, data);
      }
    } catch (error) {
      console.log(error);
      this.updateStatus(this.STATE.ERROR, {
        message: error.message,
      });
    }
  };

  convertData = (data) => {
    return {
      ...data,
      list: data.list.map((item) => ({
        ...item,
      })),
    };
  };

  updateView = () => {
    this.element.innerHTML = "";

    console.log(this.status, this.data);

    switch (this.status) {
      case this.STATE.LOADING:
        this.element.innerHTML = `
        <div className="transaction">
          <img src={strypeIcon} />
          <div className="transaction__info">
            <span className="transaction__title skeleton"></span>
            <div className="transaction__sub-block">
              <span className="transaction__sub-value skeleton"></span>
              <span className="transaction__sub-value skeleton"></span>
            </div>
          </div>
          <span className="transaction__sum skeleton"></span>
          </div>
        `;
        break;

      case this.STATE.SUCCESS:
        this.data.list.forEach((item) => {
          this.element.innerHTML += `
            <Link className="transaction transaction-click" to="/transaction-item?id=${item.id}">
              <img src={strypeIcon} />
              <div className="transaction__info">
                <span className="transaction__title">${item.name}</span>
                <div className="transaction__sub-block">
                  <span className="transaction__sub-value">${item.time}</span>
                  <span className="transaction__sub-value">${item.sum}</span>
                </div>
              </div>
              <span>+$112.00</span>
            </Link>
          `;
        });
        break;

      case this.STATE.ERROR:
        this.element.innerHTML = `
        <span className="alert alert--error">${this.data.message}</span>
        `;
        break;
    }
  };
}

export default function Container() {
  // const getData = () => {};

  // return <TransactionCreate onCreate={getData} />;

  return <TransactionList />;
}

// import "./index.css";
// import logincon from "./login-icon.svg";
// import revardicon from "./revard-icon.svg";

// export default function Container() {
//   return (
//     <div className="notification-item">
//       <img src={revardicon} />
//       <div className="notification__info">
//         <span className="notification__title">New revard system</span>
//         <div className="notification__sub-block">
//           <span className="notification__sub-value">10 min. ago</span>
//           <span className="notification__sub-value">Announcement</span>
//         </div>
//       </div>
//     </div>
//   );
// }
