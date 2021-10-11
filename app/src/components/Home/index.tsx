import React from "react"
import { Nav } from "../nav/index."
import "./index.css"
export const Home = (): JSX.Element => {
    return (
        <div>
            <Nav />
            <div className="flex">
                <div className="flex">
                    <div style={{ width: "3pc" }} className="vl"></div>
                    <div style={{ width: "3pc" }} className="vl"></div>
                </div>
                <div>
                    <label className="home-hero-header">Renaissance Athletics</label>
                </div>
                <div>

                </div>
            </div>
        </div>

    )
}