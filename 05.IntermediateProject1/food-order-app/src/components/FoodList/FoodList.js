import React from "react";
import Card from "../UI/Card/Card";
import FoodItem from "./FoodItem";
import { DUMMY_MEALS } from "../../store/meals";

const FoodList = (props) => {
  return (
    <Card>
      {DUMMY_MEALS.map((meal) => (
        <FoodItem key={meal.id} meal={meal} />
      ))}
    </Card>
  );
};

export default FoodList;
