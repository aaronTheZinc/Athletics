import React from "react"
import { Nav } from "../nav"
import { EventsList,Event } from "../EventsList"
import "./index.css"

const events: Event[] = [
    {
        time: "Wednesday, October 4th 8:00 am",
        team: "Cass Tech",
        sport: "Basketball",
        imageUri: "",
        opponent: "Renaissance"
    },
    {
        time: "Wednesday, October 4th 8:00 am",
        team: "Cass Tech",
        sport: "Basketball",
        imageUri: "",
        opponent: "Renaissance"
    },

]
export const Home = (): JSX.Element => {
    return (
        <div className="w-screen h-screen">
            <Nav />
            <div className="flex w-screen h-screen">
                <div className="flex absolute">
                    <div style={{ width: "3pc" }} className="vl"></div>
                    <div style={{ width: "3pc" }} className="vl"></div>
                </div>
                <div className="flex w-2/3 transform motion-safe:hover:scale-110 ...">
                    <label className="home-hero-header">Renaissance Athletics</label>
                </div>
                <div className="w-1/3">
                    <EventsList events={events}/>
                </div>
            </div>
        </div>

    )
}