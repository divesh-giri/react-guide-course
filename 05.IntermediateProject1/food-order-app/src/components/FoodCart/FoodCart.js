import ReactDom from "react-dom";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem";

import classes from "./FoodCart.module.css";

const FoodCart = (props) => {
  const Backdrop = () => {
    return <div className={classes["backdrop"]}></div>;
  };

  const CartModal = () => {
    return (
      <div className={classes["cart-container"]}>
        <CartItem />
        <div className={classes["btn-container"]}>
          <Button onClick={props.closeCartHandler}>Close</Button>
          <Button>Order</Button>
        </div>
      </div>
    );
  };

  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <CartModal />,
        document.getElementById("cart-modal-root")
      )}
    </>
  );
};

export default FoodCart;

/*
useState
useRef
useContext
useEffect
useImperativeHandle
useReducer
*/
