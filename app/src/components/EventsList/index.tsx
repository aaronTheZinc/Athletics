import React from "react"

interface Event {
    time: string
    team: string
    opponent: string
    sport: string
    imageUri: string
}
interface EventListProps {
    events: Event[]
}


const EventCard = ({ event }: any): JSX.Element => {
    const { time, team, opponent, sport, imageUri }: Event = event
    return (
        <div>

        </div>
    )
}

export const EventsList = ({ events }: EventListProps): JSX.Element => {
    return (
        <div className="bg-black">
            {
                events.map((e, i) => (
                    <EventCard key={i} event={e} />
                ))
            }
        </div>
    )
}