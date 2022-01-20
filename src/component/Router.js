import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Home from 'routes/Home';
import Login from 'component/Login';
import Homework from 'routes/Homework';
import Study from 'routes/Study';
import Question from 'routes/Question'
import Notice from 'routes/Notice';
import Navigation from 'component/Layout/Navigation';
import Admin from 'component/Admin';
import listPNG from '../img/list.png';
import Layout from 'component/Layout';


const AppRouter = ({ isLoggedIn }) => {

    // 모바일 메뉴 열기, 닫기 스크립트
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
        if (isLoggedIn) {
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
                {
                    isLoggedIn
                        ? <>
                            {/* <button type="button" className="menuBTN" onClick={mobileMenuOpen}>
                                <span className="icon">
                                    <img width="20px" src={listPNG} alt="notification" />
                                </span>
                            </button>
                            <div className="box">
                                <nav>
                                    <Navigation />
                                </nav>
                                <div className="main">
                                    < Route exact path="/" component={Home} />
                                    < Route path="/Homework" component={Homework} />
                                    < Route path="/Study" component={Study} />
                                    < Route path="/Question" component={Question} />
                                    < Route path="/Notice" component={Notice} />
                                    < Route path="/Admin" componenet={Admin} />
                                </div>
                            </div>
                            <div className="copyright">
                                <footer>&copy; Class Work {new Date().getFullYear()}</footer>
                            </div> */}
                            <Layout />
                        </>
                        : <Route exact="exact" path="/"><Login /></Route>
                }
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;