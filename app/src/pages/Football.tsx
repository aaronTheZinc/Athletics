import React, { useEffect, useState } from "react"
import { loadFootballPage } from "../api"
import Roster from "../components/roster"
import { FootballPageProps } from "../interfaces"

export const Football = (): JSX.Element => {

    const [content, setContent] = useState<FootballPageProps | undefined>()
    useEffect(() => {
        (async () => {
            const c = await loadFootballPage()
            setContent(c)
        })();
    }, [])

    return (
        <div>
            <div className="flex">
                <div className="w-2/3">

                </div>
                <div className="lg:w-1/3">
                    {
                        content ? (
                            <Roster sport="Football" athletes={content.roster} />
                        ) :
                            (<label>Loading...</label>)
                    }
                </div>
            </div>
        </div>
    )
}