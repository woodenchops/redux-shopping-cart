import React, { memo } from "react";
import ActionButton from "../../styledComponents/ActionButton/ActionButton";
import Card from "../../styledComponents/Card/Card";
import Heading from "../../styledComponents/Heading/Heading";

const ProductItem = ({ cart, title, id, price, addToCart, addToQty }) => {
  const handleAddToCart = (id) => {
    const itemAlreadyInCart = cart.find((product) => product.id === id);

    if (itemAlreadyInCart) {
      addToQty(itemAlreadyInCart);
      return;
    }

    addToCart({ title, qty: 1, price, id });
  };

  return (
    <Card>
      <Heading>{title}</Heading>
      <p>Price: £{price}</p>
      <ActionButton onClick={() => handleAddToCart(id)}>Add</ActionButton>
    </Card>
  );
};

export default memo(ProductItem);
