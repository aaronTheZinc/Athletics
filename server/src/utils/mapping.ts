import { Tables } from "../types";

// Map Sport To Roster Enum
//Defaults to Basketball Roster when invalid sport is queried.
export const MapSport = (sport: string): Tables => {
  switch (sport) {
    case "b-basketball":
      return Tables.BoysBasketballRoster;
    case "football":
      return Tables.FootballRoster;

    default:
      return Tables.BoysBasketballRoster;
  }
};
export const MapSportSchedule = (sport: string): Tables => {
  switch (sport) {
    case "b-basketball":
      return Tables.BoysBasketBallSchedule;
    case "b-football":
      return Tables.FootballSchedule;

    default:
      return Tables.BoysBasketBallSchedule;
  }
};
