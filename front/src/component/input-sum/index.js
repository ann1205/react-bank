import "./index.css";
import "../input/index.css";

import { useState } from "react";

export default function Component({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    if (value.length === 0) return null;

    onSubmit(value);

    setValue("");
  };

  const isDisabled = value.length === 0;

  return (
    <div className="field field--sum">
      <label htmlFor="sum"></label>

      <div className="field__wrapper">
        <input
          name="sum"
          onChange={handleChange}
          type="number"
          className="field__input validation"
          placeholder="Enter sum"
        />
      </div>
    </div>
  );
}

// export default function Component({ children, onChange, className }) {
//   return (
//     <div className="field field--sum">
//       <label className={className} htmlFor="sum">
//         {children}
//       </label>

//       <div className="field__wrapper">
//         <input
//           id="sum"
//           name="sum"
//           onChange={onChange}
//           type="number"
//           className="field__input validation"
//           placeholder="Enter sum"
//         />
//       </div>
//     </div>
//   );
// }
