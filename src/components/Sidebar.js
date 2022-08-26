import React from "react";
import styled from "styled-components";
import { BREAKPOINT, COLOR } from "./theme";
import { RACE_TYPES } from "../utils/constants";
import { useAppContext } from "../AppContext";
import { RaceIcon } from "./RaceIcon";

const StyledSidebar = styled.div`
  background: ${COLOR.WHITE};
  width: 100%;

  @media screen and (min-width: ${BREAKPOINT.SIZE_MOBILE}) {
    height: 100%;
    width: 40%;
  }
  h2 {
    padding-left: 20px;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  @media screen and (min-width: ${BREAKPOINT.SIZE_MOBILE}) {
    flex-direction: column;
  }
`;
const RaceTypeButton = styled.button`
  display: inline-block;
  background-color: initial;
  text-align: left;
  width: 25%;
  font-size: 0;
  align-items: center;
  border: 1px solid #f1f1f1;
  justify-content: space-between;
  padding: 0 20px;
  min-height: 80px;
  transition: ease-in-out background 0.5s;
  color: ${COLOR.FONT_COLOR};
  span {
    font-size: 18px;
  }
  @media screen and (min-width: ${BREAKPOINT.SIZE_MOBILE}) {
    font-size: 18px;
    width: 100%;
    display: flex;
  }

  &.active {
    border-bottom: 3px solid ${COLOR.ORANGE};
  }
  svg {
    fill: ${COLOR.DARK_GREY};
    max-width: 70px;
  }

  &:hover {
    background: ${COLOR.GREY};
  }
`;

export const Sidebar = () => {
  const { toggleRaceType, raceType } = useAppContext();

  return (
    <StyledSidebar>
      <h2>Upcoming Races</h2>
      <ButtonHolder>
        <RaceTypeButton
          className={raceType === "all" && "active"}
          onClick={() => toggleRaceType("all")}>
          {" "}
          <span>All Racing</span>
        </RaceTypeButton>
        {Object.keys(RACE_TYPES).map((type) => {
          return (
            <RaceTypeButton
              key={type}
              onClick={() => toggleRaceType(type)}
              className={raceType === type && "active"}>
              {RACE_TYPES[type].name}
              <RaceIcon type={type} />
            </RaceTypeButton>
          );
        })}
      </ButtonHolder>
    </StyledSidebar>
  );
};
