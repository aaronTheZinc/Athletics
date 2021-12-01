import React, { useContext, useEffect, useRef, useState } from "react";
import { loadFootballPage, loadSportData } from "../api";
import Roster from "../components/roster";
import { FootballPageProps, Sport, SportSchduleTableRow } from "../interfaces";
import { FootballBackground } from "../assets/images";
import { AppContext } from "../hooks";
import { sportCodeToName } from "../utils";
import { ScheduleTable } from "../components/table";
import { SportTypeSwitch } from "../components/Switch";
import VanillaTilt from "vanilla-tilt";

const columns = [
  {
    title: "Event",
    dataIndex: "title",
    key: "event",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Day",
    dataIndex: "date",
    key: "day",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
];

const handleSportTypeChange = (
  sport: string,
  setHeaderRef: (s: string) => void
) => {
  const title = sportCodeToName(sport);
  setHeaderRef(title);
};

export const Football = (): JSX.Element => {
  const { sport } = useContext(AppContext);
  const [content, setContent] = useState<Sport>();
  const [tableContent, setTableContent] = useState<SportSchduleTableRow[]>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [sportName, setSportName] = useState<string>("");
  const [sportGender, setSportGender] = useState<string>();
  const tabeleRef = useRef();
  const sportTypeRef = useRef();

  useEffect(() => {
    VanillaTilt.init(tabeleRef.current, options);
    VanillaTilt.init(sportTypeRef.current, options);
  }, []);

  const options = {
    scale: 1.01,
    speed: 1000,
    max: 10,
  };

  useEffect(() => {
    (async () => {
      const data = await loadSportData(sport);
      setContent(data);
    })();
    console.log(sport);
    document.title = sport;
  }, [sport]);

  useEffect(() => {
    if (content) {
      const tableContent: SportSchduleTableRow[] = [];
      content.schedule.forEach((event) => {
        const row = {
          key: event.title,
          title: event.title,
          date: event.day,
          time: event.time,
          location: event.location,
        } as SportSchduleTableRow;
        tableContent.push(row);
      });

      setTableContent(tableContent);
    }
  }, [content]);

  useEffect(() => {
    setSportName(sportCodeToName(sport));
  }, [sport]);

  return (
    <div ref={tabeleRef}>
      {content ? (
        <div style={{}} className="md:flex">
          <div className="w-2/3">
            <div className="flex p-24 align-middle cursor-pointer">
              <div>
                <label className="text-3xl font-extrabold text-gold ">
                  {content.wins}
                </label>
                <div>
                  <label className="text-white font-extrabold">Wins</label>
                </div>
              </div>
              <div className=" ml-8">
                <label className="text-3xl text-white font-extrabold ">
                  {content.losses}
                </label>
                <div>
                  <label className="text-white font-extrabold">Losses</label>
                </div>
                <div className="ml-48 items-center" ref={sportTypeRef}>
                  <SportTypeSwitch
                    initialValue={""}
                    options={["Boys", "Girls"]}
                    setValue={(v) => setSportGender(v)}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className=" pl-16 pr-16   opacity-95s ">
                <ScheduleTable columns={columns} data={tableContent} />
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <Roster sport={sportName} athletes={content.roster} />
          </div>
        </div>
      ) : (
        <label>loading...</label>
      )}
    </div>
  );
};
