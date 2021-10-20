export enum Tables {
    EVENTS="Events",
    BasketballRoster="Roster",
    FootballRoster="Football"

    
}

export interface AirtableQuery {
    table: Tables,
    limit: number
    fields: string[]
}

export interface Event {
    EventName: string
}
export interface Roster {
    firstName: string
    lastName: string
    sport: string
}