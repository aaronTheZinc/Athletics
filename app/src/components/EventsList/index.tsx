import React from "react"
import { Card } from "../Card"


export interface Event {
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
       <Card backgroundColor={"#800020"} hasShadow={true}>
          <div >
             <div>

              </div> 
              </div>
       </Card>
    )
}

export const EventsList = ({ events }: EventListProps): JSX.Element => {
    return (
        <div className="h-screen">
            <div className="text-center mt-6">
                <label className=" text-4xl mt-5 font-bold font-mono">Upcoming Events</label>
            </div>
            <div className=" overflow-y-scroll">
            {
                events.map((e, i) => (
                    <div className="mt-6 transform motion-safe:hover:scale-110 ...">
                    <EventCard key={i} event={e} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}