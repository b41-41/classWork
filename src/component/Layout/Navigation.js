import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { authService } from 'fbase';
// import { NavBar } from './Style';
import listPNG from '../../img/list.png';
// import '../css/style.css';


const Navigation = () => {
    // 메뉴 onClick 이벤트
    const [navCurrMenu, setNavCurrMenu] = useState(`MYCLASSES`);

    // 로딩되면 첫 번째 메뉴
    const firstMenu = () => {
        document.querySelector(`#${navCurrMenu}`).style.color = "#3f3e3e";
    };
    useEffect(firstMenu, []);

    // 로그아웃 function
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    // // 모바일 메뉴 열기, 닫기 스크립트
    // const mobileMenuOpen = () => {
    //     if (navBar) {
    //         document.querySelector('.navBar').style.display = 'none';
    //         setNavBar(false);
    //     } else {
    //         document.querySelector('.navBar').style.display = 'block';
    //         setNavBar(true);
    //     }
    // };

    // // 브라우저 resize할 때, 메뉴 open, close
    // const handleMobileMenu = () => {
    //     if (window.innerWidth <= 800) {
    //         document.querySelector('.navBar').style.display = 'none';
    //         setNavBar(false);
    //     } else {
    //         document.querySelector('.navBar').style.display = 'block';
    //         setNavBar(true);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('resize', handleMobileMenu);
    //     document.querySelector('.ulMenu').addEventListener('click', handleMobileMenu);
    //     return () => {
    //         window.removeEventListener('resize', handleMobileMenu);
    //     }

    // }, []);


    const moveRoute = (menu) => {
        const menuColorReset = () => {
            document.querySelector("#MYCLASSES").style.color = "#cac9cd";
            document.querySelector("#HOMEWORK").style.color = "#cac9cd";
            document.querySelector("#STUDY").style.color = "#cac9cd";
            document.querySelector("#QUESTION").style.color = "#cac9cd";
            document.querySelector("#NOTICE").style.color = "#cac9cd";
        }

        const currentMenuColorChange = () => {
            document.querySelector(`#${menu}`).style.color = "#3f3e3e";
        }

        menuColorReset();
        currentMenuColorChange();

        switch (menu) {
            case `MYCLASSES`:
                setNavCurrMenu(menu);
                history.push({
                    pathname: "/",
                    state: { navCurrMenu: navCurrMenu }
                });
                break;
            case `HOMEWORK`:
                setNavCurrMenu(menu);
                history.push({
                    pathname: "/Homework",
                    state: { navCurrMenu: navCurrMenu }
                });
                break;
            case `STUDY`:
                setNavCurrMenu(menu);
                history.push({
                    pathname: "/Study",
                    state: { navCurrMenu: navCurrMenu }
                });
                break;
            case `QUESTION`:
                setNavCurrMenu(menu);
                history.push({
                    pathname: "/Question",
                    state: { navCurrMenu: navCurrMenu }
                });
                break;
            case `NOTICE`:
                setNavCurrMenu(menu);
                history.push({
                    pathname: "/Notice",
                    state: { navCurrMenu: navCurrMenu }
                });
                break;
            default:
                break;
        }

    };
    return (
        <>
            {/* <button type="button" className="menuBTN" onClick={mobileMenuOpen}>
                <span className="icon">
                    <img width="20px" src={listPNG} alt="notification" />
                </span>
            </button> */}

            <div className="navBar">
                <div className="userInfo">
                    <span className="userInfo_name">{authService.currentUser.displayName} 님</span><br />
                    <span className="userInfo_info">{authService.currentUser.email}</span>
                </div>
                <div className="signOut" onClick={onLogOutClick}>SIGN OUT</div>
                <div className="menuForm">
                    <ul className="ulMenu">
                        <div className="menu" id="MYCLASSES">
                            <li onClick={() => { moveRoute('MYCLASSES') }}>MY CLASSES</li>
                        </div>
                        <div className="menu" id="HOMEWORK">
                            <li onClick={() => { moveRoute('HOMEWORK') }}>HOMEWORK</li>
                        </div>
                        <div className="menu" id="STUDY">
                            <li onClick={() => { moveRoute('STUDY') }}>STUDY</li>
                        </div>
                        <div className="menu" id="QUESTION">
                            <li onClick={() => { moveRoute('QUESTION') }}>QUESTION</li>
                        </div>
                        <div className="menu" id="NOTICE">
                            <li onClick={() => { moveRoute('NOTICE') }}>NOTICE</li>
                        </div>
                    </ul>
                </div>
                {/* </NavBar> */}
            </div >
        </>



    );
};

export default Navigation;