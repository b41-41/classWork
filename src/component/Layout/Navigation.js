import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { authService } from 'fbase';
import { LoginInfoForm } from 'component';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentMenu } from 'redux/slices/menu';

const Navigation = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const locationState = history.location.state.menu;

    const currMenuState = useSelector(state => state.menu);
    const currMenu = currMenuState.currMenu;

    // 첫 로딩 때 메뉴 상태 업데이트
    const firstMenu = () => {
        dispatch(updateCurrentMenu(locationState));
    };
    useEffect(firstMenu, []);

    // 로그아웃 function
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    //메뉴 색깔 초기화
    const menuColorReset = () => {
        document.querySelector("#MYCLASSES").style.color = "#cac9cd";
        document.querySelector("#HOMEWORK").style.color = "#cac9cd";
        document.querySelector("#STUDY").style.color = "#cac9cd";
        document.querySelector("#QUESTION").style.color = "#cac9cd";
        document.querySelector("#NOTICE").style.color = "#cac9cd";
    }

    // 메뉴 강조 (스타일)
    useEffect(() => {
        menuColorReset();
        document.querySelector(`#${currMenu}`).style.color = "#3f3e3e";
    }, [currMenu])

    const moveRoute = (menu) => {
        dispatch(updateCurrentMenu(menu));

        switch (menu) {
            case `MYCLASSES`:
                history.push({
                    pathname: "/",
                    state: { menu }
                });
                break;
            case `HOMEWORK`:
                history.push({
                    pathname: "/Homework",
                    state: { menu }
                });
                break;
            case `STUDY`:
                history.push({
                    pathname: "/Study",
                    state: { menu }
                });
                break;
            case 'QUESTION':
                history.push({
                    pathname: "/Question",
                    state: { menu }
                });
                break;
            case `NOTICE`:
                history.push({
                    pathname: "/Notice",
                    state: { menu }
                });
                break;
            default:
                break;
        }
    };
    return (
        <>
            <div className="navBar">
                <LoginInfoForm />
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

export default Navigation;