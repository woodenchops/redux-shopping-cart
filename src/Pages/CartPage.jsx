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
    <main>
      <h1>Shopping cart</h1>
      <StyledLayout>
        <ProductContainer />
        <CartContainer />
      </StyledLayout>
    </main>
  );
};

export default CartPage;
