import { render } from "@testing-library/react";
import axios from "axios";
import { App } from "../App";

const URL = "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10";

const fetchData = async () => {
  try {
    return await axios.get(`${URL}`);
  } catch (e) {
    return [];
  }
};

jest.mock("axios");

describe("fetchData", () => {
  describe("when API call is successful", () => {
    it("should return race data", async () => {
      // given
      const mockData = {
        data: {
          race_summaries: {
            "raceId-1": {
              race_id: "raceId-1",
              race_name: "Race 5 - Claiming",
              race_number: 1,
              meeting_id: "ba83081e-13b0-4043-b2e9-c496e0496448",
              meeting_name: "NedsVille",
              category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
              advertised_start: {
                seconds: 1661475900,
              },
            },
          },
          next_to_go_ids: ["raceId-1"],
        },
      };
      axios.get.mockResolvedValueOnce(mockData);

      // when
      const result = await fetchData();
      // then
      expect(axios.get).toHaveBeenCalledWith(`${URL}`);
      expect(result).toEqual(mockData);
    });
  });

  describe("when API call fails", () => {
    it("should return empty response", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchData();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${URL}`);
      expect(result).toEqual([]);
    });
  });
});
