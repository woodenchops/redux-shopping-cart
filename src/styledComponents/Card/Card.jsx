import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: 2rem 0;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.29);
  padding: 1rem;
  border-radius: 3px;
`;

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
