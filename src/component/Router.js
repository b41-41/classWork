import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Home from 'routes/Home';
import Login from 'routes/Login';
import Homework from 'routes/Homework';
import Study from 'routes/Study';
import Question from 'routes/Question'
import Notice from 'routes/Notice';
import Navigation from 'component/Navigation';


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
            return () => {
                window.removeEventListener('resize', handleMobileMenu);
            }
        }
    }, []);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                {
                    isLoggedIn
                        ? <>
                            < div class="menuBTN" onClick={mobileMenuOpen}>
                                <span class="icon">
                                    <img width="20px" src='./img/list.png' alt="notification" />
                                </span>
                            </div>
                            <div class="box">
                                <nav>
                                    <Navigation />
                                </nav>
                                < Route exact path="/" >
                                    <Home />
                                </Route>
                                < Route exact path="/Homework" >
                                    <Homework />
                                </Route>
                                < Route exact path="/Study" >
                                    <Study />
                                </Route>
                                < Route exact path="/Question" >
                                    <Question />
                                </Route>
                                < Route exact path="/Notice" >
                                    <Notice />
                                </Route>
                            </div>
                            <div class="copyright">
                                <footer>&copy; Class Work {new Date().getFullYear()}</footer>
                            </div>
                        </>
                        : <Route exact="exact" path="/"><Login /></Route>
                }
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;