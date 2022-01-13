import React from "react";
import styled from "styled-components";
import ActionButton from "../../styledComponents/ActionButton/ActionButton";

import { addQty, reduceQty } from "../../util/cartUtilFunctions/index";

const StyledCartItem = styled.div`
  border: 1px solid black;
  padding: 10px 0;
  margin: 1rem 0;
`;

const StyledCartItemTitle = styled.p`
  margin: 0;
`;

const CartItem = ({ title, qty, price, cart, id, updateQty }) => {
  return (
    <StyledCartItem>
      <StyledCartItemTitle>{title}</StyledCartItemTitle>
      <p>Qty: {qty}</p>
      <p>Price: £{price}</p>

      <ActionButton onClick={() => reduceQty({ cart, updateQty, id })}>
        -
      </ActionButton>
      <ActionButton onClick={() => addQty({ cart, updateQty, id })}>
        +
      </ActionButton>
    </StyledCartItem>
  );
};

export default CartItem;
