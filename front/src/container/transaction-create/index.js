import "./index.css";

import InputSum from "../../component/input-sum";

export default function Container({ onCreate, id }) {
  const handleSubmit = (value) => {
    alert(value);
  };

  return <InputSum onSubmit={handleSubmit} />;
}

// import logincon from "./login-icon.svg";
// import revardicon from "./revard-icon.svg";

// export default function Container(onCreate) {
//   const handleSubmit = (value) => {
//     alert(value);
//   };
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
