import { Tables } from "../types";

// Map Sport To Roster Enum
//Defaults to Basketball Roster when invalid sport is queried.
export const MapSport = (sport: string): Tables | undefined => {
    switch(sport) {
        case "basketball":
            return Tables.BasketballRoster
        case "football":
            return Tables.FootballRoster
            
       default:
           return Tables.BasketballRoster      
    }
}