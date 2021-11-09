import { Response, Request } from "express"
import { Athlete, Roster } from "../types"
import { MapSport } from "../utils"
import { Query } from "../airtable"

export const getRoster = async(sport: string): Promise<Roster | undefined> => {
    if (sport) {
        const table = MapSport(sport.toString())
        const roster = await Query<Athlete>(
            {
                table: table!,
                limit: 200,
                fields: ["First Name", "Last Name", "Position"]
            }
        ).catch((e) => e);

        return { players: roster }
    }

}