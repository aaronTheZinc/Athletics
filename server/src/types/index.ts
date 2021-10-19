export enum Tables {
    EVENTS="Events"
    
}

export interface AirtableQuery {
    table: Tables,
    limit: number
    fields: string[]
}

export interface Event {
    EventName: string
}