import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Notfound from "./containers/Notfound";


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            {/* Finally, catch all unmatched routes */}
            <Route>
                <Notfound />
            </Route>
        </Switch>
    );
}
