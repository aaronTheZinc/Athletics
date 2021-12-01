export enum Tables {
  EVENTS = "Events",
  BoysBasketballRoster = "Boys Basketball Roster",
  LadysBasketball = "Lady Basketball Roster",
  FootballRoster = "Football Roster",

  BoysBasketBallSchedule = "Basketball Schedule",
  FootballSchedule = "Football Schedule",
  Stats = "Stats",
}

export interface AirtableQuery {
  table: Tables | string;
  limit: number;
  fields: string[];
}

export interface Event {
  EventName: string;
}
export interface Athlete {
  firstName: string;
  lastName: string;
  sport: string;
}
export interface Roster {
  players: Athlete[];
}
