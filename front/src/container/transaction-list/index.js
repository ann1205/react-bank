import "./index.css";

import TransactionCreate from "../transaction-create";

export default function Container() {
  const getData = () => {};

  return <TransactionCreate onCreate={getData} />;
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
