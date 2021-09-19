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
      <div class="copyright">
        <footer>&copy; Class Work {new Date().getFullYear()}</footer>
      </div>
    </>
  );
}

export default App;
