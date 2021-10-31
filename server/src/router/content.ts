import { Router, Request, Response, request } from "express"
import { Query } from "../airtable"
import { Tables, Event, Roster } from "../types"
import { MapSport } from "../utils"
export const router = Router()

//fetch content for home page
router.get("/home", (req: Request, res: Response) => {
    Query<Event>({
        table: Tables.EVENTS,
        limit: 200,
        fields: ["Event Name", "Time", "Description"]
    }).then((r => res.json(r)))
        .catch((e) => console.log(e))

})

// fetch roster to queried sport
router.get("/roster", ({ query }: Request, res: Response) => {
    const { sport } = query
    if (sport) {
        const table = MapSport(sport.toString())
        Query<Roster>(
            {
                table: table!,
                limit: 200,
                fields: ["First Name", "Last Name", "Sport"]
            }
        ).then((r) => res.json(r))
            .catch((e) => res.status(400).send(e))
    } else {
        res.send("Query Failed. Not Sport Provided.")
    }

})
// Page content 
router.get("/football", (req: Request, res: Response) => {
    con
})