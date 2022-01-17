import React, { memo } from "react";
import ActionButton from "../../styledComponents/ActionButton/ActionButton";
import Card from "../../styledComponents/Card/Card";
import Heading from "../../styledComponents/Heading/Heading";

const ProductItem = ({
  cart,
  title,
  qty: initialQty,
  id,
  price,
  addToCart,
  addToQty,
}) => {
  const handleAddToCart = (id) => {
    const itemAlreadyInCart = cart.find((product) => product.id === id);

    if (itemAlreadyInCart) {
      addToQty(itemAlreadyInCart);
      return;
    }
    const updatedQty = (initialQty += 1);
    addToCart({ title, qty: updatedQty, price, id });
  };

  const product = cart.find((x) => x.id === id);

  return (
    <Card>
      <Heading>{title}</Heading>
      <p>Price: £{price}</p>
      <p>Qty: {(product && product.qty) || initialQty}</p>
      <ActionButton onClick={() => handleAddToCart(id)}>Add</ActionButton>
    </Card>
  );
};

export default memo(ProductItem);
