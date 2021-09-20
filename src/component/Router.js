import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

    // 현재 메뉴 체크
    const [currMenu, setCurrMenu] = useState(`MY CLASSES`)

    return (
        <Router>
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
                                    <Navigation currMenu={currMenu} setCurrMenu={setCurrMenu} />
                                </nav>
                                < Route currMenu={currMenu} setCurrMenu={setCurrMenu} exact path="/" >
                                    <Home />
                                </Route>
                                < Route currMenu={currMenu} setCurrMenu={setCurrMenu} exact path="/Homework" >
                                    <Homework />
                                </Route>
                                < Route currMenu={currMenu} setCurrMenu={setCurrMenu} exact path="/Study" >
                                    <Study />
                                </Route>
                                < Route currMenu={currMenu} setCurrMenu={setCurrMenu} exact path="/Question" >
                                    <Question />
                                </Route>
                                < Route currMenu={currMenu} setCurrMenu={setCurrMenu} exact path="/Notice" >
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
        </Router >
    )
}

export default AppRouter;