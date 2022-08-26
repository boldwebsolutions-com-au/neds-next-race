import React from "react";
import styled from "styled-components";
import { COLOR } from "./theme";
import { ReactComponent as Logo } from "../assets/logo.svg";

const StyledHeader = styled.div`
  width: 100%;
  background: ${COLOR.ORANGE};
  background: ${COLOR.ORANGE_GRADIENT};
  padding: 15px;

  svg {
    fill: ${COLOR.WHITE};
    max-width: 100px;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};
