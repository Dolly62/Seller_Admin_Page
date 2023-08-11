import React, { useState } from "react";
import classes from "./Input.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Input = (props) => {
  const [enteredProductID, setEnteredProducID] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredProductName, setEnteredProductName] = useState("");

  const addSellerHandler = (event) => {
    event.preventDefault();
    props.onAddSeller(enteredProductID, enteredPrice, enteredProductName);
    setEnteredProducID("");
    setEnteredPrice("");
    setEnteredProductName("");
  };

  const productIDHandler = (event) => {
    setEnteredProducID(event.target.value);
    // console.log(event.target.value);
  };
  const sellingPriceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const productNameHandler = (event) => {
    setEnteredProductName(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <h1>Seller Form</h1>
      <form onSubmit={addSellerHandler} >
        <label htmlFor="productid">Product ID:</label>
        <input
          type="number"
          id="productid"
          value={enteredProductID}
          onChange={productIDHandler}
        />
        <label htmlFor="price">Selling Price:</label>
        <input
          type="number"
          id="price"
          value={enteredPrice}
          onChange={sellingPriceHandler}
        />
        <label htmlFor="productname">Product Name:</label>
        <input
          type="text"
          id="productname"
          value={enteredProductName}
          onChange={productNameHandler}
        />
        <Button type="submit">Add Product</Button>
      </form>
    </Card>
  );
};

export default Input;
