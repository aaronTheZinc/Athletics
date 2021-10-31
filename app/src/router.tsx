import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Home } from "./pages"

interface RouteType {
    path: string
    component: () => JSX.Element
}
const routes: RouteType[] = [
    {
        path: "/",
        component: Home
    }
]

// Returns all App Routes
export default function Routes(): JSX.Element {

    return (
        <Router>
            {
                routes.map(({ path, component }) => <Route path={path} component={component} />)
            }
        </Router>
    )
}
