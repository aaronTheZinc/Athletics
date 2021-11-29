import React, { useContext, useEffect, useRef, useState } from "react"
import { loadFootballPage, loadSportData } from "../api"
import Roster from "../components/roster"
import { FootballPageProps, Sport, SportSchduleTableRow } from "../interfaces"
import { FootballBackground } from "../assets/images"
import { AppContext } from "../hooks"
import { ScheduleTable } from "../components/table"
import VanillaTilt  from "vanilla-tilt"

const columns = [
    {
        title: "Event",
        dataIndex: "title",
        key: "event"
    },
    {
        title: "Location",
        dataIndex: "location",
        key: "location"
    },
    {
        title: "Day",
        dataIndex: "date",
        key: "day"
    },
    {
        title: "Time",
        dataIndex: "time",
        key: "time"
    },
]

export const Football = (): JSX.Element => {
    const { sport } = useContext(AppContext)
    const [content, setContent] = useState<Sport>()
    const [tableContent, setTableContent] = useState<SportSchduleTableRow[]>()
    const tabeleRef = useRef()

    const options = {
        scale: 1.01,
        speed: 1000,
        max: 10
      };

    useEffect(() => {
        (async() => {
            const data = await loadSportData(sport)
            setContent(data)
        })();
        console.log(sport)
        document.title = sport
    },[sport])

    useEffect(() => {
        VanillaTilt.init(tabeleRef.current,options )
    }, [])
    
    useEffect(() => {
        if(content) {
            const tableContent: SportSchduleTableRow[] = [];
                content.schedule.forEach((event => {
                    const row = {
                        key: event.title,
                        title: event.title,
                        date: event.day,
                        time: event.time,
                        location: event.location
                        
                    } as SportSchduleTableRow
                    tableContent.push(row)
                }));

                setTableContent(tableContent)
        }
    }, [content])


    return (
        <div>
            { content? (
            <div style={{}} className="md:flex">
                <div className="w-2/3">
                    <div>
                        <label className="text-3xl text-gold ">{content.wins}</label>
                        <label className="text-3xl text-white ">{content.losses}</label>
                        </div>
                    <div ref={tabeleRef} className=" p-16 mt-40 opacity-95s ">
                    <ScheduleTable columns={columns} data={tableContent} />
                    </div>
                </div>
              
                <div className="lg:w-1/3">
                 <Roster sport={sport} athletes={content.roster} />
                </div>
            </div>): <label>loading...</label>
}
        </div>
    )
}