import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";

import { Football, Home } from "./pages"

interface RouteType {
    path: string
    component: () => JSX.Element
}
const routes: RouteType[] = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/fb",
        component: Football
    }
]

// Returns all App Routes
export default function Routes(): JSX.Element {

    return (
        <Router>
            {
                routes.map(({ path, component }) => <Route path={path} component={component}  exact={true} />)
            }
        </Router>
    )
}
