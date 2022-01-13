import React from "react";

import styled from "styled-components";
import Card from "../../styledComponents/Card/Card";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { updateQty } from "../../actions/cartActions";

const StyledCartContainer = styled.aside`
  flex-basis: 400px;
  margin-left: 1rem;
`;

const CartContainer = ({ cart, updateQty }) => {
  const calcTotal = cart.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <StyledCartContainer>
      <Card>
        <h4>Cart</h4>
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
                updateQty={updateQty}
              />
            );
          })}
        {cart.length > 0 && <p>Total: {calcTotal}</p>}
      </Card>
    </StyledCartContainer>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { updateQty })(CartContainer);
