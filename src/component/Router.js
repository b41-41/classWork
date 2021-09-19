import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from 'routes/Home';
import Login from 'routes/Login';
import Homework from 'routes/Homework';
import Navigation from 'component/Navigation';

const AppRouter = ({ isLoggedIn }) => {
    const [currMenu, setCurrMenu] = useState(<Home />)
    return (
        <Router>
            <Switch>
                {
                    isLoggedIn
                        ? <>
                            < div class="menuBTN" >
                                <span class="icon">
                                    <img width="20px" src='./img/list.png' alt="notification" />
                                </span>
                            </div>
                            <div class="box">
                                <nav>
                                    < Route exact path="/" > <Navigation />
                                    </Route>
                                </nav>
                                < Route exact path="/" > {currMenu}
                                </Route>
                            </div>
                        </>
                        : <Route exact="exact" path="/"><Login /></Route>
                }
            </Switch>
        </Router >
    )
}

export default AppRouter;