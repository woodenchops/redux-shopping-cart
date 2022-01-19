import React from "react";

import styled from "styled-components";
import Card from "../../styledComponents/Card/Card";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import {
  addToQty,
  subtractFromQty,
  removeFromCart,
} from "../../actions/cartActions";
import Heading from "../../styledComponents/Heading/Heading";

const StyledCartContainer = styled.aside`
  flex-basis: 400px;
  margin-left: 1rem;
`;

const CartContainer = ({
  cart,
  total,
  addToQty,
  subtractFromQty,
  removeFromCart,
}) => {
  return (
    <StyledCartContainer>
      <Card>
        <Heading>Cart</Heading>
        {cart.length > 0 &&
          cart.map(({ title, qty, price, id }, idx) => {
            return (
              <CartItem
                title={title}
                qty={qty}
                id={id}
                price={price}
                key={idx}
                cart={cart}
                addToQty={addToQty}
                subtractFromQty={subtractFromQty}
                removeFromCart={removeFromCart}
              />
            );
          })}
        {cart.length > 0 && <p>Total: {total}</p>}
        {cart.length > 0 && <p>Items in cart: {cart.length}</p>}
      </Card>
    </StyledCartContainer>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  total: state.cart.total,
});

export default connect(mapStateToProps, {
  addToQty,
  subtractFromQty,
  removeFromCart,
})(CartContainer);
