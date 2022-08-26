import React from "react";
import svg from "../assets/icons/svg";

const Icon = ({ type }) => {
  console.log(type);
  const IconSvg = svg.get(type);
  return <IconSvg />;
};

export default Icon;
