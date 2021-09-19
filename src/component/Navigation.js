import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Link to="/">
                <span class="logo">
                    <span class="logoWork">Class</span>
                    Work
                </span>
                <div class="className">
                    한국어센터 1급 2반
                </div>
            </Link>
            <div class="navBar">
                <div class="userInfo">
                    <span class="userInfo_name">User Name</span><br />
                    <span class="userInfo_info">User Info</span>
                </div>
                <div class="menuForm">
                    <ul class="ulMenu">
                        <div class="menu">
                            <li id="MY CLASSES"> <Link to="/">MY CLASSES</Link></li>
                        </div>
                        <div class="menu">
                            <li id="HOMEWORK"><Link to="/Homework">HOMEWORK</Link></li>
                        </div>
                        <div class="menu">
                            <li id="STUDY"><Link to="/Study">STUDY</Link></li>
                        </div>
                        <div class="menu">
                            <li id="QUESTION"><Link to="/Question">QUESTION</Link></li>
                        </div>
                        <div class="menu">
                            <li id="NOTICE"><Link to="/Notice">NOTICE</Link></li>
                        </div>
                    </ul>
                </div>
            </div >
        </>



    );
};

export default Layout;