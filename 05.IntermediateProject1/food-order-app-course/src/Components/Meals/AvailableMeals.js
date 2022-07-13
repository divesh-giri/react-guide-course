import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { error, isLoading, sendRequest: fetchData } = useHttp();

  const addMeals = (data) => {
    const loadedMeals = [];
    for (const meal in data) {
      loadedMeals.push({
        id: meal,
        name: data[meal].name,
        description: data[meal].description,
        price: data[meal].price,
      });
    }
    setMeals(loadedMeals);
  };
  useEffect(() => {
    fetchData(
      {
        url: "https://food-order-app-c2eff-default-rtdb.firebaseio.com/meals.json",
      },
      addMeals
    );
  }, [fetchData]);

  let content = <p>No Meals Found!</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  ));

  if (mealsList.length > 0) {
    content = mealsList;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
