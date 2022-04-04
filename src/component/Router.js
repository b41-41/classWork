import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Login from 'component/Login';
import Layout from 'component/Layout';
import Admin from 'routes/Admin/Admin';


const AppRouter = () => {
    //redux
    const userState = useSelector(state => state.userInfo);
    const isLogin = userState.isLogin;
    const isAdmin = userState.isAdmin;
    return (
        <BrowserRouter basename="/">
            <Switch>
                {isLogin
                    ? isAdmin ? <Admin /> : <Layout />
                    : <Route exact="exact" path="/"><Login /></Route>}
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;