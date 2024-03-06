// import React, { useState } from "react";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         // Обробка успішної авторизації, наприклад, збереження токену в стані або локальному сховищі
//         console.log("Успішна авторизація");
//       } else {
//         // Обробка помилки авторизації
//         console.error("Помилка авторизації");
//       }
//     } catch (error) {
//       console.error("Помилка при відправці запиту", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={handleEmailChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Увійти</button>
//     </form>
//   );
// };

// export default LoginForm;

// import React, { useState } from "react";
// import { Form } from '../script/form';

// export default class RegistrationForm extends Form {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: this.convertData(),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         this.setAlert("success", data.message);
//         // saveSession(data.session);
//         // location.assign("/");
//       } else {
//         this.setAlert("error", data.message);
//       }
//     } catch (error) {
//       this.setAlert("error", `Помилка: ${error.message}`);
//     }
//   };
// }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={handleEmailChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Зареєструватися</button>
//     </form>
//   );
