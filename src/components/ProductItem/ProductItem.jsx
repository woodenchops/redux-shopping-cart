import React, { memo } from "react";
import ActionButton from "../../styledComponents/ActionButton/ActionButton";
import Card from "../../styledComponents/Card/Card";

const ProductItem = ({
  cart,
  title,
  qty,
  id,
  price,
  addToCart,
  removeFromCart,
  addToQty,
}) => {
  const handleAddToCart = (id) => {
    const itemAlreadyInCart = cart.find((product) => product.id === id);

    if (itemAlreadyInCart) {
      addToQty(itemAlreadyInCart);
      return;
    }
    const updatedQty = (qty += 1);
    addToCart({ title, qty: updatedQty, price, id });
  };

  const handleRemoveFromCart = (id) => {
    const updatedState = cart.filter((product) => {
      return product.id !== id;
    });

    removeFromCart(updatedState);
  };

  return (
    <Card>
      <h4>{title}</h4>
      <ActionButton onClick={() => handleAddToCart(id)}>Add</ActionButton>
      <ActionButton onClick={() => handleRemoveFromCart(id)}>
        Remove
      </ActionButton>
    </Card>
  );
};

export default memo(ProductItem);
