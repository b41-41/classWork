import React from "react";
import '../css/login.css';

const chkLogin = () => {
    console.log(`OH YEAH!`)
}

const Login = () => {
    <>
        <h1>TEST</h1>
        <div id="inputID">
            <input class="id" placeholder="ID" />
        </div>
        <div id="inputPW">
            <input class="pw" type="password" placeholder="PASSWORD" />
        </div>
        <div id="loginButton">
            <button onClick={chkLogin}>LOGIN</button>
        </div>
    </>
}

export default Login;