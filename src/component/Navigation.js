import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { authService } from 'fbase';

const Layout = () => {

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

    // 메뉴 onClick 이벤트
    const [navCurrMenu, setNavCurrMenu] = useState(`MYCLASSES`)

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
            <div id="logoLink" onClick={() => { moveRoute('MYCLASSES') }}>
                <span className="logo">
                    <span className="logoWork">Class</span>
                    Work
                </span>
                <div className="className">
                    한국어센터 1급 2반
                </div>
            </div>
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
            </div >
        </>



    );
};

export default Layout;