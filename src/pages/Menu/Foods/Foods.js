import React from "react";
import { useQuery } from "react-query";
import Food from "./Food";

const Foods = ({ handleOrderList }) => {
  // console.log(orders, setOrders)
  const handleOrder = (food) => {
    
    handleOrderList( food)
  };
  
  const {
    isLoading,
    error,
    data: foods = [],
  } = useQuery("foods", () =>
    fetch("data/foods.json").then((res) => res.json())
  );
  // console.log(foods);
  return (
    <div className="grid grid-cols-3 gap-4 p-3">
      {foods.length &&
        foods.map((food) => (
          <Food
            key={food.id}
            food={food}
            handleOrder={handleOrder}
          ></Food>
        ))}
    </div>
  );
};

export default Foods;
