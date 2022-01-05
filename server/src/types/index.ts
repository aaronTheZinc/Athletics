export enum Tables {
  EVENTS = "Events",
  BoysBasketballRoster = "Boys Basketball Roster",
  LadysBasketball = "Lady Basketball Roster",
  FootballRoster = "Football Roster",
  VarsityLadiesBasketBall = "V-Ladys Basketball",
  VarsityBoysBasketball = "V-Boys Basketball",
  VarsityBoysBasketballSchedule = "Boys Varisity Basketball Schedule",
  BoysBasketBallSchedule = "V-Basketball Schedule",
  JVFootballSchedule = "JV Football Schedule",
  JVGirlsBasketball = "JV Girls Basketball",
  FootballSchedule = "Football Schedule",
  JVBasketballGirlsSchedule = "JV Girls Basketball Schedule",
  JVBoysBasketball = "JV Boys Basketball",
  JVBoysBasketballSchedule = "Boys JV basketball Schedule",
  VarsityLadiesBasketBallSchedule = "Ladies Varsity Schedule",
  VarsityFootball = "Varsity Football",
  VarsityFootballSchedule = "Varsity Football Schedule",
  JVFootball = "JV Football",
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
