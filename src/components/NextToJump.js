import React, { useState, useMemo } from "react";
import axios from "axios";
import styled from "styled-components";
import { UpcomingRace } from "./UpcomingRace";
import { BREAKPOINT, COLOR } from "./theme";
import { useAppContext } from "../AppContext";
import LoadingSpinner from "./LoadingSpinner";

const UpcomingRaceContainer = styled.div`
  background-color: ${COLOR.DARK_GREY};
  width: 100%;
  @media screen and (min-width: ${BREAKPOINT.SIZE_MOBILE}) {
    height: 100%;
    width: 60%;
    border-radius: 10px;
  }
  h2 {
    padding-left: 20px;
    color: ${COLOR.WHITE};
  }
  /* to ensure 5 are shown at all times, instead of slicing response, return all and don't display result 5 -> 10 as some races are > 60sec past jump time */
  .upcoming-race {
    &:nth-child(n + 7) {
      display: none;
    }
  }
`;

export const NextToJump = () => {
  const [raceData, setRaceData] = useState();
  const [upcomingRaces, setUpcomingRaces] = useState();
  const [refreshData, setRefreshData] = useState(false);
  const [errorMessage, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { raceType } = useAppContext();

  useMemo(() => {
    const getRaceDetails = async () => {
      try {
        const { data } = await axios.get(
          "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10"
        );
        setRaceData(data?.data.race_summaries);
        setUpcomingRaces(data?.data?.next_to_go_ids);
        setRefreshData(false);
        setLoading(false);
      } catch (err) {
        setLoading(true);
        setError("Ooops, there seems to be an issue.");
        console.error(err);
      }
    };

    getRaceDetails();
  }, [refreshData]);

  if (loading) {
    return <LoadingSpinner message={errorMessage} />;
  }

  return (
    <UpcomingRaceContainer>
      <h2>Next To Race</h2>
      {upcomingRaces.map((race) => {
        // if raceId is set, show only that category, else show all types
        if (raceData[race].category_id === raceType || raceType === "all") {
          return (
            <UpcomingRace
              key={race}
              raceInfo={raceData[race]}
              setRefreshData={setRefreshData}
            />
          );
        }
      })}
    </UpcomingRaceContainer>
  );
};
