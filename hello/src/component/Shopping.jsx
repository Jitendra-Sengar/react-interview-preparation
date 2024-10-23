import React from "react";
import { useCart } from "./CartContext";

const Shopping = () => {
  const { cartState, cartDispatch } = useCart();

  const addToCart = (item) => {
    const existingItem = cartState.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: {
          id: item.id,
          quantity: existingItem.quantity + 1,
        },
      });
    } else {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: {
          ...item,
          quantity: 1,
        },
      });
    }
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity > 0) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: itemId, quantity },
      });
    }
  };

  const removeFromCart = (itemId) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const products = [
    { id: 1, name: "product A" },
    { id: 2, name: "product B" },
    { id: 3, name: "product C" },
  ];
  return (
    <div>
        <h2>Shopping Cart</h2>
      {cartState.cartItems.map((item)=> (
        <li key={item.id}>
          {item.name} - {item.quantity} 
          <button onClick={()=> updateQuantity(item.id,item.quantity +1 )}>+</button>
          <button onClick={()=> updateQuantity(item.id,item.quantity -1 )}>-</button>
          <button onClick={()=> removeFromCart(item.id)}>Remove</button>
        </li>
      ))}
      <h2>Product List</h2>
      {products.map((item) => (
        <li key={item.id}>
          {" "}
          {item.name}
          <button onClick={() => addToCart(item)}>Add TO Cart</button>
        </li>
      ))}
    </div>
  );
};

export default Shopping;
