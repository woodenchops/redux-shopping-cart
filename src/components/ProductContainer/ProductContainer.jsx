import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  addToCart,
  addToQty,
  subtractFromQty,
} from "../../actions/cartActions";

const StyledProductContainer = styled.div`
  flex-grow: 1;
  margin-right: 1rem;
  flex-basis: 300px;
`;

const productList = [
  {
    id: 1,
    title: "Milk",
    price: 5,
  },
  {
    id: 2,
    title: "Coffee",
    price: 3,
  },
  {
    id: 3,
    title: "Bread",
    price: 10,
  },
];

const ProductContainer = ({ addToCart, cart, addToQty, subtractFromQty }) => {
  return (
    <StyledProductContainer>
      {productList.length > 0 &&
        productList.map(({ title, price, id }, idx) => (
          <ProductItem
            addToCart={addToCart}
            addToQty={addToQty}
            subtractFromQty={subtractFromQty}
            title={title}
            id={id}
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
  addToQty,
  subtractFromQty,
})(ProductContainer);
