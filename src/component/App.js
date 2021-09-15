import React, { useState } from 'react';
import AppRouter from 'componenet/Router';
import { authService } from "fbase"

function App() {
  const [loggedIn, setLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter loggedIn={loggedIn} />
    </>
  );
}

export default App;
