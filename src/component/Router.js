import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Login from 'component/Login';
import Layout from 'component/Layout';


const AppRouter = () => {
    //redux
    const userState = useSelector(state => state.userInfo);
    const isLogin = userState.isLogin;

    // 모바일 메뉴 열기, 닫기 스크립트
    const [navBar, setNavBar] = useState(false);
    const mobileMenuOpen = () => {
        if (navBar) {
            document.querySelector('.navBar').style.display = 'none';
            setNavBar(false);
        } else {
            document.querySelector('.navBar').style.display = 'block';
            setNavBar(true);
        }
    };

    // 브라우저 resize할 때, 메뉴 open, close
    const handleMobileMenu = () => {
        if (window.innerWidth <= 800) {
            document.querySelector('.navBar').style.display = 'none';
            setNavBar(false);
        } else {
            document.querySelector('.navBar').style.display = 'block';
            setNavBar(true);
        }
    };

    useEffect(() => {
        if (isLogin) {
            window.addEventListener('resize', handleMobileMenu);
            document.querySelector('.ulMenu').addEventListener('click', handleMobileMenu);
            return () => {
                window.removeEventListener('resize', handleMobileMenu);
            }
        }
    }, []);

    return (
        <BrowserRouter basename="/">
            <Switch>
                {isLogin ? <Layout /> : <Route exact="exact" path="/"><Login /></Route>}
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;