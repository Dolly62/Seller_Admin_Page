import React from "react";
import SellerItem from "./SellerItem";
import Card from "../UI/Card";
import classes from "./List.module.css";

const List = (props) => {
  return (
    <Card className= {classes.sellers}>
      <h1>Products</h1>
      <ul>
        {props.sellers.map((seller) => (
          <li>
          <SellerItem
            key={seller.id}
            id={seller.id}
            onDelete={props.onDeleteSeller}
          >
            
            {seller.productID} - {seller.price} - {seller.name}
          </SellerItem>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default List;
