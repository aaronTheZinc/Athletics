import React, { useEffect } from "react"
import { Nav } from "../nav"
import { EventsList } from "../EventsList"
import "./index.css"
import { HomePageProps, SportEvent } from "../../interfaces"


export const Home = ({ events }: HomePageProps): JSX.Element => {

    useEffect(() => {
        console.log(events)
    })
    return (
        <div className="w-screen h-screen">
            <Nav />
            <div className=" sm:block lg:flex w-screen h-screen">
                <div className="flex absolute">
                    <div style={{ width: "3pc" }} className="vl"></div>
                    <div style={{ width: "3pc" }} className="vl"></div>
                </div>
                <div className="flex w-2/3 transform motion-safe:hover:scale-110 ...">
                    <label className="home-hero-header">Renaissance Athletics</label>
                </div>
                <div className="w-1/3">
                    <EventsList events={events as unknown as SportEvent[]}/>
                </div>
            </div>
        </div>

    )
}