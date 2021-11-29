import { Table } from "airtable";
import { Router, Request, Response, request } from "express";
import { Query } from "../airtable";
import { Tables, Event, Roster } from "../types";
import { MapSport, capitalizeFirstLetter } from "../utils";
import { MapSportSchedule } from "../utils/mapping";
export const router = Router();

//fetch content for home page
router.get("/home", (req: Request, res: Response) => {
  Query<Event>({
    table: Tables.EVENTS,
    limit: 200,
    fields: ["Event Name", "Time", "Description"],
  })
    .then((r) => res.json(r))
    .catch((e) => console.log(e));
});

// fetch roster to queried sport
router.get("/roster", ({ query }: Request, res: Response) => {
  const { sport } = query;
  if (sport) {
    const table = MapSport(sport.toString());
    Query<Roster>({
      table: table,
      limit: 200,
      fields: ["First Name", "Last Name", "Position"],
    })
      .then((r) => {
        console.log("roster response", r);
        res.send(r);
      })
      .catch((e) => res.status(400).send(e));
  } else {
    res.send("Query Failed. Not Sport Provided.");
  }
});

router.get("/sport", async (req: Request, res: Response) => {
  const { sport } = req.query;
  if (sport) {
    const table = MapSport(sport!.toString());
    const roster = await Query<Roster>({
      table: table!,
      limit: 200,
      fields: ["First Name", "Last Name", "Grade", "Position"],
    }).catch((e) => res.send(e));
    const schedule = await Query<any>({
      table: MapSportSchedule(sport.toString()),
      limit: 200,
      fields: ["Title", "Day", "Time", "Location"],
    }).catch((e) => res.send(e));
    const stats = (await Query<any>({
      table: Tables.Stats,
      limit: 200,
      fields: ["Wins", "Losses", "Sport"],
    }).catch((e) => res.send(e))) as any[];
    const { wins, losses } = stats.filter(
      (el) => el.sport == capitalizeFirstLetter(sport.toString())
    )[0];
    res.json({ schedule, roster, wins, losses });
  } else {
    res.status(503).json({ err: "must provide sport." });
  }
});

// Page content
router.get("/football", (req: Request, res: Response) => {
  // Query<Roster>({
  //     table: Tables.FootballRoster,
  //     limit: 200,
  //     fields: field
  //  }).then((r) => res.json(r))
});
