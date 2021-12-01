import React, { useContext } from "react";
import { Basketball, FootBall, Soccer, VolleyBall } from "../../assets/images";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../hooks";
import { sportCodeToName } from "../../utils";
interface SportNodeProps {
  link: string;
  sport: string;
}

const MapIcons = (sport: string): string => {
  switch (sport) {
    case "Football":
      return FootBall;
    case "Volleyball":
      return VolleyBall;
    case "Soccer":
      return Soccer;
    case "Basketball":
      return Basketball;
  }
};

export default function SportNode({ sport, link }: SportNodeProps) {
  const { setSport } = useContext(AppContext);
  const icon = MapIcons(sport);
  const history = useHistory();
  return (
    <div
      onClick={() => setSport(sport)}
      className="flex m-8 border-white border-1"
    >
      <img style={{ width: "2pc", height: "2pc" }} src={icon} />
      <label className="text-white ml-8 mt-2">{sport}</label>
    </div>
  );
}
