import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import styled from "styled-components";

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

const ProductContainer = () => {
  return (
    <StyledProductContainer>
      {productList.length > 0 &&
        productList.map(({ title, price, id }, idx) => (
          <ProductItem title={title} id={id} price={price} key={idx} />
        ))}
    </StyledProductContainer>
  );
};

export default ProductContainer;
