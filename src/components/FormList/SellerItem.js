import React from "react";
import Button from "../UI/Button";
import classes from "./SellerItem.module.css";

const SellerItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <ul className={classes.lists}>
      {props.children}
      <button onClick={deleteHandler}>Delete Product</button>
    </ul>
  );
};

export default SellerItem;
