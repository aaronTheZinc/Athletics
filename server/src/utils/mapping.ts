import { Tables } from "../types";

// Map Sport To Roster Enum
//Defaults to Basketball Roster when invalid sport is queried.
export const MapSport = (sport: string): Tables => {
  switch (sport) {
    case "basketball":
      return Tables.BasketballRoster;
    case "football":
      return Tables.FootballRoster;

    default:
      return Tables.BasketballRoster;
  }
};
export const MapSportSchedule = (sport: string): Tables => {
  switch (sport) {
    case "basketball":
      return Tables.BasketBallSchedule;
    case "football":
      return Tables.FootballSchedule;

    default:
      return Tables.BasketBallSchedule;
  }
};
