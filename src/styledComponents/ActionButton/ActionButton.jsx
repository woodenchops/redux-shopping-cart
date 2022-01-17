import React from "react";
import styled from "styled-components";

const StyledActionButton = styled.button`
  border-radius: 30px;
  color: #fff;
  background-color: navy;
  border: none;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const ActionButton = ({ children, onClick }) => {
  return <StyledActionButton onClick={onClick}>{children}</StyledActionButton>;
};

export default ActionButton;
