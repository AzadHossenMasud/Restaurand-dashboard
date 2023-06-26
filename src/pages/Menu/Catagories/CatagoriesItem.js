import React from "react";

const CatagoriesItem = ({ catagory }) => {
    const {id, name, items}= catagory 
  return (
    <div className="card  bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{items} items</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default CatagoriesItem;
