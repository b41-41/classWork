import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from 'routes/Login';
import View from 'routes/View';
import Home from 'routes/Home';

const AppRouter = ({ loggedIn }) => {
    return (
        <Router>
            <Switch>
                if(loggedIn) {
                    <><Routh exact path="/"> <Home /> </Routh> </>
                }
                <><Routh exact path="/"> <Login /> </Routh></>
            </Switch>
        </Router>
    );
};

export default AppRouter;