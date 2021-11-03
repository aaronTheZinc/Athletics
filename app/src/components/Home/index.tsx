import React, { useEffect } from "react"
import { Nav } from "../nav"
import { EventsList } from "../EventsList"
import { RHSAthletics } from "../../assets/images"
import "./index.css"
import { HomePageProps, SportEvent } from "../../interfaces"


export const Home = ({ events }: HomePageProps): JSX.Element => {

    useEffect(() => {
        console.log(events)
    }, [])
    useEffect(() => {
        document.title = "Renaissance Athletics"
      }, [])
    return (
        <div style={{backgroundImage: `url(${RHSAthletics})`, backgroundRepeat: "no-repeat", backgroundSize: '25vw 35vw', backgroundPosition: "300px 90px"}} className="w-screen h-screen">
            <div className=" sm:block lg:flex w-screen h-screen">
                <div className="flex absolute">
                </div>
                <div className="flex w-2/3 transform motion-safe:hover:scale-110 ...">
                    {/* <label className="home-hero-header">Renaissance Athletics</label> */}
                </div>
                <div className="w-1/3">
                    <EventsList events={events as unknown as SportEvent[]}/>
                </div>
            </div>
        </div>

    )
}