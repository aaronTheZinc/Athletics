export interface Athlete {
    firstName: string
    lastName: string
    grade: string
    sport: string
    position: string
}

export interface SportEvent {
    eventName: string
    time: string
    team: string
    description: string
    opponent: string
    sport: string
}

export interface Event<T> {
    name: string
    time: string
    meta: T
}
export interface HomePageProps {
    events: Event<SportEvent>[]
    status?: number
}

export interface FootballPageProps {
    roster: Athlete[]
    news: any[]
}