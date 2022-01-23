import React from "react";
import styled from "styled-components";

const StyledActionButton = styled.button`
  border-radius: ${({ icon }) => (icon ? "50%" : "30px")};
  color: ${({ icon }) => (icon ? "navy" : "#fff")};
  background-color: ${({ icon }) => (icon ? "#fff" : "navy")};
  border: ${({ icon }) => (icon ? "1px solid navy" : "none")};
  padding: 5px 10px;
  margin: 0 2.5px;
  &:hover {
    cursor: pointer;
  }
`;

const ActionButton = ({ children, onClick, icon }) => {
  return (
    <StyledActionButton icon={icon} onClick={onClick}>
      {children}
    </StyledActionButton>
  );
};

export default ActionButton;
