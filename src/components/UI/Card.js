import "./Card.css";
import Expenses from "../Expense/Expenses";
function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
