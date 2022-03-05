import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Login from 'component/Login';
import Layout from 'component/Layout';


const AppRouter = () => {
    //redux
    const userState = useSelector(state => state.userInfo);
    const isLogin = userState.isLogin;
    return (
        <BrowserRouter basename="/">
            <Switch>
                {isLogin ? <Layout /> : <Route exact="exact" path="/"><Login /></Route>}
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;