import React from "react";
import {
    Switch,
    BrowserRouter as Router,
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
        path: "/sports",
        component: Football
    }
]

// Returns all App Routes
export default function Routes(): JSX.Element {

    return (
        <Router >
            <Switch>
            {
                routes.map(({ path, component }) => <Route path={path} component={component}  exact={true} />)
            }
            </Switch>
        </Router>
    )
}
