import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Catagories from "./Catagories/Catagories";
import Foods from "./Foods/Foods";
import Orders from "./Orders/Orders";

const Menu = () => {

  // const [foods, setFoods] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("data/foods.json")
  //     const data = await res.json()
  //     setFoods(data)
  //   }
  //   fetchData()
  // }, [])

  // console.log(foods);

  const [orderList, setOrderList] = useState([])
  const handleOrderList = (food) => {

    const index = orderList.findIndex(order => order.id === food.id);
    if (index !== -1) {
      // Object exists, update it
      const findOrder = orderList.find(order => order.id === food.id)

      const updatedOrderList = [...orderList];
      const updateOrder = { ...findOrder, orders: findOrder.orders + 1 }
      updatedOrderList[index] = updateOrder;
      setOrderList(updatedOrderList);
    } else {
      // Object doesn't exist, add it
      const updatedOrderList = [...orderList];
      setOrderList([...updatedOrderList, food]);
    }

    // const updatedObjects = objects.map(obj => {
    //   if (obj.id === objectIdToUpdate) {
    //     return { ...obj, status: newStatus };
    //   }
    //   return obj;
    // });


  }


  // console.log(orderList)
  return (
    <div className="flex">
      <div className=" flex-auto w-2/3">
        <Catagories></Catagories>
        <div className="divider"></div>

        <Foods handleOrderList={handleOrderList}></Foods>
      </div>
      <div className=" flex-auto w-1/3 bg-slate-800 ">
        <Orders orderList={orderList}></Orders>
      </div>
    </div>
  );
};

export default Menu;
