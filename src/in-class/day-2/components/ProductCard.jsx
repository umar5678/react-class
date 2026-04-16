// product name,
// description
// badge, in-stock, low-quantity, out-of-stock,

import React from "react";
import Badge from "./Badge";

const ProductCard = ({ name, description, quantity }) => {
  let statusText = ""

  if(quantity > 10 ){
    statusText = "In Stock"
  } else if (quantity <= 10 && quantity > 0) {
     statusText = "Low Quantity"
  } else if (quantity == 0 ) {
    statusText=  "Out of stock"
  } else {
    statusText = ""
  }

  const status =
    statusText === "In Stock"
      ? "success"
      : statusText === "Low Quantity"
        ? "warning"
        : statusText === "Out of stock"
          ? "error"
          : "info";

  console.log(statusText);
  console.log(status);

  return (
    <div className="p-4 border rounded-xl m-4 max-w-64 ">
      <h1 className="cardHeader flex ">{name}</h1>
      <p>{description}</p>
    
      <p>{quantity}</p>

      <div className="my-6">
        <Badge status={status} statusText={statusText} />
      </div>
    </div>
   
  );
};

export default ProductCard;
