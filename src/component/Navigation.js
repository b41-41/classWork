import React, { useState, useEffect } from "react";
import { Link, Router } from 'react-router-dom';
import { useHistory } from 'react-router';
import { authService } from 'fbase';

const Layout = () => {

    // 로딩되면 첫 번째 메뉴
    const firstMenu = () => {
        document.querySelector("#MYCLASSES").style.color = "#3f3e3e";
    };
    useEffect(firstMenu, []);

    // 로그아웃 function
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    // 메뉴 onClick 이벤트
    const [navCurrMenu, setNavCurrMenu] = useState(`MY CLASSES`)

    const moveRoute = (menu) => {
        const menuColorReset = () => {
            document.querySelector("#MYCLASSES").style.color = "#cac9cd";
            document.querySelector("#HOMEWORK").style.color = "#cac9cd";
            document.querySelector("#STUDY").style.color = "#cac9cd";
            document.querySelector("#QUESTION").style.color = "#cac9cd";
            document.querySelector("#NOTICE").style.color = "#cac9cd";
        }
        menuColorReset();
        switch (menu) {
            case `MY CLASSES`:
                setNavCurrMenu(menu);
                document.querySelector("#MYCLASSES").style.color = "#3f3e3e";
                history.push("/");
                break;
            case `HOMEWORK`:
                setNavCurrMenu(menu);
                document.querySelector("#HOMEWORK").style.color = "#3f3e3e";
                history.push("/Homework");
                break;
            case `STUDY`:
                setNavCurrMenu(menu);
                document.querySelector("#STUDY").style.color = "#3f3e3e";
                history.push("/Study");
                break;
            case `QUESTION`:
                setNavCurrMenu(menu);
                document.querySelector("#QUESTION").style.color = "#3f3e3e";
                history.push("/Question");
                break;
            case `NOTICE`:
                setNavCurrMenu(menu);
                document.querySelector("#NOTICE").style.color = "#3f3e3e";
                history.push("/Notice");
                break;
            default:
                break;
        }

    };
    return (
        <>
            {console.log(authService.currentUser)}
            <div id="logoLink" onClick={() => { moveRoute('MY CLASSES') }}>
                <span class="logo">
                    <span class="logoWork">Class</span>
                    Work
                </span>
                <div class="className">
                    한국어센터 1급 2반
                </div>
            </div>
            <div class="navBar">
                <div class="userInfo">
                    <span class="userInfo_name">{authService.currentUser.displayName} 님</span><br />
                    <span class="userInfo_info">{authService.currentUser.email}</span>
                </div>
                <div class="signOut" onClick={onLogOutClick}>SIGN OUT</div>
                <div class="menuForm">
                    <ul class="ulMenu">
                        <div class="menu" id="MYCLASSES">
                            <li onClick={() => { moveRoute('MY CLASSES') }}>MY CLASSES</li>
                        </div>
                        <div class="menu" id="HOMEWORK">
                            <li onClick={() => { moveRoute('HOMEWORK') }}>HOMEWORK</li>
                        </div>
                        <div class="menu" id="STUDY">
                            <li onClick={() => { moveRoute('STUDY') }}>STUDY</li>
                        </div>
                        <div class="menu" id="QUESTION">
                            <li onClick={() => { moveRoute('QUESTION') }}>QUESTION</li>
                        </div>
                        <div class="menu" id="NOTICE">
                            <li onClick={() => { moveRoute('NOTICE') }}>NOTICE</li>
                        </div>
                    </ul>
                </div>
            </div >
        </>



    );
};

export default Layout;