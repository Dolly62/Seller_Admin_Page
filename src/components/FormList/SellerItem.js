import React from "react";

const SellerItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li>
    <ul>
      {props.children}
      <button onClick={deleteHandler}>Delete Product</button>
    </ul>
    </li>
  );
};

export default SellerItem;
