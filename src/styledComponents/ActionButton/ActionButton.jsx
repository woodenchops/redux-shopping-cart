import React from "react";
import styled from "styled-components";

const StyledActionButton = styled.button``;

const ActionButton = ({ children, onClick }) => {
  return <StyledActionButton onClick={onClick}>{children}</StyledActionButton>;
};

export default ActionButton;
