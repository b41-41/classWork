import React, { useState, useEffect } from 'react';
import { authService } from "fbase";
import 'css/style.css'
import 'css/nav.css'
import 'css/view.css'
import 'css/list.css'
import AppRouter from 'component/Router';
import Loading from 'component/Loading';

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
      {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : <Loading />}
    </>
  );
}

export default App;
