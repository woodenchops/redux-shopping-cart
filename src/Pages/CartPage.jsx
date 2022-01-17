import React from "react";
import CartContainer from "../components/CartContainer/CartContainer";
import ProductContainer from "../components/ProductContainer/ProductContainer";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CartPage = () => {
  return (
    <StyledLayout>
      <ProductContainer />
      <CartContainer />
    </StyledLayout>
  );
};

export default CartPage;
