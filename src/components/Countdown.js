import styled from "styled-components";
import { COLOR } from "./theme";

const StyledCountdown = styled.p`
  color: ${COLOR.ORANGE};

  &.jumped {
    color: ${COLOR.RED};
  }
`;

export const Countdown = ({ minutes, seconds, jumped }) => {
  return (
    <>
      <StyledCountdown className={jumped && "jumped"}>
        {minutes !== -1 && minutes + "m"} {seconds}s
      </StyledCountdown>
    </>
  );
};
