import React from "react"
import { SportEvent } from "../../interfaces"
import { Card } from "../Card"


export interface EventProps {
   event: SportEvent
}
interface EventListProps {
    events: SportEvent[]
}


const EventCard = ({ event: event }: EventProps ): JSX.Element => {

    const { eventName, description, time } = event

    return (
       <Card backgroundColor={"#800020"} hasShadow={true}>
          <div >
             <div className="flex text-white">
                 <section>
                <label className="text-2xl">{eventName}</label>
                </section>
                <section>
                    <label className=" text-gold pl-5">{time}</label>
                </section>

              </div> 
              <div className="p-4 text-white font-thin">
                  <label>{ description }</label>
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
                    <div className="group mt-6 transform motion-safe:hover:scale-110 ...">
                    <EventCard key={i} event={e}  />
                    </div>
                ))
            }
            </div>
        </div>
    )
}