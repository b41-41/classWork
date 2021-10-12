import React, { useState, useEffect } from 'react';
import 'css/style.css'
import 'css/nav.css'
import 'css/view.css'
import 'css/list.css'
import AppRouter from 'component/Router';
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj(user);
      } else {
        setIsLoggedIn(false)
      }
      setInit(true);
    })
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> :
        <>
          <div className="loading">
            <div className="logo">
              <span className="logoWork">Class</span>
              Work
            </div>
            <div className="loading__message">Loading...</div>
          </div>
        </>
      }
    </>
  );
}

export default App;
