import React from "react";
import SportNode from "./sport-node";
import { useHistory } from "react-router-dom";
import { Mascot } from "../../assets/images";
const sports = ["Football", "Basketball", "Soccer", "Volleyball"];

export const Nav = (): JSX.Element => {
  return (
    <div
      style={{ backgroundColor: "#800020" }}
      className="w-screen bg-black h-24 flex justify-left"
    >
      <div className="w-20 he-20">
        <img src={Mascot} />
      </div>
      <div className="flex justify-center">
        {sports.map((s) => (
          <SportNode key={s} sport={s} link={"/"} />
        ))}
      </div>
    </div>
  );
};
