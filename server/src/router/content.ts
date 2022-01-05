import { Table } from "airtable";
import { Router, Request, Response, request } from "express";
import { Query } from "../airtable";
import { Tables, Event, Roster } from "../types";
import { MapSport, capitalizeFirstLetter } from "../utils";
import { findSport } from "../sports"
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
  // console.log(req.query)
  const { sport, gender, varsity } = req.query;
  console.log("v", varsity)
  const result = findSport({ sport, gender, isVarsity: (varsity === "true") });
  console.log(result)
  if (sport) {
    try {
      const table = MapSport(sport!.toString());
      const roster = await Query<Roster>({
        table: result.table,
        limit: 200,
        fields: [
          "First Name",
          "Last Name",
          "Grade",
          "Position",
          "Jersey Number",
        ],
      }).catch((e) => res.send(e));
      const schedule = await Query<any>({
        table: result.schedule,
        limit: 200,
        fields: ["Title", "Day", "Time", "Location"],
      }).catch((e) => res.send(e));
      const stats = (await Query<any>({
        table: Tables.Stats,
        limit: 200,
        fields: ["Wins", "Losses", "Sport"],
      }).catch((e) => res.send(e))) as any[];

      console.log(`sport to look for ${sport}`, stats);
      console.log(result.title)
      const { wins, losses } = stats?.filter(
        (el) => el.sport == result.title
      )[0];
      console.log("schedule ->", schedule)
      const respObj = { schedule, roster, wins, losses, title: result.title }
      // console.log(respObj)
      res.json(respObj).end();
    } catch (e) {
      console.error("an error occured...");
      console.log(e)
      res.status(500).json({
        msg: "internal server error",
      });
    }
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
