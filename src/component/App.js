import React, { useState, useEffect } from 'react';
import { authService } from "fbase";
import AppRouter from 'component/Router';
import Loading from 'component/Loading';
import { useDispatch } from 'react-redux';
import { updateLogin, updateUserInfo } from 'redux/slices/user';
import 'css/style.css';
import 'css/nav.css';
import 'css/view.css';
import 'css/list.css';

function App() {
  const dispatch = useDispatch();

  const [init, setInit] = useState(false);
  // const userState = useSelector(state => state.userInfo);
  // const isLogin = userState.isLogin;
  // const userInfo = userState.userInfo;

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch(updateLogin(true));
        dispatch(updateUserInfo(user));
      } else {
        dispatch(updateLogin(false));
      }
      setInit(true);
    })
  }, []);

  return (
    <>
      {init ? <AppRouter /> : <Loading />}
    </>
  );
}

export default App;
