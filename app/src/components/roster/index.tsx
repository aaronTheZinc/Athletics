import React, { useEffect } from "react"
import { Athlete } from "../../interfaces"

interface RosterProps {
    sport: string
    athletes: Athlete[]
}

export default function Roster({ sport, athletes }: RosterProps) {
    useEffect(() => {
        console.log("?",athletes)
    }, [])
    return (
        <div className="h-max w-auto">
            <h2>{sport}</h2>
            <div>
                {
                    athletes?.map(({ firstName, lastName, position }) => (
                        <div>
                            { firstName}
                            { lastName }
                            </div>
                    ))
                }
            </div>
        </div>
    )
}