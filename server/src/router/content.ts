import { Router, Request, Response } from "express"
import { Query } from "../airtable"
import { Tables, Event } from "../types"

export const router = Router()

router.get("/home", (req: Request, res: Response) => {
    Query<Event>({
        table: Tables.EVENTS,
        limit: 200,
        fields: ["Event Name", "Time"]
    }).then((r => res.send(r)))
    .catch((e) => console.log("ERRRR"))

})
