import React, { useState } from 'react';
import Login from './Login';


function App() {
  const [currLogin, setCurrLogin] = useState(false);

  return (
    <>
      <App /><Login />
    </>
  );
}

export default App;
