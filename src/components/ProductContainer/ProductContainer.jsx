import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQty,
} from "../../actions/cartActions";

const StyledProductContainer = styled.div`
  flex-grow: 1;
  margin-right: 1rem;
`;

const productList = [
  {
    id: 1,
    title: "Milk",
    price: 5,
    qty: 0,
  },
  {
    id: 2,
    title: "Coffee",
    price: 3,
    qty: 0,
  },
  {
    id: 3,
    title: "Bread",
    price: 10,
    qty: 0,
  },
];

const ProductContainer = ({ addToCart, removeFromCart, updateQty, cart }) => {
  return (
    <StyledProductContainer>
      {productList.length > 0 &&
        productList.map(({ title, qty, price, id }, idx) => (
          <ProductItem
            addToCart={addToCart}
            updateQty={updateQty}
            removeFromCart={removeFromCart}
            title={title}
            id={id}
            qty={qty}
            price={price}
            cart={cart}
            key={idx}
          />
        ))}
    </StyledProductContainer>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  updateQty,
})(ProductContainer);
