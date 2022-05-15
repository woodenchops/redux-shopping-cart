import React from "react";
import styled from "styled-components";
import ActionButton from "../../styledComponents/ActionButton/ActionButton";

const StyledCartItem = styled.div`
  border: 1px solid black;
  padding: 10px 0;
  margin: 1rem 0;
`;

const StyledCartItemTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

const CartItem = ({ title, qty, id, price, removeFromCart, addToCart }) => {
  const onAddToQtyHandler = (id) => {
    addToCart({ title, price, id });
  };

  const onSubtractFromQtyHandler = (id) => {
    removeFromCart({ id });
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart({ id, allInstances: true });
  };

  return (
    <StyledCartItem>
      <StyledCartItemTitle>{title}</StyledCartItemTitle>
      <p>Qty: {qty}</p>

      <ActionButton icon onClick={() => onSubtractFromQtyHandler(id)}>
        -
      </ActionButton>
      <ActionButton icon onClick={() => onAddToQtyHandler(id)}>
        +
      </ActionButton>
      <ActionButton onClick={() => handleRemoveFromCart(id)}>
        Remove
      </ActionButton>
    </StyledCartItem>
  );
};

export default CartItem;
