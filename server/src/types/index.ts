export enum Tables {
    EVENTS="Events",
    BasketballRoster="Roster",
    FootballRoster="Football Roster",



    
}

export interface AirtableQuery {
    table: Tables,
    limit: number
    fields: string[]
}

export interface Event {
    EventName: string
}
export interface Athlete {
    firstName: string
    lastName: string
    sport: string
}
export interface Roster {
    players: Athlete[]
}