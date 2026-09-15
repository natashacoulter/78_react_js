import "./styles.css";
import Button from "../Button/Button";

function Counter({ count = 0, onMinusClick, onPlusClick }) {
  return (
    <div className="counter-wrapper">
      <Button name="-" onClick={onMinusClick} />
      <div className="counter-value">{count}</div>
      <Button name="+" onClick={onPlusClick} />
    </div>
  );
}

export default Counter;