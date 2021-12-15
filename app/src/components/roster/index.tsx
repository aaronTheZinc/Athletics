import React, { useEffect, useRef } from "react";
import { Athlete } from "../../interfaces";
import VanillaTilt from "vanilla-tilt";
import "./index.css";
interface RosterProps {
  sport: string;
  athletes: Athlete[];
}

export default function Roster({ sport, athletes }: RosterProps) {
  const options = {
    scale: 1.01,
    speed: 1000,
    max: 10,
  };
  const containerRef = useRef();
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  useEffect(() => {
    VanillaTilt.init(containerRef.current, options);
  }, []);
  return (
    <div ref={containerRef} className="roster-container">
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold">{capitalize(sport)}</h2>
      </div>
      <div className="p-8" style={{ overflowY: "scroll" }}>
        <div className="overflow-y-scroll">
          {athletes?.map(({ firstName, lastName, position, jerseyNumber }) => (
            <div className="bg-black mt-10 h-16 rounded-xl text-white p-5 overflow-y-scroll">
              <section className="flex  flex-row-reverse ...">
                <div className=" w-11 ml-20 rounded-2xl text-center text-[#FFA500]">
                  <label className="text-orange ">{jerseyNumber}</label>
                </div>
                <section>
                  <div>
                    <label className="text-center font-bold">{`${firstName} ${lastName}`}</label>
                  </div>
                  <label>{position}</label>
                </section>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
