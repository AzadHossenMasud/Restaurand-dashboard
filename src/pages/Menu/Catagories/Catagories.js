import React from "react";
import { useQuery } from "react-query";
import CatagoriesItem from "./CatagoriesItem";

const Catagories = () => {
  const { isLoading, error, data: catagories= [] } = useQuery("catagories", () =>
    fetch("data/catagories.json").then((res) => res.json())
  );
  // console.log(catagories);

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;
  return (
    <div className="p-3">
      <div className="grid grid-cols-4 gap-4">
        {catagories.length && catagories.map((catagory) => (
          <CatagoriesItem key={catagory.id} catagory={catagory}></CatagoriesItem>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
