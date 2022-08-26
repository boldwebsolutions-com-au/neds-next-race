import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BREAKPOINT, COLOR } from "./theme";
import { useCountdownTimer } from "../hooks/useCountdownTimer";
import { Countdown } from "./Countdown";
import { RaceIcon } from "./RaceIcon";

const UpcomingRaceContainer = styled.div`
  background: ${COLOR.WHITE};
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  justify-content: space-between;
  color: ${COLOR.FONT_COLOR};
  display: flex;

  @media screen and (min-width: ${BREAKPOINT.SIZE_MOBILE}) {
    flex-wrap: wrap;
  }

  h3 {
    span {
      font-size: 14px;
      font-weight: normal;
    }
  }
  svg {
    width: 100px;
  }
`;

export const UpcomingRace = ({ raceInfo, setRefreshData }) => {
  const timeUntilJump = new Date(raceInfo.advertised_start.seconds * 1000);
  const [expired, setExpired] = useState(false);
  const [minutes, seconds] = useCountdownTimer(timeUntilJump);

  useEffect(() => {
    if (minutes <= -2) {
      setExpired(true);
      setRefreshData(true);
      return;
    }
  }, [minutes]);

  if (expired) {
    return;
  }

  return (
    <UpcomingRaceContainer className="upcoming-race">
      <h3>
        {raceInfo.meeting_name} - R{raceInfo.race_number}{" "}
        <span>
          ({raceInfo.race_form.distance}
          {raceInfo.race_form.distance_type.short_name})
        </span>
        <Countdown
          minutes={minutes}
          seconds={seconds}
          jumped={minutes + seconds < 0 && true}
        />
      </h3>
      <RaceIcon type={raceInfo.category_id} />
    </UpcomingRaceContainer>
  );
};
