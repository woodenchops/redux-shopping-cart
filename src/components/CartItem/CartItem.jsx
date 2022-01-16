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
`;

const CartItem = ({
  title,
  qty,
  price,
  cart,
  id,
  addToQty,
  subtractFromQty,
  removeFromCart,
}) => {
  const onAddToQtyHandler = (id) => {
    const itemAlreadyInCart = cart.find((product) => product.id === id);
    addToQty(itemAlreadyInCart);
  };

  const onSubtractFromQtyHandler = (id) => {
    const itemAlreadyInCart = cart.find((product) => product.id === id);

    if (itemAlreadyInCart.qty <= 1) {
      removeFromCart(itemAlreadyInCart);
      return;
    }

    subtractFromQty(itemAlreadyInCart);
  };

  return (
    <StyledCartItem>
      <StyledCartItemTitle>{title}</StyledCartItemTitle>
      <p>Qty: {qty}</p>
      <p>Price: £{price}</p>

      <ActionButton onClick={() => onSubtractFromQtyHandler(id)}>
        -
      </ActionButton>
      <ActionButton onClick={() => onAddToQtyHandler(id)}>+</ActionButton>
    </StyledCartItem>
  );
};

export default CartItem;
