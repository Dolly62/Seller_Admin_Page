import React from "react";
import SellerItem from "./SellerItem";

const List = (props) => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {props.sellers.map((seller) => (
          <SellerItem
            key={seller.id}
            id={seller.id}
            onDelete={props.onDeleteSeller}
          >
            {seller.productID} - {seller.price} - {seller.name}
          </SellerItem>
        ))}
      </ul>
    </>
  );
};

export default List;
