import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import FoodCart from "../FoodCart/FoodCart";
import classes from "./NavBar.module.css";
const NavBar = () => {
  const cartCtx = useContext(CartContext);
  const [totalItem, setTotalItem] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    console.log(cartCtx.data);
  }, [totalItem, cartCtx.data]);

  const cartClickHandler = () => {
    setCartVisible(true);
  };

  const closeCartHandler = () => {
    setCartVisible(false);
  };

  return (
    <>
      {cartVisible && <FoodCart closeCartHandler={closeCartHandler} />}
      <nav className={classes["nav-bar"]}>
        <h2>ReactMeals</h2>
        <div onClick={cartClickHandler} className={classes["food-cart-btn"]}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"
            alt="cart-icon"
          />
          <p>Your Cart</p>
          <div className={classes["order-count"]}>{totalItem}</div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
