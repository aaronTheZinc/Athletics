import React, { useEffect } from "react"
import { Athlete } from "../../interfaces"
import './index.css'
interface RosterProps {
    sport: string
    athletes: Athlete[]
}

export default function Roster({ sport, athletes }: RosterProps) {
    return (
        <div className="roster-container">
            <div className="p-8 text-center">
            <h2 className="text-3xl font-bold">{sport}</h2>
            </div>
            <div className="p-8">
                {
                    athletes?.map(({ firstName, lastName, position }) => (
                        <div>
                            <section>
                                <label>{`${firstName} ${lastName}`}</label>
                                </section>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}