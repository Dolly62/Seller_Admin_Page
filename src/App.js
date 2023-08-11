import React, { useEffect, useState } from "react";
import Input from "./components/FormInput/Input";
import List from "./components/FormList/List";
import Total from "./components/Total/Total";

function App() {
  const initialList = JSON.parse(localStorage.getItem("sellerList")) || [];
  const [sellerList, setSellerList] = useState(initialList);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem("sellerList", JSON.stringify(sellerList));
    totalPriceHandler();
  }, [sellerList]);

  const addSellerHandler = (
    sellerproductID,
    sellerprice,
    sellerproductname
  ) => {
    setSellerList((prevLists) => {
      const newPrice = parseFloat(sellerprice);
      const newList = {
        id: Math.random().toString(),
        productID: sellerproductID,
        price: newPrice,
        name: sellerproductname,
      };
      const updatedLists = [...prevLists, newList];
      return updatedLists;
    });
  };

  const deleteItemHandler = (itemId) => {
    setSellerList((prevLists) => {
      const updatedLists = prevLists.filter((item) => item.id !== itemId);
      return updatedLists;
    });
  };

  const totalPriceHandler = () => {
    const total = parseFloat(sellerList.reduce((sum, seller) => sum + seller.price, 0));
    setTotalPrice(total);
  };

  return (
    <div className="App">
      <Input onAddSeller={addSellerHandler} />
      <List sellers={sellerList} onDeleteSeller={deleteItemHandler} />
      <Total prices={totalPrice} />
    </div>
  );
}

export default App;
