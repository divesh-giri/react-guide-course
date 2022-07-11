import React from "react";
import FoodList from "../FoodList/FoodList";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <>
      <div className={classes["container"]}>
        <div className={classes["back-img"]}>
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
            alt="back-img"
          ></img>
        </div>
        <div className={classes["description-container"]}>
          <h3>Delicious Food, Delivered To You</h3>
          <p>
            Choose your favourite meal from our broad sellection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and off course by the experienced chefs!
          </p>
        </div>
      </div>
      <FoodList />
    </>
  );
};

export default MainHeader;
