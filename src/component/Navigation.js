import React from "react";
import { Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <span class="logo">
                <span class="logoWork">Class</span>
                Work
            </span>
            <div class="className">
                한국어센터 1급 2반
            </div>
            <div class="navBar">
                <div class="userInfo">
                    <span class="userInfo_name">User Name</span><br />
                    <span class="userInfo_info">User Info</span>
                </div>
                <div class="menuForm">
                    <div class="menu_open">
                        MY CLASSES
                    </div>
                    <div class="menu">
                        HOMEWORK
                    </div>
                    <div class="menu">
                        STUDY
                    </div>
                    <div class="menu">
                        QUESTION
                    </div>
                    <div class="menu">
                        NOTICE
                    </div>
                </div>
            </div>
        </>



    );
};

export default Layout;