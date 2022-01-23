import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h2`
  margin: 0;
`;

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
