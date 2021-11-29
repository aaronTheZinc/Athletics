export enum Tables {
  EVENTS = "Events",
  BasketballRoster = "Basketball Roster",
  FootballRoster = "Football Roster",

  BasketBallSchedule = "Basketball Schedule",
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
