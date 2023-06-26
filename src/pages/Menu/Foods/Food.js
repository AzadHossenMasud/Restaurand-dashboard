import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Food = ({ food , handleOrder}) => {
  const { id, name, price, imageUrl } = food;

  // console.log(handleOrder)


  
  return (
    <div>
      <div className="card h-56 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
            <p className=" flex
             flex-row items-center gap-x-2">Order <BsArrowRight ></BsArrowRight> Kitchen</p>
          <h2 className="">{name}</h2>
          <p>${price}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-square btn-outline btn-sm">+</button> */}
            <button onClick={()=>handleOrder( food)} className="btn btn-sm">Order</button>
            {/* <button className="btn btn-square btn-outline btn-sm">-</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
