import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Homework from "routes/Homework";
import Study from "routes/Study";
import Question from "routes/Question";
import Notice from "routes/Notice";
import Navigation from "component/Layout/Navigation";
import ClassInfo from "component/Layout/ClassInfo";
import listPNG from "img/list.png";

interface PropNavBar {
  navBarOpen: boolean;
}

const Layout: React.FC<PropNavBar> = () => {
  const [navBarOpen, setNavBarOpen] = useState(true);

  //모바일 네비게이션 바 오븐 버튼 액션
  const mobileMenuOpen = (): void => {
    navBarOpen ? setNavBarOpen(false) : setNavBarOpen(true);
  };

  //리사이즈 네비게이션 바 오픈 액션
  const switchMenuOpen = (): void => {
    window.innerWidth < 800 ? setNavBarOpen(false) : setNavBarOpen(true);
  };

  //리사이즈 이벤트
  useEffect(() => {
    window.addEventListener("resize", switchMenuOpen);
    return () => {
      window.removeEventListener("resize", switchMenuOpen);
    };
  }, [window.innerWidth]);

  return (
    <>
      <div className="box">
        <nav>
          <ClassInfo />
          <div style={{ display: navBarOpen ? "block" : "none" }}>
            <Navigation />
          </div>
        </nav>
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/Homework" component={Homework} />
          <Route path="/Study" component={Study} />
          <Route path="/Question" component={Question} />
          <Route path="/Notice" component={Notice} />
        </div>
      </div>
      <div className="copyright">
        <footer>&copy; Class Work {new Date().getFullYear()}</footer>
      </div>
      <button type="button" className="menuBTN" onClick={mobileMenuOpen}>
        <span className="icon">
          <img width="20px" src={listPNG} alt="notification" />
        </span>
      </button>
    </>
  );
};

export default Layout;
