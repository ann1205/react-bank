import "./index.css";

export default function Component({
  children,
  style = {},
  name,
  className,
  onClick,
  paymentlogo,
  paymentsystem,
}) {
  return (
    <button
      onClick={onClick}
      style={style}
      className="button-payment_system"
      name={name}
    >
      <span className="payment__logo">
        <img src={paymentlogo} />
        {children}
      </span>
      <span className={`${className}`}>
        <img src={paymentsystem} />
      </span>
    </button>
  );
}
