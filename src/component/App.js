import React, { useState, useEffect } from 'react';
import 'css/style.css'
import 'css/nav.css'
import 'css/view.css'
import 'css/list.css'
import AppRouter from 'component/Router';
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  console.log('1');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('2');
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true);
    })
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing.... "}
    </>
  );
}

export default App;
