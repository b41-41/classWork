import React, { useState } from 'react';
import 'css/login.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const auth = getAuth();
            let data;
            if (newAccount) {
                //Create Account
                data = await createUserWithEmailAndPassword(auth, email, password);
            } else {
                //Login
                data = await signInWithEmailAndPassword(auth, email, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <form class="login" onSubmit={onSubmit}>
                <div class="logoForm">
                    <span class="logo">
                        <span class="logoWork">Class</span>
                        <span >
                            Work
                        </span>
                    </span>
                    <div class="className">
                        한국어센터 1급 2반
                    </div>
                </div>
                <div class="idForm">
                    <input
                        name="email"
                        type="email"
                        class="id"
                        placeholder="Email"
                        value={email}
                        onChange={onChange} />
                </div>
                <div class="pwForm">
                    <input
                        name="password"
                        type="password"
                        class="pw"
                        required="required"
                        value={password}
                        onChange={onChange}
                        placeholder="Password" />
                </div>
                <div class="loginButton">
                    <input
                        type="submit"
                        value="Create Account"
                        class="btn" />
                </div>
                <span class="joinAccount" onClick={toggleAccount}>{newAccount ? "LOGIN 화면으로 이동" : "SIGN UP 화면으로 이동"}</span>
                <div class="google">
                    <button name="google" class="googleBTN" onClick={onSocialClick}>Continue With Google</button>
                </div>
            </form>
        </>
    );

};

export default SignUp;