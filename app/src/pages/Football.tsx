import React, { useEffect, useState } from "react"
import { loadFootballPage } from "../api"
import Roster from "../components/roster"
import { FootballPageProps } from "../interfaces"

export const Football = (): JSX.Element => {

    const [content, setContent] = useState<any>()
    useEffect(() => {
        (async() => {
            const c = await loadFootballPage()
                setContent(c)
        })()
    }, [])

    useEffect(() => {
        if(content) {
            console.log(content)
        }
    }, [content])
    return (
        <div>
            <Roster sport="Football" athletes={content} />
        </div>
    )
}