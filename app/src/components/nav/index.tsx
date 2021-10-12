import React from "react"
import SportNode from "./sport-node"
import { useHistory } from "react-router-dom"
const sports = ["Football", "Basketball", "Soccer", "Volleyball"]

export const Nav = (): JSX.Element => {
    return (
        <div style={{backgroundColor: "#800020"}} className="w-screen bg-black h-24">
            <div className="flex justify-center">
            {
                sports.map((s) => (
                    <SportNode sport={s} link={"/"} />
                ))
            }
            </div>
        </div>
    )
}