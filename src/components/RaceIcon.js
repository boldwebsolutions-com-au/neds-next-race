import { RACE_TYPES } from "../utils/constants";
import { ReactComponent as Horse } from "../assets/icons/horse.svg";
import { ReactComponent as Greyhound } from "../assets/icons/greyhound.svg";
import { ReactComponent as Harness } from "../assets/icons/harness.svg";

export const RaceIcon = ({ type }) => {
  const iconType = RACE_TYPES[type];

  switch (iconType.icon) {
    case "horse":
      return <Horse />;
      break;
    case "greyhound":
      return <Greyhound />;
      break;
    case "harness":
      return <Harness />;
      break;
    default:
  }
  return iconType.icon;
};
