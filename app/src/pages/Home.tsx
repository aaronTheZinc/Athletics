import React, { useEffect, useState } from "react"
import { loadHomePage } from "../api"
import { Home as HomeComponent } from "../components"
import { HomePageProps } from "../interfaces"


export const Home = (): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState<boolean>()
    const [content, setContent] = useState<HomePageProps | undefined>()
    useEffect(() => {
        (async () => {
            const r = await loadHomePage()
            setContent(r)
        })();

    }, [])
    

    useEffect(() => {
        console.log(content)
        content ? setIsLoaded(true) : setIsLoaded(false);

    }, [content])

    return (
        isLoaded?
        <HomeComponent events={content.events} />:(
            <label>Loading</label>
        )
    
    )
}